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
    const {name, email, password, gender, birthday, contact_number, prc_number, ptr_number, branches} = req.body;
    try {    
        const hashPassword = await bcrypt.hash(password, 10);
        let profilePicture = ''; // Default profile picture value

        // Check if a file is uploaded
        if (req.file) {
            profilePicture = req.file.filename; // Use the uploaded image URL
        } else {
            // Set default image file path relative to the current file
            profilePicture = `https://t4.ftcdn.net/jpg/02/15/84/43/360_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg`;
        }
        const dentist = await Dentist.create({
            name: name,
            email: email,
            password: hashPassword,
            gender: gender,
            birthday:birthday,
            contact_number:contact_number,
            prc_number:prc_number,
            ptr_number:ptr_number,
            branches:branches,
            profilePicture: profilePicture// Save the image URL as profilePicture
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
    const { id, name, email, birthday, contact_number, prc_number, ptr_number, branches } = req.body;
    try {
      
      const dentist = await Dentist.findById(id);
      dentist.name = name;
      dentist.email = email;
      dentist.birthday = birthday;
      dentist.contact_number = contact_number;
      dentist.prc_number = prc_number;
      dentist.ptr_number = ptr_number;
      dentist.branches = branches;
  
      await dentist.save();
      res.status(200).json({ msg: "Data updated successfully" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal server error" });
    }
  };
  
  const changePassword = async (req, res) => {
    const { id, email, password, newPassword, confirmPassword } = req.body;
  
    try {
      const dentist = await Dentist.findById(id);
      if (!dentist) {
        return res.status(400).json({ msg: "Invalid dentist ID" });
      }
  
      if (dentist.email !== email) {
        return res.status(400).json({ msg: "Invalid email" });
      }
  
      const isPasswordCorrect = await bcrypt.compare(password, dentist.password);
      if (!isPasswordCorrect) {
        return res.status(400).json({ msg: "Invalid password" });
      }
  
      if (newPassword !== confirmPassword) {
        return res.status(400).json({ msg: "New passwords do not match" });
      }
  
      const hashNewPassword = await bcrypt.hash(newPassword, 10);
  
      dentist.password = hashNewPassword;
      await dentist.save();
  
      res.status(200).json({ msg: "Password changed successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ msg: "Internal server error" });
    }
  };
  
  
  
  
  const updateProfilePic = async (req, res) => {
    const { id } = req.params;
  
    try {
      const dentist = await Dentist.findById(id);
      if (!dentist) {
        return res.status(404).json({ message: 'Dentist not found' });
      }
  
      dentist.profilePicture = req.file ? req.file.filename : '';
      await dentist.save();
  
      res.status(200).json({ message: 'Profile picture updated successfully' });
    } catch (error) {
      console.error('Error updating profile picture:', error);
      res.status(500).json({ message: 'Failed to update profile picture' });
    }
  };

  const updateOtherInfo = async (req, res) => {
    const { id, education, degree, occupation } = req.body;
  
    try {
      const dentist = await Dentist.findById(id);
  
      if (!dentist) {
        return res.status(404).json({ msg: 'Dentist not found' });
      }
  
      dentist.education = education;
      dentist.degree = degree;
      dentist.occupation = occupation;
  
      const updatedDentist = await dentist.save();
  
      res.status(200).json({ msg: 'Other info updated successfully', dentist: updatedDentist });
    } catch (error) {
      res.status(500).json({ msg: 'Error updating other info', error: error.message });
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
    updateProfilePic,
    changePassword,
    updateOtherInfo, 
};