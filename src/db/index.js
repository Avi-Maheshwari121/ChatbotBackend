const mongoose = require("mongoose");
// import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect('mongodb+srv://techavi:avi123@cluster0.aeu7xcr.mongodb.net/tokenDB?retryWrites=true&w=majority&appName=Cluster0');
    console.log(`\n Mongo DB Connected !! DB HOST: ${connectionInstance.connection.host}`);
  } catch (err) {
    console.log("MONGODB connection FAILURE ", err);
    process.exit(1);
  }
};


module.exports = connectDB;