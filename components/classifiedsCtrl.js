
const classifiedsCtrl = app.controller('classifiedsCtrl', ['$scope', '$http', 'classifiedsFac', function($scope, $http, classifiedsFac){
    
    classifiedsFac.getClassifieds().then(function(classifieds){
        $scope.classifieds = classifieds.data;
    });
    

}]);
