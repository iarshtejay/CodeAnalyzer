import axios from 'axios'
import { get, post, put, destroy } from '../../config'

const authGithubUser = (accessToken) => {
    return get('/auth/github/callback?access_token=' + accessToken)
}

const createAuths = (info, headers) => {
    return post('/auths', info, headers);
}

export const api = {
    authGithubUser,
    createAuths
}