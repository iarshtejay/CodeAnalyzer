const request = require('supertest');
const Github = require('../../src/app/github');

/**
 * @author Bharatwaaj Shankar
 * @description Get all repositories from Github
 * @name TEST005
 */
it('Get all Repositories from Github', async () => {
  const output = await strapi.db.query("api::repository.repository").findMany({orderBy: {id: 'desc'}});
  expect(output).toBeDefined();
});

/**
 * @author Bharatwaaj Shankar
 * @description Get all Branches from Github
 * @name TEST006
 */
it('Get all Branches from Github', async () => {
  const output = await strapi.db.query("api::branch.branch").findMany({orderBy: {id: 'desc'}});
  expect(output).toBeDefined();
});


/**
 * @author Bharatwaaj Shankar
 * @description Get all Commits from Github
 * @name TEST007
 */
 it('Get all Commits from Github', async () => {
  const output = await strapi.db.query("api::commit.commit").findMany({orderBy: {id: 'desc'}});
  expect(output).toBeDefined();
});

/**
 * @author Bharatwaaj Shankar
 * @description Get all Contributors from Github
 * @name TEST008
 */
 it('Get all Contributors from Github', async () => {
  const output = await strapi.db.query("api::contributor.contributor").findMany({orderBy: {id: 'desc'}});
  expect(output).toBeDefined();
});

/**
 * @author Bharatwaaj Shankar
 * @description Get all Pull Requests from Github
 * @name TEST009
 */
 it('Get all Pull Requests from Github', async () => {
  const output = await strapi.db.query("api::pull-request.pull-request").findMany({orderBy: {id: 'desc'}});
  expect(output).toBeDefined();
});

/**
 * @author Bharatwaaj Shankar
 * @description Get all Github Auths from Github
 * @name TEST010
 */
 it('Get all Github Auths from Github', async () => {
  const output = await strapi.db.query("api::github-auth.github-auth").findMany({orderBy: {id: 'desc'}});
  expect(output).toBeDefined();
});

/**
 * @author Bharatwaaj Shankar
 * @description Get all Repos from Github 
 * @name TEST011
 */
 it('Get all Repos from Github via Library', async () => {
  const output = await strapi.db.query("api::github-auth.github-auth").findMany({orderBy: {id: 'desc'}});
  console.log("output[0].accessToken", output[0].accessToken);
  try{
    const data = await Github.getRepositories({
      accessToken: output[0].accessToken,
      owner: "bharatwaaj",
      repositoryName: "Firebase"
    });
    console.log("DATA", data.length);
    expect(data).toBeDefined();
  } catch(err){
    console.log("DATA", err);
  }
});

/**
 * @author Bharatwaaj Shankar
 * @description Get all Github Auths from Github
 * @name TEST012
 */
 it('Get all Branches from Github via Library', async () => {
  const output = await strapi.db.query("api::github-auth.github-auth").findMany({orderBy: {id: 'desc'}});
  console.log("output[0].accessToken", output[0].accessToken);
  try{
    const data = await Github.getBranches({
      accessToken: output[0].accessToken,
      owner: "bharatwaaj",
      repositoryName: "Firebase"
    });
    console.log("DATA", data.length);
    expect(data).toBeDefined();
  } catch(err){
    console.log("DATA", err);
  }
});

/**
 * @author Bharatwaaj Shankar
 * @description Get all Commits from Github
 * @name TEST013
 */
 it('Get all Commits from Github via Library', async () => {
  const output = await strapi.db.query("api::github-auth.github-auth").findMany({orderBy: {id: 'desc'}});
  console.log("output[0].accessToken", output[0].accessToken);
  try{
    const data = await Github.getBranches({
      accessToken: output[0].accessToken,
      owner: "bharatwaaj",
      repositoryName: "Firebase"
    });
    console.log("DATA", data.length);
    expect(data).toBeDefined();
  } catch(err){
    console.log("DATA", err);
  }
});



