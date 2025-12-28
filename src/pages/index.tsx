import React from 'react';
import { Box } from "@chakra-ui/react";
import About from "../components/about";
import Footer from "../components/footer";
import Newsletter from "../components/newsletter";
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
        <title>Ethan Lam | AI Researcher, FiveW Co-founder, UC Berkeley Alum</title>
        <meta name="description" content="Ethan Lam is a technology founder, AI researcher, and early adopter. Co-founder of FiveW, former engineer at Bittensor, UC Berkeley graduate. Building tools for AI research discovery." />
        <meta name="keywords" content="Ethan Lam, AI researcher, FiveW, Bittensor, UC Berkeley, technology founder, AI research, machine learning, startup founder" />
        <meta name="author" content="Ethan Lam" />
        <link rel="canonical" href="https://ethanmlam.github.io/" />
        
        {/* OpenGraph tags */}
        <meta property="og:title" content="Ethan Lam | AI Researcher & Technology Founder" />
        <meta property="og:description" content="Technology founder and AI researcher building tools for research discovery. Co-founder of FiveW, former Bittensor engineer, UC Berkeley alum." />
        <meta property="og:image" content="https://ethanmlam.github.io/ethan_pfp.jpeg" />
        <meta property="og:url" content="https://ethanmlam.github.io/" />
        <meta property="og:type" content="profile" />
        <meta property="og:site_name" content="Ethan Lam" />
        <meta property="profile:first_name" content="Ethan" />
        <meta property="profile:last_name" content="Lam" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@ethanmlam" />
        <meta name="twitter:creator" content="@ethanmlam" />
        <meta name="twitter:title" content="Ethan Lam | AI Researcher & Technology Founder" />
        <meta name="twitter:description" content="Technology founder and AI researcher building tools for research discovery. Co-founder of FiveW, former Bittensor engineer, UC Berkeley alum." />
        <meta name="twitter:image" content="https://ethanmlam.github.io/ethan_pfp.jpeg" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Ethan Lam",
            "url": "https://ethanmlam.github.io/",
            "image": "https://ethanmlam.github.io/ethan_pfp.jpeg",
            "jobTitle": "Technology Founder & AI Researcher",
            "worksFor": {
              "@type": "Organization",
              "name": "FiveW"
            },
            "alumniOf": {
              "@type": "EducationalOrganization",
              "name": "University of California, Berkeley"
            },
            "sameAs": [
              "https://twitter.com/ethanmlam",
              "https://github.com/ethanmlam",
              "https://linkedin.com/in/ethanmlam"
            ],
            "description": "Technology founder, researcher, and early adopter. Co-founder of FiveW, building tools for AI research discovery."
          }`}
        </script>
      </Helmet>
      <Box maxWidth="1100px" margin="0 auto" padding="40px 20px">
        <About />
        <Newsletter />
        <Footer/>
      </Box>
    </>
  );
}

export default Home