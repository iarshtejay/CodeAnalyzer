<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 93003fc4 (fixing compilation issues)
import axios from "axios";
import { get, post, put, destroy } from "../../config";
=======
import { get, post } from "../../config";
import {
  getJiraAccessToken,
  getJiraAuthCode,
  getJiraCloudId,
  jiraOAuthFlow,
} from "./jira";
=======
import axios from "axios";
import { get, post, put, destroy } from "../../config";
>>>>>>> 3440f513 (fixing compilation issues)
>>>>>>> 0b7de6d9 (fixing compilation issues)

const authGithubUser = (accessToken) => {
  return get("/auth/github/callback?access_token=" + accessToken);
};
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
const createAuths = (info, headers) => {
    return post('/auths', info, headers);
}
=======
>>>>>>> 93003fc4 (fixing compilation issues)

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> a6efc26a (fixing mc)
// const fetchGithubRepo = async (username)=>{
//     const url = "https://api.github.com/users/tushartushar/repos";

//     const response = await get(url)
//     //console.log(response.data)
//     cleanData(response.data)
// }

const lengthOfFetchedData = async (url) => {
  return await get(url).length;
};
<<<<<<< HEAD
=======
const createAuths = (info, headers) => {
    return post('/auths', info, headers);
}
>>>>>>> e40aa0f8 (Repository Commits V1)
=======
>>>>>>> a6efc26a (fixing mc)

=======
import {get, post} from "../../config";
import {getJiraAccessToken, getJiraAuthCode, getJiraCloudId, jiraOAuthFlow} from './jira'

const authGithubUser = (accessToken) => {
    return get("/auth/github/callback?access_token=" + accessToken);
};

const createGithubAuths = (info) => {
<<<<<<< HEAD
    return post("/github-auths", info);
};
>>>>>>> 46eb48e9 (fixing mc)

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
<<<<<<< HEAD
    createAuths
}
<<<<<<< HEAD
=======
const fetchGithubRepo = async (username)=>{
    const url = "https://api.github.com/users/tushartushar/repos";
    
    const response = await get(url)
    //console.log(response.data)
    cleanData(response.data)
}
=======
const createGithubAuths = (info) => {
  return post("/github-auths", info);
};

// const fetchGithubRepo = async (username)=>{
//     const url = "https://api.github.com/users/tushartushar/repos";
>>>>>>> 93003fc4 (fixing compilation issues)

//     const response = await get(url)
//     //console.log(response.data)
//     cleanData(response.data)
// }

=======
  return post("/github-auths", info);
};

// const fetchGithubRepo = async (username)=>{
//     const url = "https://api.github.com/users/tushartushar/repos";

//     const response = await get(url)
//     //console.log(response.data)
//     cleanData(response.data)
// }

>>>>>>> 93003fc4 (fixing compilation issues)
const lengthOfFetchedData = async (url) => {
  return await get(url).length;
};

export const api = {
<<<<<<< HEAD
<<<<<<< HEAD
    authGithubUser,
    createGithubAuths,
<<<<<<< HEAD
    fetchGithubRepo
}
>>>>>>> 114bcba6 (Registration changes)
=======
=======
>>>>>>> 93003fc4 (fixing compilation issues)
  authGithubUser,
  createGithubAuths,
  // fetchGithubRepo
};
<<<<<<< HEAD
>>>>>>> 93003fc4 (fixing compilation issues)
=======
>>>>>>> e40aa0f8 (Repository Commits V1)
=======
    createGithubAuths,
    fetchGithubRepo
}
>>>>>>> 114bcba6 (Registration changes)
=======
    getJiraAuthCode,
    getJiraAccessToken,
    getJiraCloudId,
    jiraOAuthFlow
    // fetchGithubRepo
};
>>>>>>> 46eb48e9 (fixing mc)
=======
>>>>>>> 93003fc4 (fixing compilation issues)
=======
=======
>>>>>>> 0b7de6d9 (fixing compilation issues)
=======
>>>>>>> ad877c1a (Repository Commits V1)
const createAuths = (info, headers) => {
    return post('/auths', info, headers);
}

<<<<<<< HEAD
// const fetchGithubRepo = async (username)=>{
//     const url = "https://api.github.com/users/tushartushar/repos";

//     const response = await get(url)
//     //console.log(response.data)
//     cleanData(response.data)
// }

const lengthOfFetchedData = async (url) => {
  return await get(url).length;
};
=======
const createAuths = (info, headers) => {
    return post('/auths', info, headers);
}
>>>>>>> e40aa0f8 (Repository Commits V1)


export const api = {
    authGithubUser,
    createAuths
}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> b5b5e658 (Repository Commits V1)
=======
=======
>>>>>>> ad877c1a (Repository Commits V1)
=======
const fetchGithubRepo = async (username)=>{
    const url = "https://api.github.com/users/tushartushar/repos";
    
    const response = await get(url)
    //console.log(response.data)
    cleanData(response.data)
}
=======
const createGithubAuths = (info) => {
  return post("/github-auths", info);
};

// const fetchGithubRepo = async (username)=>{
//     const url = "https://api.github.com/users/tushartushar/repos";
>>>>>>> 93003fc4 (fixing compilation issues)

//     const response = await get(url)
//     //console.log(response.data)
//     cleanData(response.data)
// }

const lengthOfFetchedData = async (url) => {
  return await get(url).length;
};

export const api = {
<<<<<<< HEAD
    authGithubUser,
    createGithubAuths,
    fetchGithubRepo
}
>>>>>>> 114bcba6 (Registration changes)
<<<<<<< HEAD
>>>>>>> 7ac276cc (Registration changes)
=======
=======
  authGithubUser,
  createGithubAuths,
  // fetchGithubRepo
};
>>>>>>> 93003fc4 (fixing compilation issues)
<<<<<<< HEAD
>>>>>>> 0b7de6d9 (fixing compilation issues)
=======
=======
>>>>>>> e40aa0f8 (Repository Commits V1)
>>>>>>> ad877c1a (Repository Commits V1)
