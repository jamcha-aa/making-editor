const summary = require('./summary.js');

module.exports = {
    title: 'エディタをつくろう',
    description: '編集を始 (し) てね！',
    locales: {
        '/': {
            lang: 'ja'
        }
    },
    meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    themeConfig: {
        nav: [
            { text: 'ホーム', link: '/' },
            { text: '作品一覧', link: 'https://jamcha-aa.github.io/About/' },
            { text: 'GitHub', link: 'https://github.com/jamcha-aa/making-editor/' }
        ],
        sidebar: {
            '/article/': summary.genSidebarConfig('目次')
        },
        search: false,
    },
    head: [
        ['link', { rel: 'icon', type: 'image/png', href: '/img/favicon.png' }],
        ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Noto+Sans+JP&display=swap&subset=japanese' }]
    ],
    base: '/making-editor/',
    dest: '.vuepress/dist',
    plugins: ['@vuepress/back-to-top']
}
