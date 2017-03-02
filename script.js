app = angular.module('app',[]);

app.controller('controller',controllerFunction);
   

controllerFunction.inject=[$scope,$filter];

function controllerFunction($scope,$filter){
   $scope.name="youssef";

   $scope.upper=function(){
      var upperCas = $filter('uppercase');

      $scope.name=upperCas($scope.name);
   

   };

}