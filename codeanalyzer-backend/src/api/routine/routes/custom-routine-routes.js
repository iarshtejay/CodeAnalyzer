module.exports = {
    routes: [
      { 
        method: 'GET',
        path: '/routine/repositories',
        handler: 'routine.getRepositories',
      },
      { 
        method: 'GET',
        path: '/routine/repository/pullrequests',
        handler: 'routine.getAllPullRequests',
      },
      { 
        method: 'GET',
        path: '/routine/repository/commits',
        handler: 'routine.getAllCommits',
      },
      {
        method: 'GET',
        path: '/routine/repository/contributors',
        handler: 'routine.getAllContributors',
      },
      {
        method: 'GET',
        path: '/routine/repository/commitMessages',
        handler: 'routine.getAllCommitMessages'
      },
      {
        method: 'GET',
        path: '/routine/commit/getCommitAccordingJiraTicket',
        handler: 'routine.getCommitAccordingJiraTicket'
      },
      {
        method: 'GET',
        path: '/routine/commit/getCommitWithoutJiraTicket',
        handler: 'routine.getCommitWithoutJiraTicket'
      },
    ]
}