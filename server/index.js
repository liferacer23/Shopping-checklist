const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors")
const ItemRoutes = require("./Routes/checkListRoute");


const app = express();
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected to mongoDB");
  } catch (err) {
    throw err;
  } 
};

mongoose.connection.on("disconnected", () => {
  console.log("connection to the database has been disconnected");
});

app.use(cors());
app.use(express.json());

app.use("/api/checklist",ItemRoutes);

app.listen(process.env.PORT || 8000, () => {
  connect();
  console.log("BackEnd is live and running. on port 8000");
});
