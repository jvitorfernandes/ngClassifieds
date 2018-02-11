const app = angular.module('ngClassifieds', ['ngMaterial']);

app.config(function($mdThemingProvider){
    $mdThemingProvider.theme('default')
        .primaryPalette('teal')
        .accentPalette('orange');
});

app.directive('helloWorld', function(){
    return {
        template: '<h1>hello world</h1>'
    }
});         