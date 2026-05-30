require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

app.use(cors());
app.use(express.json());

// ✅ Routes
const projectRoutes = require("./routes/projectRoutes");
app.use("/projects", projectRoutes);
//Root Route 
app.get("/", (req, res) => {
  res.send("Portfolio API is running");
});
// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => {
    console.error("MongoDB Error:", err);
  });

// Server start
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});