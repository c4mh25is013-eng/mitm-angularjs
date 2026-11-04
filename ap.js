var app = angular.module('studentApp', []);

// Parent Controller
app.controller('CollegeController', ['$scope', function($scope) {
  $scope.collegeName = 'Maharaja Institute of Technology College';
}]);

// Child Controller
app.controller('StudentController', ['$scope', function($scope) {
  
  $scope.students = ['Sadvi A', 'Bhoomika K C', 'Manya'];

  $scope.studentName = '';
  $scope.department = '';
  $scope.semester = '';
  $scope.marks = null;

  // Visibility state for student details section (default: hidden)
  $scope.showDetails = false;

  // Function to show details
  $scope.openDetails = function() {
    $scope.showDetails = true;
  };

  // Function to hide details
  $scope.closeDetails = function() {
    $scope.showDetails = false;
  };

  // Function to add a new student to the list
  $scope.addStudent = function() {
    if ($scope.studentName && $scope.studentName.trim() !== '') {
      $scope.students.push($scope.studentName.trim());
      $scope.studentName = ''; // Clear input field after adding
    }
  };
}]);

