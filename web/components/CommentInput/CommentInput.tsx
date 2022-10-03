import * as S from './CommentInput.style';
import { ChangeEvent, forwardRef, useState } from 'react';
import { createComment } from '../../apis/CommentAPI';
import { Button, Toast } from '../index';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { userInfo } from '../../recoil/user';
import { showModalStatus } from '../../recoil/showModal';
import { showLoginModal } from '../../constants/modal.constants';
import { CreateOrUpdateComment, User } from '../../types';
import { getCookie } from '../../util/cookies';
import { CommentCreateOrUpdate } from '../../types/comment';

interface Props {
  version: 'comment' | 'update';
  folderId?: number;
  parentId?: number;
  defaultValue?: string;
  placeholder?: string;
  handleCreateComment?: (
    id: number,
    parentId: number,
    content: string,
    user: User,
  ) => void;
}

const CommentInput = forwardRef<HTMLTextAreaElement, Props>(
  (
    {
      version = 'comment',
      folderId,
      parentId = null,
      defaultValue = '',
      placeholder,
      handleCreateComment,
    },
    ref,
  ) => {
    const [value, setValue] = useState(defaultValue);
    const { user } = useRecoilValue(userInfo);
    const token = getCookie('ACCESS_TOKEN');
    const setShowModal = useSetRecoilState(showModalStatus);

    const handleChangeValue = ({
      target,
    }: ChangeEvent<HTMLTextAreaElement>) => {
      setValue(target.value);
    };

    const handleClickAddComment = async () => {
      if (!user) {
        Toast.show('로그인 후 이용해주세요.');
        setShowModal(showLoginModal);
        return;
      }

      try {
        const newComment: CreateOrUpdateComment = {
          parentId,
          content: value,
          folderId,
          userId: user.id,
        };
        const res: CommentCreateOrUpdate = await createComment(
          newComment,
          token,
        );
        const { id } = res;
        handleCreateComment(id, parentId, newComment.content, user);
      } catch (error) {
        console.log(error);
        Toast.show('문제가 발생했습니다.');
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
            placeholder={placeholder ? placeholder : placeholderText}
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
