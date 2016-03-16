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


    //ajax call to server. poplulate students array. load all students on page load
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
                //imageUpload: $scope.file
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