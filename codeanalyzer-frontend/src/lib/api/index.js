import axios from "axios";
import { get, post, put, destroy, fbApiVersion } from "../../config";

const authGithubUser = (accessToken) => {
  return get("/auth/github/callback?access_token=" + accessToken);
};

// This function is used to push the data to database.
const pushData = async (info) => {
  // const details = {
  //   data: info,
  // };
  console.log(info);
  const response = await post("/normal-users", info);
  console.log(response);
};

// This function will take username from fetched data and
//then get the all repository information from the github api.
const userRepository = async (username) => {
  const response = await get("https://api.github.com/users/tushartushar/repos"); //,'+username+'
  console.log(response.data);
  return response.data;
  //clean(response);
};

// This function will count the commits made by the user.
const clean = async (response) => {};

export const api = {
  authGithubUser,
  userRepository,
  pushData,
};
