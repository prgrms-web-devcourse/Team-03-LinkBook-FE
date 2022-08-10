import { useRouter } from 'next/router';
import FolderListDummy from '../../../shared/folderListPageDummy';
import FolderList from '..';
import TagCategory from '../../../pageComponents/folderlistComponents/components/TagCategory';
import styled from '@emotion/styled';

const explore = () => {
  const router = useRouter();
  const { subTag } = router.query;
  const label = `${subTag} 북마크 폴더 리스트 (${FolderListDummy.length})`;
  return (
    <Container>
      <FolderList data={FolderListDummy} label={label}>
        <TagCategory />
      </FolderList>
    </Container>
  );
};

const Container = styled.div`
  padding-top: 100px;
`;

export default explore;
