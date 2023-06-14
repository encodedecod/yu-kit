import cx from 'classnames'
import React, { PropsWithChildren } from 'react'

import './style.scss'

export interface YuButtonProps {
  /** 放置在按钮左边的图标 */
  leftIcon?: React.ReactNode
  /** 按钮类型: 主要按钮、次要按钮（幽灵按钮）、文字按钮、提交按钮、边框按钮 */
  type?: 'primary' | 'text' | 'border'
  /** 按钮尺寸 */
  size?: 'small' | 'medium' | 'large'
  /** 按钮圆角类型 */
  radiusType?: 'default' | 'square' | 'no-radius'
  /** loading效果 */
  loading?: boolean
  /** 自定义样式 */
  style?: React.CSSProperties
  /** 添加className */
  className?: string
  /** 是否禁用 */
  disabled?: boolean
  /** 按钮辅助文字，仅在large为large时可用 */
  extra?: string
  /** 点击事件 */
  onClick?: (e: React.MouseEvent) => void
}

const YuButton: React.FC<PropsWithChildren<YuButtonProps>> = (props) => {
  const { size, type, loading, disabled, onClick, radiusType, style, extra, className, leftIcon } = props

  const YuButtonDisabled = disabled || loading
  const handleClick = (e: React.MouseEvent) => {
    if (!disabled && onClick) {
      onClick(e)
    }
  }

  return (
    <div
      aria-disabled={YuButtonDisabled}
      style={style}
      onClick={handleClick}
      className={cx(
        `yu-button ${size} ${type} radius-${radiusType}`,
        { disabled: YuButtonDisabled },
        { 'click-opacity': !disabled },
        className
      )}
    >
      <div
        className={cx('content-wrapper', {
          'submit-content-wrapper': leftIcon
        })}
      >
        {leftIcon && (typeof leftIcon === 'string' ? <img src={leftIcon} className="yu-button-img" /> : leftIcon)}
        {loading && !leftIcon && <div className="loading-area"></div>}
        <div className={cx('button-text', { loading })}>{props.children}</div>
        {extra && <div className="extra">{extra}</div>}
      </div>
    </div>
  )
}

YuButton.defaultProps = {
  size: 'medium',
  type: 'primary',
  loading: false,
  disabled: false,
  onClick: undefined,
  radiusType: 'default',
  style: {},
  extra: '',
  className: ''
}
export default YuButton
