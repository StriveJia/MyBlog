// 引入模块
const plugins = require('./config/plugins')
const { nav } = require('./config/nav')
const sidebar = require('./config/sidebar')

module.exports = {
  "title": "StriveJia", //左上角网站标题
  "description": "StriveJia 's blog",  //网站描述，会在首次loading页面时加载
  "dest": "dist",  //vuepress build 的输出目录
  "head": [
    // 为document.head部分添加link标签
    ["link", { "rel": "icon", "href": "/blog.ico" }],
    // deploying a manifest
    // ['link', { rel: 'manifest', href: '/manifest.json' }],
    // ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    // ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    // ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    // ['link', { rel: 'apple-touch-icon', href: '/icons/apple-touch-icon-152x152.png' }],
    // ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    // ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    // ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
    // 移动端优化，（搜索框在获得焦点时会放大，并且在失去焦点后可以左右滚动，优化）
    ["meta", { "name": "viewport", "content": "width=device-width,initial-scale=1,user-scalable=no" }],
    // 添加script标签
    // 每日一词的script标签 https://www.jinrishici.com/
    [
      "script",
      {
        "src": "https://sdk.jinrishici.com/v2/browser/jinrishici.js",
        "charset": "utf-8"
      }
    ]
  ],
  "theme": "reco",
  // 主题配置 （这里是在reco主题的基础上做自定义修改）
  "themeConfig": {
    // 顶部导航栏配置
    nav,
    // 左侧侧边栏配置
    sidebar,
    // 右侧侧边栏全局开启
    subSidebar: 'auto',//在所有页面中启用自动生成子侧边栏，原 sidebar 仍然兼容
    // 博客配置
    "blogConfig": {
      "category": {
        "location": 2,   //在导航栏菜单中从左至右所占的位置，默认2
        "text": "Category"  //默认文案 “分类”
      },
      "tag": {
        "location": 3, //在导航栏菜单中从左至右所占的位置，默认3
        "text": "Tag" //默认文案 “标签”
      }
    },
    // 友情链接
    "friendLink": [
      {
        "title": "午后南杂",
        "desc": "Enjoy when you can, and endure when you must.",
        "email": "1156743527@qq.com",
        "link": "https://www.recoluan.com"
      },
      {
        "title": "vuepress-theme-reco",
        "desc": "A simple and beautiful vuepress Blog & Doc theme.",
        "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        "link": "https://vuepress-theme-reco.recoluan.com"
      }
    ],
    // 社交信息
    "socials": {
      "github": "https://github.com/GodLikeZeal", //github
      "gitlub": false, //gitlub
      "gitee": "https://gitee.com/GodLikeZeal", //gitee
      "jianshu": "https://www.jianshu.com/u/e2d051b6d2e9", //简书
      "zhihu": "https://www.zhihu.com/people/qian-ge-diao-63", //知乎
      "toutiao": false, //知乎
      "juejin": "https://juejin.im/user/2796746683716990", //掘金
      "segmentfault": "https://segmentfault.com/u/zeal_5eecb699bdb08", //思否
      "csdn": false, //CSDN
      "wechat": "你的微信", //微信
      "qq": "你的QQ" //QQ
    },

    // 其他部分
    "type": "blog", // 设置好网站首页，会显示HomeBlog.vue。如果注释掉，会显示Home.vue组件。
    // "bgImage": 'https://cdn.jsdelivr.net/gh/mumu-pika/MyBlogCDN/images/anime/wait.jpg', //背景图片设置，由heroImages代替
    "logo": "/logo.png", //导航栏左侧logo
    "search": true,  //顶部搜索栏，true表示开启搜索
    "searchMaxSuggestions": 10, //输入所要搜索的内容之后，搜索提示的最大数量
    "startYear": '2022',     //项目开始时间
    "lastUpdated": "Last Updated",  //最后更新的时间，显示在博客或文档底部
    "author": "StriveJia", //网站搭建者名称
    "authorAvatar": "/Myicon.jpg", //网站搭建者avatar，会显示在首页
    "record": "StriveJia 's blog", // 记录，可以记录网站访问量，这里暂时先写description
    "startYear": "2022", //底部网站运行开始时间
    "codeTheme": "tomorrow", //代码块中代码的样式，这里的主题选取自PrismJS中的prism-themes
    "smoothScroll": true, //启用页面滚动效果

  },
  // 插件配置 (这里将插件分离出去，详见./config/plugins)
  plugins,
  "markdown": {
    "lineNumbers": true //显示行号
  }
}