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

// connection to the mongo database
mongoose.connect('mongodb://localhost/show-and-tell');

// model schema with variable
mongoose.model(
    'Student',
    new Schema({
            "first_name": String,
            "last_name": String,
            "email_address": String,
            "cohort_name": String,
            "project_name": String,
            "project_description": String,
            "tech_used": String,
            "project_url": String,
            "linkedin_url": String,
            "github_url": String,
            "file_url": String
        },
        {
            collection: 'Students'
        }
    ));

var Student = mongoose.model('Student');


////this response to get request that has a parameter
////in this case we're expecting a primary_power
//router.get('/:power', function(req, res) {
//    //performs a query on the Heroes collection for a given primary power
//    Hero.find({'primary_power': req.params.power}, function(err, data) {
//        if(err) {
//            console.log('ERR: ', err);
//        }
//        res.send(data); // send array of heroes to the client using the Hero model
//    });
//});

//get data from the database. responds to get requests that don't have a parameter
router.get('/', function(req, res) {
    //console.log('server side get');
    Student.find({}, function(err, data) { //pulls out all students from Students collection
        if(err) {
            console.log('ERR: ', err);
        }
        res.send(data); // send array of students to the client using the Student model
    });
});

//The memory storage engine stores the files in memory as Buffer objects. It doesn't have any options.
//var storage = multer.memoryStorage()
//var upload = multer({ storage: storage })
//When using memory storage, the file info will contain a field called buffer that contains the entire file.

//var storage = multer.memoryStorage()
//var upload = multer({ storage: storage })

var storage =   multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './public/uploads');
    },
    filename: function (req, file, callback) {
        callback(null, file.fieldname + '-' + Date.now() + file.originalname.substring(file.originalname.indexOf('.')));
    }
});
var upload = multer({ storage : storage});

// post info to the database
router.post('/', upload.single('file'), function(req, res) {
        var addedStudent = new Student({
            "first_name": req.body.firstName,
            "last_name": req.body.lastName,
            "email_address": req.body.emailAddress,
            "cohort_name": req.body.cohortName,
            "project_name": req.body.projectName,
            "project_description": req.body.projectDescription,
            "tech_used": req.body.techUsed,
            "project_url": req.body.projectURL,
            "linkedin_url": req.body.linkedinURL,
            "github_url": req.body.githubURL,
            "file_url": req.file.filename
        });

        addedStudent.save(function(err, data) {
            if(err) {
                console.log('ERR: ', err);
            }
            Student.find({}, function(err, data) {
                if(err) {
                    console.log('ERR: ', err);
                }
                res.send(data);
            });
        });
    });


// updates the database
router.put('/:id', function(req, res){

    var newFirstName = req.body.firstName;
    var newLastName = req.body.lastName;
    var newEmailAddress = req.body.emailAddress;
    var newCohortName = req.body.cohortName;
    var newProjectName = req.body.projectName;
    var newProjectDescription = req.body.projectDescription;
    var newTechUsed = req.body.techUsed;
    var newProjectUrl = req.body.projectURL;
    var newLinkedinUrl = req.body.linkedinURL;
    var newGithubUrl = req.body.githubURL;

    Student.findByIdAndUpdate(
        {_id: req.params.id},
        {
            $set: {
                first_name: newFirstName,
                last_name: newLastName,
                email_address: newEmailAddress,
                cohort_name: newCohortName,
                project_name: newProjectName,
                "project_description": newProjectDescription,
                "tech_used": newTechUsed,
                "project_url": newProjectUrl,
                "linkedin_url": newLinkedinUrl,
                "github_url": newGithubUrl,
                "file": file
            }
        },
        function(err, data) {
            if(err) {
                console.log('ERR: ', err);
            }
            res.send(data);
        }
    );

});


module.exports = router;