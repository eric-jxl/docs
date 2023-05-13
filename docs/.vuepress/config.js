module.exports = {
    title: 'Eric\'s Docs',
    description: 'Vue 驱动的静态网站生成器',
    port:9000,
    dest: './dist',
    smoothScroll: true,
    head: [
        ['link', { rel: 'icon', href: '/vim-go.png' }]
    ],
    themeConfig: {
        logo: '/vim-go.png',
        lastUpdated: 'Last Updated', // string | boolean
        repo: 'https://github.com/eric-jxl/docs.git',
        docsDir: 'docs/.vuepress/dist',
        docsBranch: 'main',
        //导航栏
        nav: [
            { text: 'Home', link: '/' },

            { text: 'Guide',
                items:[
                {'text':'超高清能力',items:[
                    {'text':'交接文档',link: '/超高清能力/交接文档' ,target:'_self'},
                    {'text':'搬迁文档',link: '/超高清能力/搬迁组件说明文档' ,target:'_self'},
                    {'text':'Dvadmin接口',link: '/超高清能力/Dvadmin 接口' ,target:'_self'},
                    {'text':'RD报告接口文档',link: '/超高清能力/RD报告接口文档' ,target:'_self'},
                ]},
                {'text':'运维部署',
                items:[{'text':'Docker',link:'/运维部署/Docker',target:'_self'}]},
                    
                {'text':'面经',
                items:[{'text':'面经',link:'/面试/面经',target:'_self'}]},

                {'text':'odoo',
                items:[{'text':'odoo核心业务',link:'/odoo/odoo核心业务',target:'_self'}]},
                    
                ],

            },

            { text: 'Github', link: 'https://github.com/eric-jxl/' ,target:'_blank'},
        ],

        // 侧边栏
        sidebar:[
            {
                title: '超高清能力',           // 必要的
                // path: '/超高清能力/Dvadmin 接口',         // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                collapsable: false,          // 可选的, 默认值是 true, 展开
                sidebarDepth: 1,           // 可选的, 默认值是 1
                children: [
                    '/超高清能力/搬迁组件说明文档',
                    '/超高清能力/交接文档',
                    '/超高清能力/DTing VQMT VQA部署常见问题',
                    '/超高清能力/Dvadmin 接口',
                    '/超高清能力/RD报告接口文档',

                    
                ]
            },
            {
                title: '运维部署',           // 必要的
                collapsable: false,          // 可选的, 默认值是 true, 展开
                sidebarDepth: 1,           // 可选的, 默认值是 1
                children: [
                    '/运维部署/Docker',
                    '/运维部署/Golang Ubuntu安装及配置',
                    '/运维部署/Jupyter 远程配置',
                    '/运维部署/nacos安装指南',
                    '/运维部署/RedisDoc',
                    '/运维部署/Ubuntu部署',
                ]
            },
            {
                title: 'odoo',
                collapsable: false,          // 可选的, 默认值是 true, 展开
                sidebarDepth: 1,
                children:[
                    '/odoo/巡检任务接口',
                    '/odoo/odoo核心业务',
                    '/odoo/Odoo及Postgresql',
                    '/odoo/odooconf',
                ]
            }
        ]
    }

    



}
