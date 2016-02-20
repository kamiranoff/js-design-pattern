"use strict";

/*==============================
=            SUBJET            =
==============================*/
var Task = function(data) {
  this.name = data.name;
  this.priority = data.priority;
  this.project = data.project;
  this.user = data.user;
  this.completed = data.completed;
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


/*=====  End of SUBJET  ======*/



module.exports = Task;