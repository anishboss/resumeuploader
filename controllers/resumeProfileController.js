const ResumeModel = require('../models/ResumeProfile');
const path = require('path');
const cvdoc = path.join(`${__dirname}/..`,`/public/uploads/rdoc`);
console.log(`cvpath:${cvdoc}`);
class ResumeProfileController{
    
    static indexProfile = async (req,res)=>{
        const users = await ResumeModel.find();
        console.log(users);
        res.render('index',{'users':users});
    }
    
    static saveProfile = async (req,res)=>{
        try{
            
        const {fullname,email,address,phone} = req.body;
        const rpic = req.files['rpic'][0].filename;
        const rdoc = req.files['rdoc'][0].filename;
       
        const user = new ResumeModel({
            fullname:fullname,
            email:email,
            address:address,
            phone:phone,
            rpic:rpic,
            rdoc:rdoc
        });
        await user.save();
        res.redirect('/');
        console.log("******************************")
        console.log(user);
        // console.log(req.params)
        console.log("saved sucessfully******************************************************")
        }catch(error){
            console.log(error);
        }
        

    }

    static downloadDoc = async(req,res)=>{
        try{
            const {rdoc} = req.body;
            console.log(rdoc);
            console.log(cvdoc+"/"+rdoc)
            res.set({
                'Location': "/"
            });
            res.download(`${cvdoc}/${rdoc}`);
            
        }catch(error){
            console.log(error);
        }
        
    }
}

module.exports = ResumeProfileController;