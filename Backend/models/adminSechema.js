const mongoose = require('mongoose')

const adminSechema= new mongoose.Schema({
    fullname: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true }
})

module.exports = mongoose.model('AdminData', adminSechema)