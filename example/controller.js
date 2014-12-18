angular.module('exampleapp', ['bs']).controller('ExampleController', ['$scope', '$http', function($scope, $http) {
    
    $scope.selectedValue = {};
    
    $scope.search = function(q, cb) {
        $http.get('movies').success(function (data) {
            var result = [];
            
            for (var i = 0; i < data.length; i++) {
                var d = data[i];
                if (d.value.indexOf(q) != -1) {
                    result.push(d);
                }
            }
            
            cb(result);
        });
    };
  }]);