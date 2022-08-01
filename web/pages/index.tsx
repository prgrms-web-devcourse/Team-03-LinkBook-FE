import type { NextPage } from 'next';
import * as S from './index.style';
import { MyFoldersAreaLogIn, MyFoldersAreaLogOut } from './components';
import { allFolders } from '../shared/DummyData';

const MainPage: NextPage = () => {
  return (
    <S.Div>
      {/* <MyFoldersAreaLogOut /> */}
      <MyFoldersAreaLogIn data={allFolders} />
    </S.Div>
  );
};

export default MainPage;
