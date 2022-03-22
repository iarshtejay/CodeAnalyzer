import axios from "axios";
import { get, post, put, destroy } from "../../config";

const authGithubUser = (accessToken) => {
  return get("/auth/github/callback?access_token=" + accessToken);
};

<<<<<<< HEAD
<<<<<<< HEAD
const createAuths = (info, headers) => {
    return post('/auths', info, headers);
}

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


export const api = {
    authGithubUser,
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
=======
  authGithubUser,
  createGithubAuths,
  // fetchGithubRepo
};
>>>>>>> 93003fc4 (fixing compilation issues)
=======
>>>>>>> e40aa0f8 (Repository Commits V1)
