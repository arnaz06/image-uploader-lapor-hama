var express = require('express');
var router = express.Router();
var multer = require('multer');


const imageUploaderController = require('../controllers/imageUploaderController');


let storage = multer.diskStorage({
  destination: 'public/imageLaporHama',
  filename: function(req,file,cb){
    // console.log(upload);
    cb(null, file.originalname)
  }
})
let upload = multer({ storage: storage });

router.post('/lapor',upload.any(),imageUploaderController.create)
module.exports = router;
