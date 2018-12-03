const mongoose = require('mongoose');
const Schema = mongoose.schema;

const studentSchema = new Schema(
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    firstname: {type: String, required: true},
    lastname: {type: String, required: true},
    dob: {type: Number, required: true},
    grade: {type: Number, required: true},
    guardian: {type: String, required: true},
)

module.exports = mongoose.model('Student', studentSchema);