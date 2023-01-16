import type { AppProps } from 'next/app';
import Head from 'next/head';
import { DescriptionPage, GoogleSiteVerification, KeywordsForSEO, ThumbnailPage, TitlePage } from 'src/constants';
import { ThemeCustomProvider } from 'src/contexts/theme-context';
import Layout from 'src/Layout/Layout';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <meta name="title" content={TitlePage} />
                <meta itemProp="name" content={TitlePage} />
                <meta name="description" content={DescriptionPage} />
                <meta itemProp="description" content={DescriptionPage}></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta httpEquiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
                <meta httpEquiv="pragma" content="no-cache" />
                <meta httpEquiv="expires" content="0" />
                <meta name="keywords" content={KeywordsForSEO} />
                <meta itemProp="keywords" content={KeywordsForSEO} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={process.env.NEXT_PUBLIC_SITE_URL} />
                <base href="/"></base>
                <meta property="og:title" content={TitlePage}></meta>
                <meta property="og:description" content={DescriptionPage}></meta>
                <meta property="og:image" content={`${ThumbnailPage.src}`}></meta>
                <meta property="og:image:width" content={`${ThumbnailPage.width}`}></meta>
                <meta property="og:image:height" content={`${ThumbnailPage.height}`}></meta>
                <meta name="twitter:card" content="summary_large_image"></meta>
                <meta name="twitter:image" content={`${ThumbnailPage.src}`}></meta>
                <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large"></meta>
                <meta name="googlebot" content="index,follow"></meta>
                <meta name="BingBOT" content="index,follow"></meta>
                <meta name="yahooBOT" content="index,follow"></meta>
                <meta name="slurp" content="index,follow"></meta>
                <meta name="msnbot" content="index,follow"></meta>
                <meta name="language" content="English"></meta>
                <meta property="og:site_name" content={process.env.NEXT_PUBLIC_SITE_NAME}></meta>
                <meta name="google-site-verification" content={GoogleSiteVerification}></meta>
                <title>{TitlePage}</title>
            </Head>
            <ThemeCustomProvider>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </ThemeCustomProvider>
        </>
    );
}
