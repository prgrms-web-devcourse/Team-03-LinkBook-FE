import { MouseEventHandler } from 'react';
import * as S from './Button.style';

interface Props {
  children: React.ReactNode;
  type: 'submit' | 'reset' | 'button';
  version?: string;
  onClick?: MouseEventHandler;
  disabled?: boolean;
}

const defaultProps = {
  version: '',
};

const Button = ({
  children,
  type,
  version,
  onClick,
  disabled,
  ...styles
}: Props) => {
  return (
    <S.Button
      type={type}
      version={version}
      onClick={onClick}
      disabled={disabled}
      {...styles}
    >
      {children}
    </S.Button>
  );
};

Button.defaultProps = defaultProps;

export default Button;
