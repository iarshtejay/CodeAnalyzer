'use strict';

/**
 *  normal-user controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::normal-user.normal-user');
