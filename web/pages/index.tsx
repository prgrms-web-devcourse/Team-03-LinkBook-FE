import type { NextPage } from 'next';
import * as S from './index.style';
import { MainCategory, MyFoldersAreaLogOut } from './components';

const MainPage: NextPage = () => {
  return (
    <S.Div>
      <MyFoldersAreaLogOut />
      <MainCategory />
    </S.Div>
  );
};

export default MainPage;
