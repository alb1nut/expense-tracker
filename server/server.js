import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const PORT = 4000; 
const app = express();

app.use(cors())

mongoose
  .connect(
    "mongodb+srv://al_dov:nutifafa123456789@cluster0.zwtqyyu.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("MongoDB connection successful"))
  .catch(() => {
    console.log("Error");
  });

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(PORT, () => {
  console.log(`I am listening at PORT ${PORT}`);
});
