'use strict';
/**
 *
 * Decorator pattern allows to overwrite objets/class
 * without alterning original elements
 *
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

var UrgentTask = function(name,priority){
  Task.call(this,name);
  this.priority = priority;
};

/**
 *
 * allows UrgentTask to inherit from Task prototype
 * without surchargin Task prototype
 *
 */
UrgentTask.prototype = Object.create(Task.prototype );

UrgentTask.prototype.notify = function(){
  console.log("notifying " + this.name + ' with priority: ' + this.priority);
};

UrgentTask.prototype.save = function(){
  this.notify();
  Task.prototype.save.call(this);
};


var ut1 = new UrgentTask('this is urgent',1);

ut1.complete();
ut1.save();
console.log(ut1);


