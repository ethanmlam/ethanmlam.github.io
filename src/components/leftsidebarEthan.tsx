import React from "react";
import {
  Box,
  Heading,
  useBreakpointValue,
  Image,
  HStack,
  VStack,
  Divider,
  Link,
  Text,
  Button,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import "aos/dist/aos.css";
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter, FaArrowRight } from "react-icons/fa";

const LeftSidebar = () => {
const headerStyle = {
  display: "flex",
  backgroundColor: "white",
  color: "black",
  height: "80px",
};

const headingSize = useBreakpointValue({ base: "100%"});
const largeheadingSize = useBreakpointValue({ base: "150%"});
const imageSize = useBreakpointValue({ base: "250px"});

  return (
    <Box
      bg="white.000"  
      color="black"   
      width={{ base: "0px", lg: "350px" }}   
      boxShadow="md"  
      position="fixed" 
      left={0}         
      top={0}          
      height="100%"    
      flexShrink={0}
      display={{ base: "none",lg: "block" }}
    >
      <VStack
        width="100%"
        paddingX={8}
        zIndex={999}
        spacing={5}
      >
        {/* Buffer Box */}
        <Box height="25px" />

        {/* Heading */}
        <Heading fontWeight="20" fontSize={largeheadingSize} >
        Ethan Lam
        </Heading>

        {/* Image */}
        <Image
          src="/ethan_pfp.jpeg"
          alt="Headshot"
          w={imageSize}
          h={312.5}
          className="rounded-md"
        /> 
        {/* Social Media Icons*/}
        <Box>
          <header style={headerStyle}>
            <HStack
              justifyContent="space-between"
              width="100%"
              paddingX={8}
              zIndex={999}
              spacing={4}
            >
              <motion.button whileHover={{ scale: 1.5 }} whileTap={{ scale: 0.9 }}>
                <Link href="https://www.twitter.com/ethanmlam" isExternal>
                  <FaTwitter size={30} />
                </Link>
              </motion.button>
              <motion.button whileHover={{ scale: 1.5 }} whileTap={{ scale: 0.9 }}>
                <Link href="https://github.com/ethanmlam" isExternal>
                  <FaGithub size={30} />
                </Link>
              </motion.button>
              <motion.button whileHover={{ scale: 1.5 }} whileTap={{ scale: 0.9 }}>
                <Link href="mailto:ethanmlam@berkeley.edu" isExternal>
                  <FaEnvelope size={30} />
                </Link>
              </motion.button>
              <motion.button whileHover={{ scale: 1.5 }} whileTap={{ scale: 0.9 }}>
                <Link href="https://www.linkedin.com/in/ethan-m-lam/" isExternal>
                  <FaLinkedin size={30} />
                </Link>
              </motion.button>
            </HStack>
          </header>
          <Divider orientation="horizontal" />
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          marginBottom="25px"
          data-aos="zoom-out-up"
          marginTop="0px"
          maxWidth={{ base: "90%", sm: "80%", md: "70%", lg: "50%" }}
          marginLeft="auto"
          marginRight="auto"
        >
          <Heading fontWeight="2" fontSize={headingSize} >
            contact me: 
            ethanmlam@berkeley.edu
          </Heading>
          
          {/* Add spacing here */}
          <Box height="20px" />
          
          <Link
            href="https://www.fivew.xyz"
            isExternal
            _hover={{ textDecoration: "none", transform: "scale(1.05)" }}
            display={{ md: "none", lg: "block" }}
          >
            <Button
              size="lg"
              variant="outline"
              colorScheme="blue"
              rightIcon={<FaArrowRight />}
              _hover={{ bg: "blue.50" }}
            >
              <VStack align="start" spacing={1}>
                <Heading as="h3" fontWeight="600" fontSize={headingSize}>
                  Building fivew.xyz
                </Heading>
              </VStack>
            </Button>
          </Link>
        </Box>
      </VStack>
    </Box>
  );
}  
export default LeftSidebar;