import React from 'react';
import { MouseEventHandler } from 'react';
import * as S from './InputResult.style';

interface Props {
  active: number;
  inputResultVisible: boolean;
  inputResults: string[];
  onClick?: MouseEventHandler;
  ref?: React.Ref<HTMLUListElement>;
  placeholder?: string;
}

const defaultProps = {
  inputResultVisible: true,
  placeholder: '일치하는 태그가 없습니다.',
};

const InputResult = React.forwardRef<HTMLUListElement, Props>(
  ({ active, inputResultVisible, inputResults, onClick, placeholder }, ref) => {
    return (
      <>
        <S.List inputResultVisible={inputResultVisible} ref={ref}>
          {inputResults.length !== 0 ? (
            inputResults.map((value, index) => (
              <S.Item key={value} active={active === index} onClick={onClick}>
                {value}
              </S.Item>
            ))
          ) : (
            <S.Item isDefault={true}>{placeholder}</S.Item>
          )}
        </S.List>
      </>
    );
  },
);

InputResult.defaultProps = defaultProps;

export default InputResult;
