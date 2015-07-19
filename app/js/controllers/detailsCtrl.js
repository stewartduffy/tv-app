tvApp.controller('DetailsCtrl', function($scope, $routeParams) {
    'use strict';
    $scope.show_id = $routeParams.showId;

    console.log('$scope.show_id = ', $scope.show_id);


});
