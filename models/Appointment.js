const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
  patient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Patient",
    required: true,
  },
  dentist: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Dentist",
    required: true,
  },
  branch: {
    type: String,
    required: true,
  },
  time: {
    type: Date,
    required: true,
    validate: {
      validator: function(value) {
        const startTime = new Date(value);
        const endTime = new Date(startTime.getTime() + 60 * 60 * 1000); // Adding one hour to the start time
        const startOfDay = new Date(startTime).setHours(9, 0, 0, 0);
        const endOfDay = new Date(startTime).setHours(17, 0, 0, 0);
        const now = new Date();
        return startTime > now && endTime > now && startTime >= startOfDay && endTime <= endOfDay;
      },
      message: "Invalid appointment time. Appointments are only allowed between 9:00 AM and 5:00 PM and should be one hour long.",
    },
  },
  approved: {
    type: Boolean,
    default: false,
  },
});

appointmentSchema.index({ branch: 1, time: 1 }, { unique: true });

const Appointment = mongoose.model("Appointment", appointmentSchema);

module.exports = Appointment;

