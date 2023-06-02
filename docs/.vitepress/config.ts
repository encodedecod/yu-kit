const Guide = [{ text: 'Get Started', link: '/guide/' }];

const functions = [Guide, { text: 'getDevice', link: '/ElementHandler/' }];

const DefaultSideBar = [
  { text: '指导', items: Guide },
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
    nav: [
      { text: '指南', link: '/guide/' },
      { text: '组件处理器', link: '/ElementHandler/' },
      { text: '按钮组件', link: '/Button/' },
    ],
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
