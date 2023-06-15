import type { ProSettings } from '@ant-design/pro-components'
import { PageContainer, ProCard, ProConfigProvider, ProLayout, SettingDrawer } from '@ant-design/pro-components'
import { ConfigProvider, Spin } from 'antd'
import { Suspense, useState } from 'react'
import defaultProps from '../defaultProps'
import { useLocation, useNavigate } from 'react-router-dom'

export default () => {
  const [settings, setSetting] = useState<Partial<ProSettings> | undefined>({
    fixSiderbar: true,
    layout: 'mix',
    splitMenus: true
  })
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const [Component, setComponent] = useState<React.ComponentType | null>(null)
  if (typeof document === 'undefined') {
    return <div />
  }
  return (
    <div
      id="test-pro-layout"
      style={{
        height: '100vh',
        overflow: 'auto'
      }}
    >
      <ProConfigProvider hashed={false}>
        <ConfigProvider
          getTargetContainer={() => {
            return document.getElementById('test-pro-layout') || document.body
          }}
        >
          <ProLayout
            prefixCls="my-prefix"
            {...defaultProps}
            location={{
              pathname
            }}
            siderMenuType="group"
            menu={{
              collapsedShowGroupTitle: true
            }}
            headerTitleRender={(logo, title, _) => {
              const defaultDom = <a href="https://encodedecod.github.io/yu-kit/components/Button/">@yu-kit/components</a>
              if (typeof window === 'undefined') return defaultDom
              if (document.body.clientWidth < 1400) {
                return defaultDom
              }
              if (_.isMobile) return defaultDom
              return <>{defaultDom}</>
            }}
            menuItemRender={(item, dom) => (
              <div
                onClick={() => {
                  setComponent(item.component)
                  navigate(item.path || '/')
                }}
              >
                {dom}
              </div>
            )}
            {...settings}
          >
            <PageContainer>
              <ProCard
                style={{
                  height: '200vh',
                  minHeight: 800
                }}
              >
                {Component && (
                  <Suspense fallback={<Spin />}>
                    <Component />
                  </Suspense>
                )}
              </ProCard>
            </PageContainer>

            <SettingDrawer
              pathname={pathname}
              enableDarkTheme
              getContainer={(e: any) => {
                if (typeof window === 'undefined') return e
                return document.getElementById('test-pro-layout')
              }}
              settings={settings}
              onSettingChange={(changeSetting) => {
                setSetting(changeSetting)
              }}
              disableUrlParams={false}
            />
          </ProLayout>
        </ConfigProvider>
      </ProConfigProvider>
    </div>
  )
}
