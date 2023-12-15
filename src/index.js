//definiendo el lugar de trabajo de express con el require
const express = require('express');
const mongoose = require("mongoose");
require("dotenv").config();
const userRoutes = require("./routes/user");
const app = express();
const path = require("path")


// puerto 3000
const port =process.env.PORT || 3000;

app.set("view engine", "ejs");
//Defino la localización de mis vistas
app.set("views", path.join(__dirname, "views"));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
})
//middleware
app.use("/api", userRoutes);



//mongodb connection
  mongoose
.connect(process.env.MONGODB_URI)
.then(()=> console.log("connected to mongodb atlas"))
.catch((error)=> console.log(error))
//enlazar y escuchar conexiones en un host y puerto específicos.
app.listen(port, () => console.log(`Example app listening on port ${port}`));
