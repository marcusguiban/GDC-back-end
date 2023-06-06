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
    const {name, email, password, birthday, contact_number, prc_number, ptr_number, branches} = req.body;

    try {
        const hashPassword = await bcrypt.hash(password, 10);

        const dentist = await Dentist.create({
            
            name: name,
            email: email,
            password: hashPassword,
            birthday:birthday,
            contact_number:contact_number,
            prc_number:prc_number,
            ptr_number:ptr_number,
            branches:branches,
            profilePicture: req.file ? generateImageURL(req.file.filename) : '', // Save the image URL as profilePicture
        });



        if(dentist){
            res.status(201).json({ msg: `Data inserted with id ${Dentist.dentistsId}`});
        } else {
            res.status(400).json({msg:"Data not inserted"})
        }
    } catch (error) {
        throw error;
    }

};
// update
const updateDentist = async (req, res) => {
    const {
      id,
      name,
      email,
      password,
      birthday,
      contact_number,
      prc_number,
      ptr_number,
      branches
    } = req.body;
    const hashPassword = await bcrypt.hash(password, 10);
    const profilePicture = req.file;
  
    try {
      const dentist = await Dentist.findById(id);
      dentist.name = name;
      dentist.email = email;
      dentist.password = hashPassword;
      dentist.birthday = birthday;
      dentist.contact_number = contact_number;
      dentist.prc_number = prc_number;
      dentist.ptr_number = ptr_number;
      dentist.branches = branches;
      dentist.profilePicture = req.file ? generateImageURL(req.file.filename) : dentist.profilePicture; // Save the image URL if provided, otherwise use existing URL

  
      await dentist.save();
      res.status(200).json({ msg: "Data updated successfully" });
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
function generateImageURL(filename) {
    // Replace 'YOUR_DOMAIN' with the actual domain where your images are served from
    const domain = 'https://GuibanDentalClinic.com';
    return `${domain}/uploads/${filename}`; // Assuming the images are stored in the 'uploads' directory
  }
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