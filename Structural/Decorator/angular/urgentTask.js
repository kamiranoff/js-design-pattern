"use strict";
//Decorator Pattern

(function() {
  var app = angular.module('taskManager');

  app.factory('UrgentTask', function(Task, TaskRepository) {

    var UrgentTask = function(data) {
      Task.call(this, data);
      this.priority = data.priority;
    };

    /**
     *
     * allows UrgentTask to inherit from Task prototype
     * without surchargin Task prototype
     *
     */
    UrgentTask.prototype = Object.create(Task.prototype);

    UrgentTask.prototype.notify = function() {
      console.log("notifying " + this.name + ' with priority: ' + this.priority);
    };

    UrgentTask.prototype.save = function() {
      this.notify();
      Task.prototype.save.call(this);
    };

    return UrgentTask;
  });
}());
