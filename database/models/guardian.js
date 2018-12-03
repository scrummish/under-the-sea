const mongoose = require('mongoose');
const Schema = mongoose.schema;

const guardianSchema = new Schema(
    firstname: {type: String, required: true},
    lastname: {type: String, required: true},
    phone: {type: Number, required: true},
    altphone: {type: Number},
)

module.exports = mongoose.model('Guardian', guardianSchema);