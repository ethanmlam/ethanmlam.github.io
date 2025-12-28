import React from 'react';
import { Box, Text, VStack, Link, UnorderedList, ListItem } from "@chakra-ui/react";
import Footer from "../components/footer";
import { Helmet } from "react-helmet-async";

const Projects: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Ethan Lam Projects | FiveW, zKnowledge Base, Reliablocks</title>
        <meta name="description" content="Ethan Lam's projects including FiveW (AI research Twitter), zKnowledge Base (semantic search), and Reliablocks (Ethereum L2 reliability). UC Berkeley projects." />
        <meta name="keywords" content="Ethan Lam projects, FiveW, zKnowledge Base, Reliablocks, AI research, Ethereum, UC Berkeley, TreeHacks" />
        <link rel="canonical" href="https://ethanmlam.github.io/projects" />
        
        <meta property="og:title" content="Ethan Lam Projects | AI Research & Blockchain" />
        <meta property="og:description" content="Explore Ethan Lam's key projects: FiveW for AI research discovery, zKnowledge Base semantic search, and Reliablocks for Ethereum reliability." />
        <meta property="og:url" content="https://ethanmlam.github.io/projects" />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <Box maxWidth="1100px" margin="0 auto" padding="40px 20px">
        <VStack spacing={8} align="stretch">
          <Box>
            <Text as="h1" fontSize="36px" fontWeight="600" mb={4}>Projects</Text>
            <Text fontSize="16px" color="gray.600" mb={8}>
              Selected projects showcasing work in AI research tools, blockchain infrastructure, and product development.
            </Text>
          </Box>

          <Box as="section">
            <Text as="h2" fontSize="24px" fontWeight="600" mb={3}>FiveW</Text>
            <Text fontSize="14px" lineHeight="1.7" mb={4}>
              Co-founded FiveW, a focused social platform for AI research discovery. Building tools that help researchers 
              find signal over noise in the rapidly evolving AI landscape. Designed to prioritize credit, 
              durable discourse, and meaningful connections over engagement metrics.
            </Text>
            <UnorderedList fontSize="13px" spacing={1} pl={6}>
              <ListItem>Research-focused social platform with semantic organization</ListItem>
              <ListItem>Custom algorithms prioritizing academic credibility</ListItem>
              <ListItem>Integration with arXiv and major ML conferences</ListItem>
              <ListItem><Link href="https://fivew.xyz" color="blue.600" textDecoration="underline" isExternal>Visit FiveW →</Link></ListItem>
            </UnorderedList>
          </Box>

          <Box as="section">
            <Text as="h2" fontSize="24px" fontWeight="600" mb={3}>zKnowledge Base</Text>
            <Text fontSize="14px" lineHeight="1.7" mb={4}>
              Built a semantic search engine for research papers using zero-knowledge proofs and vector embeddings. 
              Won Best Decentralized App at TreeHacks 2024 and placed 3rd at Codebase Demo Day as the sole collegiate team.
            </Text>
            <UnorderedList fontSize="13px" spacing={1} pl={6}>
              <ListItem>Vector-based semantic search across academic papers</ListItem>
              <ListItem>Zero-knowledge verification for search integrity</ListItem>
              <ListItem>Real-time paper recommendation system</ListItem>
              <ListItem>Raised six figures in pre-seed funding</ListItem>
              <ListItem><Link href="https://devpost.com/software/zknowledge-base" color="blue.600" textDecoration="underline" isExternal>View on DevPost →</Link></ListItem>
            </UnorderedList>
          </Box>

          <Box as="section">
            <Text as="h2" fontSize="24px" fontWeight="600" mb={3}>Reliablocks</Text>
            <Text fontSize="14px" lineHeight="1.7" mb={4}>
              Developed reliability scores for non-finalized blocks in Ethereum optimistic rollups. 
              Won Architecture Prize at EigenLayer Infinite Hackathon during DevCon Bangkok 2024.
            </Text>
            <UnorderedList fontSize="13px" spacing={1} pl={6}>
              <ListItem>Machine learning models for block reliability prediction</ListItem>
              <ListItem>Real-time risk assessment for L2 transactions</ListItem>
              <ListItem>Integration with EigenLayer restaking infrastructure</ListItem>
              <ListItem><Link href="https://forum.eigenlayer.xyz/t/reliablocks-developing-reliability-scores-for-non-finalized-blocks-in-optimistic-rollups-devcon-hacker-house-2024/14138" color="blue.600" textDecoration="underline" isExternal>Technical Details →</Link></ListItem>
            </UnorderedList>
          </Box>

          <Box as="section">
            <Text as="h2" fontSize="24px" fontWeight="600" mb={3}>Other Work</Text>
            <UnorderedList fontSize="13px" spacing={2} pl={6}>
              <ListItem>Software engineering at Bittensor - unified API and routing layer for AI subnets</ListItem>
              <ListItem>Product research at Affogato AI (YC S21) - stablecoin payment solutions</ListItem>
              <ListItem>Campus growth at Perplexity - early user acquisition strategies</ListItem>
              <ListItem>Research with Blockchain at Berkeley - consensus mechanisms and tokenomics</ListItem>
            </UnorderedList>
          </Box>
        </VStack>
        
        <Footer />
      </Box>
    </>
  );
}

export default Projects;