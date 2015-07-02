angular.module('lineChart', [])
.directive('lineChart', function() {
  return {
    restrict: 'E',
    transclude: true,
    templateUrl: 'app/shared/charts/lineChart/lineChart.tpl.html',
    link: function (scope, element, attributes) {
      scope.shit = attributes.inData;
    }
  };
});
