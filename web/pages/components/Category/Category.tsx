import * as S from './Category.style';
import { Card, Skeleton, Tab } from '../../../components';
import { CardDummyData } from '../../../shared/categoryCardDummy';

interface Item {
  id: string;
  text: string;
}

interface Props {
  onClick?: () => void;
  selectedItem?: string;
  tabItem?: Item[];
  isLoading?: boolean;
}

const Category = ({ onClick, selectedItem, tabItem, isLoading }: Props) => {
  return (
    <S.CategoryWrapper>
      <S.DescriptionText>
        링북 사용자들은 이런 북마크 폴더를 사용해요!
      </S.DescriptionText>
      <S.TabWrapper>
        <Tab tabItems={tabItem} selectedItem={selectedItem} onClick={onClick} />
      </S.TabWrapper>
      <S.CategoryCardWrapper>
        {isLoading ? (
          <Skeleton width={340} height={400} repeat={CardDummyData.length} />
        ) : (
          CardDummyData.map((item) => <Card data={item} />)
        )}
      </S.CategoryCardWrapper>
      <S.BtnWrapper>
        <S.MoreBtn type="button">더보기+</S.MoreBtn>
      </S.BtnWrapper>
    </S.CategoryWrapper>
  );
};

export default Category;
