const app = angular.module('ngClassifieds', ['ngMaterial', 'ui.router']);

app.config(function($mdThemingProvider, $stateProvider, $locationProvider){
    $mdThemingProvider.theme('default')
        .primaryPalette('teal')
        .accentPalette('orange');
    
    $stateProvider
        .state('classifieds', {
            url: '/classifieds',
            templateUrl: 'components/classifieds/classifiedsView.html',
            controller: 'classifiedsCtrl as vm'
        })
        .state('classifieds.new', { //ui-router KNOWS it is a substate of classifieds by doing this
            url: '/new',
            templateUrl: 'components/classifieds/new/newClassifiedView.html',
            controller: 'newClassifiedCtrl as vm'
        })
        .state('classifieds.edit', { //ui-router KNOWS it is a substate of classifieds by doing this
            url: '/edit/:id',
            templateUrl: 'components/classifieds/edit/editClassifiedView.html',
            controller: 'editClassifiedCtrl as vm',
            params: {
                classified: null
            }
        }); 
    
});
