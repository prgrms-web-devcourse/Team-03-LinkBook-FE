import { useState } from 'react';
import { Category, Pagination } from '../../../../components';
import { Folder } from '../../../../shared/DummyDataType';
import * as S from './FolderList.style';

interface Props {
  children?: React.ReactNode;
  label: string;
  data: Folder[];
}

const FolderList = ({ children, data, label }: Props) => {
  // const data = FolderListDummy;
  // TODO: getServerSideProp
  const isLoading = false; // TODO: React-query 사용
  const [page, setPage] = useState(0);
  const tabItems = ['인기순', '최신순', '댓글많은순', '오래된순'];
  const [selectedItem, setSelectedItem] = useState(tabItems?.[0]);

  const onTabClick = (item: string) => {
    setSelectedItem(item);
  };

  const limit = 12;
  const offset = page * limit;

  return (
    <S.PageContainer>
      {/* <S.SearchBarWrapper>
        <SearchBar />
      </S.SearchBarWrapper> */}
      {children}
      <S.CategoryWrapper>
        <S.DescriptionText>
          {/* 총 <S.BoldText>{data.length}</S.BoldText>
          개의 북마크 폴더 리스트들을 찾았습니다 */}
          {label}
        </S.DescriptionText>
        {/* <Category
          tabItems={tabItems}
          isLoading={isLoading}
          onClick={onTabClick}
          selectedItem={selectedItem}
          data={data.slice(offset, offset + limit)}
          cardVersion="othersCard"
        /> */}
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
