angular.module("app")
.controller("controller", function($scope, service) {

  service.getData().then(function(response){
    console.log(response)
      $scope.getData = response;
    })
})
