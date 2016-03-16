myApp.controller('ProjectController', ['$scope', '$http', 'Upload', function($scope, $http, Upload) {

    //populate the dom with temp data
    $scope.project = {
            first_name: "Moni",
            last_name: "Francesca",
            email_address: "mo.francesca@gmail.com",
            cohort_name: "Eta/Iota",
            project_name: "Show and Tell",
            project_description: "A place for Prime students to showcase their solo projects",
            tech_used: "AngularJS",
            project_url: "http://alistair.cockburn.us/Walking+skeleton",
            linkedin_url: "https://www.linkedin.com/in/moniquefrancesca",
            github_url: "https://github.com/monifrancesca",
            file: "/views/templates/file-1457563934358.jpg"
        }







}]);