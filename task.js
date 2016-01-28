"use strict";

var task = {};

task.title = "My task";
task.description = "My description";

Object.defineProperty(task, 'toString', {
  value: function() {
    return this.title + ' ' + this.description;
  },
  writable: false, //set if value can be overwritten or not
  enumerable:false, // hides the property for the rest of the world
  configurable:false // allows or disallow the possibility to changes this properties
});

var urgentTask = Object.create(task);

Object.defineProperty(urgentTask, 'toString', {
  value: function() {
    return this.title + ' is urgent';
  },
  writable: false,
  enumerable:false,
  configurable:false
});

console.log(urgentTask.toString());
