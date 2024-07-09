require('dotenv').config();
const express = require("express");
const cors = require("cors");
const router = require('./router/router');
const connectDB = require("./db/db");

const app = express();
const PORT = process.env.PORT || 5000;

const corsOptions = {
    origin: "https://applyjobform-git-master-vishalahir989s-projects.vercel.app/",
    methods: "GET,POST,PUT,DELETE,PATCH,HEAD",
    credentials: true,
}

app.use(cors(corsOptions));
app.use(express.json());
app.use("/", router);

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}).catch((err) => {
    console.error("Failed to connect to the database", err);
});

module.exports = app;
