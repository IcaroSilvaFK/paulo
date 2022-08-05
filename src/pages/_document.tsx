import type { NextPage } from 'next';
import { Head, Html, Main, NextScript } from 'next/document';

const _document: NextPage = () => (
  <Html>
    <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700;800&family=Roboto:wght@300;400;500;700;900&display=swap"
        rel="stylesheet"
      />
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default _document;
