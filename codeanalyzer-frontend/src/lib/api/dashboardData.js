const { api } = require(".");


const jwt = localStorage.getItem("token");


const getRepositoryData = async ()=>{
    const data = await api.getRepoData();
}