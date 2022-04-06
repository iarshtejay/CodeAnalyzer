const request = require('supertest');
const Github = require('../../src/app/github');

/**
 * @author Bharatwaaj Shankar
 * @description Get all repositories from Github
 * @name TEST021
 */
it('Get all Repositories from DB & Check if they exists in Github', async () => {
    const output = await strapi.db.query("api::github-auth.github-auth").findMany({ orderBy: { id: 'desc' } });
    console.log("output[0].accessToken", output[0].accessToken);
    try {
        const data = await Github.getRepositories({
            accessToken: output[0].accessToken,
            owner: "bharatwaaj",
            repositoryName: "Firebase"
        });
        console.log("DATA", data.length);
    } catch (err) {
        console.log("DATA", err);
    }
    console.log('data', data);
});