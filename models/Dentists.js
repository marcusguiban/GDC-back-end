const mongoose = require("mongoose");
const Schema = mongoose.Schema


const dentistsSchema = new Schema({
    name: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    contact_number: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    prc_number: {
        type: Number,
        required: true

    },
    ptr_number: {
        type: Number,
        required: true,
    },
    branches: {
        type: String,
        required: true,
    }
},{timestamps:true});
module.exports = mongoose.model("Dentists", dentistsSchema);