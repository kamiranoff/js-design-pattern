'use strict';
(function() {
  // body...
  var app = angular.module('taskManager');

  var taskRepo = function($http) {
    //private

    var task1 = {name:'task1',completed:false};
    var task2 = {name:'task2',completed:true};

    var db = [task1,task2];

    var get = function(id) {
      console.log('Getting taks ' + id);
      return db[id -1];
    };

    var save = function(task) {
      console.log('saving ' + task.name + ' to the db');
    };

    return {
      //public
      get: get,
      save: save
    };
  };

  app.service('TaskRepository', taskRepo);

}());
