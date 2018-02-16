app.controller('newClassifiedCtrl', function($scope, $mdSidenav, $mdDialog, classifiedsFac, $timeout, $state){
    
    var vm = this;
    vm.closeSidenav = closeSidenav;
    vm.saveClassified = saveClassified;

    $timeout(function(){
        $mdSidenav('left').open();  
    },0);
    
    $scope.$watch('vm.sidenavOpen', function(sidenav){
        if(sidenav === false){
            $mdSidenav('left')
              .close()
              .then(function(){
                console.log(vm.sidenavOpen);
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
    
    function saveClassified(classified){
        if(classified){
            $scope.$emit('newClassified', classified);
            vm.sidenavOpen = false;
        }
    };
    
});