"use strict";

(function() {
  var app = angular.module('taskManager', []);

  var taskController = function(Task, UrgentTask, TaskRepository) {
    var ctrl = this;

    ctrl.tasks = [
      new Task(TaskRepository.get(1)),
      new Task(TaskRepository.get(2)),
      new UrgentTask(TaskRepository.get(3)),
      new UrgentTask(TaskRepository.get(4))
    ];
  };

  app.controller('taskCtrl', taskController);
}());
