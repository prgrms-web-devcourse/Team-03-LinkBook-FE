import { Seo } from '../../components';
import * as S from '../../styles/pageStyles/index.style';

const informationPage = () => {
  return (
    <>
      <Seo title="이용방법 | 링북" />
      <S.NotFoundContainer>
        <S.NotFoundInnerContainer>
          <S.WhaleWrapper />
          <S.Title>준비 중이에요!</S.Title>
          <S.Description>조금만 기다려 주세요. 😣</S.Description>
        </S.NotFoundInnerContainer>
      </S.NotFoundContainer>
    </>
  );
};

export default informationPage;
