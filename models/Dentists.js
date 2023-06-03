const mongoose = require("mongoose");
const Schema = mongoose.Schema


const dentistsSchema = new Schema({
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
        // unique: true,
    },
    age: {
        type: Number,
        required: true
    },
    contact_number: {
        type: String,
        required: true,
        // unique: true,
        // maxlength: 10, 
        // minlength: 10
    },
    password: {
        type: String,
        required: true,

    },
    prc_number: {
        type: String,
        required: true,
        // max: 9999999,
        // min: 1000000,
        // unique: true,  
    },
    ptr_number: {
        type: String,
        required: true,
        // max: 99999999,
        // min: 10000000,
        // unique: true,
        
    },
    branches: {
        type: String,
        required: true,
        enum: ['Panapaan', 'Rosario', 'Carmona', 'Molino', 'Las pinas', 'Dasmarinas'],
        default: 'Panapaan',
    }
},{timestamps:true});
module.exports = mongoose.model("Dentists", dentistsSchema);