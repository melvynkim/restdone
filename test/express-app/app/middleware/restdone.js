/**
 * Created by melvynkim on 10/10/15.
 */

'use strict';

const Restdone = require('../../../..');

const { ExpressTransport } = Restdone;

module.exports = (app) => {
  const transport = new ExpressTransport({
    app,
  });
  const restdone = new Restdone({
    transports: [transport],
  });

  // eslint-disable-next-line global-require
  restdone.addController(require('../controllers/user.controller'));
};
