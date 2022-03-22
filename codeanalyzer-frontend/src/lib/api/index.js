import axios from "axios";
import { get, post, put, destroy, fbApiVersion } from "../../config";

const authGithubUser = (accessToken) => {
  return get("/auth/github/callback?access_token=" + accessToken);
};

// This function is used to push the data to database.
const pushData = (data) => {
  console.log(data);
  const response = post("/normal-users", data);
};

// This function will take username from fetched data and
//then get the all repository information from the github api.

const userRepository = async (username) => {
  const response = await get("https://api.github.com/users/tushartushar/repos"); //,'+username+'
  console.log(response.data);
  clean(response);
};

// This function will count the commits made by the user.
const clean = async (response) => {
  const repository = response.data;
  console.log(repository.length);
  //console.log(repository[0].commits_url)
  const url = repository[0].commits_url.slice(0, -6);
  const commits = await get(url);
  console.log(commits.data);
};

export const api = {
  authGithubUser,
  userRepository,
  pushData,
};
