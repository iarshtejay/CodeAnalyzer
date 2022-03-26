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

const createGithubAuths = (info) => {
  return post("/github-auths", info);
};

// const fetchGithubRepo = async (username)=>{
//     const url = "https://api.github.com/users/tushartushar/repos";

//     const response = await get(url)
//     //console.log(response.data)
//     cleanData(response.data)
// }

const lengthOfFetchedData = async (url) => {
  return await get(url).length;
};

// Fetching commits data
const fetchCommit = async (url)=>{
  const response = await get(url)
  return response.data
}




// This function will push the data of registered user to Database
const pushData = (data) => {
  console.log(data);
  const response = post("/normal-users", data);
  console.log(response);
};

// This function will take username from fetched data and
//then get the all repository information from the github api.
const userRepository = async (username) => {
  const response = await get("https://api.github.com/users/tushartushar/repos"); //,'+username+'
  return response.data
};



export const api = {
  authGithubUser,
  createGithubAuths,
  getJiraAuthCode,
  getJiraAccessToken,
  getJiraCloudId,
  jiraOAuthFlow,
  // fetchGithubRepo
};
