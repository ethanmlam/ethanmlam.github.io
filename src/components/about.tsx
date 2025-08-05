import React from "react";
import {
  Box,
  Heading,
  Text,
  Image,
  VStack,
  HStack,
  Link,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter, FaMapMarkerAlt, FaRocket, FaGamepad, FaLaptopCode, FaBriefcase, FaPaperPlane, FaPlane } from "react-icons/fa";

export default function About() {
  return (
    <Box>
      {/* Header */}
      <HStack spacing={8} align="start" mb={12} mt={12}>
        <Image
          src="/ethan_pfp.jpeg"
          alt="Ethan Lam"
          w="100px"
          h="125px"
          borderRadius="12px"
          flexShrink={0}
        />
        <VStack align="start" spacing={4} flex="1">
          <Heading fontSize="4xl" fontWeight="300">
            Ethan Lam
          </Heading>
          <HStack spacing={4} mb={2}>
            <Text fontSize="lg" color="gray.600">
              @ethanmlam
            </Text>
            <Link href="https://x.com/mission__ctrl" isExternal _hover={{ color: "blue.600" }}>
              <HStack spacing={1} color="gray.500" _hover={{ color: "blue.600" }}>
                <FaMapMarkerAlt size={14} />
                <Text fontSize="md">Mission Control House (Satellite), SF</Text>
              </HStack>
            </Link>
          </HStack>
          <HStack spacing={6}>
            <Link href="https://www.twitter.com/ethanmlam" isExternal color="gray.600" _hover={{ color: "gray.800", transform: "scale(1.3)" }} transition="all 0.2s" title="@ethanmlam">
              <FaTwitter size={20} />
            </Link>
            <Link href="https://github.com/ethanmlam" isExternal color="gray.600" _hover={{ color: "#22c55e", transform: "scale(1.3)", filter: "drop-shadow(0 0 8px #22c55e40)" }} transition="all 0.2s" title="@ethanmlam">
              <FaGithub size={20} />
            </Link>
            <Link href="https://www.linkedin.com/in/ethanmlam/" isExternal color="gray.600" _hover={{ color: "gray.800", transform: "scale(1.3)" }} transition="all 0.2s" title="/in/ethan-m-lam">
              <FaLinkedin size={20} />
            </Link>
          </HStack>
        </VStack>
      </HStack>

      {/* Content */}
      <VStack spacing={12} align="start">
        <Box>
          <Text fontSize="xl" lineHeight="1.7" color="gray.800" fontWeight="400">
            Hey! I'm a builder who loves creating impactful applications. Recently graduated from UC Berkeley with a degree in Industrial Engineering & a minor in EECS. 
          </Text>
        </Box>

        <Box>
          <HStack spacing={3} mb={4}>
            <FaRocket color="#2563EB" size={18} />
            <Heading fontSize="xl" fontWeight="400" color="gray.800" pb={2}>
              Currently
            </Heading>
          </HStack>
          <Box borderBottom="2px solid" borderColor="gray.200" width="200px" mb={4} />
          <Text fontSize="lg" lineHeight="1.8" color="gray.700">
Co-founding FiveW - a way to discover and digest the latest AI research.
          </Text>
        </Box>

        <Box>
          <HStack spacing={3} mb={4}>
            <FaGamepad color="#059669" size={18} />
            <Heading fontSize="xl" fontWeight="400" color="gray.800" pb={2}>
              When I'm not coding
            </Heading>
          </HStack>
          <Box borderBottom="2px solid" borderColor="gray.200" width="200px" mb={4} />
          <VStack align="start" spacing={2}>
            <Text fontSize="lg" lineHeight="1.7" color="gray.700">
              <Text as="span" fontWeight="500" color="gray.800">food, poker, running, and concerts</Text> 
            </Text>
          </VStack>
        </Box>

        <Box>
          <HStack spacing={3} mb={4}>
            <FaLaptopCode color="#7C3AED" size={18} />
            <Heading fontSize="xl" fontWeight="400" color="gray.800" pb={2}>
              Projects
            </Heading>
          </HStack>
          <Box borderBottom="2px solid" borderColor="gray.200" width="200px" mb={4} />
          <VStack align="start" spacing={4}>
            <Box p={5} border="1px solid" borderColor="gray.200" borderRadius="lg" bg="white" _hover={{ borderColor: "#22c55e", shadow: "lg", transform: "translateY(-2px)" }} transition="all 0.3s">
              <HStack spacing={3} mb={2}>
                <Box w={3} h={3} bg="#22c55e" borderRadius="full" />
                <Text fontSize="lg" fontWeight="600" color="gray.900">zKnowledge Base</Text>
              </HStack>
              <Text fontSize="md" lineHeight="1.6" color="gray.600">
                AI-powered semantic search for research papers. Won TreeHacks 2024 Best Decentralized App out of 1500+ participants.
              </Text>
            </Box>
            <Box p={5} border="1px solid" borderColor="gray.200" borderRadius="lg" bg="white" _hover={{ borderColor: "orange.400", shadow: "lg", transform: "translateY(-2px)" }} transition="all 0.3s">
              <HStack spacing={3} mb={2}>
                <Box w={3} h={3} bg="orange.500" borderRadius="full" />
                <Text fontSize="lg" fontWeight="600" color="gray.900">Reliablocks</Text>
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
          <HStack spacing={3} mb={4}>
            <FaBriefcase color="#EA580C" size={18} />
            <Heading fontSize="xl" fontWeight="400" color="gray.800" pb={2}>
              Experience
            </Heading>
          </HStack>
          <Box borderBottom="2px solid" borderColor="gray.200" width="200px" mb={4} />
          <VStack align="start" spacing={5}>
            <Box>
              <Text fontSize="lg" fontWeight="500" color="gray.800" mb={1}>
                Software Engineer (Contract) • Bittensor
              </Text>
              <Text fontSize="md" lineHeight="1.6" color="gray.600">
                Built unified API and routing model (like OpenRouter) for ML subnets.
              </Text>
            </Box>
            <Box>
              <Text fontSize="lg" fontWeight="500" color="gray.800" mb={1}>
                Product Management Intern • Affogato AI (YC S21)
              </Text>
              <Text fontSize="md" lineHeight="1.6" color="gray.600">
                Researched stablecoin payment solutions for small businesses.
              </Text>
            </Box>
            <Box>
              <Text fontSize="lg" fontWeight="500" color="gray.800" mb={1}>
                Campus Ambassador • Perplexity
              </Text>
              <Text fontSize="md" lineHeight="1.6" color="gray.600">
                Led growth initiatives, onboarded 6 Berkeley student organizations.
              </Text>
            </Box>
          </VStack>
        </Box>

        <Box>
          <HStack spacing={3} mb={4}>
            <FaPaperPlane color="#0891B2" size={18} />
            <Heading fontSize="xl" fontWeight="400" color="gray.800" pb={2}>
              Get in touch
            </Heading>
          </HStack>
          <Box borderBottom="2px solid" borderColor="gray.200" width="200px" mb={4} />
          <Text fontSize="lg" lineHeight="1.8" color="gray.700">
            My best ideas come from talking with people who think differently. 
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
