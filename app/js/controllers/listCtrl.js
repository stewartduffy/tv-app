tvApp.controller('ListCtrl', function($scope, $sce, showsService, $location) {
    'use strict';

    var arrayToLower = function(arr) {
        var tmp = arr.join('~').toLowerCase();
        return tmp.split('~');
    },

    processShows = function(shows) {
        var matchedValues,

            sortedArray = _.sortBy(shows, function(n) {
                return n.name;
            });
        $scope.tvShows = $scope.tvShows.concat(_.findByValues(sortedArray, 'name', showListArray));
        matchedValues = arrayToLower(_.pluck($scope.tvShows, 'name'));
        showListArray = _.difference(showListArray, matchedValues);

        if (showListArray.length) {
            showSearchpage = showSearchpage + 1;
            getShows(showSearchpage);
        }

    },

    getShows = function(page) {
        showsService.getShows(page).then(function(shows) {
            processShows(shows);
        });
    },

    showSearchpage = 0,

    showListArray = arrayToLower(showsService.getShowList());
    

    $scope.tvShows = [];
    $scope.trustAsHtml = $sce.trustAsHtml;

    $scope.openShowDetails = function(item) {
        console.log('item = ', item);
        $location.path('/details/' + item.id);
    };

    //Init app
    getShows(showSearchpage);

});
