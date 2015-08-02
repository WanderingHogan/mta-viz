angular.module('ridershipData',['ui.router']).factory('ridershipData', function($http, $q){
    var _this = this;


    this.getData = function(startDate, endDate) {
        var defer = $q.defer();

        $http.get('https://data.maryland.gov/resource/ub96-xxqw.json')
            .success(function(data) {
              if(startDate || endDate){
                console.log(startDate)
                console.log(endDate)
              }
              var outArray = [],
                  propFullList = [],
                  propListUnique = [],
                  datesListUnique = [];

              //This loop builds unique dates and props
              for(var index in data){
                if(data.hasOwnProperty(index)){
                  var obj = data[index];
                  for (var prop in obj) {
                    propFullList.push(prop);
                  }
                }
                datesListUnique.push(data[index].average_weekday_ridership);
              }
              propListUnique = _.uniq(propFullList);
              for(var prop in propListUnique){
                if((propListUnique[prop] !== 'total_average_weekday_ridership')&&(propListUnique[prop] !== 'average_weekday_ridership')){
                  outArray.push({"key":propListUnique[prop], "values": []})
                }
              }
              //now loop through and build the data the way nvd3
              //for object in data feed
              for(var a in data){
                var workingKVP = _.pairs(data[a]);
                var currentKeys = _.keys(data[a]);
                //get the difference between the full props list and the list of keys in this object
                var addZeros = _.difference(propListUnique, _.keys(data[a]));
                for(var kvp in workingKVP){
                  for(var thekey in outArray){
                    if(workingKVP[kvp][0] === outArray[thekey].key){
                      // console.log('pushing in to ' + workingKVP[kvp][0])
                      outArray[thekey].values.push([moment(data[a].average_weekday_ridership,"MMM-YY").toDate().getTime(), parseInt(workingKVP[kvp][1])])
                    }
                  }
                    // console.log(workingKVP[kvp])
                }
                for(var item in addZeros){
                  for(var thekey in outArray){
                    if(addZeros[item] === outArray[thekey].key){
                      // console.log('pushing in to ' + workingKVP[kvp][0])
                      outArray[thekey].values.push([moment(data[a].average_weekday_ridership,"MMM-YY").toDate().getTime(), 0])
                    }
                  }
                }
                // console.log(_.keys(data[a]) )
              }
              // console.log(outArray)
                defer.resolve(outArray);
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
