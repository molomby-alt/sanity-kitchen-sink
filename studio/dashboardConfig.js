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
                  buildHookId: '60179bf1970bcf7b0a4a2727',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-wi75bfqv',
                  apiId: '2dec80ad-113f-41c5-bc15-9194f7a8a530'
                },
                {
                  buildHookId: '60179bf1970bcf827c4a24b9',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-et6j2tsx',
                  apiId: '52186bf4-4813-4a1c-ab3f-51a2c56aa95c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/molomby-alt/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-et6j2tsx.netlify.app', category: 'apps'}
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
