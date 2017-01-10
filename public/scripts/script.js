console.log('sourced');

var myApp = angular.module('myApp', []);

myApp.controller('HeroController', ['$scope', '$http', function($scope, $http) {
    $scope.getHero = function() {
        $http({
            method: 'GET',
            url: '/hero'
        }).then(function(response) {
            console.log('response:', response);
            $scope.heroResponse = response.data;
            //-- clear inputs -- //
            $scope.aliasIn = '';
            $scope.first_nameIn = '';
            $scope.last_nameIn = '';
            $scope.cityIn = '';
            $scope.powerIn = '';
        }); //end get call
    }; //end $scope.getHero

    $scope.addHero = function() {
        console.log('in addHero');
        var addHero = {
            alias: $scope.aliasIn,
            first_name: $scope.first_nameIn,
            last_name: $scope.last_nameIn,
            city: $scope.cityIn,
            power_name: $scope.powerIn
        }; //end addHero
        console.log('adding:', addHero);
        //end input clear
        $http({
            method: 'POST',
            url: '/hero',
            data: addHero
        }).then(function(response) {
            $scope.getHero();
        }); //end $scope.addHero
    }; //end $scope.addHero
    $scope.getHero();
}]); //end HeroController
