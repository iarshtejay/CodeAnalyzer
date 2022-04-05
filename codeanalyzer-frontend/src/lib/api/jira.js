import {get, post} from "../../config";

export const getJiraAuthCode = () => {
    const firstStepCode = new URLSearchParams(window.location.search).get("code")
    if (!firstStepCode) {
        window.location.replace(
            // eslint-disable-next-line no-template-curly-in-string
            "https://auth.atlassian.com/authorize?audience=api.atlassian.com&client_id=Z3k7dkCO74CQAr0zutejao8PnePKGP32&scope=read%3Ajira-user%20read%3Ajira-work&redirect_uri=http%3A%2F%2F127.0.0.1%3A3000%2Fadmin%2Findex&state=${YOUR_USER_BOUND_VALUE}&response_type=code&prompt=consent"
        );
    }
    return firstStepCode
}

export const getJiraAccessToken = async (jiraCode) => {
    const res = await post("https://auth.atlassian.com/oauth/token", {
        grant_type: "authorization_code",
        client_id: "i3xw91FFYBjOowYsu2dxRvYSi8aUPYDR",
        client_secret:
            "lqUhvU8tz4CU4tmB5IM_fjyub6bTlMonkVKYRHOThxxRsStBlrlUIrbS37BrM484",
        code: jiraCode,
        redirect_uri: "http://localhost:3000/admin/repositories",
    });
    console.log("Access token received")
    return {accessToken: res.data.access_token || "", refreshToken: res.data.refresh_token || ""}
}

export const getJiraCloudId = async (accessToken) => {
    console.log("Cloud ID", accessToken)
    const res = await get(
        "https://api.atlassian.com/oauth/token/accessible-resources",
        {
            headers: {
                Authorization: `Bearer ${accessToken}`,
                Accept: "application/json",
            },
        }
    );
    console.log("Cloud ID received")
    return {cloudId: res.data[0].id || ""}
}

export const jiraOAuthFlow = async () => {
    const jiraCode = getJiraAuthCode()
    const {accessToken, refreshToken} = await getJiraAccessToken(jiraCode)
    console.log(accessToken, refreshToken);

    const {cloudId} = await getJiraCloudId(accessToken)

    const newJiraAuth = {
        authCode: jiraCode,
        accessToken: accessToken,
        cloudId: cloudId,
        refreshToken: refreshToken,
        kind: "Jira"
    };

    // await api.createAuths(newJiraAuth, {'Authorization': `Bearer ${localStorage.getItem('token')}`})
    return newJiraAuth
};


export default {getJiraAuthCode, getJiraAccessToken, getJiraCloudId, jiraOAuthFlow}