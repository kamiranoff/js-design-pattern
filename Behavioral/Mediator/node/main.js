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


/*================================
=            Mediator            =
================================*/
var mediator = (function(){
  var channels = {};

  var subscribe = function(channel,context,callback){
    if(!mediator.channels[channel]){
      mediator.channels[channel] = [];
    }
    mediator.channels[channel].push({
      context:context,
      func:callback
    });
  };

  var publish = function(channel){
    if(!this.channels[channel]){
      return false;
    }

    var args = Array.prototype.slice.call(arguments,1);

    for(var i = 0; i < mediator.channels[channel].length; i++){

      var sub = mediator.channels[channel][i];
      sub.func.apply(sub.context,args);

    }
  };

  return {
    channels : {},
    subscribe:subscribe,
    publish:publish
  };

}());


/*=====  End of Mediator  ======*/





var task1 = new Task({ name: 'Create a demo for Mediators', user: 'Psylocke' });

var notification = new NotificationService();
var logging = new LoggingService();
var audit = new AuditingService();

mediator.subscribe('complete',notification,notification.update);
mediator.subscribe('complete',logging,logging.update);
mediator.subscribe('complete',audit,audit.update);

task1.complete = function(){
  mediator.publish('complete',this);
  Task.prototype.complete.call(this);
};

task1.complete();
