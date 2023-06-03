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
        // match: [
        //   /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        //   'Please provide a valid email',
        // ],
        unique: true,
    },
    age: {
        type: Number,
        required: true
    },
    contact_number: {
        type: Number,
        required: true,
        maxlength: 10,
        minlength: 10,
        unique: true,
        
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
    },
    prc_number: {
        type: Number,
        required: true,
        minlength: 7,
        maxlength: 7,
        unique: true,
    },
    ptr_number: {
        type: Number,
        required: true,
        minlength: 8,
        maxlength: 8,
        unique: true,
        
    },
    branches: {
        type: String,
        required: true,
        enum: ['Panapaan', 'Rosario', 'Calamba', 'Molino', 'Las pinas', 'Carmona'],
        default: 'Panapaan',
    }
},{timestamps:true});
module.exports = mongoose.model("Dentists", dentistsSchema);