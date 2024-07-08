const Users = require("../models/models");

const home = async (req, res) => {
    try {
        console.log(req.body);
        const { name, mobile, mobile2, email, address, country } = req.body;
        const userExist = await Users.findOne({ email });
        if (userExist) {
            return res.status(400).json({ msg: "Already user applyed" });
        }
        const CreateUser = await Users.create({ name, mobile, mobile2, email, address, country });
        res.status(200).json({ msg: CreateUser });
    } catch (error) {
        console.log('err..', error);
    }
}

const apply = async (req, res) => {
    try {
        res.status(200).json({ messege: "Welcome to Home" });
    } catch (error) {
        res.status(500).json("Internal server error")
    }
}

module.exports = { home, apply }; 