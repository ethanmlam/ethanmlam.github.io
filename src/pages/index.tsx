import {
  ChakraProvider,
  extendTheme,
  Center,
  Heading,
  Spinner,
  Divider,
  Flex,
  Box,
} from "@chakra-ui/react";
import Header from "../components/header";
// import HeroSection from "../components/HeroSection";
import React, { useState, useEffect } from "react";
import About from "../components/about";
import HeroSection from "../components/HeroSection";
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
import Head from "next/head";

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
export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay
    setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Adjust the duration as needed
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>Ethan Lam</title>
      </Head>
      {/* <style jsx global>{`
        body {
          margin: 0;          // Remove default margin
          overflow-x: hidden;  // Prevent horizontal scrolling
        }
      `}</style> */}
      {isLoading ? (
        <Center height="100vh" flexDirection="column">
          <Heading
            as="h1"
            size="lg"
            mb={4}
            fontWeight="300"
            color="transparent"
            bgGradient="linear(to-r, purple.500, cyan.500)"
            bgClip="text"
            animation="gradient-animation 3s ease-in-out infinite alternate"
          >
            Ethan Lam
          </Heading>
          <Spinner color="purple.500" size="xl" />
        </Center>
      ) : (
        <Flex>
          <Box>
          {/* Left Sidebar */}
            {/* <Header /> */}
            <div id="hero-section">
              <HeroSection />
            </div>
          </Box>

          <Box maxWidth="100%" width="100%" ml="350px">
            {/* <Header /> */}
            <div id="about-section">
            {/* <About />
            <CompaniesSection /> */}
            </div>
            <div id="comp-section">
              
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
      )}
    </ChakraProvider>
  );
}
