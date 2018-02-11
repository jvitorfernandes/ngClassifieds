const classifiedsFac = app.factory('classifiedsFac', ['$http', function($http){
    
    function getClassifieds(){
        return $http.get('data/classifieds.json');
    };
    
    return {
        getClassifieds: getClassifieds
    }
    
    
}]);