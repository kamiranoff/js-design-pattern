"use strict";

(function() {
  var taskService = function($http) {
    return {
      complete: function(task) {
        task.completed = true;
        console.log('completing task ' + task.name);
      },

      setCompleteDate: function(task) {
        task.completedDate = new Date();
        console.log(task.name + 'completed on ' + task.completedDate);
      },
      notifyCompletion: function(task, user) {
        console.log('Notifying ' + user + 'of the completion of ' + task.name);

      },
      save: function(task) {
        console.log('saving task: ' + task.name);
      },
    };
  };

  var app = angular.module('taskManager');
  app.service('taskService',taskService);
}());


