import cx from 'classnames'
import React, { ReactElement } from 'react'

import './style.scss'

export interface YuToastProps {
  /** 轻提示内容 */
  title: ReactElement | string
  /**
   * @description: 是否显示
   */
  visible?: boolean
  /** 是否有遮罩层 */
  mask?: boolean
  /** 轻提示持续显示的时间 */
  duration?: number
  className?: string
}

const YuToast: React.FC<YuToastProps> = (props) => {
  const { title, mask, visible, className } = props
  console.log('visible', '=-=-=-')
  return visible ? (
    <div className={cx('yu-toast-box', { mask: !!mask }, className)}>
      <div className="toast">
        <div className="toast-box">
          <div className="text">{title}</div>
        </div>
      </div>
    </div>
  ) : null
}

YuToast.defaultProps = {
  duration: 1500,
  mask: false,
  visible: false
}

export default YuToast
