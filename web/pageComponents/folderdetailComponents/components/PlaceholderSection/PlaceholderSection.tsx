import { Skeleton } from '../../../../components';
import * as S from './PlaceholderSection.style';

const PlaceholderSection = () => {
  return (
    <S.Container>
      <S.TitleContainer>
        <S.TitleWrapper>
          <Skeleton width={600} height={50} repeat={1} />
        </S.TitleWrapper>
      </S.TitleContainer>
      <S.ImageWrapper>
        <Skeleton width={1200} height={700} repeat={1} />
      </S.ImageWrapper>
    </S.Container>
  );
};

export default PlaceholderSection;
