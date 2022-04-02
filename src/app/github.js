const Config = require('../config/config');
const { Octokit } = require("@octokit/core");
const { paginateRest, composePaginateRest } = require("@octokit/plugin-paginate-rest");

/**
 * @author Bharatwaaj Shankar
 * @param {user, repository, accessToken} info 
 * @returns Branches
 */
exports.getBranches = async (info) => {
    const MyOctokit = Octokit.plugin(paginateRest);
    const octokit = new MyOctokit({auth: info.accessToken});
    return await octokit.paginate('GET /repos/{owner}/{repo}/branches', {
        owner: info.owner,
        repo: info.repositoryName
    });
};

/**
 * @author Bharatwaaj Shankar
 * @param {user, repository, accessToken} info 
 * @returns Repositories
 */
exports.getRepositories = async (info) => {
    const MyOctokit = Octokit.plugin(paginateRest);
    const octokit = new MyOctokit({auth: info.accessToken});
    return await octokit.paginate('GET /users/{owner}/repos', {
        owner: info.owner
    });
};

/**
 * @author Bharatwaaj Shankar
 * @param {user, repository, accessToken} info 
 * @returns PullRequests
 */
 exports.getPullRequests = async (info) => {
    const MyOctokit = Octokit.plugin(paginateRest);
    const octokit = new MyOctokit({auth: info.accessToken});
    const pullRequests = await octokit.paginate('GET /repos/{owner}/{repo}/pulls?state={state}', {
        owner: info.owner,
        repo: info.repositoryName,
        state: info.state || 'all'
    });
    return pullRequests;
};

/**
 * @author Bharatwaaj Shankar
 * @param {query} info 
 * @returns SearchResults
 */
 exports.searchUsingQuery = async (info) => {
    const MyOctokit = Octokit.plugin(paginateRest);
    const octokit = new MyOctokit({auth: info.accessToken});
    return await octokit.paginate('GET /search/issues?q={query}', {
        query: info.query
    });
};

/** 
* @author Kishan Savaliya
* @param {login, contributions, accessToken} info
* @returns contributors 
*/
exports.getContributors = async (info) => {
    const MyOctokit = Octokit.plugin(paginateRest);
    const octokit = new MyOctokit({auth:info.accessToken});
    
    return await octokit.paginate('GET /repos/{owner}/{repo}/contributors',{
        owner : 'bharatwaaj',
        repo: 'ASDCDemoRepository'
    });
};


/**
 * @author Kavya Raval
 * @param { user, repository, accessToken } info
 * @returns messages
 */
 exports.getCommitMessages = async (info) => {
    const MyOctokit = Octokit.plugin(paginateRest);
    const octokit = new MyOctokit({auth:info.accessToken});


    const allBranches = await this.getBranches(info)
                                    .then(branches => {
                                        const allBranches = [];
                                        for(const branch of branches){
                                            allBranches.push(branch.name);
                                        }
                                        return allBranches;
                                    });
    
    const getAllCommitSha = async (allBranches) =>{
        const allCommitSha = [];
        for(const branch of allBranches){
            const data = await octokit.paginate('GET /repos/{owner}/{repo}/commits?sha={branch_name}',{
                owner: info.owner,
                repo: info.repositoryName,
                branch_name: branch
            });

            for(const commit of data){
                allCommitSha.push(commit.sha)
            }

        }
        return allCommitSha;
    }

    const getAllCommitMessage = async (allCommitsSha) =>{
        const allCommitMessage = [];
        for(const sha of allCommitsSha){
            const data = await octokit.paginate('GET /repos/{owner}/{repo}/commits/{commit_sha}',{
                owner: info.owner,
                repo: info.repositoryName,
                commit_sha: sha
            });

            for(const message of data){
                allCommitMessage.push(message)
            }
        }
    } 

    

    const allCommitSha = await getAllCommitSha(allBranches);
    const allCommitMessage = await getAllCommitMessage(allCommitSha)
    return allCommitMessage;                                


    // return await octokit.paginate('GET /repos/{owner}/{repo}/commits',{
    //     owner : 'Ferin79',
    //     repo: 'Hostel-Management-System-Laravel'
    // });
}
