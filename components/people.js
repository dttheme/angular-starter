angular.module("App").component("people", {
  bindings: { people: "<" },
  template:
    "<div>" +
    "<h3>Some people</h3" +
    "<ul>" +
    "<li ng-repeat='person in $ctrl.people'>" +
    "<a ui-sref-active='active' ui-sref='people.person({personId: person.id})'>" +
    "{{person.name}}" +
    "</a>" +
    "</li>" +
    "</ul>" +
    "<ui-view></ui-view>" +
    "</div>"
});
