import type { NextPage } from 'next';
import * as S from './index.style';
import { MainCategory, MyFoldersAreaLogOut } from './components';
import FolderList from './folderlist';

const MainPage: NextPage = () => {
  return (
    <S.Div>
      <FolderList />
    </S.Div>
  );
};

export default MainPage;
