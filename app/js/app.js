var tvApp = angular.module('tvApp', ['ngRoute']);

_.mixin({
    'findByValues': function(collection, property, values) {
        return _.filter(collection, function(item) {
            return _.contains(values, item[property].toLowerCase());
        });
    }
});