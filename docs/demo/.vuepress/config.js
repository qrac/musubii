module.exports = {
  base: '/musubii/',
  serviceWorker: true,
  ga: 'UA-40305123-17',
  locales: {
    '/': {
      lang: 'ja',
      title: 'MUSUBii',
      description: 'Simple CSS Framework for JP'
    }
  },
  head: [
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no, viewport-fit=cover' }],
    ['meta', { name: 'format-detection', content: 'telephone=no, email=no, address=no' }],
    ['meta', { name: 'theme-color', content: '#1cb4c7' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:creator', content: 'Qrac_JP' }],
    ['meta', { property: 'og:title', content: 'MUSUBii' }],
    ['meta', { property: 'og:description', content: 'Simple CSS Framework for JP' }],
    ['meta', { property: 'og:url', content: 'https://qrac.github.io/musubii/index.html' }],
    ['meta', { property: 'og:image', content: 'https://qrac.github.io/musubii/img/ogp.png' }],
    ['meta', { property: 'og:site_name', content: 'Qrac GitHub' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['link', { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.1.0/css/all.css' }],
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' }],
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Nunito:400,700,900' }],
    ['link', { rel: 'stylesheet', href: '/css/musubii.min.css' }],
    ['link', { rel: 'apple-touch-icon', href: '/img/apple-touch-icon.png' }],
    ['link', { rel: 'shortcut icon', href: '/img/favicon.png' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }]
  ],
  themeConfig: {
    repo: 'qrac/musubii',
    editLinks: true,
    lastUpdated: 'Last Updated',
    docsDir: 'docs/demo',
    algolia: {
      apiKey: 'dbc9f9b21868cf3495822c37a89482b8',
      indexName: 'musubii'
    },
    logo: '/img/logo-set-yoko-musubii.svg',
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
            'customize',
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
          title: 'Module',
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
