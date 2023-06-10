const Patient = require("../models/Patient");

const getAllPatients = async (req, res) => {
  try {
    const patients = await Patient.find({});
    res.json(patients);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch patients" });
  }
};

const getPatient = async (req, res) => {
  const { id } = req.params;

  try {
    const patient = await Patient.findById(id);
    if (!patient) {
      return res.status(404).json({ error: "Patient not found" });
    }
    res.json(patient);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch patient" });
  }
};

const createPatient = async (req, res) => {
  const { name, password, birthday, email, branches, contactNumber, dentist } = req.body;

  try {
    const patient = await Patient.create({
      name,
      email,
      birthday,
      contactNumber,
      password,
      dentist,
      branches
    });

    if (patient) {
      res.status(201).json({ message: `Patient created with ID: ${patient._id}` });
    } else {
      res.status(400).json({ error: "Failed to create patient" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to create patient" });
  }
};

const updatePatient = async (req, res) => {
  const { id, name, email, age, contactNumber, password, dentist, branches } = req.body;

  try {
    const patient = await Patient.findByIdAndUpdate(
      id,
      {
        name,
        password,
        dentist,
        email,
        age,
        contactNumber,
        branches,
      },
      { new: true }
    );

    if (patient) {
      res.status(200).json({ message: `Patient updated with ID: ${patient._id}` });
    } else {
      res.status(400).json({ error: "Failed to update patient" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to update patient" });
  }
};

const deletePatient = async (req, res) => {
  const { id } = req.body;

  try {
    const deletedPatient = await Patient.findByIdAndDelete(id);
    if (deletedPatient) {
      res.status(200).json({ message: `Patient deleted with ID: ${id}` });
    } else {
      res.status(400).json({ error: "Failed to delete patient" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to delete patient" });
  }
};

module.exports = {
  getAllPatients,
  getPatient,
  createPatient,
  updatePatient,
  deletePatient,
};
