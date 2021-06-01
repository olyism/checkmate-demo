export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60b636657c6044d1779a5664',
                  title: 'Sanity Studio',
                  name: 'checkmate-demo-studio',
                  apiId: 'ed5c0416-8415-43ff-a7d4-da2e0bb037c2'
                },
                {
                  buildHookId: '60b63665c99fd944bb6e3170',
                  title: 'Blog Website',
                  name: 'checkmate-demo-web',
                  apiId: 'e9eb391a-8140-44a4-8302-6b129e1a38d8'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/olyism/checkmate-demo',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://checkmate-demo-web.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
