const mongoose = require("mongoose");

const URI = 'mongodb+srv://vm4595228:GNayetNlGFhtGPqa@mongodb.h0gk9xm.mongodb.net/apply_form?retryWrites=true&w=majority';

const coonnectDB = async () => {
    try {
        await mongoose.connect(URI);
        console.log('Connection successful to database');
    } catch (error) {
        console.log(error);
        console.log('Connection database faile');
    }
}


module.exports = coonnectDB;