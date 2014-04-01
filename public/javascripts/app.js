'use strict';

var app = angular.module('myApp',[]);

app.controller('myCtrl',function($scope,$http){
$scope.encoding = ['GBK','UTF-8'];
$scope.text = '';
$scope.charset = '';

$scope.submit = function() {
 var query = {'text':$scope.text,'charset':$scope.charset};
 $http.post('/api/v1/query', query).success(function(responseData) {
 $scope.response = responseData;
 $scope.result = responseData.convertedText;
 });
}

});

