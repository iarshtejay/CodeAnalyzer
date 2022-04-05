import { get, post } from "../../config";
import {
  getJiraAccessToken,
  getJiraAuthCode,
  getJiraCloudId,
  jiraOAuthFlow,
} from "./jira";

const bearerToken = localStorage.getItem("token");

const authGithubUser = (accessToken) => {
  return get("/auth/github/callback?access_token=" + accessToken);
};

const createAuths = (info, headers) => {
  return post("/github-auths?populate=%2A", info, headers);
};

const getAllRepositories = (info, headers) => {
  return get("/repositories", info, headers);
};

const getRepositoriesCount = (info, headers) => {
  return get("/repository/count", info, headers);
};

const getPRMessageCount = (info,headers) =>{
  const data = get("")
}

const lengthOfFetchedData = async (url) => {
  return await get(url).length;
};

const postRepos = (info, headers) => {
  return post("/repositories", info, headers);
};

const getUserRepos = (info) => {
  return get(`/repositories?populate=%2A&filters[user][id][$eq]=${info}`, {
    headers: { Authorization: `Bearer ${bearerToken}` },
  });
};
const getPullRequestFrequencyPerUser = (info, headers) => {
  return get(
    `/pull-request/avgtimediff?accessToken=${info.accessToken}&contributor=${info.contributor}`,
    null,
    headers
  );
};

const getRepositories = (headers) => {
  return get(`/repositories`, null, headers);
};

const getPullRequests = (headers) => {
  return get(`/pull-request`, null, headers);
};

const getPullRequestsUniqueUsers = (info, headers) => {
  return get(
    `/pull-request/getUsers?repository=${info.repository}`,
    null,
    headers
  );
};

const getContributorsCount = (info, headers) => {
  return get("/contributor/count", info, headers);
};

const getCommmitCountsByBranch = (info, headers) => {
  return get(
    `/commit/getCommmitCountsByBranch?repositoryId=${info.repository}`,
    null,
    headers
  );
};

const getCommitsFrequencyByRepository = (info, headers) => {
  return get(
    `/commit/getAvgTimeDifferenceBetweenCommits?repository=${info.repository}`,
    null,
    headers
  );
};

const getContributorsForRepo = (info, headers) => {
  console.log("infooooooo", info);
  return get(`/contributors?filters[repository][id][$eq]=${info.repoId}`);
};

const getPullRequestsCountsByBranch = (info, headers) => {
  return get(
    `/pull-request/getPullRequestsCountsByBranch?repositoryId=${info.repository}`,
    null,
    headers
  );
};

const getAveragePR = (info, headers) => {
  const a = get(`/pull-request/averageCount/?repositoryId=${info.repository}`);
  console.log(a,"<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<");
}
const getCommitCountPerHour = (info, headers) => {
  console.log("info per hour", info);
  return get(`/commit/getCommitsByHour?repositoryId=${info.repositoryId}`);
};

const getUserLanguageEffort = (info, headers) => {
  console.log("info user language effort", info);
  return get(`/commit/getUserLanguageEffort?repositoryId=${info.repositoryId}`);
};

const getCommitWithJiraTicket = (info,headers) => {
  return get(`/routine/commit/getCommitAccordingJiraTicket?jiraTicket=${info.jiraTicket}`);
}

const getCommitWithoutJiraTicket = (info,headers) => {
  return get(`/routine/commit/getCommitWithoutJiraTicket`);
}

export const api = {
  authGithubUser,
  createAuths,
  getJiraAuthCode,
  getContributorsForRepo,
  getJiraAccessToken,
  getJiraCloudId,
  jiraOAuthFlow,
  postRepos,
  getUserRepos,
  getPullRequestFrequencyPerUser,
  getRepositories,
  getPullRequests,
  getPullRequestsUniqueUsers,
  getRepositoriesCount,
  getContributorsCount,
  getCommmitCountsByBranch,
  getCommitsFrequencyByRepository,
  getPullRequestsCountsByBranch,
  getAveragePR,
  getCommitCountPerHour,
  getUserLanguageEffort,
  getCommitWithJiraTicket,
  getCommitWithoutJiraTicket
  // fetchGithubRepo
};
