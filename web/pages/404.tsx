import type { NextPage } from 'next';
import * as S from '../styles/pageStyles/index.style';

const NotFoundPage: NextPage = () => {
  return (
    <S.NotFoundContainer>
      <S.NotFoundInnerContainer>
        <S.WhaleWrapper />
        <S.Title>404 Not Found!</S.Title>
        <S.Description>페이지를 찾을 수 없어요! 😣</S.Description>
      </S.NotFoundInnerContainer>
    </S.NotFoundContainer>
  );
};

export default NotFoundPage;
