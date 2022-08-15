import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { userInfo } from '../../recoil/user';
import { Category, Modal, Pagination, Profile, Seo } from '../../components';
import * as S from '../../styles/pageStyles/user.style';
import {
  AllFolderList,
  PinnedFolder,
  SpecificUserFolderList,
  TabType,
  User,
} from '../../types';
import {
  getLikeFolder,
  getPinnedFolder,
  getUserFolderList,
} from '../../apis/FolderAPI';
import { getCookie } from '../../util/cookies';
import { showModalStatus } from '../../recoil/showModal';
import { showUserModal } from '../../constants/modal.constants';

const UserPage = () => {
  const router = useRouter();
  const id = parseInt(router.query.id.toString());
  const getUserInfo: any = useRecoilValue(userInfo);
  const loginUserId = getUserInfo?.user?.id;
  const [showModal, setShowModal] = useRecoilState(showModalStatus);

  const [folderData, setFolderData] = useState([]);
  const [userData, setUserData] = useState<User>();
  const [totalElement, setTotalElement] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const [page, setPage] = useState(0);
  const limit = 12;

  const tabItems =
    id === loginUserId
      ? [
          { name: '전체공개', value: 'public' },
          { name: '나만보기', value: 'private' },
          { name: '좋아요', value: 'likes' },
          { name: '즐겨찾기', value: 'pinned' },
        ]
      : [
          { name: '전체공개', value: 'public' },
          { name: '좋아요', value: 'likes' },
        ];
  const [selectedItem, setSelectedItem] = useState(tabItems[0]);

  const changeTabItem = (item: TabType) => {
    setSelectedItem(item);
  };

  useEffect(() => {
    setIsLoading(true);
    const fetch = async () => {
      const size = 12;
      const sort = 'id';
      let isPrivate = false;
      const token = getCookie('ACCESS_TOKEN');
      if (selectedItem.value === 'public') {
        try {
          const res: SpecificUserFolderList = await getUserFolderList({
            id,
            isPrivate,
            page,
            size,
            sort,
          });
          console.log(res);
          setFolderData(res.folders.content);
          setTotalElement(res.folders.totalElements);
          setIsLoading(false);
        } catch {
          throw new Error('API 요청중 에러 발생');
        }
      }
      if (selectedItem.value === 'private') {
        isPrivate = true;
        try {
          const res: SpecificUserFolderList = await getUserFolderList(
            {
              id,
              isPrivate,
              page,
              size,
              sort,
            },
            token,
          );
          setFolderData(res.folders.content);
          setTotalElement(res.folders.totalElements);
          setIsLoading(false);
        } catch {
          throw new Error('API 요청중 에러 발생');
        }
      }
      if (selectedItem.value === 'likes') {
        try {
          const res: AllFolderList = await getLikeFolder(
            {
              page,
              size,
              sort,
            },
            id,
          );
          setFolderData(res.folders.content);
          setTotalElement(res.folders.totalElements);
          setIsLoading(false);
        } catch {
          throw new Error('API 요청중 에러 발생');
        }
      }
      if (selectedItem.value === 'pinned') {
        try {
          const res: PinnedFolder = await getPinnedFolder(token);
          console.log(res);
          setFolderData(res.folders);
          setTotalElement(res.folders.length);
          setIsLoading(false);
        } catch {
          throw new Error('API 요청중 에러 발생');
        }
      }
    };
    fetch();
  }, [selectedItem]);

  // 유저 데이터만 받아오는 용도
  // 위의 useEffect는 selectedItem이 바뀔때 마다 리렌더링 됨
  useEffect(() => {
    const fetch = async () => {
      const size = 12;
      const sort = 'id';
      try {
        const res: SpecificUserFolderList = await getUserFolderList({
          id,
          page,
          size,
          sort,
        });
        setUserData(res.user);
      } catch {
        throw new Error('API 요청중 에러 발생');
      }
    };
    fetch();
  }, [getUserInfo]);

  return (
    <>
      <Seo title="마이페이지 | 링북" />
      <Modal version="user" show={showModal.User} />
      <S.PageContainer>
        <S.ProfileWrapper>
          {userData && <Profile user={userData} />}
          {id === loginUserId && (
            <S.ProfileModifyBtn
              type="button"
              onClick={() => setShowModal(showUserModal)}
            >
              내 정보 수정
            </S.ProfileModifyBtn>
          )}
        </S.ProfileWrapper>
        <S.CategoryWrapper>
          <pre>
            {userData && (
              <S.DescriptionText>
                {userData.name}님의 북마크 폴더 ({totalElement})
              </S.DescriptionText>
            )}
          </pre>
          <Category
            data={folderData}
            tabItems={tabItems}
            isLoading={isLoading}
            onClick={changeTabItem}
            selectedItem={selectedItem}
            cardVersion={id === loginUserId ? 'myCard' : 'othersCard'}
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
    </>
  );
};

export default UserPage;
