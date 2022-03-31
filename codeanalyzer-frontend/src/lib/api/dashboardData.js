const { api } = require(".");

export const getRepositoryData = async ()=>{
    return await api.getRepoData();
}

