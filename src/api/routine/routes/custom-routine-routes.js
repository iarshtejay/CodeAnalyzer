module.exports = {
    routes: [
      { 
        method: 'GET',
        path: '/routine/repository/pullrequests',
        handler: 'routine.getAllPullRequests',
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
      { // Remove after testing
        method: 'GET',
        path: '/routine/repository/getBranches',
        handler: 'routine.getAllBranches'
      }
    ]
}