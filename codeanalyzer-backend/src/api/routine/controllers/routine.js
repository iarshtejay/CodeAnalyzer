"use strict";
const Github = require("../../../app/github");

/**
 *  routine controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::routine.routine", ({ strapi }) => ({
  // To Fetch and store Pull Requests from Github into our Database
  async getRepositories(ctx, next) {
    let results = [];
    try {
      const repositories = await Github.getRepositories({
        accessToken: "ghu_3xTSizvE3n26aMPnno9IcrbTpSWzv63j9GDi",
        owner: "htmlunit",
        repositoryName: "htmlunit",
      });

      Promise.all(
        repositories.map(async (repository) => {
          const repositoryDataModel = {
            name: repository.name,
            user: {
              id: 23,
            },
            url: repository.url,
            owner: repository.owner.login,
            size: repository.size,
          };
          try {
            const uploadRepository = await strapi.db
              .query("api::repository.repository")
              .create({
                data: repositoryDataModel,
              });
            results.push(uploadRepository);
          } catch (err) {
            console.log(err);
          }
        })
      );
      ctx.body = {
        success: true,
      };
    } catch (err) {
      console.log(err);
      ctx.body = err;
    }
  },

  async getAllCommits(ctx, next) {
    let results = [];
    try {
      const allCommits = await Github.getCommits({
        accessToken: ctx.request.query.accessToken, 
        owner: ctx.request.query.owner,
        repositoryName: ctx.request.query.repositoryName,
        ticketPatten:ctx.request.query.ticketPatten
      });
	  console.log("Fetched allCommits")
      Promise.all(
        allCommits.map(async (commit) => {
          const commitDataModel = {
            commit_id: commit.sha.substring(0,6),
            message: commit.commit.message,
            sha: commit.sha,
            authorid: commit.commit.author.id,
            totalchanges: commit.stats.total,
            totaladditions: commit.stats.additions,
            totaldeletions: commit.stats.deletions,
            branch: commit.branch,
            commitdate: new Date(commit.commit.author.date).toISOString(),
            committedfiles: [1],
            jira_ticket:commit.jira_ticket,
          };
          const uploadCommitDataModel = await strapi.db
            .query("api::commit.commit")
            .create({
              data: commitDataModel,
            });
          console.log("COMMITDATAMODEL IS HERE ----------------",commitDataModel);
          results.push(commitDataModel);
        })
      );
      ctx.body = {
        success: true,
      };
    } catch (err) {
      console.log(err);
      ctx.body = err;
    }
  },

  //To Fetch and store Contributors data from Github into our database
  async getAllContributors(ctx, next) {
    let results = [];
    try {
      const contributors = await Github.getContributors({
        accessToken: "ghu_FovUoeyHujht6zue6nT37OwoUonedu4LRopr",
        owner: "bharatwaaj",
        repositoryName: "ASDCDemoRepository",
      });
      console.log("Contributors Data ->", contributors);
      Promise.all(
        contributors.map(async (contributors) => {
          const contributorsDataModel = {
            name: contributors.login,
            github_id: contributors.login, // HAVE TO DISCUSS WITH BHARAT
            contributions: contributors.contributions,
          };
        })
      );
    } catch (err) {
      console.log(err);
      ctx.body = err;
    }
  },

  // To Fetch and store Pull Requests from Github into our Database
  async getAllPullRequests(ctx, next) {
    let results = [];
    try {
      const pullRequests = await Github.getPullRequests({
        accessToken: "ghu_3xTSizvE3n26aMPnno9IcrbTpSWzv63j9GDi",
        owner: "htmlunit",
        repositoryName: "htmlunit",
      });
      Promise.all(
        pullRequests.map(async (pullRequest) => {
          const pullRequestDataModel = {
            repository: 105,
            username: pullRequest.user.login,
            name: pullRequest.title,
            prID: pullRequest.id,
            createdOn: new Date(pullRequest.created_at).toISOString(),
            stateOpen: pullRequest.state == "closed" ? false : true,
            closedOn: new Date(pullRequest.closed_at).toISOString(),
          };
          // const repository = await strapi.db.query('api::pull-request.pull-request');
          // console.log('repository', repository);
          const uploadPRDataModel = await strapi.db
            .query("api::pull-request.pull-request")
            .create({
              data: pullRequestDataModel,
            });
          results.push(uploadPRDataModel);
        })
      );
      ctx.body = {
        success: true,
      };
    } catch (err) {
      console.log(err);
      ctx.body = err;
    }
  },


  async getAllCommitMessages(ctx, next) {
    let results = [];
    try {
      const commitMessages = await Github.getCommitMessages({
        accessToken: "ghu_FovUoeyHujht6zue6nT37OwoUonedu4LRopr",
        owner: "bharatwaaj",
        repositoryName: "ASDCDemoRepository",
      });
      console.log("Commits Messages Data ->", commitMessages);
      // Promise.all(
      //   contributors.map(async (contributors) => {
      //     const contributorsDataModel = {
      //       name: contributors.login,
      //       github_id: contributors.login, // HAVE TO DISCUSS WITH BHARAT
      //       contributions: contributors.contributions,
      //     };
      //   })
      // );
    } catch (err) {
      console.log(err);
      ctx.body = err;
    }
  },


  async getCommitAccordingJiraTicket(ctx,next){
    const jiraTicket = ctx.request.query.jira_ticket;
    const allCommitAccordingJiraTicket = await strapi.entityService.findMany(
      'api::commit.commit',
      {
        populate : { commit: true },
        fields:[
          "jira_ticket",
        ],
        filters: { commit: { jira_ticket: { $eq: jiraTicket } } }
      }
    );
    console.log("HERE are commits according to Jira tickets::::::::::::::::::::",allCommitAccordingJiraTicket);
  },

}));
