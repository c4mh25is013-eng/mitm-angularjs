var app = angular.module('studentApp', []);
app.controller('CollegeController', ['$scope', function($scope) {
    $scope.collegeName = 'Global Institute of Technology';
}]);
app.controller('StudentController', ['$scope', function($scope) {
    $scope.students = ['Alice Smith', 'Bob Jones', 'Charlie Brown']
    $scope.name = '';
    $scope.department = '';
    $scope.semester = '';
    $scope.marks = null;
    $scope.showDetails = false;
    $scope.toggleDetails = function() {
        $scope.showDetails = !$scope.showDetails;
    };
    $scope.addStudent = function() {
        if ($scope.name && $scope.name.trim() !== '') {
            $scope.students.push($scope.name.trim());
            $scope.name = '';
        }
    };
}]);