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
  day: {
    type: Date,
    required: true,
    validate: {
      validator: function (value) {
        const now = new Date();
        const selectedDay = new Date(value).setHours(0, 0, 0, 0);
        return selectedDay >= now.setHours(0, 0, 0, 0); // Allow appointments from the current day onwards
      },
      message: "Invalid appointment day. Appointments can only be scheduled for the current day onwards.",
    },
  },
  time: {
    type: String,
    required: true,
    validate: {
      validator: function (value) {
        const validTimes = [
          "09:00am-10:00am",
          "11:00am-12:00pm",
          "12:00pm-01:00pm",
          "02:00pm-03:00pm",
          "03:00pm-04:00pm",
          "04:00pm-05:00pm",
        ];
        return validTimes.includes(value);
      },
      message: "Invalid appointment time. Available appointment times: 09:00am-10:00am, 11:00am-12:00pm, 12:00pm-01:00pm, 02:00pm-03:00pm, 04:00pm-05:00pm.",
    },
  },
  approved: {
    type: Boolean,
    default: false,
  },
});

appointmentSchema.index({ branch: 1, day: 1, time: 1 }, { unique: true });

const Appointment = mongoose.model("Appointment", appointmentSchema);

module.exports = Appointment;


