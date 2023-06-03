const bcrypt = require("bcrypt");
const Dentist = require("../models/Dentists")

//GET
const getMolinoDentists = async (req, res) =>{
    try {
        const dentist = await Dentist.find({branches:'Molino'});
        res.json(dentist);
    } catch (error) {
        throw err;
    }
};
const getLaspinasDentists = async (req, res) =>{
    try {
        const dentist = await Dentist.find({branches:'Las pinas'});
        res.json(dentist);
    } catch (error) {
        throw err;
    }
};
const getCarmonaDentists = async (req, res) =>{
    try {
        const dentist = await Dentist.find({branches:'Carmona'});
        res.json(dentist);
    } catch (error) {
        throw err;
    }
};
const getDasmarinasDentists = async (req, res) =>{
    try {
        const dentist = await Dentist.find({branches:'Dasmarinas'});
        res.json(dentist);
    } catch (error) {
        throw err;
    }
};
const getPanapaanDentists = async (req, res) =>{
    try {
        const dentist = await Dentist.find({branches:'Panapaan'});
        res.json(dentist);
    } catch (error) {
        throw err;
    }
};
const getRosarioDentists = async (req, res) =>{
    try {
        const dentist = await Dentist.find({branches:'Rosario'});
        res.json(dentist);
    } catch (error) {
        throw err;
    }
};
const getAllDentists = async (req, res) =>{
    try {
        const dentist = await Dentist.find({});
        res.json(dentist);
    } catch (error) {
        throw err;
    }
};

const getDentist = async (req, res) => {
    let id = req.params.id;
    try {
        const dentist = await Dentist.findById(id)
        if (dentist){
            res.json(dentist);
        }
        else{
           res.status(400).json({msg: `id ${id} does not exist`});
        }
    } catch (error) {
        throw error
    }
};
//create
const createDentist = async (req, res) => {
    const {name, email, password, age, contact_number, prc_number, ptr_number, branches} = req.body;

    try {
        const hashPassword = await bcrypt.hash(password, 10);
        const dentist = await Dentist.create({

            name: name,
            email: email,
            password: hashPassword,
            age:age,
            contact_number:contact_number,
            prc_number:prc_number,
            ptr_number:ptr_number,
            branches:branches

        });



        if(dentist){
            res.status(201).json({ msg: `Data inserted with id ${Dentist._id}`});
        } else {
            res.status(400).json({msg:"Data not inserted"})
        }
    } catch (error) {
        throw error;
    }

};
// update
const updateDentist = async (req, res)=>{
    const { id, name, email, password, age, contact_number, prc_number, ptr_number, branches } = req.body;
    const hashPassword = await bcrypt.hash(password, 10);
    // const Profile_pic = req.file;


    
    try {
        const dentist = await Dentist.findById(id);
        dentist.name = name;
        dentist.email = email;
        dentist.password = hashPassword;
        dentist.age = age;
        dentist.contact_number = contact_number;
        dentist.prc_number = prc_number;
        dentist.ptr_number = ptr_number;
        dentist.branches= branches
        // dentist.Profile_pic = Profile_pic;

        await dentist.save();
        res.status(200).json({msg: "Data updated successfully"});
    } catch (error) {
        throw error;
    }
};
// delete
const deleteDentist = async (req, res)=>{
    const { id } = req.body;
    try {
        await Dentist.findByIdAndDelete(id);
        res.status(200).json({msg: "Data Deleted successfully"});
    } catch (error) {
        throw error;
    }
};

module.exports = {
    getAllDentists,
    getDentist,
    createDentist,
    updateDentist,
    deleteDentist,
    getRosarioDentists,
    getPanapaanDentists,
    getDasmarinasDentists,
    getCarmonaDentists,
    getLaspinasDentists,
    getMolinoDentists,
};