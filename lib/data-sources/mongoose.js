'use strict';

const MongooseDataSource = require('restdone-mongoose');

module.exports = (options) => new MongooseDataSource(options.model);
