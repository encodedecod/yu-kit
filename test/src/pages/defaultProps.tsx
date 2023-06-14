import { CrownFilled } from '@ant-design/icons'
import React from 'react'

export default {
  route: {
    path: '/',
    routes: [
      {
        path: '/',
        name: '首页',
        icon: <CrownFilled />,
        routes: [
          {
            path: '/button',
            name: '按钮组件',
            icon: 'https://gw.alipayobjects.com/zos/antfincdn/upvrAjAPQX/Logo_Tech%252520UI.svg',
            component: React.lazy(() => import('./button'))
          },
          {
            path: '/toast',
            name: '提示组件',
            icon: <CrownFilled />,
            component: React.lazy(() => import('./toast'))
          }
        ]
      }
    ]
  },
  location: {
    pathname: '/'
  }
}
