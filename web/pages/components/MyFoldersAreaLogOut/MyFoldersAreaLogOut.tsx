import { Button, Text } from '../../../components';
import * as S from './MyFoldersAreaLogOut.style';

const MyFoldersAreaLogOut = () => {
  return (
    <S.AreaContainer>
      <S.BackgroundImage
        src="/backgrounds/myFoldersArea.svg"
        layout="fixed"
        width={600}
        height={550}
      />
      <S.ContentContainer>
        <S.TextWrapper>
          <S.Header>
            지금 바로 <br></br>
            <S.MainColor>나만의 북마크 폴더</S.MainColor>를<br></br>
            만들어 보세요!
          </S.Header>
          <S.Description>
            북마크 폴더를 공유하고 싶을 땐 전체 공개<br></br>
            나만 보고 싶을 땐 나만 보기 설정이 가능해요 😎{' '}
          </S.Description>
        </S.TextWrapper>
        <S.ButtonWrapper>
          <Button type="submit">로그인</Button>
          <S.SignUpButton type="submit">회원가입</S.SignUpButton>
        </S.ButtonWrapper>
      </S.ContentContainer>
    </S.AreaContainer>
  );
};

export default MyFoldersAreaLogOut;
