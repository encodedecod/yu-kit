const Guide = [{ text: '快速开始', link: '/guide/' }]

const components = [
  { text: '按钮组件', link: '/components/Button/' },
  { text: '轻提示组件', link: '/components/Toast/' }
]

const hooks = [
  { text: 'useCallback', link: '/hooks/useCallback/' },
  { text: 'useStates', link: '/hooks/useStates/' },
  { text: 'useLoading', link: '/hooks/useLoading/' },
  { text: 'usePrev', link: '/hooks/usePrev/' },
  { text: 'useMemo', link: '/hooks/useMemo/' }
]

const kits = [{ text: '组件处理器', link: '/kits/ElementHandler/' }]

const functions = [
  { text: 'interval', link: '/utils/interval/' },
  { text: 'copyToClipboard', link: '/utils/copyToClipboard/' },
  { text: 'cleanFileUrl', link: '/utils/cleanFileUrl/' },
  { text: 'downloadFile', link: '/utils/downloadFile/' },
  { text: 'delNulOp', link: '/utils/delNulOp/' }
]

const DefaultSideBar = [
  { text: '指南', items: Guide },
  { text: '组件文档', items: components },
  { text: 'hooks', items: hooks },
  { text: '工具类', items: kits },
  { text: '实用函数', items: functions }
]

export default {
  base: './',
  title: 'yu-kit',
  lang: 'zh-CN',
  themeConfig: {
    logo: '/logo.png',
    lastUpdated: true,
    lastUpdatedText: '最后修改时间',
    socialLinks: [{ icon: 'github', link: 'https://github.com/encodedecod/yu-kit/' }],
    nav: Guide,
    // 侧边栏
    sidebar: DefaultSideBar
  }
}
