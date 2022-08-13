import * as S from './MainCategory.style';
import { Category } from '../../../../components';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { AllFolderList, TabType } from '../../../../types';
import { getFolderList } from '../../../../apis/FolderAPI';
import { PAGE_URL } from '../../../../constants/url.constants';

const MainCategory = () => {
  const tabItems = [
    { name: '최신순', value: 'createdAt,desc' },
    { name: '오래된순', value: 'createdAt,asc' },
    { name: '인기순', value: 'likes,desc' },
    { name: '아이디순', value: 'id' },
  ];
  const router = useRouter();
  const [data, setData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(tabItems[0]);
  const [isLoading, setIsLoading] = useState(true);

  const moveFolderListPage = () => {
    router.push(
      {
        pathname: `${PAGE_URL.LIST}`,
        query: {
          mainTag: '전체 카테고리',
          subTag: '전체 카테고리',
        },
      },
      `${PAGE_URL.LIST}/explore/전체 카테고리`,
    );
  };

  const changeTabItem = (item: TabType) => {
    setSelectedItem(item);
  };

  useEffect(() => {
    setIsLoading(true);
    const fetch = async () => {
      const page = 0;
      const size = 6;
      const sort = selectedItem.value;
      try {
        const res: AllFolderList = await getFolderList({ page, size, sort });
        setData(res.folders.content);
        setIsLoading(false);
      } catch {
        throw new Error('API 요청중 에러 발생');
      }
    };
    fetch();
  }, [selectedItem]);

  return (
    <S.CategoryWrapper>
      <S.DescriptionText>
        링북 사용자들은 이런 북마크 폴더를 사용해요!
      </S.DescriptionText>
      <Category
        data={data}
        tabItems={tabItems}
        isLoading={isLoading}
        onClick={changeTabItem}
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
