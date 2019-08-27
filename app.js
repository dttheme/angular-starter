"use strict";
var app = angular.module("App", ["main", "ui.router"]);

var main = angular.module("main", []);

main.controller("mainController", function($scope) {
  $scope.data = "This is my scoped string variable.";
});

app.config(function($stateProvider) {
  var states = [
    {
      name: "home",
      url: "/",
      template: "<h3>HOME</h3>"
    },
    {
      name: "hello",
      url: "/hello",
      component: "hello"
    },
    {
      name: "about",
      url: "/about",
      component: "about"
    },
    {
      name: "people",
      url: "/people",
      component: "people",
      resolve: {
        people: function(PeopleService) {
          return PeopleService.getAllPeople();
        }
      }
    },
    {
      name: "people.person",
      url: "/{personId}",
      component: "person",
      resolve: {
        person: function(people, $stateParams) {
          return people.find(function(person) {
            return person.id === $stateParams.personId;
          });
        }
      }
    }
  ];
  states.forEach(function(state) {
    $stateProvider.state(state);
  });
});
