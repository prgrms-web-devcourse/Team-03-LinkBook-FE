import { ChangeEvent, forwardRef, useState } from 'react';
import { createComment } from '../../apis/CommentAPI';
import Button from '../Button';
import * as S from './CommentInput.style';

interface Props {
  version: 'comment' | 'update';
  folderId: number;
  parentId?: number;
}

const CommentInput = forwardRef<HTMLTextAreaElement, Props>(
  ({ version = 'comment', folderId, parentId = null }, ref) => {
    const [value, setValue] = useState('');

    const handleChange = ({ target }: ChangeEvent<HTMLTextAreaElement>) => {
      setValue(target.value);
    };

    const handleCreateComment = async () => {
      console.log(folderId, parentId, value);

      try {
        const tempToken =
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJyb2xlcyI6WyJST0xFX1VTRVIiXSwiaXNzIjoicHJncm1zIiwiZXhwIjoxNjYwMDY4NTMzLCJpYXQiOjE2NjAwNjQ5MzMsImVtYWlsIjoiOTAzeWhAbmF2ZXIuY29tIn0.Kxug26ko-HOnmPVHgY4PW2CMc4u7QTPyiQCZ93u8IaUeR5CxmA_Jk6MkVjImM-eSYFvDlIUi6WW1VfMP3UoSHg';
        const res = await createComment(
          {
            content: value,
            folderId,
            userId: 4,
            parentId,
          },
          tempToken,
        );

        console.log(res);
      } catch (error) {
        alert('문제가 발생했습니다.');
        console.log(error);
      }
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
            <Button
              type="button"
              version="navBar"
              onClick={handleCreateComment}
            >
              댓글 작성
            </Button>
          )}
        </S.ButtonContainer>
      </S.Container>
    );
  },
);

export default CommentInput;
