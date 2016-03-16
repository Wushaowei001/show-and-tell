var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var multer = require('multer');
var cloudinary = require('cloudinary');


////list all cloudinary images. (use cloudinary administrative api to programmatically manage hosted assets - http://cloudinary.com/blog/restful_api_for_managing_your_website_s_images_and_other_online_assets)
//
//cloudinary.api.resources(function(result) {
//    console.log(result)
//});

//get details of image
//cloudinary.api.resource("sample1", function(result)  { console.log(result) })







module.exports = router;