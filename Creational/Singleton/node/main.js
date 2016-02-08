'use strict';

var taskHandler = require('./taskHandler');
var myrepo = require('./repo');

myrepo.save('save fromMain');
myrepo.save('save fromMain');
myrepo.save('save fromMain');
taskHandler.save();
taskHandler.save();
taskHandler.save();
taskHandler.save();