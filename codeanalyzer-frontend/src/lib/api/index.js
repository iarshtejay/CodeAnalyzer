import axios from "axios";
import { get, post, put, destroy, fbApiVersion } from "../../config";

const authGithubUser = (accessToken) => {
  return get("/auth/github/callback?access_token=" + accessToken);
};


// To post data to commits table
const pushCommitData = async (info)=> {
  const response = await post("/api/commits",info)
}

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
  userRepository,
  pushData,
  pushCommitData,
  fetchCommit
};
