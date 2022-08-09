import { ThemeProvider } from '@emotion/react';
import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { loginStatus } from '../recoil/authentication';
import GlobalStyle from '../styles/GlobalStyle';
import theme from '../styles/themes';
import Footer from './Footer';
import NavigationBar from './NavigationBar';

interface Props {
  token: string;
  children: React.ReactNode;
}

const Layout = ({ token, children }: Props) => {
  const setIsLoggedIn = useSetRecoilState(loginStatus);
  useEffect(() => {
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
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
