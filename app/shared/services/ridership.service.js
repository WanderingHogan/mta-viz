angular.module('ridershipData',['ui.router']).factory('ridershipData', function($http, $q){
    var _this = this;

    this.getData = function() {
        var defer = $q.defer();

        $http.get('https://data.maryland.gov/resource/ub96-xxqw.json')
            .success(function(data) {
                defer.resolve(data);
            })
            .error(function() {
                defer.reject('could not get');
            });

        return defer.promise;
    }

    this.helloWorld = function() {
        return 'hello world!';
    }
    return this;
});
