import React from 'react';
import { Box } from "@chakra-ui/react";
import About from "../components/about";
import Footer from "../components/footer";
import { Helmet } from "react-helmet-async";
import ReactGA from 'react-ga';

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

ReactGA.initialize('G-E7JHH5RZTG');

const Home: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Ethan Lam | Technology founder, researcher, and early adopter</title>
      </Helmet>
      <Box maxWidth="1100px" margin="0 auto" padding="40px 20px">
        <About />
        <Footer/>
      </Box>
    </>
  );
}

export default Home