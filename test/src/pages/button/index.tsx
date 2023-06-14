import { useState } from 'react'
import { YuButton } from '@yu-kit/components'

import './style.scss'

const Button = () => {
  const [loading, setLoading] = useState(false)
  return (
    <div className="test-content">
      <div className="test-button">
        <div className="card">
          <YuButton type="primary">普通按钮</YuButton>
        </div>
        <div className="card">
          <YuButton type="primary" onClick={() => setLoading(!loading)} loading={loading}>
            点击加载按钮
          </YuButton>
        </div>
        <div className="card">
          <YuButton type="border">边框按钮</YuButton>
        </div>
        <div className="card">
          <YuButton type="text">文字按钮</YuButton>
        </div>
        <div className="card">
          <YuButton type="primary">普通按钮</YuButton>
        </div>
        <div className="card">
          <YuButton type="primary" size="small">
            小按钮
          </YuButton>
          <YuButton type="border" size="small">
            小按钮
          </YuButton>
        </div>
        <div className="card">
          <YuButton type="primary" size="large">
            大按钮
          </YuButton>
          <YuButton type="border" size="large">
            大按钮
          </YuButton>
        </div>
        <div className="card">
          <YuButton type="primary" radiusType="square">
            方形按钮
          </YuButton>
        </div>
        <div className="card">
          <YuButton type="primary" radiusType="no-radius">
            尖角方形按钮
          </YuButton>
        </div>
        <div className="card">
          <YuButton type="primary" radiusType="no-radius" size="large" extra="辅助文字">
            普通按钮
          </YuButton>
        </div>
      </div>
    </div>
  )
}

export default Button
