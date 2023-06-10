const mongoose = require("mongoose");

const dentalChartSchema = new mongoose.Schema({
  patient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Patient",
    required: true,
  },
  teeth: {
    type: [
      {
        toothNumber: {
          type: Number,
          required: true,
        },
        diagnosis: {
          type: String,
          required: true,
        },
        treatment: {
          type: String,
          required: true,
        },
      },
    ],
    required: true,
  },
});

const DentalChart = mongoose.model("DentalChart", dentalChartSchema);

module.exports = DentalChart;
