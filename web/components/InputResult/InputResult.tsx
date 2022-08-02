import { MouseEventHandler } from 'react';
import * as S from './InputResult.style';

interface Props {
  inputResultVisible: boolean;
  inputResults: string[];
  onClick?: MouseEventHandler;
}

const defaultProps = {
  inputResultVisible: true,
  inputResults: [],
};

const InputResult = ({ inputResultVisible, inputResults, onClick }: Props) => {
  return (
    <>
      <S.List inputResultVisible={inputResultVisible}>
        {inputResults.map((value) => (
          <S.Item key={value} onClick={onClick}>
            {value}
          </S.Item>
        ))}
      </S.List>
    </>
  );
};

InputResult.defaultProps = defaultProps;

export default InputResult;
