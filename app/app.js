var dataVizApp = angular.module('app', [
  'ui.router',
  'ridershipData',
  'nav',
  'mtaRidership',
  'lineChart']);

dataVizApp.constant('constants', {
  brandName: 'MD Data Fun'
});
