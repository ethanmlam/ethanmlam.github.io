import React from 'react';
import { Box, Text, VStack, Link } from "@chakra-ui/react";
import Footer from "../components/footer";
import { Helmet } from "react-helmet-async";

const Contact: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Contact Ethan Lam | AI Researcher & Technology Founder</title>
        <meta name="description" content="Get in touch with Ethan Lam. Technology founder, AI researcher, and FiveW co-founder. Always interested in discussing AI research, startups, and technology." />
        <meta name="keywords" content="contact Ethan Lam, Ethan Lam email, AI researcher contact, technology founder, FiveW founder" />
        <link rel="canonical" href="https://ethanmlam.github.io/contact" />
        
        <meta property="og:title" content="Contact Ethan Lam" />
        <meta property="og:description" content="Get in touch with Ethan Lam for discussions about AI research, technology, and startups." />
        <meta property="og:url" content="https://ethanmlam.github.io/contact" />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <Box maxWidth="1100px" margin="0 auto" padding="40px 20px">
        <VStack spacing={8} align="stretch">
          <Box>
            <Text as="h1" fontSize="36px" fontWeight="600" mb={4}>Get in Touch</Text>
            <Text fontSize="16px" color="gray.600" mb={8}>
              My best ideas come from talking with people who think differently. Always down to chat about AI research, technology, startups, or interesting problems.
            </Text>
          </Box>

          <Box as="section">
            <Text as="h2" fontSize="20px" fontWeight="600" mb={4}>Contact Information</Text>
            <VStack spacing={3} align="stretch">
              <Text fontSize="14px">
                <strong>Email:</strong> <Link href="mailto:ethanmlam@berkeley.edu" color="blue.600" textDecoration="underline">ethanmlam@berkeley.edu</Link>
              </Text>
              <Text fontSize="14px">
                <strong>Twitter:</strong> <Link href="https://twitter.com/ethanmlam" color="blue.600" textDecoration="underline" isExternal>@ethanmlam</Link>
              </Text>
              <Text fontSize="14px">
                <strong>LinkedIn:</strong> <Link href="https://linkedin.com/in/ethanmlam" color="blue.600" textDecoration="underline" isExternal>linkedin.com/in/ethanmlam</Link>
              </Text>
              <Text fontSize="14px">
                <strong>GitHub:</strong> <Link href="https://github.com/ethanmlam" color="blue.600" textDecoration="underline" isExternal>github.com/ethanmlam</Link>
              </Text>
            </VStack>
          </Box>

          <Box as="section">
            <Text as="h2" fontSize="20px" fontWeight="600" mb={4}>What I'm Interested In</Text>
            <VStack spacing={2} align="stretch" fontSize="14px" lineHeight="1.7">
              <Text>• AI research tools and infrastructure</Text>
              <Text>• Incentive design and network effects</Text>
              <Text>• Technical approaches to information discovery</Text>
              <Text>• Early-stage startups and product development</Text>
              <Text>• Academic research commercialization</Text>
              <Text>• Blockchain applications beyond DeFi</Text>
            </VStack>
          </Box>

          <Box as="section">
            <Text as="h2" fontSize="20px" fontWeight="600" mb={4}>Current Location</Text>
            <Text fontSize="14px" lineHeight="1.7">
              Based in San Francisco, living at <Link href="https://mission-control-sf.notion.site/Mission-Control-0675b18cdc504436ba173afeeb791994" color="blue.600" textDecoration="underline" isExternal>Mission Control</Link>, 
              a hacker house that's been running continuously since 2013. Former home to founders of Scale, Hightouch, Pylon, and other notable companies.
            </Text>
          </Box>
        </VStack>
        
        <Footer />
      </Box>
    </>
  );
}

export default Contact;