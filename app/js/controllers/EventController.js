'use strict';

eventsApp.controller('EventController',
    function EventController($scope) {
        $scope.event= {
            name:"angular boot camp",
            date:'1/1/2013',
            time:'10:30 am',
            location:{
                address:'Google Head quters',
                city:'Banglore',
                country:'India'
            },
            imageUrl:'/img/angularjs-logo.png',
            sections:{
                
            }

        }
    }
);
