<<<<<<< HEAD
import axios from "axios";
import { get, post, put, destroy, fbApiVersion } from "../../config";
=======
import { get, post } from "../../config";
import {
  getJiraAccessToken,
  getJiraAuthCode,
  getJiraCloudId,
  jiraOAuthFlow,
} from "./jira";
>>>>>>> 59d4ff0c55048993f875a4e04a7c0843d6bcb899

const authGithubUser = (accessToken) => {
  return get("/auth/github/callback?access_token=" + accessToken);
};

<<<<<<< HEAD

const pushRepositoryData = async (info)=>{
    const response = await post("/repositories", info)
}
=======
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
>>>>>>> 59d4ff0c55048993f875a4e04a7c0843d6bcb899


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
<<<<<<< HEAD
  userRepository,
  pushData,
  pushRepositoryData
=======
  createGithubAuths,
  getJiraAuthCode,
  getJiraAccessToken,
  getJiraCloudId,
  jiraOAuthFlow,
  // fetchGithubRepo
>>>>>>> 59d4ff0c55048993f875a4e04a7c0843d6bcb899
};
