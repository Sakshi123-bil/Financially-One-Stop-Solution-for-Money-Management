const express = require("express");
require("dotenv").config();
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const connectDB  = require("./config/db");
const authRoutes = require("./routes/authRoutes");

app.use(cors(
    {
        origin: process.env.CLIENT_URL || "*",
        methods:["GET" , "POST", "PUT" , "DELETE"],
        allowedHeaders:["Content-type","Authorization"]
    }
));
app.use(express.json());

connectDB();

app.listen(process.env.PORT,()=>{
   console.log(`server is running on the port  ${process.env.PORT}`)
})