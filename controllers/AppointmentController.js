const Appointment = require("../models/Appointment");

const getAllAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find({});
    res.json(appointments);
  } catch (error) {
    throw error;
  }
};

const getAppointment = async (req, res) => {
  const id = req.params.id;

  try {
    const appointment = await Appointment.findById(id);
    res.json(appointment);
  } catch (error) {
    throw error;
  }
};

const createAppointment = async (req, res) => {
  const { patient, dentist, branch, time } = req.body;

  try {
    const appointment = await Appointment.create({
      patient: patient,
      dentist: dentist,
      branch: branch,
      time: time,
    });

    if (appointment) {
      res.status(201).json({ msg: `Appointment created with id ${appointment._id}` });
    } else {
      res.status(400).json({ msg: "Appointment not created" });
    }
  } catch (error) {
    throw error;
  }
};

const updateAppointment = async (req, res) => {
  const { patient, dentist, branch, time, id } = req.body;

  try {
    const appointment = await Appointment.findByIdAndUpdate(id, {
      patient: patient,
      dentist: dentist,
      branch: branch,
      time: time,
    });

    if (appointment) {
      res.status(200).json({ msg: `Appointment updated with id ${appointment._id}` });
    } else {
      res.status(400).json({ msg: "Appointment not updated" });
    }
  } catch (error) {
    throw error;
  }
};

const deleteAppointment = async (req, res) => {
  const { id } = req.body;

  try {
    await Appointment.findByIdAndDelete(id)
      .then(() => res.status(200).json({ msg: `Appointment deleted with id ${id}` }))
      .catch((err) => res.status(400).json({ msg: "Appointment not deleted" }));
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllAppointments,
  getAppointment,
  createAppointment,
  updateAppointment,
  deleteAppointment,
};
