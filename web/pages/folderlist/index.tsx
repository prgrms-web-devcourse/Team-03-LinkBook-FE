import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getFolderList, getTagFolder } from '../../apis/FolderAPI';
import { Category, Pagination, Seo } from '../../components';
import { TagCategory } from '../../pageComponents/folderlistComponents/components';
import * as S from '../../styles/pageStyles/folderList.style';
import { AllFolderList, TabType } from '../../types';

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
  const [selectedItem, setSelectedItem] = useState(tabItems[0]);

  const changeTabItem = (item: TabType) => {
    setSelectedItem(item);
  };

  const router = useRouter();
  const type = router.asPath.split('/')[2]; // search | explore
  const { search, subTag } = router.query;

  const label = () => {
    if (type === 'explore') {
      return `${subTag} 북마크 폴더 리스트 (${totalElement})`;
    }
    if (type === 'search') {
      return `'${search}' 검색 결과(${totalElement})`;
    }
  };

  useEffect(() => {
    setIsLoading(true);
    const fetch = async () => {
      const size = 12;
      const sort = selectedItem.value;
      // 검색 필터링(혹은 전체 카테고리일 때)
      // 나중에 API를 수정 요청
      if (type === 'search' || subTag === '전체 카테고리') {
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
      }
      // 태그 필터링
      if (type === 'explore') {
        try {
          const res: AllFolderList = await getTagFolder(
            { page, size, sort },
            subTag.toString(),
          );
          setData(res.folders.content);
          setTotalElment(res.folders.totalElements);
          setIsLoading(false);
        } catch {
          throw new Error('API 요청중 에러 발생');
        }
      }
    };
    fetch();
  }, [selectedItem, page, search, subTag]);

  return (
    <S.PageContainer>
      <Seo title="폴더 리스트 | 링북" />
      {type === 'explore' && <TagCategory />}
      <S.CategoryWrapper>
        <S.DescriptionText>{label()}</S.DescriptionText>
        <Category
          data={data}
          tabItems={tabItems}
          isLoading={isLoading}
          onClick={changeTabItem}
          selectedItem={selectedItem}
          cardVersion="othersCard"
        />
      </S.CategoryWrapper>
      <S.PaginationWrapper>
        <Pagination
          defaultPage={0}
          limit={limit}
          total={totalElement}
          onChange={setPage}
        />
      </S.PaginationWrapper>
    </S.PageContainer>
  );
};

export default FolderList;
