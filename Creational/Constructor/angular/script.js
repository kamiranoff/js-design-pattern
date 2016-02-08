"use strict";

(function() {
  var app = angular.module('taskManager', []);

  var taskController = function(Task) {
    var ctrl = this;

    ctrl.tasks = [
      new Task({
        name: 'task1'
      }),
      new Task({
        name: 'task2',
        completed: true
      })
    ];
  };

  app.controller('taskCtrl', taskController);
}());
