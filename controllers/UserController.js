const User = require("../models/user");


const getAllUser = async (req, res) => {
    try {
      const user = await User.find({});
      res.json(user);
    } catch (error) {
      throw error;
    }
  };

const getUser = async (req, res) => {
    const id = req.params.id;
  
    try {
      const user = await User.findById(id);
      res.json(user);
    } catch (error) {
      throw error;
    }
  };

const createUser = async (req, res) => {
    const { UserName, password} = req.body;
  
    try {
      const user = await User.create({
        UserName: UserName,
        password: password,
      });
  
      if (user) {
        res.status(201).json({ msg: `Data inserted with id ${user._id}` });
      } else {
        res.status(400).json({ msg: "Data not inserted" });
      }
    } catch (error) {
      throw error;
    }
  };

  const updateUser = async (req, res) => {
    const { UserName, password, id } = req.body;
  
    try {
      const user = await User.findByIdAndUpdate(id, {
        UserName: UserName,
        password: password,

      });
  
      if (user) {
        res.status(200).json({ msg: `Data updated with id ${user._id}` });
      } else {
        res.status(400).json({ msg: "Data not updated" });
      }
    } catch (error) {
      throw error;
    }
  };
  
  const deleteUser = async (req, res) => {
    const { id } = req.body;
  
    try {
      await User.findByIdAndDelete(id)
                      .then(() => res.status(200).json({ msg: `Data deleted with id ${id}` }))
                      .catch(err => res.status(400).json({ msg: "Data not deleted" }));
    } catch (error) {
      throw error;
    }
  };
  

  module.exports = {
    getAllUser,
    getUser,
    createUser,
    updateUser,
    deleteUser
  };