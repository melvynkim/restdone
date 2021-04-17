/**
 * Created by melvynkim on 02/10/16.
 */

'use strict';

const _ = require('lodash');
const RestdoneController = require('./controller');
const ExpressTransport = require('./transports/express.transport');
const WampTransport = require('./transports/wamp.transport');
const SocketIoTransport = require('./transports/socket-io.transport');
const WsTransport = require('./transports/ws.transport');
const config = require('./config');


class Restdone {
  constructor(options) {
    this.restdoneOptions = options || {};
    if (!this.restdoneOptions.config) {
      this.restdoneOptions.config = config;
    }
    this.controllers = [];
  }

  createController(Controller) {
    return new Controller(_.clone(this.restdoneOptions));
  }

  addController(Controller) {
    const controller = this.createController(Controller);
    this.controllers.push(controller);
    this.bind(controller);
    return this;
  }

  removeController(controller) {
    this.unbind(controller);
    this.controllers.splice(this.controllers.indexOf(controller), 1);
    return this;
  }

  bind(controller) {
    controller.bind();
    return this;
  }

  unbind(controller) {
    controller.unbind();
    return this;
  }
}

Restdone.Controller = RestdoneController;
Restdone.ExpressTransport = ExpressTransport;
Restdone.WampTransport = WampTransport;
Restdone.SocketIoTransport = SocketIoTransport;
Restdone.WsTransport = WsTransport;

module.exports = Restdone;
