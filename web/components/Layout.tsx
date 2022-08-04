import { ThemeProvider } from '@emotion/react';
import GlobalStyle from '../styles/GlobalStyle';
import theme from '../styles/themes';
import Footer from './Footer';
import NavigationBar from './NavigationBar';

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <NavigationBar />
        {children}
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default Layout;
