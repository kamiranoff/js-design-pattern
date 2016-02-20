'use strict';

(function() {
  var app = angular.module('taskManager');
  var taskServiceFacade = function(taskService) {
    var completeAndNotify = function(task) {
      taskService.complete(task);
      if (task.completed === true) {
        taskService.setCompleteDate(task);
        taskService.notifyCompletion(task, task.user);
        taskService.save(task);
      }
    };

    return {
      completeAndNotify: completeAndNotify
    };
  };


  app.service('taskServiceFacade', taskServiceFacade);
}());
