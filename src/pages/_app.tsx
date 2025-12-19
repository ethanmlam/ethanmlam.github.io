import type { AppProps } from 'next/app';
import { Analytics } from '@vercel/analytics/react';
import { ChakraProvider, CSSReset, extendTheme } from "@chakra-ui/react";
import { HelmetProvider } from "react-helmet-async";
import "~/styles/globals.css";

const theme = extendTheme({
  fonts: {
    heading: "Georgia, 'Times New Roman', serif",
    body: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
  },
  styles: {
    global: {
      body: {
        color: "gray.800",
        lineHeight: "1.7",
        fontSize: "13px",
      },
    },
  },
});
 
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <HelmetProvider>
        <CSSReset />
        <Component {...pageProps} />
        <Analytics />
      </HelmetProvider>
    </ChakraProvider>
  );
}
 
export default MyApp;
