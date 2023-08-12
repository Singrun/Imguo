/**
 * @type {import('vitepress').UserConfig}
 */

const nav = require('./config/nav.js')
const sidebar = require('./config/sidebar.js')

const config = {
    // 网站标题
    lang:'zh-CN',
    title: '理想國',
    titleTemplate: '热爱可抵岁月漫长',
    description: 'personal site',
    head: [
        ['meta', { name: 'keywords', content: '桂林,MBA,Imaginist Studio' }],
        ['link', { rel: 'icon', href: '/favicon.ico' }]
    ],
    lastUpdated: false,
    ignoreDeadLinks: true,
    markdown: {
        theme: 'material-theme-palenight',
        lineNumbers: true
    },
        themeConfig: {
        logo: {
            light: "/avatar-light.svg",
            dark: "/avatar-dark.svg"
        },
        // 顶部右上角导航
        nav,
        // 左侧导航
        sidebar,
        //丝滑滚动
        smoothScroll: true,
        // 启用时间线
        editLinks: true,
        //在git上编辑提示文字
        editLinkText: '编辑此页',
        // 获取每个文件最后一次 git 提交的 UNIX 时间戳(ms)，同时它将以合适的日期格式显示在每一页的底部
        lastUpdated: '上次更新',
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2022-PRESENT  Imaginist Studio'
        },
        docFooter: {
            prev: '上一页',
            next: '下一页'
        },
    },
}

export default config;