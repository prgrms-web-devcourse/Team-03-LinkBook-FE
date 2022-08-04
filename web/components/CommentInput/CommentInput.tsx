import { ChangeEvent, forwardRef, useState } from 'react';
import Button from '../Button';
import * as S from './CommentInput.style';

interface Props {
  version: 'comment' | 'update';
}

const CommentInput = forwardRef<HTMLTextAreaElement, Props>(
  ({ version = 'comment' }, ref) => {
    const [value, setValue] = useState('');

    const handleChange = ({ target }: ChangeEvent<HTMLTextAreaElement>) => {
      setValue(target.value);
    };

    const handleClick = () => {
      console.log(value, '클릭');
    };

    const placeholderText =
      version === 'comment'
        ? '댓글을 입력해주세요.'
        : '폴더에 대한 설명을 입력해주세요.';

    return (
      <S.Container>
        <S.InputContainer>
          <S.TextInput
            placeholder={placeholderText}
            ref={ref}
            onChange={handleChange}
          />
          <S.TextLenContainer>{value.length} / 300</S.TextLenContainer>
        </S.InputContainer>
        <S.ButtonContainer>
          {version === 'comment' && (
            <Button type="submit" version="navBar" onClick={handleClick}>
              댓글 작성
            </Button>
          )}
        </S.ButtonContainer>
      </S.Container>
    );
  },
);

export default CommentInput;
