import React from "react";
import {
  Box,
  Text,
  Image,
  VStack,
  Link,
  UnorderedList,
  ListItem,
  Flex,
} from "@chakra-ui/react";

export default function About() {
  return (
    <Box>
      {/* Header: Name left (absolute), Image+Links centered */}
      <Box position="relative" mt={12} mb={2} h="50px">
        <Text 
          fontSize="42px" 
          fontWeight="500" 
          fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif"
          position="absolute"
          left={0}
          top="50%"
          transform="translateY(-50%)"
        >
          Ethan Lam
        </Text>
        <Flex align="center" justify="center" gap={3} h="100%">
          <Image
            src="/ethan_pfp.jpeg"
            alt="Ethan Lam"
            w="42px"
            h="42px"
            borderRadius="sm"
            objectFit="cover"
          />
          <Text fontSize="13px">
            (<Link href="https://www.twitter.com/ethanmlam" color="blue.600" textDecoration="underline" isExternal>Twitter</Link>, <Link href="https://fivew.xyz" color="blue.600" textDecoration="underline" isExternal>FiveW</Link>, <Link href="https://github.com/ethanmlam" color="blue.600" textDecoration="underline" isExternal>GitHub</Link>)
          </Text>
        </Flex>
      </Box>

      {/* Tagline - bold, centered */}
      <Text fontWeight="bold" fontSize="15px" mb={10} textAlign="center">
        Builder, researcher, and future-oriented optimist
      </Text>

      {/* Intro - italic */}
      <Text fontStyle="italic" fontSize="13px" lineHeight="1.7" mb={6}>
        I work on tools that help researchers and builders find what's worth building. I focus on surfacing signal from AI research, making sense of what matters.
      </Text>

      {/* Content Sections */}
      <VStack spacing={5} align="stretch">
        {/* Entrepreneurship */}
        <Box>
          <Text fontWeight="bold" mb={2}>Startup</Text>
          <UnorderedList spacing={2} fontSize="13px" mb={3} pl={8}>
            <ListItem>Co-founder of <Link href="https://fivew.xyz" color="blue.600" textDecoration="underline" isExternal>FiveW</Link>, a research-first platform for discovering and digesting AI research papers and emerging ideas</ListItem>
            {/* <ListItem>Building FiveW as a "Twitter for AI research" that prioritizes signal, credit, and durable discourse over engagement mechanics</ListItem> */}
        
            <ListItem>Living at <Link href="https://mission-control-sf.notion.site/Mission-Control-0675b18cdc504436ba173afeeb791994" color="blue.600" textDecoration="underline" isExternal>Mission Control</Link>, the oldest continous hacker house in SF, founded by Thiel Fellows in 2013. Launchpad for companies like Scale, Hightouch, Pylon.</ListItem>
          </UnorderedList>
        </Box>

        {/* AI, research, crypto */}
        <Box>
          <Text fontWeight="bold" mb={2}>AI, research, and crypto.</Text>
          <UnorderedList spacing={2} fontSize="13px" mb={3} pl={8}>
            <ListItem>Built <Link href="https://devpost.com/software/zknowledge-base" color="blue.600" textDecoration="underline" isExternal>zKnowledge Base</Link>, a semantic search engine for research papers (won Best Decentralized App at TreeHacks 2024, raised six figures and placed 3rd at Codebase Demo Day as the sole collegiate team)</ListItem>
            <ListItem>Built <Link href="https://forum.eigenlayer.xyz/t/reliablocks-developing-reliability-scores-for-non-finalized-blocks-in-optimistic-rollups-devcon-hacker-house-2024/14138" color="blue.600" textDecoration="underline" isExternal>Reliablocks</Link>, a trustworthiness model for Ethereum L2 blocks (won Architecture Prize at EigenLayer Infinite Hackathon, DevCon Bangkok)</ListItem>
            <ListItem>Contract engineer at <Link href="https://bittensor.com/" color="blue.600" textDecoration="underline" isExternal>Bittensor</Link> building a unified API and routing layer for subnets, inspired by OpenRouter</ListItem>
            <ListItem>PM intern at <Link href="https://affogato.ai/" color="blue.600" textDecoration="underline" isExternal>Affogato AI</Link> (YC S21) researching stablecoin payment solutions</ListItem>
            <ListItem>Campus Ambassador at <Link href="https://www.perplexity.ai/" color="blue.600" textDecoration="underline" isExternal>Perplexity</Link> leading early growth initiatives</ListItem>
            <ListItem>Research with <Link href="https://blockchain.berkeley.edu/" color="blue.600" textDecoration="underline" isExternal>Blockchain at Berkeley</Link></ListItem>
          </UnorderedList>
        </Box>

        {/* How I operate */}
        <Box>
          <Text fontWeight="bold" mb={2}>How I operate.</Text>
          <Text fontSize="13px" lineHeight="1.7" mb={3}>
            Hands-on technical founder shipping full-stack systems. Multidisciplinary by default, comfortable moving between systems design, product, research, and distribution.
          </Text>
          <Text fontSize="13px" lineHeight="1.7">
            Interested in incentive design, network effects, and the future of AI.
          </Text>
        </Box>

        {/* Background */}
        <Box>
          <Text fontWeight="bold" mb={2}>Background.</Text>
          <Text fontSize="13px" lineHeight="1.7">
            Studied <Link href="https://ieor.berkeley.edu/" color="blue.600" textDecoration="underline" isExternal>Industrial Engineering</Link> with a minor in <Link href="https://eecs.berkeley.edu/" color="blue.600" textDecoration="underline" isExternal>EECS</Link> at <Link href="https://www.berkeley.edu/" color="blue.600" textDecoration="underline" isExternal>UC Berkeley</Link>. Grounded in optimization, simulation, databases, and large-scale system design.
          </Text>
        </Box>

        {/* Outside of work */}
        <Box>
          <Text fontWeight="bold" mb={2}>Outside of work.</Text>
          <Text fontSize="13px">Food, poker, running, concerts, and reading.</Text>
        </Box>

        {/* Recent reading */}
        <Box>
          <Text fontWeight="bold" mb={2}>Recent reading.</Text>
          <UnorderedList spacing={1} fontSize="13px" pl={8}>
            <ListItem><Link href="https://www.amazon.com/Why-Greatness-Cannot-Planned-Objective/dp/3319155237" color="blue.600" textDecoration="underline" isExternal>Why Greatness Cannot Be Planned</Link></ListItem>
            <ListItem><Link href="https://www.amazon.com/Range-Generalists-Triumph-Specialized-World/dp/0735214484" color="blue.600" textDecoration="underline" isExternal>Range</Link></ListItem>
            <ListItem><Link href="https://www.amazon.com/More-Money-Than-God-Hedge/dp/0143119419" color="blue.600" textDecoration="underline" isExternal>More Money Than God</Link></ListItem>
            <ListItem><Link href="https://www.amazon.com/Bad-Blood-Secrets-Silicon-Startup/dp/152473165X" color="blue.600" textDecoration="underline" isExternal>Bad Blood</Link></ListItem>
            <ListItem><Link href="https://www.amazon.com/Big-Short-Inside-Doomsday-Machine/dp/0393338827" color="blue.600" textDecoration="underline" isExternal>The Big Short</Link></ListItem>
          </UnorderedList>
        </Box>

        {/* Get in touch */}
        <Box>
          <Text fontWeight="bold" mb={2}>Get in touch.</Text>
          <Text fontSize="13px" lineHeight="1.7">
            My best ideas come from talking with people who think differently. Always down to chat: <Link href="mailto:ethanmlam@berkeley.edu" color="blue.600" textDecoration="underline">ethanmlam@berkeley.edu</Link>
          </Text>
        </Box>

        {/* Where you can find me */}
        <Box>
          <Text fontWeight="bold" mb={2}>Where you can find me.</Text>
          <Text fontSize="13px">
            <Link href="https://www.twitter.com/ethanmlam" color="blue.600" textDecoration="underline" isExternal>Twitter</Link>,{" "}
            <Link href="https://github.com/ethanmlam" color="blue.600" textDecoration="underline" isExternal>GitHub</Link>,{" "}
            <Link href="https://www.linkedin.com/in/ethanmlam/" color="blue.600" textDecoration="underline" isExternal>LinkedIn</Link>
          </Text>
        </Box>
      </VStack>
    </Box>
  );
}
