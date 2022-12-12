import cx from 'classnames';
import React, { PropsWithChildren } from 'react';

import './style.scss';

export interface ButtonProps {
  /** 放置在按钮左边的图标 */
  leftIcon?: React.ReactNode;
  /** 按钮宽度 */
  width?: number;
  /** 按钮类型: 主要按钮、次要按钮（幽灵按钮）、文字按钮、提交按钮、边框按钮 */
  type?: 'primary' | 'secondary' | 'text' | 'submit' | 'border';
  /** 按钮尺寸 */
  size?: 'small' | 'medium' | 'large';
  /** 按钮颜色 */
  color?: string;
  /** 按钮圆角类型 */
  radiusType?: 'default' | 'square' | 'no-radius';
  /** loading效果 */
  loading?: boolean;
  /** 渐变按钮颜色, 仅在type为primary时可用, 优先级大于color */
  gradientColor?: string;
  /** 自定义样式 */
  style?: React.CSSProperties;
  /** 添加className */
  className?: string;
  /** 是否禁用 */
  disabled?: boolean;
  block?: boolean;
  /** 按钮辅助文字，仅在large为large时可用 */
  extra?: string;
  /** 点击事件 */
  onClick?: (e: React.MouseEvent) => void;
}

const Button: React.FC<PropsWithChildren<ButtonProps>> = (props) => {
  const { size, type, color, loading, gradientColor, disabled, onClick, width, radiusType, style, extra, block, className, leftIcon } =
    props;

  const buttonDisabled = disabled || loading;
  const buttonStyle = {
    width: width ?? undefined,
    background: type === 'secondary' ? undefined : gradientColor || color,
    borderColor: gradientColor ? 'unset' : color,
    color: ['secondary', 'text'].includes(type || '') ? color : undefined,
    ...style,
  };

  const handleClick = (e: React.MouseEvent) => {
    if (!disabled && onClick) {
      onClick(e);
    }
  };

  return (
    <div
      aria-disabled={buttonDisabled}
      style={buttonStyle}
      onClick={handleClick}
      className={cx(
        `hui-button ${size} ${type} radius-${radiusType}`,
        { disabled: buttonDisabled },
        { inline: !block },
        { 'click-opacity': !disabled },
        className,
      )}
    >
      {loading && <div className="loading-area"></div>}
      {!loading && (
        <div
          className={cx('content-wrapper', {
            'submit-content-wrapper': leftIcon,
          })}
        >
          {leftIcon && (typeof leftIcon === 'string' ? <img src={leftIcon} className="hui-button-img" /> : leftIcon)}
          <div className="button-text">{props.children}</div>
          {extra && <div className="extra">{extra}</div>}
        </div>
      )}
    </div>
  );
};

Button.defaultProps = {
  size: 'medium',
  type: 'primary',
  color: '',
  loading: false,
  gradientColor: '',
  disabled: false,
  onClick: undefined,
  width: undefined,
  radiusType: 'default',
  style: {},
  extra: '',
  block: false,
  className: '',
};
export default Button;
