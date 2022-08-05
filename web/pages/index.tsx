import type { NextPage } from 'next';
import * as S from '../styles/pageStyles/index.style';

import { allFolders } from '../shared/DummyData';
import {
  MainCategory,
  MyFoldersAreaLogIn,
  MyFoldersAreaLogOut,
  UseInfo,
} from '../pageComponents/mainPageComponents/components';

const MainPage: NextPage = () => {
  const isLogined = true;
  return (
    <S.Container>
      {isLogined ? (
        <MyFoldersAreaLogIn data={allFolders} />
      ) : (
        <MyFoldersAreaLogOut />
      )}
      <MainCategory />
      <UseInfo />
    </S.Container>
  );
};

export default MainPage;
