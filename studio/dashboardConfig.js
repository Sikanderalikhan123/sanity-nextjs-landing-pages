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
                  buildHookId: '5ddb791785fa71258649ae2f',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-ex3xazfu',
                  apiId: 'da2f0ee8-8d04-4b45-8c47-15c8b53dbaef'
                },
                {
                  buildHookId: '5ddb791705ea28070196d1c8',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-zorwahu5',
                  apiId: 'c01a5131-4359-4d08-ac91-2657f913d517'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Sikanderalikhan123/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-zorwahu5.netlify.com', category: 'apps'}
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
