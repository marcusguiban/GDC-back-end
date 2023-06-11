const mongoose = require("mongoose");
const Schema = mongoose.Schema


const dentistsSchema = new Schema({
    dentistsId: {
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
        required: [true, 'Please provide email'],
        match: [
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          'Please provide a valid email',
        ],
    },
    gender: {
        type: String,
        enum: ["Male", "Female", "Other"],
        required: true,
      },
    birthday: {
        type: Date,
        required: true,
      },
    contact_number: {
        type: String,
        required: true,

    },
    password: {
        type: String,
        required: true,

    },
    prc_number: {
        type: String,
        required: true,

    },
    ptr_number: {
        type: String,
        required: true,
    },
    branches: {
        type: String,
        required: true,
        enum: ['Panapaan', 'Rosario', 'Carmona', 'Molino', 'Las pinas', 'Dasmarinas'],
        default: 'Panapaan',
    },
    profilePicture: {
        type: String, // Assuming the profile picture will be stored as a URL or file path
      },
      education: {
        type: String,
        
      },
      degree: {
        type: String,
      },
      
      occupation: {
          type: String,
        },
},{timestamps:true});

dentistsSchema.pre("save", function (next) {
    const currentYear = new Date().getFullYear().toString();
    const randomDigits = Math.floor(10000 + Math.random() * 90000).toString().substring(0, 5);
    this.dentistsId = currentYear + randomDigits;
    next();
  });
module.exports = mongoose.model("Dentists", dentistsSchema);