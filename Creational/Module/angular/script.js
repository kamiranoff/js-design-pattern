"use strict";

(function() {
  var app = angular.module('taskManager', []);

  var taskController = function(Task,TaskRepository) {
    var ctrl = this;

    ctrl.tasks = [
      new Task(TaskRepository.get(1)),
      new Task(TaskRepository.get(2))
    ];
  };

  app.controller('taskCtrl', taskController);
}());
