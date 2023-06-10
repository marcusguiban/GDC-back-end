const DentalChart = require("../models/DentalChart");

const getAllDentalCharts = async (req, res) => {
  try {
    const dentalCharts = await DentalChart.find({});
    res.json(dentalCharts);
  } catch (error) {
    throw error;
  }
};

const getDentalChart = async (req, res) => {
  const id = req.params.id;

  try {
    const dentalChart = await DentalChart.findById(id);
    res.json(dentalChart);
  } catch (error) {
    throw error;
  }
};

const createDentalChart = async (req, res) => {
  const { patient, teeth } = req.body;

  try {
    const dentalChart = await DentalChart.create({
      patient: patient,
      teeth: teeth,
    });

    if (dentalChart) {
      res.status(201).json({ msg: `Dental chart created with id ${dentalChart._id}` });
    } else {
      res.status(400).json({ msg: "Dental chart not created" });
    }
  } catch (error) {
    throw error;
  }
};

const updateDentalChart = async (req, res) => {
  const { patient, teeth, id } = req.body;

  try {
    const dentalChart = await DentalChart.findByIdAndUpdate(
      id,
      {
        patient: patient,
        teeth: teeth,
      },
      { new: true }
    );

    if (dentalChart) {
      res.status(200).json({ msg: `Dental chart updated with id ${dentalChart._id}` });
    } else {
      res.status(400).json({ msg: "Dental chart not updated" });
    }
  } catch (error) {
    throw error;
  }
};

const deleteDentalChart = async (req, res) => {
  const { id } = req.body;

  try {
    await DentalChart.findByIdAndDelete(id)
      .then(() => res.status(200).json({ msg: `Dental chart deleted with id ${id}` }))
      .catch((err) => res.status(400).json({ msg: "Dental chart not deleted" }));
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllDentalCharts,
  getDentalChart,
  createDentalChart,
  updateDentalChart,
  deleteDentalChart,
};
