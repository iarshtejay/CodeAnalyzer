'use strict';

/**
 * normal-user router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::normal-user.normal-user');
