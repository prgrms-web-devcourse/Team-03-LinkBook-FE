import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getFolderList } from '../../../apis/FolderAPI';
import { Category, Pagination, Seo } from '../../../components';
import * as S from '../../../styles/pageStyles/folderList.style';
import { AllFolderList, TabType } from '../../../types';

const FolderList = () => {
  const [data, setData] = useState([]);
  const [totalElement, setTotalElment] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const [page, setPage] = useState(0);
  const limit = 12;

  const tabItems = [
    { name: '최신순', value: 'createdAt,desc' },
    { name: '오래된순', value: 'createdAt,asc' },
    { name: '인기순', value: 'likes,desc' },
  ];
  const [selectedTabItem, setSelectedTabItem] = useState(tabItems[0]);

  const changeTabItem = (item: TabType) => {
    setSelectedTabItem(item);
  };

  const router = useRouter();
  const { search } = router.query;

  useEffect(() => {
    setIsLoading(true);
    const fetch = async () => {
      const size = 12;
      const sort = selectedTabItem.value;

      try {
        const title: any = search || null;
        const res: AllFolderList = await getFolderList(
          { page, size, sort },
          title,
        );
        setData(res.folders.content);
        setTotalElment(res.folders.totalElements);
        setIsLoading(false);
      } catch {
        throw new Error('API 요청중 에러 발생');
      }
      return;
    };
    fetch();
  }, [selectedTabItem, page, search]);

  useEffect(() => {
    setPage(0);
  }, [selectedTabItem]);

  return (
    <S.PageContainer>
      <Seo title="폴더 리스트 | 링북" />
      <S.CategoryWrapper>
        <S.DescriptionText>
          {search} 검색 결과({totalElement})
        </S.DescriptionText>
        <Category
          data={data}
          tabItems={tabItems}
          isLoading={isLoading}
          onClick={changeTabItem}
          selectedItem={selectedTabItem}
          cardVersion="othersCard"
        />
      </S.CategoryWrapper>
      <S.PaginationWrapper>
        <Pagination
          page={page}
          limit={limit}
          total={totalElement}
          onChange={setPage}
        />
      </S.PaginationWrapper>
    </S.PageContainer>
  );
};

export default FolderList;
