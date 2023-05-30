require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const connection = require("./database");
const UserRoutes = require("./routes/User");
connection();
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());


app.use("/api/users", UserRoutes);
const PORT = process.env.PORT || 5000;


app.listen(PORT, () =>{
    console.log(`Express JS started in port ${PORT}...`);
});