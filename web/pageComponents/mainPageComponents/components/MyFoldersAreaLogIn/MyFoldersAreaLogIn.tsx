import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { Text } from '../../../../components';
import { FolderSlider } from '../index';
import theme from '../../../../styles/themes';
import * as S from './MyFoldersAreaLogIn.style';
import { useRecoilValue } from 'recoil';
import { userInfo } from '../../../../recoil/user';
import { PinnedFolder } from '../../../../types';
import { getPinnedFolder } from '../../../../apis/FolderAPI';
import { getCookie } from '../../../../util/cookies';

const MyFoldersAreaLogIn = () => {
  const getUserInfo: any = useRecoilValue(userInfo);
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
      try {
        const token = getCookie('ACCESS_TOKEN');
        const res: PinnedFolder = await getPinnedFolder(token);
        setData(res.folders);
        setIsLoading(false);
      } catch {
        throw new Error('API 요청중 에러 발생');
      }
    };
    fetch();
  }, [getUserInfo]);

  return (
    <S.Container>
      <S.BackgroundImage hasPinnedFolder={data.length !== 0} />
      <S.Header>
        <Text color={theme.colors.main[0]}>
          {getUserInfo?.user?.name || '익명의사용자'}
        </Text>
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
