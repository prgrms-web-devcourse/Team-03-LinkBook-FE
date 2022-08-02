import { MouseEventHandler } from 'react';
import { Button, Input, Icon } from '../../index';
import * as S from '../Modal.style';

const Bookmark = () => {
  const addBookmark = () => {
    console.log('북마크 등록');
  };

  return (
    <S.InnerContainer>
      <S.Title>
        등록할 북마크의 <br />
        <S.MainText>제목</S.MainText>과<S.MainText>링크</S.MainText>를
        입력해주세요.
        <S.Description>
          제목을 입력하지 않을 시, 링크와 동일하게 생성됩니다.
        </S.Description>
      </S.Title>
      <S.InputContainer>
        <Input placeholder="북마크 제목" />
        <Input placeholder="북마크 링크" />
      </S.InputContainer>
      <S.ButtonContainer>
        <Button type="button" onClick={addBookmark}>
          북마크 등록
        </Button>
      </S.ButtonContainer>
    </S.InnerContainer>
  );
};

export default Bookmark;
