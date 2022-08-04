import { Text } from '../../../components';
import { FolderSlider } from '../index';
import * as S from './MyFoldersAreaLogIn.style';
import theme from '../../../styles/themes';
import { Folder } from '../../../shared/DummyDataType';
import { useRouter } from 'next/router';

interface Props {
  data: Folder[];
}

const MyFoldersAreaLogIn = ({ data }: Props) => {
  const router = useRouter();
  const moveUserPage = () => {
    router.push(`user/1`);
  };

  return (
    <S.Container>
      <S.Header>
        <Text color={theme.colors.main[0]}>Miral</Text>
        <Text>
          의<br />
        </Text>
        <Text>북마크 폴더 리스트</Text>
      </S.Header>
      <FolderSlider data={data} />
      <S.StyledButton type="button" onClick={moveUserPage}>
        북마크 편집 &#62;
      </S.StyledButton>
    </S.Container>
  );
};

export default MyFoldersAreaLogIn;
