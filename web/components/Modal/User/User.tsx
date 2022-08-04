import { Button, Input, ImageUpload } from '../../index';
import * as S from '../Modal.style';

const User = () => {
  const handleUpdate = () => {
    console.log('회원정보 수정 완료');
  };

  return (
    <S.InnerContainer>
      <S.Title>
        Haeyum님 만의 멋있는 <br />
        <S.MainText>프로필 사진</S.MainText>과 <S.MainText>닉네임</S.MainText>을
        입력해주세요.
      </S.Title>
      <S.ImageUploadWrapper>
        <ImageUpload version="modal" />
      </S.ImageUploadWrapper>
      <S.InputContainer>
        <Input placeholder="변경할 닉네임" type="text" />
        <Input placeholder="변경할 한 줄 소개" type="text" />
      </S.InputContainer>
      <S.ButtonContainer>
        <Button type="button" onClick={handleUpdate}>
          수정
        </Button>
      </S.ButtonContainer>
    </S.InnerContainer>
  );
};

export default User;
