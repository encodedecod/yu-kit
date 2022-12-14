import cx from 'classnames'
import React, { PropsWithChildren } from 'react'
import ButtonBar from './Bar'
import Button, { ButtonProps } from './Button'

import './style.scss'
export interface HuiButtonProps extends ButtonProps {
  withBar?: boolean
  barClassName?: string
  disabledColor?: string
}

const HButton: React.FC<PropsWithChildren<HuiButtonProps>> = props => {
  const { withBar, barClassName, disabledColor } = props

  return withBar ? (
    <ButtonBar className={barClassName}>
      <Button
        {...props}
        className={cx('bottom-button', props.className)}
        style={{
          ...props.style,
        }}
        color={props.disabled ? disabledColor : undefined}
      >
        <div
          className={cx('button-bar-text', {
            'button-bar-allow': !props.disabled,
          })}
        >
          {props.children}
        </div>
      </Button>
    </ButtonBar>
  ) : (
    <Button {...props} />
  )
}

HButton.defaultProps = {
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
}
export default HButton
