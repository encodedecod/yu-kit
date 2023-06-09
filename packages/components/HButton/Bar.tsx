import cx from 'classnames';
import { PropsWithChildren } from 'react';

interface ButtonBarProps {
  className?: string;
}
const ButtonBar: React.FC<PropsWithChildren<ButtonBarProps>> = (props) => {
  const { className, children } = props;

  return <div className={cx('bottom-button-bar', className)}>{children}</div>;
};

export default ButtonBar;
