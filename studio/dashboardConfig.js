export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
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
                  buildHookId: '5d26407672a1763de4aeec6d',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landingpage-studio',
                  apiId: '446bd990-dfda-4ae4-9735-b3b2dfd952ab'
                },
                {
                  buildHookId: '5d26407672a1760805aeec97',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landingpage',
                  apiId: '31ce6b79-4314-4477-89b6-6e12ae5e77e3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ryanmacolino123/sanity-nextjs-landingpage',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landingpage.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
