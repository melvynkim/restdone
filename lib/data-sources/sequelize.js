'use strict';

const SequelizeDataSource = require('restdone-sequelize');

module.exports = (options) => new SequelizeDataSource(options.model);
