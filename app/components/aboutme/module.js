let myapp = angular.module("Myapp", []);
let mycontroller = function($scope) {
  $scope.message = "Hello World";
};

myapp.controller("MyController", mycontroller);
let JSONController = function($scope) {
  let Student = {
    FirstName: "Abhiram",
    LastName: "Madugula",
    Email: "S534093@nwmissouri.edu"
  };
  $scope.Student = Student;
};
myapp.controller("MyController2", JSONController);
