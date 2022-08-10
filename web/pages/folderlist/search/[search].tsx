import { useRouter } from 'next/router';
import FolderList from '..';
import FolderListDummy from '../../../shared/folderListPageDummy';
import styled from '@emotion/styled';

const search = () => {
  const router = useRouter();
  const { search } = router.query;
  const label = `'${search}' 검색 결과(${FolderListDummy.length})`;
  return (
    <Container>
      <FolderList data={FolderListDummy} label={label} />
    </Container>
  );
};

const Container = styled.div`
  padding-top: 200px;
`;

export default search;
