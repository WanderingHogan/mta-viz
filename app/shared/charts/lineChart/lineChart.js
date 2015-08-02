angular.module('lineChart', ['nvd3'])
.directive('lineChart', function() {
  return {
    restrict: 'E',
    transclude: true,
    templateUrl: 'app/shared/charts/lineChart/lineChart.tpl.html',
    controller: 'lineChartController'
  };
})
.controller('lineChartController', ['$scope', 'ridershipData', function($scope, ridershipData) {

        ridershipData.getData(1,700).then(function(data){
          $scope.options = {
              chart: {
                  type: 'stackedAreaChart',
                  height: 600,
                  margin : {
                      top: 20,
                      right: 20,
                      bottom: 60,
                      left: 100
                  },
                  x: function(d){return d[0];},
                  y: function(d){return d[1];},
                  useVoronoi: true,
                  clipEdge: true,
                  transitionDuration: 500,
                  useInteractiveGuideline: true,
                  xAxis: {
                      showMaxMin: false,
                      tickFormat: function(d) {
                          return d3.time.format('%x')(new Date(d))
                      }
                  },
                  yAxis: {
                      tickFormat: function(d){
                          return d3.format(',.2f')(d);
                      }
                  }
              }
          };
          $scope.data = data;

        });
}]);
