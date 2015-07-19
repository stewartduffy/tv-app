tvApp.service('showsService',
    function($http) {
        'use strict';
        var showList = [
            '12 Monkeys',
            '90210',
            'Adventure Time',
            'American Odyssey',
            'Aquarius',
            'Beauty and the Beast',
            'Better Call Saul',
            'Breaking Bad',
            'Castle',
            'Chicago Pd',
            'Covert Affairs',
            'Criminal Minds',
            'Daredevil',
            'Dawson\'s Creek',
            'Defiance',
            'Dexter',
            'Doctor Who',
            'Drake and Josh',
            'Durarara!!',
            'Er',
            'Game Of Thrones',
            'Girls',
            'Graceland',
            'Grey\'s Anatomy',
            'Hannibal',
            'House Of Cards',
            'How I Met Your Mother',
            'Marco Polo',
            'Marvel\'s Agent Carter',
            'Modern Family',
            'Mr. Robot',
            'NCIS',
            'Orange Is The New Black',
            'Orphan Black',
            'Outlander',
            'Penny Dreadful',
            'Reign',
            'Sense8',
            'Shameless (US)',
            'Silicon Valley',
            'Stalker',
            'Suits',
            'Texas Rising',
            'The Amazing Race',
            'The Big Bang Theory',
            'The Flash',
            'The Messengers',
            'The Musketeers',
            'The Whispers',
            'True Detective'
        ];



        return {
            getShows: function(page) {
                return $http.get('http://api.tvmaze.com/shows?page=' + page)
                    .then(function(result) {
                        //resolve the promise as the data
                        return result.data;
                    });
            },
            getShowList: function() {
                return showList;
            }
            // getShowList: function() {
            //     return $http.get('/TV-Shows.txt')
            //         .then(function(result) {
            //             //resolve the promise as the data
            //             return result.data;
            //         });
            // }
        };
    });
