angular.module("App").component("hello", {
  template:
    "<h3> {{$ctrl.greeting}} World</h3>" +
    "<button ng-click='$ctrl.toggleGreeting()''>Toggle Greeting</button>",
  controller: function() {
    this.greeting = "Hello";
    this.toggleGreeting = () => {
      this.greeting = this.greeting == "Hello" ? "What's up" : "Hello";
    };
  }
});
