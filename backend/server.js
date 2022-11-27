const dotenv = require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const errorHandler = require("./middleWare/errorMiddleWare");
const cookieParser = require("cookie-parser");

const app = express();

//middleware method to get user data and cookies from the FrontEnd
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("./publics"));


//get all models

//utils
const userRoute = require("./routes/userRoute");

//Routes middleware
app.use("/api/users", userRoute);

//Routes
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to home"
  })
});



//Error middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

//Connect to DB and Start Server
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    //run server
    app.listen(PORT, () => {
      console.log(`Server Running on port ${PORT}`);
    });
  })
  .catch((err) => console.log(err));
