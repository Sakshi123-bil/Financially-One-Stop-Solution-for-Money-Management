const express = require("express");
require("dotenv").config();
const path = require("path");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const connectDB  = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const incomeRoutes = require("./routes/incomeRoutes");
const expenseRoutes = require("./routes/expenseRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");

app.use(cors(
    {
        origin: process.env.CLIENT_URL || "*",
        methods:["GET" , "POST", "PUT" , "DELETE"],
        allowedHeaders:["Content-type","Authorization"]
    }
));
app.use(express.json());
connectDB();
app.use("/api/v1/auth",authRoutes);

app.use("/uploads",express.static(path.join(__dirname,"uploads")));
app.use("/api/v1/income", incomeRoutes);
app.use("/api/v1/expense", expenseRoutes);
app.use("/api/v1/dashboard",dashboardRoutes);

app.listen(process.env.PORT,()=>{
   console.log(`server is running on the port  ${process.env.PORT}`)
})