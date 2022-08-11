import { ChangeEvent, forwardRef, useState } from 'react';
import { createComment } from '../../apis/CommentAPI';
import Button from '../Button';
import * as S from './CommentInput.style';
import { TEMP_TOKEN } from '../../constants/alert.constants';

interface Props {
  version: 'comment' | 'update';
  folderId?: number;
  parentId?: number;
  defaultValue?: string;
}

const CommentInput = forwardRef<HTMLTextAreaElement, Props>(
  (
    { version = 'comment', folderId, parentId = null, defaultValue = '' },
    ref,
  ) => {
    const [value, setValue] = useState(defaultValue);

    const handleChangeValue = ({
      target,
    }: ChangeEvent<HTMLTextAreaElement>) => {
      setValue(target.value);
    };

    const handleClickAddComment = async () => {
      try {
        const res = await createComment(
          {
            content: value,
            folderId,
            userId: 4,
            parentId,
          },
          TEMP_TOKEN,
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
            onChange={handleChangeValue}
            defaultValue={value}
          />
          <S.TextLenContainer>{value.length} / 300</S.TextLenContainer>
        </S.InputContainer>
        <S.ButtonContainer>
          {version === 'comment' && (
            <Button
              type="button"
              version="navBar"
              onClick={handleClickAddComment}
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
