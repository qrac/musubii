const base = process.env.GH ? '/vuepress/' : '/'

module.exports = {
  title: 'MUSUBii',
  description: 'Simple CSS Framework for JP',
  dest: 'vuepress',
  base: '/musubii/',
  head: [
    ['link', { rel: 'icon', href: `/favicon.png` }]
  ],
  serviceWorker: true,
  themeConfig: {
    repo: 'qrac/musubii',
    editLinks: true,
    docsDir: 'docs',
    nav: [
      {
        text: 'Getting Started',
        link: '/getting-started/',
      },
      {
        text: 'Documentation',
        link: '/documentation/'
      },
      {
        text: 'Libraries',
        link: '/libraries/'
      }
    ],
    sidebar: {
      '/getting-started/': [
        {
          title: 'Getting Started',
          collapsable: false,
          children: [
            '',
            'use',
            'support'
          ]
        },
      ],
      '/documentation/': [
        {
          title: 'Documentation',
          collapsable: false,
          children: [
            ''
          ]
        },
        {
          title: 'Layout',
          collapsable: false,
          children: [
            'section',
            'space',
            'grid'
          ]
        },
        {
          title: 'Mudule',
          collapsable: false,
          children: [
            'heading',
            'text',
            'button',
            'list',
            'table',
            'form',
            'icon',
            'alert',
            'wysiwyg'
          ]
        },
        {
          title: 'Utility',
          collapsable: false,
          children: [
            'size',
            'deco',
            'display',
            'clearfix'
          ]
        }
      ]
    }
  },
  chainWebpack: config => {
    config.module
      .rule('pug')
      .test(/\.pug$/)
      .use('pug-plain-loader')
        .loader('pug-plain-loader')
        .end()
  }
}
