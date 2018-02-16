app.controller('editClassifiedCtrl', function($scope, $mdSidenav, $mdDialog, classifiedsFac, $timeout, $state){
    
    var vm = this;
    vm.closeSidenav = closeSidenav;
    vm.editClassified = editClassified;
    vm.classified = $state.params.classified;

    $timeout(function(){
        $mdSidenav('left').open();  
    },0);
    
    $scope.$watch('vm.sidenavOpen', function(sidenav){
        if(sidenav === false){
            $mdSidenav('left')
              .close()
              .then(function(){

                $state.go('classifieds');
            });
                
        }
    });
    
    function closeSidenav(){
        vm.sidenavOpen = false;
    };
    
//    vm.sendMessage = function(){
//        $scope.$emit('myMessage', 'hey, how are you?');
//    }
    
    function editClassified(classified){

        if(classified){
            $scope.$emit('editClassified',  classified);
            vm.sidenavOpen = false;
        }
    };
    
});