/**
 * @author Bharatwaaj Shankar
 * @description Get all Contributors from Github
 * @name TEST014
 */
 it('Get all Contributors from Github via Library', async () => {
  const output = await strapi.db.query("api::github-auth.github-auth").findMany({orderBy: {id: 'desc'}});
  console.log("output[0].accessToken", output[0].accessToken);
  try{
    const data = await Github.getContributors({
      accessToken: output[0].accessToken,
      owner: "bharatwaaj",
      repositoryName: "Firebase"
    });
    console.log("DATA", data.length);
    expect(data).toBeDefined();
  } catch(err){
    console.log("DATA", err);
  }
});

/**
 * @author Bharatwaaj Shankar
 * @description Get all Contributors from Github
 * @name TEST015
 */
 it('Get all Pull Requests from Github via Library', async () => {
  const output = await strapi.db.query("api::github-auth.github-auth").findMany({orderBy: {id: 'desc'}});
  console.log("output[0].accessToken", output[0].accessToken);
  try{
    const data = await Github.getPullRequests({
      accessToken: output[0].accessToken,
      owner: "bharatwaaj",
      repositoryName: "Firebase"
    });
    console.log("DATA", data.length);
    expect(data).toBeDefined();
  } catch(err){
    console.log("DATA", err);
  }
});

/**
 * @author Bharatwaaj Shankar
 * @description Get all Contributors from Github
 * @name TEST016
 */
 it('Get all Repo Slugs from Github via Library', async () => {
  const output = await strapi.db.query("api::github-auth.github-auth").findMany({orderBy: {id: 'desc'}});
  console.log("output[0].accessToken", output[0].accessToken);
  try{
    const data = await Github.getRepoDetailsBySlug({
      accessToken: output[0].accessToken,
      owner: "bharatwaaj",
      repoSlugs: ["https://github.com/tushartushar/DesigniteJava"]
    });
    console.log("DATA", data.length);
    expect(output).toBeDefined();
  } catch(err){
    console.log("DATA", err);
  }
});

/**
 * @author Bharatwaaj Shankar
 * @description Get all Contributors from Github
 * @name TEST017
 */
 it('Get all Language Data from Github via Library', async () => {
  const output = await strapi.db.query("api::github-auth.github-auth").findMany({orderBy: {id: 'desc'}});
  console.log("output[0].accessToken", output[0].accessToken);
  try{
    const data = await Github.getLangDataFromLangUrl({
      accessToken: output[0].accessToken,
      owner: "bharatwaaj"
    });
    console.log("DATA", data.length);
    expect(output).toBeDefined();
  } catch(err){
    console.log("DATA", err);
  }
});

/**
 * @author Bharatwaaj Shankar
 * @description Get all Contributors from Github
 * @name TEST018
 */
 it('Get all Repo data for a user from Github via Library', async () => {
  const output = await strapi.db.query("api::github-auth.github-auth").findMany({orderBy: {id: 'desc'}});
  console.log("output[0].accessToken", output[0].accessToken);
  try{
    const data = await Github.getRepositories({
      accessToken: output[0].accessToken,
      owner: "bharatwaaj"
    });
    console.log("DATA", data.length);
    expect(data).toBeGreaterThanOrEqual(5);
  } catch(err){
    console.log("DATA", err);
  }
});

/**
 * @author Bharatwaaj Shankar
 * @description Get all Contributors from Github
 * @name TEST019
 */
 it('Get all Commit messages from Github via Library', async () => {
  const output = await strapi.db.query("api::github-auth.github-auth").findMany({orderBy: {id: 'desc'}});
  console.log("output[0].accessToken", output[0].accessToken);
  try{
    const data = await Github.getCommitMessages({
      accessToken: output[0].accessToken,
      owner: "bharatwaaj",
      repositoryName: "Firebase"
    });
    console.log("DATA", data.length);
    expect(output).toBeDefined();
  } catch(err){
    console.log("DATA", err);
  }
});