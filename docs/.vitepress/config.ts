const Guide = [{ text: '快速开始', link: '/guide/' }];

const functions = [
  { text: '组件处理器', link: '/ElementHandler/' },
  { text: '按钮组件', link: '/Button/' },
];

const DefaultSideBar = [
  { text: '指南', items: Guide },
  { text: '组件文档', items: functions },
];

export default {
  base: '/yu-kit/',
  title: 'yu-kit',
  lang: 'zh-CN',
  themeConfig: {
    logo: '/logo.png',
    lastUpdated: true,
    lastUpdatedText: '最后修改时间',
    socialLinks: [{ icon: 'github', link: 'https://github.com/encodedecod/yu-kit/' }],
    nav: Guide,
    // 侧边栏
    sidebar: {
      '/guide/': [
        {
          text: '',
          items: DefaultSideBar,
        },
      ],
      '/ElementHandler/': [
        {
          text: '',
          items: DefaultSideBar,
        },
      ],
      '/Button/': [
        {
          text: '',
          items: DefaultSideBar,
        },
      ],
    },
  },
};
