import type { NextPage } from 'next';
import * as S from './index.style';
import {
  MainCategory,
  MyFoldersAreaLogIn,
  MyFoldersAreaLogOut,
  UseInfo,
} from './components';
import { allFolders } from '../shared/DummyData';

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
