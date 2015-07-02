var navModule = angular.module('mtaRidership', ['ui.router']);

navModule.controller('mtaRidershipController', ['$scope', 'constants', 'ridershipData', function ($scope, constants, ridershipData) {
  //stuff
  $scope.brandName = constants.brandName;
  ridershipData.getData().then(function(data){
    $scope.riderdata = data[0];
    console.log($scope.riderdata)
  });
}]);

navModule.directive('mtaRidership', function () {
    return {
        restrict: 'E',
        templateUrl: 'app/components/mta-ridership/mta-ridership.tpl.html',
        controller: 'mtaRidershipController'
    }
});
