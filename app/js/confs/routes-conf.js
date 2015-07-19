tvApp.config(function($routeProvider) {
    'use strict';
    $routeProvider
        .when('/', {
            templateUrl: '/views/list.html',
            controller: 'ListCtrl'
        })
        .when('/details/:showId', {
            templateUrl: '/views/details.html',
            controller: 'DetailsCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });

});
