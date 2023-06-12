const Patient = require("../models/Patient");
const bcrypt = require("bcrypt");

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
  const { firstName,lastname, middleName , gender, prefix, password, birthday, email, branches, contactNumber } = req.body;

  try {
    const hashPassword = await bcrypt.hash(password, 10);
    const patient = await Patient.create({
      
      firstName: firstName,
      lastname: lastname,
      middleName: middleName,
      prefix: prefix,
      email: email,
      password: hashPassword,
      gender: gender,
      birthday:birthday,
      contactNumber:contactNumber,
      branches:branches,
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
  const { id, firstName,lastname, middleName , prefix, email,  gender, contactNumber, birthday, branches } = req.body;

  try {
    const patient = await Patient.findById(id);
    patient.firstName = firstName;
    patient.lastname = lastname;
    patient.middleName = middleName;
    patient.prefix = prefix;
    patient.email = email;
    patient.gender = gender;
    patient.birthday = birthday;
    patient.contactNumber = contactNumber;
    patient.branches = branches;
    await patient.save();
      res.status(200).json({ message: `Patient updated with ID: ${patient._id}` });

    } catch (error) {
      throw error;
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
