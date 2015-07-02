var navModule = angular.module('nav', ['ui.router']);

navModule.controller('navController', ['$scope', 'constants', function ($scope, constants) {
  //stuff
  $scope.brandName = constants.brandName;
}]);

navModule.directive('navigation', function () {
    return {
        restrict: 'E',
        templateUrl: 'app/components/navigation/navigation.tpl.html',
        controller: 'navController'
    }
});
