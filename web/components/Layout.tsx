import { ThemeProvider } from '@emotion/react';
import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { getUserInfo } from '../apis/UserAPI';
import { loginStatus } from '../recoil/authentication';
import { userInfo } from '../recoil/user';
import GlobalStyle from '../styles/GlobalStyle';
import theme from '../styles/themes';
import { MyInfo } from '../types';
import Footer from './Footer';
import NavigationBar from './NavigationBar';

interface Props {
  token: string;
  children: React.ReactNode;
}

const Layout = ({ token, children }: Props) => {
  const setLoginStatus = useSetRecoilState(loginStatus);
  const setUserInfo = useSetRecoilState(userInfo);
  useEffect(() => {
    if (token) {
      setLoginStatus(true);
      const fetch = async () => {
        const loginUserInfo: MyInfo = await getUserInfo(token);
        setUserInfo(loginUserInfo);
      };
      fetch();
    } else {
      setLoginStatus(false);
    }
  }, []);

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <NavigationBar token={token} />
        {children}
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default Layout;
