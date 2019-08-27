angular.module("App").component("about", {
  template:
    "<h3>HELLO, this is the about page" +
    "<input type='text' ng-model='name' />" +
    "<p>Hello <span ng-bind='name'></span>!</p>" +
    "<button ng-click='count = count + 1' ng-init='count=0'>Increment</button>" +
    "<span> {{ count }}</span>"
});
