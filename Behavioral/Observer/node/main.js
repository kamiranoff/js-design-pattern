'use strict';

var Task = require('./task');

/*=================================
=            Observers            =
=================================*/

var NotificationService = function() {
  var message = 'Notifiying ';
  this.update = function(task) {
    console.log(message + task.user + ' for task ' + task.name);
  };
};

var LoggingService = function() {
  var message = 'Logging ';
  this.update = function(task) {
    console.log(message + task.user + ' for task ' + task.name);
  };
};

var AuditingService = function() {
  var message = 'Auditing ';
  this.update = function(task) {
    console.log(message + task.user + ' for task ' + task.name);
  };
};

/*=====  End of Observers  ======*/

/*======================================
=            Observers List            =
======================================*/

function ObserverList() {
  this.observerList = [];
}

ObserverList.prototype.add = function(obj) {
  return this.observerList.push(obj);
};

ObserverList.prototype.get = function(index) {
  if (index > -1 && index < this.observerList.length) {
    return this.observerList[index];
  }
};

ObserverList.prototype.count = function(){
  return this.observerList.length;
};

ObserverList.prototype.indexOf = function(obj,startIndex){
  var i = startIndex;

  while(i < this.observerList.length ){
    if(this.observerList[i] === obj){
      return i;
    }
    i++;
  }

  return -1;
};

ObserverList.prototype.removeAt = function(index){
  this.observerList.splice(index,1);
};

/*=====  End of Observers List  ======*/

/*==============================================================
=            Decorating Task to make it the subject            =
==============================================================*/


var ObservableTask = function(data){
  Task.call(this,data);
  this.observers = new ObserverList();
};

ObservableTask.prototype.addObserver = function(observer){
  this.observers.add(observer);
};

ObservableTask.prototype.removeObserver = function(observer){
  this.observers.removeAt(this.observers.indexOf(observer,0));
};

ObservableTask.prototype.notify = function(context){
  var observerCount = this.observers.count();
  for(var i=0;i <observerCount; i++){
    this.observers.get(i)(context);
  }
};


ObservableTask.prototype.save = function(){
  this.notify(this);

  Task.prototype.save.call(this);
};

/*=====  End of Decorating Task to make it the subject  ======*/


var task1 = new ObservableTask({ name: 'Create a demo for constructors', user: 'Psylocke' });

var notification = new NotificationService();
var logging = new LoggingService();
var audit = new AuditingService();

task1.addObserver(notification.update);
task1.addObserver(logging.update);
task1.addObserver(audit.update);

task1.save();

task1.removeObserver(audit);
task1.save();