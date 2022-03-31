'use strict';

/**
 *  github-auth controller
 */

const {createCoreController} = require('@strapi/strapi').factories;
const {Octokit} = require("@octokit/core");


module.exports = createCoreController('api::github-auth.github-auth', ({strapi}) => ({
  async create(ctx) {
    const {data, meta} = await super.create(ctx)
    const {attributes} = data
    const ghAuthId = data.id
    const {accessToken} = attributes
    const user_id = attributes.user.data.id
    const octokit = new Octokit({auth: accessToken})

    const langRes = await octokit.request('GET /repos/{owner}/{repo}/languages', {
      owner: 'Dev-kishan1999',
      repo: 'connect'
    })
    const size = Object.values(langRes.data).reduce((previousValue, currentValue) => previousValue + currentValue)
    const entry = await strapi.db.query('api::repository.repository').create({
      data: {
        name: 'connect',
        users: [user_id],
        url: 'https://github.com/Dev-kishan1999/connect',
        owner: 'Dev-kishan1999',
        languages: langRes.data,
        size,
        publishedAt: new Date().toISOString()
      }
    })
    return {data, meta}
  }
}));
