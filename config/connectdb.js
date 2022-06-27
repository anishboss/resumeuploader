const mongoose = require('mongoose');

const connectDB = async (DB_URL)=>{
    try{
        const DB_OPTIONS = {
            'dbName': 'resumeuploader'
        };
        await mongoose.connect(DB_URL,DB_OPTIONS);
        console.log("sucessfully connected to database");
    }catch(error){
        console.log("unable to connect database");
    }
}

module.exports = connectDB;