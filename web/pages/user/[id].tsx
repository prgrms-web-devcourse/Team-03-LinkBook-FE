import { useRouter } from 'next/router';
import { useState } from 'react';
import { Category, Modal, Pagination, Profile } from '../../components';
import { myInfo } from '../../shared/DummyData';
import FolderListDummy from '../../shared/folderListPageDummy';
import * as S from '../../styles/pageStyles/user.style';

const UserPage = () => {
  const userId = '1'; // Todo: recoil로 받아옴
  const {
    query: { id },
  } = useRouter();
  const data = FolderListDummy;
  const user = myInfo;
  // TODO: getServerSideProp
  const isLoading = false; // TODO: React-query 사용
  const [page, setPage] = useState(0);
  const tabItems =
    id === userId
      ? ['전체공개', '나만보기', '읽기목록', '즐겨찾기']
      : ['전체공개', '읽기목록', '즐겨찾기'];

  const [selectedItem, setSelectedItem] = useState(tabItems?.[0]);
  const [showModal, setShowModal] = useState(false);

  const onTabClick = (item: string) => {
    setSelectedItem(item);
  };

  const handleModal = () => {
    setShowModal(!showModal);
  };

  const limit = 12;
  const offset = page * limit;

  return (
    <>
      <Modal version="user" show={showModal} closeFunc={handleModal} />
      <S.PageContainer>
        <S.ProfileWrapper>
          <Profile user={user} />
          {id === userId && (
            <S.ProfileModifyBtn type="button" onClick={handleModal}>
              내 정보 수정
            </S.ProfileModifyBtn>
          )}
        </S.ProfileWrapper>
        <S.CategoryWrapper>
          <pre>
            <S.DescriptionText>
              {user.name}님의 북마크 폴더 ({data.length})
            </S.DescriptionText>
          </pre>
          <Category
            tabItems={tabItems}
            isLoading={isLoading}
            onClick={onTabClick}
            selectedItem={selectedItem}
            data={data.slice(offset, offset + limit)}
            cardVersion={id === userId ? 'myCard' : 'othersCard'}
            isPinned={true}
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
    </>
  );
};

export default UserPage;
