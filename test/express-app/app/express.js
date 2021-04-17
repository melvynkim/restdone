'use strict';

// eslint-disable-next-line import/no-self-import
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

const routes = require('./routes/index');

const app = express();

/* eslint-disable import/no-dynamic-require, global-require */

app.use(logger('dev'));
app.use(bodyParser.json());

require('./middleware/restdone')(app);

// init restdone

app.use('/', routes);

require('./middleware/handle-errors')(app);

/* eslint-enable import/no-dynamic-require, global-require */

module.exports = app;
