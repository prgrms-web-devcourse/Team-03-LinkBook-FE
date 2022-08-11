import { RecoilRoot } from 'recoil';
import type { AppContext, AppProps } from 'next/app';
import Layout from '../components/Layout';
import nookies from 'nookies';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Layout {...pageProps}>
        <Component {...pageProps} />
      </Layout>
    </RecoilRoot>
  );
}

MyApp.getInitialProps = async (appContext: AppContext) => {
  const { ACCESS_TOKEN } = nookies.get(appContext.ctx);
  return { pageProps: { token: ACCESS_TOKEN } };
};

export default MyApp;
