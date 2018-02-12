
const classifiedsCtrl = 
      app.controller('classifiedsCtrl', 
                    ['$scope', '$http', 'classifiedsFac', '$mdSidenav', '$mdToast', '$mdDialog', 
                    function($scope, $http, classifiedsFac, $mdSidenav, $mdToast, $mdDialog){

    
    classifiedsFac.getClassifieds().then(function(classifieds){
        $scope.classifieds = classifieds.data;
        $scope.categories = getCategories($scope.classifieds);
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
    };
                        
    $scope.deleteClassified = function(event, classified){
        var index = $scope.classifieds.indexOf(classified);
        var confirm = $mdDialog.confirm()
            .title('Are you sure you want to delete ' + classified.title + '?')
            .ok('Yes')
            .cancel('No')
            .targetEvent(event);
        $mdDialog.show(confirm).then(function(){
            $scope.classifieds.splice(index, 1);
            
        }, function(){
            
        });
        
    };
                        
                        
    function getCategories(classifieds){
        var categories = [];
        angular.forEach(classifieds, function(item){
            angular.forEach(item.categories, function(category){
               categories.push(category);
            });
        });
        
        return _.uniq(categories);
    };
                        
}]);
