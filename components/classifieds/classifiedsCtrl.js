
const classifiedsCtrl = app.controller('classifiedsCtrl', function($scope, $http, classifiedsFac, $mdSidenav, $mdToast, $mdDialog, $state){    
    
    var vm = this;
                        
    vm.toggleSideBar = toggleSideBar;
    vm.saveClassified = saveClassified;
    vm.editClassified = editClassified;
    vm.saveEdit = saveEdit;
    vm.deleteClassified = deleteClassified;
    
    vm.classifieds;
    vm.categories;
    
    vm.editing;
    vm.classified;
    
    classifiedsFac.getClassifieds().then(function(classifieds){
        vm.classifieds = classifieds.data;
        vm.categories = getCategories($scope.classifieds);
    });
    
//    $scope.$on('myMessage', function(event, message){
//       console.log(message); 
//    });
    
    $scope.$on('newClassified', function(event, classified){
        classified.id = vm.classifieds.length + 1;
        saveClassified(classified);
    });
    
    $scope.$on('editClassified', function(event, classified){
        var index = classified.id-1;
        
        vm.classifieds[index] = classified;
    });
    
    function toggleSideBar(){
//        $mdSidenav('left').toggle();
        $state.go('classifieds.new');
    };
    
    function saveClassified(classified){
        if(classified){
            vm.classifieds.push(classified);
            vm.classified = {};
//            toggleSideBar();
            showToast("Classified saved");
        };
    };
    
    function showToast(message){
        $mdToast.show(
            $mdToast.simple()
                .content(message)
                .position('top, right')
                .hideDelay(3000)
            );
    };
    
    function editClassified(classified){
        $state.go('classifieds.edit', {
            id: classified.id,
            classified: classified
        });
        console.log(classified);
    };
                        
    function saveEdit(){
        vm.editing = false;
        vm.classified = {};
        toggleSideBar();
        showToast("Edit saved");
    };
                        
    function deleteClassified(event, classified){
        var index = vm.classifieds.indexOf(classified);
        var confirm = $mdDialog.confirm()
            .title('Are you sure you want to delete ' + classified.title + '?')
            .ok('Yes')
            .cancel('No')
            .targetEvent(event);
        $mdDialog.show(confirm).then(function(){
            vm.classifieds.splice(index, 1);
            
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
                        
});
