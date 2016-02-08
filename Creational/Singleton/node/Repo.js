"use strict";
var repo = function() {

  var called = 0;

  var save = function(task) {
    called++;
    console.log('Saving ' + task + ' Called ' + called + 'times');
  };

  console.log('newing up task repo');
  return {
    save: save
  };
};

/**
 *
 * Executing repo in module.exports allows node to
 * refer to the same object (Singleton)
 *
 */
module.exports = repo();//executing repo to create Singleton;
