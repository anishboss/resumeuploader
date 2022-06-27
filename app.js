const express = require('express');
const path = require('path');

const dotenv = require('dotenv');
const connectDB = require('./config/connectdb');
dotenv.config();
const app = express();
const resumeRouter = require('./routes/resumeuploder');
const profilepic = path.join(__dirname,`/public/uploads/rpic/`);
const cvpath = path.join(__dirname,`/public/uploads/rdoc/`);
console.log(profilepic)
const DB_URL = process.env.DB_URL
const PORT = process.env.PORT;
connectDB(DB_URL);

app.use(express.static(profilepic));
app.use(express.static(cvpath));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.set('view engine','ejs');
app.use('/',resumeRouter);


app.listen(PORT,()=>{
    console.log(`server running at http://127.0.0.1:${PORT}`);
});