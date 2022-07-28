import * as S from './UseInfo.style';

const UseInfo = () => {
  return (
    <S.UseInfoContainer>
      <S.TextWrapper>
        <S.Header>
          <S.MainColorHeader>나만의 북마크</S.MainColorHeader>를<br />
          편하게 공유하세요!
        </S.Header>
        <S.Description>
          내 바탕화면을 깔끔하게
          <S.MainColorDes> 북마크를 폴더로 정리 싹!</S.MainColorDes>
          <br />
          원하는 북마크 폴더를
          <S.MainColorDes> 내 폴더 모음으로 쏙!</S.MainColorDes>
        </S.Description>
      </S.TextWrapper>
      <S.ButtonWrapper>
        <S.LinkButton type="submit">
          <S.LogoText version="logo">링북</S.LogoText>
          100% 활용법 ＞
        </S.LinkButton>
      </S.ButtonWrapper>
    </S.UseInfoContainer>
  );
};

export default UseInfo;
