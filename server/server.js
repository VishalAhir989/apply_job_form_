require('dotenv').config();
const express = require("express");
const cors = require("cors");
const router = require('./router/router');
const connectDB = require("./db/db");
const http = require('http');

const app = express();
const PORT = process.env.PORT || 5000;

const corsOptions = {
    origin: "https://applyjobform-vishalahir989s-projects.vercel.app",
    methods: "GET,POST,PUT,DELETE,PATCH,HEAD",
    credentials: true,
}

app.use(cors(corsOptions));
app.use(express.json());
app.use("/", router);

const server = http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', 'https://applyjobform-vishalahir989s-projects.vercel.app');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  // Your request handling logic
});

connectDB().then(() => {
    app.server(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}).catch((err) => {
    console.error("Failed to connect to the database", err);
});

module.exports = app;
