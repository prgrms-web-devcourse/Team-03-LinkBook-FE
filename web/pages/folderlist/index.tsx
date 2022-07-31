import { useState } from 'react';
import { Category, Icon, Pagination, Text } from '../../components';
import FolderListDummy from '../../shared/folderListPageDummy';
import SearchBar from './components/SerachBar';
import * as S from './index.style';

const FolderList = () => {
  const data = FolderListDummy;
  // TODO: getServerSideProp
  const isLoading = false; // TODO: React-query 사용
  const [page, setPage] = useState(0);
  const tabItems = ['인기순', '최신순', '댓글많은순', '오래된순'];
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

  const limit = 12;
  const offset = page * limit;

  return (
    <S.PageContainer>
      <S.SearchBarWrapper>
        <SearchBar />
      </S.SearchBarWrapper>
      <S.CategoryWrapper>
        <pre>
          <S.DescriptionText>
            총 <S.BoldText>{data.length}</S.BoldText>
            개의 북마크 폴더 리스트들을 찾았습니다
          </S.DescriptionText>
        </pre>
        <Category
          tabItems={tabItems}
          isLoading={isLoading}
          onClick={onTabClick}
          selectedItem={selectedItem}
          data={data.slice(offset, offset + limit)}
        />
      </S.CategoryWrapper>
      <S.PaginationWrapper>
        <Pagination
          defaultPage={0}
          limit={limit}
          total={data.length}
          onChange={setPage}
        />
      </S.PaginationWrapper>
    </S.PageContainer>
  );
};

export default FolderList;
