import { get, post } from "../../config";
import {
  getJiraAccessToken,
  getJiraAuthCode,
  getJiraCloudId,
  jiraOAuthFlow,
} from "./jira";

const authGithubUser = (accessToken) => {
  return get("/auth/github/callback?access_token=" + accessToken);
};

const createAuths = (info, headers) => {
    return post('/github-auths', info, headers);
}

// const fetchGithubRepo = async (username)=>{
//     const url = "https://api.github.com/users/tushartushar/repos";

//     const response = await get(url)
//     //console.log(response.data)
//     cleanData(response.data)
// }

const lengthOfFetchedData = async (url) => {
  return await get(url).length;
};

export const api = {
  authGithubUser,
  createAuths,
  getJiraAuthCode,
  getJiraAccessToken,
  getJiraCloudId,
  jiraOAuthFlow,
  // fetchGithubRepo
};
