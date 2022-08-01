import { ChangeEvent, useRef, useState } from 'react';
import Button from '../Button';
import * as S from './CommentInput.style';

const CommentInput = () => {
  const ref = useRef<HTMLTextAreaElement>(null);
  const [value, setValue] = useState('');

  const handleChange = ({ target }: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(target.value);
  };

  return (
    <S.Container>
      <S.InputContainer>
        <S.TextInput
          placeholder="댓글을 입력해주세요."
          ref={ref}
          onChange={handleChange}
        />
        <S.TextLenContainer>{value.length} / 300</S.TextLenContainer>
      </S.InputContainer>
      <S.ButtonContainer>
        <Button type="submit" version="navBar">
          댓글 작성
        </Button>
      </S.ButtonContainer>
    </S.Container>
  );
};

export default CommentInput;
