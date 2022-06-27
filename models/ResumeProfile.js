const mongoose = require('mongoose');

const resumeSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
        trim: true
    },
    email:{
        type: String,
        required: true,
        trim: true
    },
    address: {
        type: String,
        requied: true,
        trim: true
    },
    phone:{
        type: String,
        required: true
    },
    rpic:{
        type: String,
        required: true
    },
    rdoc:{
        type: String,
        required: true
    }
});

const ResumeModel = mongoose.model('resume',resumeSchema);

module.exports = ResumeModel;
