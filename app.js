var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var cloudinary = require('cloudinary');
var student = require('./routes/student');
var results = require('./routes/results');
var project = require('./routes/project');


// catch-all route for static files
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// get routes
app.use('/student', student);
//app.use('/results, results');
//app.use('/project, project');

app.use(express.static('public'));
app.use(express.static('public/views'));
app.use(express.static('public/scripts'));
app.use(express.static('public/styles'));
app.use(express.static('public/vendors'));

// configuration for cloudinary image upload cdn
cloudinary.config({
    cloud_name: 'acsecnarfinom',
    api_key: '986892844939361',
    api_secret: 'uKvpGs0aGp5SX_5yfjO3mW6i5bc'
});

app.set('port', process.env.PORT || 5000);

app.listen(app.get('port'), function() {
    console.log('Server is ready on port ' + app.get('port'));
});