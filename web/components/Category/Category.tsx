import * as S from './Category.style';
import Skeleton from '../Skeleton';
import Tab from '../Tab';
import Card from '../Card';
import { CardDummyData } from '../../shared/categoryCardDummy';
import { useState } from 'react';

interface Props {
  data?: any;
  tabItems: string[];
  isLoading?: boolean;
}

const Category = ({ data, tabItems, isLoading }: Props) => {
  const [selectedItem, setSelectedItem] = useState(tabItems?.[0]);
  const changeTabItem = (item: string) => {
    setSelectedItem(item);
  };

  const sortFolderList = (data: any, item: string) => {
    switch (item) {
      case '인기순':
        item = 'likes';
        break;
      //TODO: Tab 추가
      default:
        break;
    }
    data.sort((a: any, b: any) => b[item] - a[item]);
  };

  const onTabClick = (item: string) => {
    changeTabItem(item);
    sortFolderList(data, item);
  };
  return (
    <>
      <S.TabWrapper>
        <Tab
          tabItems={tabItems}
          selectedItem={selectedItem}
          onClick={onTabClick}
        />
      </S.TabWrapper>
      <S.CategoryCardWrapper>
        {isLoading ? (
          <Skeleton width={340} height={400} repeat={CardDummyData.length} />
        ) : (
          CardDummyData.map((item) => <Card data={item} />)
        )}
      </S.CategoryCardWrapper>
    </>
  );
};

export default Category;
