import Document, { Html, Head, Main, NextScript } from 'next/document'

import { MEASUREMENT_ID } from '../lib/gtag'

export default class MainDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* Favicon */}
          {/* <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
          <link rel="manifest" href="/favicon/manifest.json" />
          <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#845ef7" />
          <link rel="shortcut icon" href="/favicon/favicon.ico" />
          <meta name="msapplication-TileColor" content="#845ef7" />
          <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
          <meta name="theme-color" content="#845ef7" /> */}

          {/* Global Meta Tags (Page.js) - OpenGraph */}
          <meta name="og:type" property="og:type" content="website" key="og:type" />
          <meta property="og:locale" content="en_US" key="og:locale" />
          <meta name="og:site_name" property="og:site_name" content="Scott MacDonnell" key="og:sitename" />

          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${MEASUREMENT_ID}', {
                  page_path: window.location.pathname,
                });
              `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}