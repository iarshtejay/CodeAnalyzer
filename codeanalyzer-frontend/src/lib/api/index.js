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



const pushRepositoryData = async (info)=>{
    const response = await post("/repositories", info)
}

const createGithubAuths = (info) => {
  return post("/github-auths", info);
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



// This function is used to push the data to database.
const pushData = async (info) => {

  //console.log(info);
  const response = await post("/normal-users", info);
  //console.log(response);
};


// This function will take username from fetched data and
//then get the all repository information from the github api.
const userRepository = async (username) => {
  const response = await get("https://api.github.com/users/tushartushar/repos"); //,'+username+'
  console.log(response.data);
  return response.data
  
};

// This function will count the commits made by the user.
// const clean = async (response) => {
//   const repository = response.data;
//   console.log(repository.length);
//   //console.log(repository[0].commits_url)
//   const url = repository[0].commits_url.slice(0, -6);
//   const commits = await get(url);
//   console.log(commits.data);
// };

export const api = {
  authGithubUser,
  userRepository,
  pushData,
  pushRepositoryData,

  createGithubAuths,

  createAuths,

  getJiraAuthCode,
  getJiraAccessToken,
  getJiraCloudId,
  jiraOAuthFlow,
  // fetchGithubRepo
};
