'use strict';

/**
 * normal-user service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::normal-user.normal-user');
