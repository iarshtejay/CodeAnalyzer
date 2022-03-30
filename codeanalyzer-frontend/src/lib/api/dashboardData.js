const { api } = require(".");


const jwt = localStorage.getItem("token");


export const getRepositoryData = async ()=>{
    return await api.getRepoData();
}