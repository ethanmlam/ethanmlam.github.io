import React from "react";
import {
  Box,
  Heading,
  Text,
  Image,
  VStack,
  HStack,
  Link,
  Stack,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaXTwitter, FaMapPin, FaRocket, FaGamepad, FaLaptopCode, FaBriefcase, FaPaperPlane, FaBookOpen} from "react-icons/fa6";

export default function About() {
  return (
    <Box>
      {/* Header */}
      <Stack direction={{ base: "column", lg: "row" }} spacing={{ base: 6, lg: 8 }} align={{ base: "center", lg: "start" }} mb={12} mt={12}>
        <Image
          src="/ethan_pfp.jpeg"
          alt="Ethan Lam"
          w={{ base: "130px"}}
          h={{ base: "130px"}}
          borderRadius="12px"
          objectFit="cover"
          flexShrink={0}
        />
        <VStack align={{ base: "center", lg: "start" }} spacing={4} flex="1" textAlign={{ base: "center", lg: "left" }}>
          <Heading fontSize={{ base: "3xl", md: "4xl" }} fontWeight="300">
            Ethan Lam
          </Heading>
          <HStack spacing={{ base: 2, md: 4 }} mb={2} flexWrap="wrap" justifyContent={{ base: "center", lg: "flex-start" }}>
            <Text fontSize={{ base: "md", md: "lg" }} color="gray.600">
              @ethanmlam
            </Text>
            <Link href="https://x.com/mission__ctrl" isExternal _hover={{ color: "blue.600" }}>
              <HStack spacing={1} color="gray.600" _hover={{ color: "blue.600" }}>
                <FaMapPin size={14} />
                <Text fontSize={{ base: "sm", md: "md" }}>Mission Control Hacker House (Satellite), SF</Text>
              </HStack>
            </Link>
          </HStack>
          <HStack spacing={6} justifyContent={{ base: "center", lg: "flex-start" }}>
            <Link href="https://www.twitter.com/ethanmlam" isExternal color="black.900" _hover={{ color: "black.900", transform: "scale(1.5)" }} transition="all 0.2s" title="@ethanmlam">
              <FaXTwitter size={20} />
            </Link>
            <Link href="https://github.com/ethanmlam" isExternal color="gray.600" _hover={{ color: "black.900", transform: "scale(1.5)", filter: "drop-shadow(0 0 8px #22c55e40)" }} transition="all 0.2s" title="@ethanmlam">
              <FaGithub size={20} />
            </Link>
            <Link href="https://www.linkedin.com/in/ethanmlam/" isExternal color="gray.600" _hover={{ color: "blue.400", transform: "scale(1.5)" }} transition="all 0.2s" title="/in/ethan-m-lam">
              <FaLinkedin size={20} />
            </Link>
          </HStack>
        </VStack>
      </Stack>

      {/* Content */}
      <VStack spacing={12} align="start">
        <Box>
          <Text fontSize={{ base: "lg", md: "xl" }} lineHeight="1.7" color="gray.800" fontWeight="400">
            Hey! I&apos;m a builder who loves creating and trying new AI applications. Studied Industrial Engineering and EECS at UC Berkeley. 
          </Text>
        </Box>

        <Box>
          <HStack spacing={3} mb={1}>
            <FaRocket color="#2563EB" size={18} />
            <Heading fontSize="xl" fontWeight="400" color="gray.800" pb={2}>
              Currently
            </Heading>
          </HStack>
          <Box borderBottom="2px solid" borderColor="gray.200" width="300px" mb={4} />
          <Text fontSize="lg" lineHeight="1.8" color="gray.700">
co-founding <Link href="https://fivew.xyz" isExternal color="blue.600" _hover={{ color: "blue.800" }}>FiveW</Link> - a way to discover and digest the latest AI research.
          </Text>
        </Box>

        <Box>
          <HStack spacing={3} mb={1}>
            <FaGamepad color="#059669" size={18} />
            <Heading fontSize="xl" fontWeight="400" color="gray.800" pb={2}>
              When I&apos;m not coding
            </Heading>
          </HStack>
          <Box borderBottom="2px solid" borderColor="gray.200" width="300px" mb={4} />
          <VStack align="start" spacing={2}>
            <Text fontSize="lg" lineHeight="1.7" color="gray.700">
              <Text as="span" fontWeight="500" color="gray.800">food, reading, poker, running, and concerts</Text> 
            </Text>
          </VStack>
        </Box>


        <Box>
          <HStack spacing={3} mb={1}>
            <FaLaptopCode color="#8B5CF6" size={18} />
            <Heading fontSize="xl" fontWeight="400" color="gray.800" pb={2}>
              Projects
            </Heading>
          </HStack>
          <Box borderBottom="2px solid" borderColor="gray.200" width="300px" mb={4} />
          <VStack align="start" spacing={4}>
            <Box p={5} border="1px solid" borderColor="gray.200" borderRadius="lg" bg="white" _hover={{ borderColor: "#22c55e", shadow: "lg", transform: "translateY(-2px)" }} transition="all 0.3s">
              <HStack spacing={3} mb={2}>
                <Box w={3} h={3} bg="#22c55e" borderRadius="full" />
                <Link href="https://devpost.com/software/zknowledge-base?_gl=1*15a5x7x*_gcl_au*MTQ0NjA2MTc3Ny4xNzUzMTU1MjAx*_ga*ODI4NjIxNDU4LjE3NTMxNTUyMDE.*_ga_0YHJK3Y10M*czE3NTQ0NTEwMDgkbzMkZzEkdDE3NTQ0NTEwMTMkajU1JGwwJGgw" isExternal color="gray.900" _hover={{ color: "blue.600" }}>
                  <Text fontSize="lg" fontWeight="600" color="gray.900" _hover={{ color: "blue.600" }}>zKnowledge Base</Text>
                </Link>
              </HStack>
              <Text fontSize="md" lineHeight="1.6" color="gray.600">
                Semantic search for research papers. TreeHacks 2024 Best Decentralized App. Raised 6 figures and 3rd place in Codebase Demo Day as the sole collegiate team.
              </Text>
            </Box>
            <Box p={5} border="1px solid" borderColor="gray.200" borderRadius="lg" bg="white" _hover={{ borderColor: "orange.400", shadow: "lg", transform: "translateY(-2px)" }} transition="all 0.3s">
              <HStack spacing={3} mb={2}>
                <Box w={3} h={3} bg="orange.500" borderRadius="full" />
                <Link href="https://forum.eigenlayer.xyz/t/reliablocks-developing-reliability-scores-for-non-finalized-blocks-in-optimistic-rollups-devcon-hacker-house-2024/14138" isExternal color="gray.900" _hover={{ color: "blue.600" }}>
                  <Text fontSize="lg" fontWeight="600" color="gray.900" _hover={{ color: "blue.600" }}>Reliablocks</Text>
                </Link>
              </HStack>
              <Text fontSize="md" lineHeight="1.6" color="gray.600">
                Blockchain trustworthiness model for Ethereum L2s. Won Architecture prize at EigenLayer Infinite Hackathon at DevCon Bangkok.
              </Text>
            </Box>
            {/* <Box p={5} border="1px solid" borderColor="gray.200" borderRadius="lg" bg="white" _hover={{ borderColor: "green.400", shadow: "md" }} transition="all 0.2s">
              <HStack spacing={3} mb={2}>
                <Box w={3} h={3} bg="green.500" borderRadius="full" />
                <Text fontSize="lg" fontWeight="600" color="gray.900">zKnowledge Base</Text>
              </HStack>
              <Text fontSize="md" lineHeight="1.6" color="gray.600">
                AI-powered semantic search for research papers. Won Best Decentralized App at TreeHacks 2024 out of 1500+ participants
              </Text>
            </Box> */}
          </VStack>
        </Box>
        <Box>
          <HStack spacing={3} mb={1}>
            <FaBriefcase color="#EA580C" size={18} />
            <Heading fontSize="xl" fontWeight="400" color="gray.800" pb={2}>
              Experience
            </Heading>
          </HStack>
          <Box borderBottom="2px solid" borderColor="gray.200" width="300px" mb={4} />
          <VStack align="start" spacing={5}>
            <Box>
              <Text fontSize="lg" fontWeight="500" color="gray.800" mb={1}>
                Software Engineer (Contract) • <Link href="https://bittensor.com/" isExternal color="blue.600" _hover={{ color: "blue.800" }}>Bittensor</Link>
              </Text>
              <Text fontSize="md" lineHeight="1.6" color="gray.600">
                built unified API and routing model for subnets à la OpenRouter
              </Text>
            </Box>
            <Box>
              <Text fontSize="lg" fontWeight="500" color="gray.800" mb={1}>
                Product Management Intern • <Link href="https://affogato.ai/" isExternal color="blue.600" _hover={{ color: "blue.800" }}>Affogato AI</Link> (YC S21)
              </Text>
              <Text fontSize="md" lineHeight="1.6" color="gray.600">
                researched stablecoin payment solutions 
              </Text>
            </Box>
            <Box>
              <Text fontSize="lg" fontWeight="500" color="gray.800" mb={1}>
                Campus Ambassador • <Link href="https://www.perplexity.ai/" isExternal color="blue.600" _hover={{ color: "blue.800" }}>Perplexity</Link>
              </Text>
              <Text fontSize="md" lineHeight="1.6" color="gray.600">
                led growth initiatives
              </Text>
            </Box>
          </VStack>
        </Box>

        <Box>
          <HStack spacing={3} mb={1}>
            <FaBookOpen color="#7C3AED" size={18} />
            <Heading fontSize="xl" fontWeight="400" color="gray.800" pb={2}>
              Recently reading
            </Heading>
          </HStack>
          <Box borderBottom="2px solid" borderColor="gray.200" width="300px" mb={4} />
          <VStack align="start" spacing={2}>
            <Text fontSize="lg" color="gray.700">
              • <Link href="https://www.amazon.com/Why-Greatness-Cannot-Planned-Objective/dp/3319155237" isExternal color="blue.600" _hover={{ color: "blue.800" }}>Why Greatness Cannot Be Planned</Link>
            </Text>
            <Text fontSize="lg" color="gray.700">
              • <Link href="https://www.amazon.com/Range-Generalists-Triumph-Specialized-World/dp/0735214484" isExternal color="blue.600" _hover={{ color: "blue.800" }}>Range: Why Generalists Triumph in a Specialized World</Link>
            </Text>
            <Text fontSize="lg" color="gray.700">
              • <Link href="https://www.amazon.com/More-Money-Than-God-Hedge/dp/0143119419" isExternal color="blue.600" _hover={{ color: "blue.800" }}>More Money Than God</Link>
            </Text>
            <Text fontSize="lg" color="gray.700">
              • <Link href="https://www.amazon.com/Bad-Blood-Secrets-Silicon-Startup/dp/152473165X" isExternal color="blue.600" _hover={{ color: "blue.800" }}>Bad Blood</Link>
            </Text>
            <Text fontSize="lg" color="gray.700">
              • <Link href="https://www.amazon.com/Big-Short-Inside-Doomsday-Machine/dp/0393338827" isExternal color="blue.600" _hover={{ color: "blue.800" }}>The Big Short</Link>
            </Text>
          </VStack>
        </Box>

        <Box>
          <HStack spacing={3} mb={1}>
            <FaPaperPlane color="#0891B2" size={18} />
            <Heading fontSize="xl" fontWeight="400" color="gray.800" pb={2}>
              Get in touch
            </Heading>
          </HStack>
          <Box borderBottom="2px solid" borderColor="gray.200" width="300px" mb={4} />
          <Text fontSize="lg" lineHeight="1.8" color="gray.700">
            My best ideas come from talking with people who think differently. 
            <br />
            Always down to chat →{' '}
            <Link href="mailto:ethanmlam@berkeley.edu" color="blue.600" textDecoration="underline">
              ethanmlam@berkeley.edu
            </Link>
          </Text>
        </Box>
      </VStack>
    </Box>
  );
}
