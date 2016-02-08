"use strict";
//Factory

(function() {
  var app = angular.module('taskManager');

  app.factory('Task', function() {
    var Task = function(data) {
      this.name = data.name;
      this.completed = data.completed;
    };

    Task.prototype.complete = function() {
      console.log('completing task ' + this.name);
      this.completed = true;
    };


    Task.prototype.save = function() {
      console.log('saving task ' + this.name);
    };
    return Task;
  });
}());
