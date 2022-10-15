require("dotenv").config();
const express = require("express");
const PORT = process.env.PORT || 5000;

//MongoDB
const connectDB = require("../config/db");

//routes
const gamingRoute = require("../routes/products/gamingRoute");

const app = express();

connectDB();

//Gaming route
app.use("/products/gaming", gamingRoute);

app.listen(PORT, () => {
  console.log(`Server listening on PORT: ${PORT}`);
});
