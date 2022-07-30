import type { NextPage } from 'next';
import * as S from './index.style';
import { MyFoldersAreaLogOut } from './components';

const MainPage: NextPage = () => {
  return (
    <S.Div>
      <MyFoldersAreaLogOut />
    </S.Div>
  );
};

export default MainPage;
