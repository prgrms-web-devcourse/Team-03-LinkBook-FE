import { ChangeEventHandler } from 'react';
import * as S from './Input.style';

interface Props {
  type: string;
  children?: React.ReactNode;
  placeholder: string;
  maxLength?: number;
  onChange?: ChangeEventHandler;
}

const defaultProps = {
  type: 'text',
  placeholder: '검색어를 입력하세요.',
};

const Input = ({
  children,
  placeholder,
  maxLength,
  onChange,
  type,
  ...styles
}: Props) => {
  return (
    <S.Wrapper>
      <S.Input
        type={type}
        placeholder={placeholder}
        maxLength={maxLength}
        onChange={onChange}
        {...styles}
      />
      <S.Action>{children}</S.Action>
    </S.Wrapper>
  );
};

Input.defaultProps = defaultProps;

export default Input;
