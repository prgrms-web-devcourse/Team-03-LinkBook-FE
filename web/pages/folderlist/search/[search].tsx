// import { useRouter } from 'next/router';
// import { FolderList } from '../../../pageComponents/folderlistComponents/components';
// import FolderListDummy from '../../../shared/folderListPageDummy';
// import styled from '@emotion/styled';

export const getServerSideProps = async () => {
  return {
    redirect: {
      destination: '/',
    },
  };
};

const search = () => {
  return 'hello';
  // const router = useRouter();
  // const { search } = router.query;
  // const label = `'${search}' 검색 결과(${FolderListDummy.length})`;
  // return (
  //   <Container>
  //     <FolderList data={FolderListDummy} label={label} />
  //   </Container>
  // );
};

// const Container = styled.div`
//   padding-top: 200px;
// `;

export default search;
