import * as S from './MainCategory.style';
import { Category } from '../../../components';

interface Props {
  data?: any;
  isLoading?: boolean;
}

const MainCategory = ({ data, isLoading }: Props) => {
  const tabItems = ['인기순', '최신순', '댓글많은순'];

  return (
    <S.CategoryWrapper>
      <S.DescriptionText>
        링북 사용자들은 이런 북마크 폴더를 사용해요!
      </S.DescriptionText>
      <Category data={data} tabItems={tabItems} isLoading={isLoading} />
      <S.BtnWrapper>
        <S.MoreBtn type="button">더보기+</S.MoreBtn>
      </S.BtnWrapper>
    </S.CategoryWrapper>
  );
};

export default MainCategory;
