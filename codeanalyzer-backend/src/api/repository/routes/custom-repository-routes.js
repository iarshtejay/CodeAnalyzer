module.exports = {
    routes: [
      { 
        method: 'GET',
        path: '/repository/count',
        handler: 'repository.getCounts',
        config: {
          auth: false,
        },
      },
      { 
        method: 'GET',
        path: '/repository/repoId',
        handler: 'repository.getRepoId',
        config: {
          auth: false,
        },
      }
    ]
}