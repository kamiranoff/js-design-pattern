"use strict";
(function() {
  var app = angular.module('taskManager', []);
  var taskController = function(Task, taskService, taskServiceFacade) {

    var ctrl = this;

    ctrl.tasks = [new Task({
      name: 'My task',
      priority: 1,
      project: 'Courses',
      user: 'kevin',
      completed: false
    })];

    ctrl.completeTask = function(i) {
      var myTask = ctrl.tasks[i];
     taskServiceFacade.completeAndNotify(myTask);
      console.log(myTask);
    };
  };

  app.controller('taskCtrl', taskController);

}());
