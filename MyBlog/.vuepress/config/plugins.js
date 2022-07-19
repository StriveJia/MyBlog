// 这里封装博客所需要用到的插件

module.exports = [
  // 使用来自依赖包的插件
  //如果插件名以 vuepress-plugin- 开头，你可以使用缩写来省略这个前缀

  //为博客文章自动随机添加名人名言或其他，可自定义样式和内容的插件。 https://github.com/zpj80231/vuepress-plugin-boxx
  [
    'vuepress-plugin-boxx'
  ],
  [
    'reading-progress'
  ],
  // 添加动态标题的插件  https://github.com/moefyit/vuepress-plugin-dynamic-title
  // [
  //   'vuepress-plugin-dynamic-title',
  //   {
  //     showIcon: '/favicon.ico',
  //     showText: '(/≧▽≦/)花园朵朵开~',
  //     hideIcon: '/failure.ico',
  //     hideText: '(●—●) oh No！不要走！',
  //     recoverTime: 2000,
  //   }
  // ],

  // 评论插件 这里选用valine, 主题已经预配置好，见 index.js
  // https://www.npmjs.com/package/@vuepress-reco/vuepress-plugin-comments
  // [
  //     '@vuepress-reco/vuepress-plugin-comments'
  // ],

  // 图片懒加载
  // https://github.com/tolking/vuepress-plugin-img-lazy
  [
    'img-lazy'
  ],
  [
    '@vuepress-reco/extract-code'
  ],

  // 代码块复制代码功能 掘金风格
  // https://www.npmjs.com/package/vuepress-plugin-nuggets-style-copy
  [
    "vuepress-plugin-nuggets-style-copy",
    {
      copyText: "复制",
      tip: {
        content: "复制成功!"
      }
    }
  ],
  [
    "permalink-pinyin",
    {
      lowercase: true, // Converted into lowercase, default: true
      separator: "-", // Separator of the slug, default: '-'
    },
  ],

  // PWA插件
  // https://github.com/vuejs/vuepress/tree/master/packages/%40vuepress/plugin-pwa
  [
    '@vuepress/plugin-pwa',
    {
      serviceWorker: true,
      updatePopup: {
        message: "发现新的内容~",
        buttonText: "刷新"
      }
    }
  ],
]