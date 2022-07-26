import { ThemeProvider } from '@emotion/react';
import type { AppProps } from 'next/app';
import GlobalStyle from '../styles/GlobalStyle';
import theme from '../styles/themes';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
