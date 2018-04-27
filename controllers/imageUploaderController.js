'use strict'
require('dotenv').config()

let models = require('../models')

module.exports={
  create: function(req,res){
    let result={
      success: false
    }
      models.imageUploader.create({
        issueNo: req.body.issueNo,
        name: req.files[0].originalname
      }).then(laporHama=>{
        let data={
          issueNo:laporHama.issueNo,
          name: process.env.BASE_URL+laporHama.name
        }
        result.success=true
        result.msg='upload image success'
        result.data=data
        res.status(201).json(result)
      }).catch((err) => {
        console.log(err);
        result.msg=err.message
        res.status(400).json(result)
      })
  }
}
