import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeCustomProvider } from 'src/contexts/theme-context';
import Layout from 'src/Layout/Layout';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <meta name="title" content="Orchai - The world's first AI Lending Platform" />
                <meta property="og:title" content="Orchai - The world's first AI Lending Platform"></meta>
                <meta itemProp="name" content="Orchai - The world's first AI Lending Platform" />
                <meta name="description" content="Orchai - The world's first AI Lending Platform built on Oraichain Mainnet and for Oraichain ecosystem." />
                <meta itemProp="description" content="Orchai - The world's first AI Lending Platform built on Oraichain Mainnet and for Oraichain ecosystem."></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta httpEquiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
                <meta httpEquiv="pragma" content="no-cache" />
                <meta httpEquiv="expires" content="0" />
                <meta name="keywords" content="Orchai, lend, borrow, crypto, Oraichain, Blockchain, marketplace, loans, best profit, AI, Lending Platform, ecosystem, AI Oracle, ORAI, Token" />
                <meta itemProp="keywords" content="Orchai, lend, borrow, crypto, Oraichain, Blockchain, marketplace, loans, best profit, AI, Lending Platform, ecosystem, AI Oracle, ORAI, Token" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="/" />
                <base href="/"></base>
                <meta property="og:title" content="Orchai - The world's first AI Lending Platform"></meta>
                <meta property="og:description" content="Orchai - The world's first AI Lending Platform built on Oraichain Mainnet and for Oraichain ecosystem."></meta>
                <meta property="og:image" content="https://orchai.io/bg.png"></meta>
                <meta property="og:image:width" content="600"></meta>
                <meta property="og:image:height" content="315"></meta>
                <meta name="twitter:card" content="summary_large_image"></meta>
                <meta name="twitter:card" content="https://orchai.io/bg.png"></meta>
                <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large"></meta>
                <meta name="googlebot" content="index,follow"></meta>
                <meta name="BingBOT" content="index,follow"></meta>
                <meta name="yahooBOT" content="index,follow"></meta>
                <meta name="slurp" content="index,follow"></meta>
                <meta name="msnbot" content="index,follow"></meta>
                <meta name="language" content="English"></meta>
                <meta property="og:site_name" content="https://orchai.io/"></meta>
                <meta name="google-site-verification" content="xYo4cT3q5vIqnm2qsdyETvDUw4fvn1rNzyIuE6GSfkI"></meta>
                <title>Orchai - The world's first AI Lending Platform</title>
            </Head>
            <ThemeCustomProvider>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </ThemeCustomProvider>
        </>
    );
}
