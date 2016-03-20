myApp.controller('StudentController', ['$scope', '$http', 'Upload', function($scope, $http, Upload) {

    $scope.first_name = '';
    $scope.last_name = '';
    $scope.email_address = '';
    $scope.cohort_name = '';
    $scope.project_name = '';
    $scope.project_description = '';
    $scope.tech_used = '';
    $scope.project_url = '';
    $scope.project_description = '';
    $scope.linkedin_url = '';
    $scope.github_url = '';
    $scope.file = '';

    $scope.students = [];


    //hide student form until modal sign up button is clicked
    //there's an ng-show in the student.html
    //and an ng-click in the header.html
    $scope.showForm = false;

    $scope.showForm = function () {
        $scope.showForm = true;
    }

    //$scope.bricks = ['/views/templates/file-1457563934358.jpg',
    //    '/views/templates/file-1457563934358.jpg',
    //    '/views/templates/file-1457563934358.jpg',
    //    '/views/templates/file-1457563934358.jpg'
    //];


    //ajax call to server. populate students array. load all students on page load
    $http.get('/student').then(function(response) {
        $scope.students = response.data; //updates the DOM


    });


    $scope.upload = function(file) {
        Upload.upload({
            url: '/student',
            arrayKey: '', // default is '[i]'
            data: {
                firstName: $scope.first_name,
                lastName: $scope.last_name,
                emailAddress: $scope.email_address,
                cohortName: $scope.cohort_name,
                projectName: $scope.project_name,
                projectDescription: $scope.project_description,
                techUsed: $scope.tech_used,
                projectURL: $scope.project_url,
                linkedinURL: $scope.linkedin_url,
                githubURL: $scope.github_url,
                file: $scope.file
            }
        }).then(function (response) {
            console.log("Success");
        })
    };



    $scope.saveStudent = function() {
        if ($scope.form.file.$valid && $scope.file) {
            $scope.upload($scope.file);
        }
    }


    $scope.saveTask = function() {
        taskData = {
            taskDescription: $scope.description,
            taskCompleted: $scope.completed
        };

        $http.post('/task', taskData).then(function (response) {
            // update the page
            $scope.tasks = response.data;
            console.log(response.data);

        });
    }

}]);