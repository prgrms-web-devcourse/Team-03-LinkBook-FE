import { ChangeEventHandler } from 'react';
import * as S from './Input.style';

interface Props {
  children?: React.ReactNode;
  placeholder: string;
  maxLength?: number;
  onChange?: ChangeEventHandler;
}

const defaultProps = {
  placeholder: '검색어를 입력하세요.',
};

const Input = ({
  children,
  placeholder,
  maxLength,
  onChange,
  ...styles
}: Props) => {
  return (
    <S.Wrapper>
      <S.Input
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
