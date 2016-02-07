'use strict';
//revealing module pattern

var repo = function() {
  //private

  var db = {}; // database is secure in the module.

  var get = function(id) {
    console.log('Getting taks ' + id);
    return {
      name: 'new task from db'
    };
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

module.exports = repo(); //executing repo
