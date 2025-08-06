import React from 'react';
import {
  ChakraProvider,
  CSSReset,
  extendTheme,
  Box,
} from "@chakra-ui/react";

import About from "../components/about";
import Footer from "../components/footer";
import "@fontsource/lato/300.css";
import "@fontsource/lato/400.css";
import "@fontsource/lato/700.css";
import { Helmet, HelmetProvider } from "react-helmet-async";

import ReactGA from 'react-ga';
declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

ReactGA.initialize('G-E7JHH5RZTG');

const theme = extendTheme({
  fonts: {
    heading: "'Lato', sans-serif",
    body: "'Lato', sans-serif",
  },
  styles: {
    global: {
      body: {
        color: "gray.800",
        lineHeight: "1.6",
      },
    },
  },
});

const Home: React.FC = () => {
  return (
    <ChakraProvider theme={theme}>
      <HelmetProvider>
        <Helmet>
          <title>Ethan Lam</title>
          <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        </Helmet>
        <CSSReset />
        <Box maxWidth="800px" margin="0 auto" padding="40px 20px">
          <About />
          <Footer/>
        </Box>
      </HelmetProvider>
    </ChakraProvider>
  );
}

export default Home