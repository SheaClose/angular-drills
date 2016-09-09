angular.module("app")
.controller("controller", function($scope, service){
  $scope.myData = service.myData;
})
