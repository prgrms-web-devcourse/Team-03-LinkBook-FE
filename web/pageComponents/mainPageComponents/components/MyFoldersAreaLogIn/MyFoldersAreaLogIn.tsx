import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { Text } from '../../../../components';
import { FolderSlider } from '../index';
import theme from '../../../../styles/themes';
import * as S from './MyFoldersAreaLogIn.style';
import { useRecoilValue } from 'recoil';
import { userInfo } from '../../../../recoil/user';
import { SpecificUserFolderList } from '../../../../types';
import { getUserFolderList } from '../../../../apis/FolderAPI';

const MyFoldersAreaLogIn = () => {
  const getUserInfo = useRecoilValue(userInfo);
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const router = useRouter();
  const moveUserPage = () => {
    const id = getUserInfo.user.id;
    router.push(`user/${id}`);
  };
  useEffect(() => {
    setIsLoading(true);
    const fetch = async () => {
      if (Object.keys(getUserInfo).length === 0) return;

      const id = getUserInfo.user.id;
      const isPrivate = false;
      const page = 0;
      const size = 10;
      const sort = 'likes';
      try {
        const res: SpecificUserFolderList = await getUserFolderList({
          id,
          isPrivate,
          page,
          size,
          sort,
        });
        const pinnedFolder = res.folders.content.filter(
          (folder) => folder?.isPinned === true,
        );
        setData(pinnedFolder);
        setIsLoading(false);
      } catch {
        throw new Error('API 요청중 에러 발생');
      }
    };
    fetch();
  }, [getUserInfo]);

  return (
    <S.Container>
      <Image
        src="/backgrounds/myFoldersAreaLogIn.svg"
        alt="로그인화면"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />
      <S.Header>
        <Text color={theme.colors.main[0]}>Miral</Text>
        <Text>
          의<br />
        </Text>
        <Text>북마크 폴더 리스트</Text>
      </S.Header>
      <FolderSlider data={data} isLoading={isLoading} />
      <S.StyledButton type="button" onClick={moveUserPage}>
        북마크 편집 &#62;
      </S.StyledButton>
    </S.Container>
  );
};

export default MyFoldersAreaLogIn;
