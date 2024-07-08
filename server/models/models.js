const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    mobile: {
        type: Number,
        require: true
    },
    mobile2: {
        type: Number,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    address: {
        type: String,
        require: true
    },
    country: {
        type: String,
        require: true
    }
})

const ApplySchema = new mongoose.model('Users', userSchema);

module.exports = ApplySchema;