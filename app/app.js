var dataVizApp = angular.module('app', [
  'ui.router',
  'ui.bootstrap',
  'ridershipData',
  'nav',
  'nvd3',
  'mtaRidership',
  'lineChart']);

dataVizApp.constant('constants', {
  brandName: 'MD Data Fun'
});
