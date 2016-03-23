var appExr = angular.module("exerciseApp", []);


appExr.controller("app", function($scope){
    $scope.exers = [];
  $scope.searchEnter = function() {
    if(event.which === 13 && $scope.exer != "") {
      $scope.addExercise();
    }

};
$scope.addExercise = function() {
  $scope.exers.push({'exerMessage' :$scope.exer, 'status' :'false'});
  console.log($scope.exers);
  $scope.exer = '';
};
});
