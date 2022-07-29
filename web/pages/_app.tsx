import { ThemeProvider } from '@emotion/react';
import type { AppProps } from 'next/app';
import { Footer, NavigationBar } from '../components';
import GlobalStyle from '../styles/GlobalStyle';
import theme from '../styles/themes';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <NavigationBar />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  );
}

export default MyApp;
