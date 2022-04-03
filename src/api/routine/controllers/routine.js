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
			console.log("repositories", repositories);
			Promise.all(
				repositories.map(async (repository) => {
					const repositoryDataModel = {
						name: repository.name,
						user: {
							"id": 23
						},
						url: repository.url,
						owner: repository.owner.login,
						size: repository.size,
					};
					try{
						console.log('Repo', repositoryDataModel);
						const uploadRepository = await strapi.db
						.query("api::repository.repository")
						.create({
							data: repositoryDataModel,
						});
						results.push(uploadRepository);
					} catch(err) {
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

    // To Fetch and store Pull Requests from Github into our Database
    async getAllPullRequests(ctx, next) {
      
        let results = [];
        try {
          const pullRequests = await Github.getPullRequests({
            accessToken: 'ghu_VuJfKpr4FqGrHBTWldAtzuG2qKCUaP1Xypzo',
            owner: 'htmlunit',  
            repositoryName: 'htmlunit'
          });
          console.log('PR DATA -> ', pullRequests);
          Promise.all(pullRequests.map(async pullRequest => {
            const pullRequestDataModel = { 
              username: pullRequest.user.login,
              name: pullRequest.title,
              prID: pullRequest.id,
              createdOn: new Date(pullRequest.created_at).toISOString(),
              stateOpen: pullRequest.state == 'closed'?false:true,
              closedOn: new Date(pullRequest.closed_at).toISOString()
            }
            const uploadPRDataModel = await strapi.db.query('api::pull-request.pull-request').create({
              data: pullRequestDataModel
            });
            results.push(uploadPRDataModel);
          }));
          ctx.body = results;
        } catch (err) {
          console.log(err);
          ctx.body = err;
        }
    },

    //To Fetch and store Contributors data from Github into our database
    async getAllContributors(ctx,next) {
      let results =[];
      try{
        const contributors = await Github.getContributors({
          accessToken: 'ghu_FovUoeyHujht6zue6nT37OwoUonedu4LRopr',
          login: 'bharatwaaj',
          repositoryName: 'ASDCDemoRepository'
        });
        console.log('Contributors Data ->', contributors);
        Promise.all(contributors.map(async contributors =>{
          const contributorsDataModel = {
            name: contributors.login,
            github_id:contributors.login,  // HAVE TO DISCUSS WITH BHARAT
            contributions: contributors.contributions,
          }
          const uploadContributorsDataModel = await strapi.db.query('api::contributor.contributor').create({
            data:contributorsDataModel
          })
          console.log("CONTRIBUTORS--->", uploadContributorsDataModel);
          results.push(uploadContributorsDataModel);
        } ));
        ctx.body = results;
      }  catch (err) {
          console.log(err);
          ctx.body = err;
      }
    },


    //To Fetch and store commits messages from Github into our database UserStory no.7&8
    async getAllCommitMessages(ctx,next) {
      let results =[]
      try{
        const commitMessages = await Github.getCommitMessages({
          accessToken:'ghu_fAcltGI8KRC5SRT7fumJDcBQtYZbON2P8Xg1',
          owner: 'Ferin79',
          repositoryName: 'Hostel-Management-System-Laravel'
        });
        console.log('Commit Messages -->', commitMessages);
        Promise.all(commitMessages.map(async commitMessages =>{
          const commitMessagesDataModel = {
            commit_id:commitMessages.sha,
            message:commitMessages.commit.message,
            sha:commitMessages.sha,
            user:commitMessages.author.login
          }
          const uploadcommitMessages = await strapi.db.query('api::commit.commit').create({
            data:contributorsDataModel
          })
          console.log("CONTRIBUTORS--->",uploadcommitMessages );
          results.push(uploadcommitMessages);
        } ));
        ctx.body = results;
      } catch (err) {
        console.log(err);
        ctx.body = err;
      }
    },

    //Just for Testing.....Don't forget to remove
    async getAllBranches(ctx,next) {
      let results =[];
      try{
        const contributors = await Github.getBranches({
          accessToken: 'ghu_07t718GBfo5VwEakbmeE7DOUrB2g1u0Ot2yk',
          owner: 'vercel',
          repositoryName: 'next.js'
        });
        console.log('Contributors Data ->', contributors);
        Promise.all(contributors.map(async contributors =>{
          const contributorsDataModel = {
            name: contributors.login,
            github_id:contributors.login,  // HAVE TO DISCUSS WITH BHARAT
            contributions: contributors.contributions,
          }
          const uploadContributorsDataModel = await strapi.db.query('api::contributor.contributor').create({
            data:contributorsDataModel
          })
          console.log("CONTRIBUTORS--->", uploadContributorsDataModel);
         // results.push(uploadContributorsDataModel);
        } ));
        ctx.body = results;
      }  catch (err) {
          console.log(err);
          ctx.body = err;
      }
    },
  }));
