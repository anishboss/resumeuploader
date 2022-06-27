const express = require('express');
const route = express.Router();
const upload = require('../middlewares/upload-middleware');
const ResumeProfileController = require('../controllers/resumeProfileController');
route.use(upload.fields([{name:'rpic',maxCount:1},{name:'rdoc',maxCount:1}]))

route.get('/',ResumeProfileController.indexProfile);
route.post('/',ResumeProfileController.saveProfile);
route.post('/download',ResumeProfileController.downloadDoc);

module.exports = route;