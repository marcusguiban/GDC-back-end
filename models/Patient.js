const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema({
  patientId: {
    type: String,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  contactNumber: {
    type: String,
    required: true,
  },
  birthday: {
    type: Date,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  dentist: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Dentist",
  },
  branches: {
    type: String,
    required: true,
    enum: ['Panapaan', 'Rosario', 'Carmona', 'Molino', 'Las pinas', 'Dasmarinas'],
    default: 'Panapaan',
  },
});

patientSchema.pre("save", function (next) {
  const currentYear = new Date().getFullYear().toString();
  const randomDigits = Math.floor(100000 + Math.random() * 900000).toString().substring(0, 6);
  this.patientId = currentYear + randomDigits;
  next();
});

module.exports = mongoose.model("Patient", patientSchema);


