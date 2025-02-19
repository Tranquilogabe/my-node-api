const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    idade: { type: Number, required: true }
        });

module.exports=exports = mongoose.model('User', userSchema);