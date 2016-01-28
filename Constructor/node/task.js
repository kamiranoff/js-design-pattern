/*===========================================
=            Constructor Pattern            =
===========================================*/
// var ConstructorName = (function() {
//   'use strict';

//   function ConstructorName(args) {
//     // enforces new
//     if (!(this instanceof ConstructorName)) {
//       return new ConstructorName(args);
//     }
//     // constructor body
//   }

//   ConstructorName.prototype.methodName = function(args) {
//     // method body
//   };

//   return ConstructorName;
// }());

/*=====  End of Constructor Pattern  ======*/

var Task = function(name) {
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

module.exports = Task;
