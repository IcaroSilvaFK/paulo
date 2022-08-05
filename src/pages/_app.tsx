import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import { GLobalCSS } from '../styles/global';
import { theme } from '../styles/theme';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GLobalCSS />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
