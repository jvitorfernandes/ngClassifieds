
const classifiedsCtrl = 
      app.controller('classifiedsCtrl', 
                    ['$scope', '$http', 'classifiedsFac', '$mdSidenav', '$mdToast', 
                    function($scope, $http, classifiedsFac, $mdSidenav, $mdToast){

    
    classifiedsFac.getClassifieds().then(function(classifieds){
        $scope.classifieds = classifieds.data;
    });
    
    $scope.toggleSideBar = function(){
        $mdSidenav('left').toggle();
    };
    
    $scope.saveClassified = function(classified){
        if(classified){
            $scope.classifieds.push(classified);
            $scope.classified = {};
            $scope.toggleSideBar();
            showToast("Classified saved");
        };
    };
    
    function showToast(message){
        $mdToast.show($mdToast.simple()
                        .content(message)
                        .position('top, right')
                        .hideDelay(3000)
                    );
    };
    
    $scope.editClassified = function(classified){
        $scope.editing = true;
        $scope.toggleSideBar();
        $scope.classified = classified;
    };
                        
    $scope.saveEdit = function(){
        $scope.editing = false;
        $scope.classified = {};
        $scope.toggleSideBar();
        showToast("Edit saved");
    }
                        
}]);
