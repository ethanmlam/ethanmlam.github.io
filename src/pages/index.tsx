import React from 'react';
import {
  ChakraProvider,
  CSSReset,
  extendTheme,
  Divider,
  Flex,
  Box,
} from "@chakra-ui/react";

import About from "../components/about";
import LeftSidebar from "../components/leftsidebarEthan";
import CompaniesSection from "../components/companiesSection";
import Projects from "../components/projects";
import Footer from "../components/footer";
// import "@fontsource/lato/100.css";
import "@fontsource/lato/300.css";
import "@fontsource/lato/400.css";
import "@fontsource/lato/700.css";
import "@fontsource/roboto/400.css";
import "@fontsource/open-sans/400.css";
import "@fontsource/montserrat/400.css";
import "@fontsource/open-sans/400.css";
import "@fontsource/montserrat/400.css";
import "@fontsource-variable/space-grotesk";
import { Helmet, HelmetProvider } from "react-helmet-async";

import ReactGA from 'react-ga';
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

ReactGA.initialize('G-E7JHH5RZTG');


const theme = extendTheme({
  fonts: {
    heading: "'Montserrat', san-serif",
    heading2: "'Lato', serif",
    heading3: "'Lato', serif",
    body: "'Lato', san-serif",
  },
  components: {
    Text: {
      baseStyle: {
        mark: {
          bg: "green.200", // Set the background color for the highlight
          borderRadius: "4px",
        },
      },
    },
  },
});

const Home: React.FC = () => {
  const newFavicon = '/Users/ethanlam/website_code/testwebsite/public/favicon.ico';
  return (
    <ChakraProvider theme={theme}>
      <HelmetProvider>
        <Helmet>
          <title>Ethan Lam</title>
          <link rel="icon" type = "image/x-icon" href={newFavicon} />
        </Helmet>
        <CSSReset />
        <Flex>
          <Box>
          {/* Left Sidebar */}
            {/* <Header /> */}
            <div id="hero-section">
              <LeftSidebar />
            </div>
          </Box>

          <Box maxWidth="100%" width="100%" marginLeft={{ base: "none", lg: "350px" }}>
            {/* <Header /> */}
            <div id="about-section">
              <About />
              <CompaniesSection />
            </div>
           
            <Flex flexDirection="column" alignItems="center">
              <Divider orientation="horizontal" width="90%" />
            </Flex>
            <div id="projects-section">
              <Projects />
              <Footer/>
            </div>
          </Box>
        </Flex>
      </HelmetProvider>
    </ChakraProvider>
  );
}

export default Home