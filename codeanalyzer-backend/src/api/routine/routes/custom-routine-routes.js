module.exports = {
    routes: [
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
        path: '/routine/repository/getCommitAccordingJiraTicket',
        handler: 'routine.getAllCommitMessages'
      },
    ]
}