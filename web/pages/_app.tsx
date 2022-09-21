import { RecoilRoot } from 'recoil';
import type { AppContext, AppProps } from 'next/app';
import Layout from '../components/Layout';
import nookies from 'nookies';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Head>
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="LinkBook" />
        <meta property="og:title" content="LinkBook" />
        <meta
          property="og:description"
          content="당신의 북마크를 공유해주세요"
        />
        <meta property="og:url" content="https://linkbook.tk" />
        <meta
          property="og:image"
          content="https://linkbook.tk/_next/image?url=https%3A%2F%2Flinkbook-s3-1.s3-ap-northeast-2.amazonaws.com%2Fstatic%2FGroup33705.png.png&w=3840&q=75"
        />
      </Head>
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
