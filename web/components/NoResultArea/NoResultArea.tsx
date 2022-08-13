import * as S from './NoResultArea.style';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const NoResultArea = ({ children }: Props) => {
  return (
    <S.Container>
      <S.InnerContainer>
        <S.IconWrapper />
        <S.Description>{children}</S.Description>
      </S.InnerContainer>
      <S.BackgroundContainer />
    </S.Container>
  );
};

export default NoResultArea;
