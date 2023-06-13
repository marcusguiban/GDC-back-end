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
  const { patientName, patientID, DentistName, DentistID,
    Tooth11, Tooth12, Tooth13, Tooth14, Tooth15, Tooth16, Tooth17, Tooth18, 
    Tooth21, Tooth22, Tooth23, Tooth24, Tooth25, Tooth26, Tooth27, Tooth28, 
    Tooth31, Tooth32, Tooth33, Tooth34, Tooth35, Tooth36, Tooth37, Tooth38, 
    Tooth41, Tooth42, Tooth43, Tooth44, Tooth45, Tooth46, Tooth47, Tooth48, 
    Tooth51, Tooth52, Tooth53, Tooth54, Tooth55, 
    Tooth61, Tooth62, Tooth63, Tooth64, Tooth65, 
    Tooth71, Tooth72, Tooth73, Tooth74, Tooth75, 
    Tooth81, Tooth82, Tooth83, Tooth84, Tooth85,

  } = req.body;

  try {
    const dentalChart = await DentalChart.create({

      patientName: patientName,
      patientID: patientID,
      DentistName: DentistName,
      DentistID: DentistID,
      Tooth11: Tooth11,
      Tooth12: Tooth12,
      Tooth13: Tooth13,
      Tooth14: Tooth14,
      Tooth15: Tooth15,
      Tooth16: Tooth16,
      Tooth17: Tooth17,
      Tooth18: Tooth18,

      Tooth21: Tooth21,
      Tooth22: Tooth22,
      Tooth23: Tooth23,
      Tooth24: Tooth24,
      Tooth25: Tooth25,
      Tooth26: Tooth26,
      Tooth27: Tooth27,
      Tooth28: Tooth28,

      Tooth31: Tooth31,
      Tooth32: Tooth32,
      Tooth33: Tooth33,
      Tooth34: Tooth34,
      Tooth35: Tooth35,
      Tooth36: Tooth36,
      Tooth37: Tooth37,
      Tooth38: Tooth38,

      Tooth41: Tooth41,
      Tooth42: Tooth42,
      Tooth43: Tooth43,
      Tooth44: Tooth44,
      Tooth45: Tooth45,
      Tooth46: Tooth46,
      Tooth47: Tooth47,
      Tooth48: Tooth48,

      Tooth51: Tooth51,
      Tooth52: Tooth52,
      Tooth53: Tooth53,
      Tooth54: Tooth54,
      Tooth55: Tooth55,

      Tooth61: Tooth61,
      Tooth62: Tooth62,
      Tooth63: Tooth63,
      Tooth64: Tooth64,
      Tooth65: Tooth65,

      Tooth71: Tooth71,
      Tooth72: Tooth72,
      Tooth73: Tooth73,
      Tooth74: Tooth74,
      Tooth75: Tooth75,

      Tooth81: Tooth81,
      Tooth82: Tooth82,
      Tooth83: Tooth83,
      Tooth84: Tooth84,
      Tooth85: Tooth85,

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
  const {  patientName, patientID, DentistName, DentistID, 
    Tooth11, Tooth12, Tooth13, Tooth14, Tooth15, Tooth16, Tooth17, Tooth18, 
    Tooth21, Tooth22, Tooth23, Tooth24, Tooth25, Tooth26, Tooth27, Tooth28, 
    Tooth31, Tooth32, Tooth33, Tooth34, Tooth35, Tooth36, Tooth37, Tooth38, 
    Tooth41, Tooth42, Tooth43, Tooth44, Tooth45, Tooth46, Tooth47, Tooth48, 
    Tooth51, Tooth52, Tooth53, Tooth54, Tooth55, 
    Tooth61, Tooth62, Tooth63, Tooth64, Tooth65, 
    Tooth71, Tooth72, Tooth73, Tooth74, Tooth75, 
    Tooth81, Tooth82, Tooth83, Tooth84, Tooth85,
  } = req.body;

  try {
    const dentalChart = await DentalChart.findByIdAndUpdate(id)

      dentalChart.patientName = patientName;
      dentalChart.patientID = patientID;
      dentalChart.DentistName = DentistName;
      dentalChart.DentistID = DentistID;

      dentalChart.Tooth11 = Tooth11;
      dentalChart.Tooth12 = Tooth12;
      dentalChart.Tooth13 = Tooth13;
      dentalChart.Tooth14 = Tooth14;
      dentalChart.Tooth15 = Tooth15;
      dentalChart.Tooth16 = Tooth16;
      dentalChart.Tooth17 = Tooth17;
      dentalChart.Tooth18 = Tooth18;

      dentalChart.Tooth21 = Tooth21;
      dentalChart.Tooth22 = Tooth22;
      dentalChart.Tooth23 = Tooth23;
      dentalChart.Tooth24 = Tooth24;
      dentalChart.Tooth25 = Tooth25;
      dentalChart.Tooth26 = Tooth26;
      dentalChart.Tooth27 = Tooth27;
      dentalChart.Tooth28 = Tooth28;

      dentalChart.Tooth31 = Tooth31;
      dentalChart.Tooth32 = Tooth32;
      dentalChart.Tooth33 = Tooth33;
      dentalChart.Tooth34 = Tooth34;
      dentalChart.Tooth35 = Tooth35;
      dentalChart.Tooth36 = Tooth36;
      dentalChart.Tooth37 = Tooth37;
      dentalChart.Tooth38 = Tooth38;

      dentalChart.Tooth41 = Tooth41;
      dentalChart.Tooth42 = Tooth42;
      dentalChart.Tooth43 = Tooth43;
      dentalChart.Tooth44 = Tooth44;
      dentalChart.Tooth45 = Tooth45;
      dentalChart.Tooth46 = Tooth46;
      dentalChart.Tooth47 = Tooth47;
      dentalChart.Tooth48 = Tooth48;

      dentalChart.Tooth51 = Tooth51;
      dentalChart.Tooth52 = Tooth52;
      dentalChart.Tooth53 = Tooth53;
      dentalChart.Tooth54 = Tooth54;
      dentalChart.Tooth55 = Tooth55;

      dentalChart.Tooth61 = Tooth61;
      dentalChart.Tooth62 = Tooth62;
      dentalChart.Tooth63 = Tooth63;
      dentalChart.Tooth64 = Tooth64;
      dentalChart.Tooth65 = Tooth65;

      dentalChart.Tooth71 = Tooth71;
      dentalChart.Tooth72 = Tooth72;
      dentalChart.Tooth73 = Tooth73;
      dentalChart.Tooth74 = Tooth74;
      dentalChart.Tooth75 = Tooth75;

      dentalChart.Tooth81 = Tooth81;
      dentalChart.Tooth82 = Tooth82;
      dentalChart.Tooth83 = Tooth83;
      dentalChart.Tooth84 = Tooth84;
      dentalChart.Tooth85 = Tooth85;
      await dentalChart.save();

      res.status(200).json({ msg: `Dental chart updated with id ${dentalChart._id}` });

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
