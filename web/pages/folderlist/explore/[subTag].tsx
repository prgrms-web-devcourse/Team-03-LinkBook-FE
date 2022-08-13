// import { useRouter } from 'next/router';
// import FolderListDummy from '../../../shared/folderListPageDummy';
// import {
//   FolderList,
//   TagCategory,
// } from '../../../pageComponents/folderlistComponents/components';
// import styled from '@emotion/styled';
// import { PAGE_URL } from '../../../constants/url.constants';

export const getServerSideProps = async () => {
  return {
    redirect: {
      destination: '/',
    },
  };
};

const explore = () => {
  // const router = useRouter();
  // const { pathname, query, asPath } = router;
  // const { mainTag, subTag } = query;
  // router.push(
  //   {
  //     pathname: `${PAGE_URL.LIST}`,
  //     query: {
  //       mainTag,
  //       subTag,
  //     },
  //   },
  //   `${PAGE_URL.LIST}/explore/${subTag}`,
  // );
  return 'hello';
  // const router = useRouter();
  // const { subTag } = router.query;
  // const label = `${subTag} 북마크 폴더 리스트 (${FolderListDummy.length})`;
  // return (
  //   <Container>
  //     <FolderList data={FolderListDummy} label={label}>
  //       <TagCategory />
  //     </FolderList>
  //   </Container>
  // );
};

// const Container = styled.div`
//   padding-top: 100px;
// `;

export default explore;
