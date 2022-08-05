import * as S from './MainCategory.style';
import { Category } from '../../../../components';
import { useState } from 'react';
import CardDummyData from '../../../../shared/categoryCardDummy';
import { useRouter } from 'next/router';

interface Props {
  data?: any;
  isLoading?: boolean;
}

const MainCategory = ({ data, isLoading }: Props) => {
  const tabItems = ['인기순', '최신순', '댓글많은순'];
  const router = useRouter();
  const moveFolderListPage = () => {
    router.push(`folderlist`);
  };
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
    <S.CategoryWrapper>
      <S.DescriptionText>
        링북 사용자들은 이런 북마크 폴더를 사용해요!
      </S.DescriptionText>
      <Category
        data={CardDummyData}
        tabItems={tabItems}
        isLoading={isLoading}
        onClick={onTabClick}
        selectedItem={selectedItem}
        cardVersion="othersCard"
      />
      <S.BtnWrapper>
        <S.MoreBtn type="button" onClick={moveFolderListPage}>
          더보기+
        </S.MoreBtn>
      </S.BtnWrapper>
    </S.CategoryWrapper>
  );
};

export default MainCategory;
