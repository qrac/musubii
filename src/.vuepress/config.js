module.exports = {
  dest: 'docs',
  base: '/musubii/',
  locales: {
    '/': {
      lang: 'ja',
      title: 'MUSUBii',
      description: 'Simple CSS Framework for JP'
    },
  },
  head: [
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no, viewport-fit=cover' }],
    ['meta', { name: 'format-detection', content: 'telephone=no, email=no, address=no' }],
    ['meta', { name: 'theme-color', content: '#1cb4c7' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:creator', content: 'Qrac_JP' }],
    ['meta', { property: 'og:title', content: 'MUSUBii' }],
    ['meta', { property: 'og:description', content: 'Simple CSS Framework for JP' }],
    ['meta', { property: 'og:url', content: 'https://qrac.github.io/musubii/index.html' }],
    ['meta', { property: 'og:image', content: 'https://qrac.github.io/musubii/img/ogp.png' }],
    ['meta', { property: 'og:site_name', content: 'Qrac GitHub' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['link', { rel: 'apple-touch-icon', href: '/img/apple-touch-icon.png' }],
    ['link', { rel: 'icon', href: '/img/favicon.png' }]
  ],
  serviceWorker: true,
  themeConfig: {
    repo: 'qrac/musubii',
    editLinks: true,
    docsDir: 'src',
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
  }
}
