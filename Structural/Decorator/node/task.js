'use strict';
/**
 *
 * Decorator pattern allows to overwrite objets/class
 * without alterning original elements
 * See subClass.js for a more advanced usage
 *
 */

var Task = function(name){
  this.name = name;
  this.completed = false;
};

Task.prototype.complete = function() {
  // body...
  console.log('completing task ' + this.name);
  this.completed = true;
};

Task.prototype.save = function() {
  // body...
  console.log('saving Task: ' + this.name);
};

var myTask = new Task("Legacy Task");
myTask.complete();
myTask.save();

var urgentTask = new Task("Urgent Task");
//decoration -> adds more properties from original object
urgentTask.priority = 2;
urgentTask.notify = function(){
  console.log("notifying " + this.name + ' with priority: ' + this.priority);
};

//decoration -> overwrite save method
urgentTask.save = function(){
  this.notify();
  Task.prototype.save.call(this);
};

urgentTask.complete();
urgentTask.save();
