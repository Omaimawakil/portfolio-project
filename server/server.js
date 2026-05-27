const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://OmaimaUsingMongo:Omaima%40UsesMongo@cluster0.mpggtmm.mongodb.net/portfolioDB?retryWrites=true&w=majority&appName=Cluster0')
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

const projects = [
  {
    title: "Portfolio Website",
    description: "My personal portfolio"
  }
];

app.get('/projects', (req, res) => {
  res.json(projects);
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});