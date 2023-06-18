const mongoose = require("mongoose");

const dentalChartSchema = new mongoose.Schema({
  patientName: {
    type: String,
    required: true
  },
  patientID: {
    type: String,
    required: true
  },
  DentistName: {
    type: String,
    required: true
  },
  DentistID: {
    type: String,
    required: true
  },
  Tooth11:{type: String, default: "OK" },
  Tooth12:{type: String, default: "OK"},
  Tooth13:{type: String, default: "OK"},
  Tooth14:{type: String, default: "OK"},
  Tooth15:{type: String, default: "OK"},
  Tooth16:{type: String, default: "OK"},
  Tooth17:{type: String, default: "OK"},
  Tooth18:{type: String, default: "OK"}, 

  Tooth21:{type: String, default: "OK"}, 
  Tooth22:{type: String, default: "OK"}, 
  Tooth23:{type: String, default: "OK"}, 
  Tooth24:{type: String, default: "OK"}, 
  Tooth25:{type: String, default: "OK"}, 
  Tooth26:{type: String, default: "OK"}, 
  Tooth27:{type: String, default: "OK"}, 
  Tooth28:{type: String, default: "OK"}, 

  Tooth31:{type: String, default: "OK"}, 
  Tooth32:{type: String, default: "OK"}, 
  Tooth33:{type: String, default: "OK"}, 
  Tooth34:{type: String, default: "OK"}, 
  Tooth35:{type: String, default: "OK"}, 
  Tooth36:{type: String, default: "OK"}, 
  Tooth37:{type: String, default: "OK"}, 
  Tooth38:{type: String, default: "OK"}, 

  Tooth41:{type: String, default: "OK"}, 
  Tooth42:{type: String, default: "OK"}, 
  Tooth43:{type: String, default: "OK"}, 
  Tooth44:{type: String, default: "OK"}, 
  Tooth45:{type: String, default: "OK"}, 
  Tooth46:{type: String, default: "OK"}, 
  Tooth47:{type: String, default: "OK"}, 
  Tooth48:{type: String, default: "OK"}, 

  Tooth51:{type: String, default: "OK"}, 
  Tooth52:{type: String, default: "OK"}, 
  Tooth53:{type: String, default: "OK"}, 
  Tooth54:{type: String, default: "OK"}, 
  Tooth55:{type: String, default: "OK"}, 

  Tooth61:{type: String, default: "OK"}, 
  Tooth62:{type: String, default: "OK"}, 
  Tooth63:{type: String, default: "OK"}, 
  Tooth64:{type: String, default: "OK"}, 
  Tooth65:{type: String, default: "OK"}, 
  
  Tooth71:{type: String, default: "OK"}, 
  Tooth72:{type: String, default: "OK"}, 
  Tooth73:{type: String, default: "OK"}, 
  Tooth74:{type: String, default: "OK"}, 
  Tooth75:{type: String, default: "OK"}, 

  Tooth81:{type: String, default: "OK"}, 
  Tooth82:{type: String, default: "OK"}, 
  Tooth83:{type: String, default: "OK" }, 
  Tooth84:{type: String, default: "OK"}, 
  Tooth85:{type: String, default: "OK"}, 
},{timestamps:true});

  module.exports = mongoose.model("DentalChart", dentalChartSchema);
