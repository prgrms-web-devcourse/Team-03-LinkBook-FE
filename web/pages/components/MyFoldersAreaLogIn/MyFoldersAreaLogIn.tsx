import { Text } from '../../../components';
import { FolderSlider } from '../index';
import * as S from './MyFoldersAreaLogIn.style';
import theme from '../../../styles/themes';
import { Folder } from '../../../shared/DummyDataType';

interface Props {
  data: Folder[];
}

const MyFoldersAreaLogIn = ({ data }: Props) => {
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
      <S.StyledButton type="button">북마크 편집 &#62;</S.StyledButton>
    </S.Container>
  );
};

export default MyFoldersAreaLogIn;