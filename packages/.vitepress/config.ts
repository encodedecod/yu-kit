const Guide = [{ text: 'Get Started', link: '/guide/' }];

const functions = [Guide, { text: 'getDevice', link: '/core/getDevice/' }];

const DefaultSideBar = [
  { text: '指导', items: Guide },
  { text: '组件文档', items: functions },
];

export default {
  base: '/h-devkit/',
  title: 'h-devkit',
  lang: 'zh-CN',
  themeConfig: {
    logo: '/logo.png',
    lastUpdated: true,
    lastUpdatedText: '最后修改时间',
    socialLinks: [{ icon: 'github', link: 'https://github.com/vmejs/vmejs' }],
    nav: [
      { text: '指南', link: '/guide/' },
      { text: '函数集合', link: '/core/getDevice/' },
    ],
    // 侧边栏
    sidebar: {
      '/guide/': [
        {
          text: '',
          items: DefaultSideBar,
        },
      ],
      '/core/': [
        {
          text: '',
          items: DefaultSideBar,
        },
      ],
    },
  },
};
