var navModule = angular.module('mtaRidership', ['ui.router']);

navModule.controller('mtaRidershipController', ['$scope', 'constants', 'ridershipData', function ($scope, constants, ridershipData) {
  //stuff
  $scope.brandName = constants.brandName;

  $scope.months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  $scope.years = ['06','07','08','09','10','11','12','13','14','15']

  $scope.filterData = function(){
    console.log($scope.startMonth)
    console.log($scope.startYear)
    ridershipData
  }
}]);

navModule.directive('mtaRidership', function () {
    return {
        restrict: 'E',
        templateUrl: 'app/components/mta-ridership/mta-ridership.tpl.html',
        controller: 'mtaRidershipController'
    }
});
