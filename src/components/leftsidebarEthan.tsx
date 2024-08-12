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
  Button,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import "aos/dist/aos.css";
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter } from "react-icons/fa";

const LeftSidebar = () => {
const headerStyle = {
  display: "flex",
  backgroundColor: "white",
  color: "black",
  height: "80px",
};

// const headingStyle = {
//   fontFamily: "Lato, serif",
//   fontWeight: 300,
//   fontSize: "1.5rem", 
// };

const headingSize = useBreakpointValue({ base: "100%"});
const largeheadingSize = useBreakpointValue({ base: "100%"});
const imageSize = useBreakpointValue({ base: "250px"});


// const classes = [
//   {
//     name: "EECS 16B",
//     description: "Designing Information Devices and Systems II",
//     link: "https://www.eecs16b.org/",
//   },
//   {
//     name: "CS 61B",
//     description: "Data Structures and Algorithms",
//     link: "https://fa22.datastructur.es/",
//   },
//   {
//     name: "CS 61C",
//     description: "Great Ideas in Computer Architecture",
//     link: "https://cs61c.org/",
//   },
//   {
//     name: "CS 70",
//     description: "Discrete Mathematics and Probability Theory",
//     link: "https://eecs70.org/",
//   },
//   {
//     name: "CS 194-177",
//     description: "Decentralized Finance",
//     link: "https://rdi.berkeley.edu/berkeley-defi/f23",
//   },
//   {
//     name: "Data 100",
//     description: "Principles of Data Science",
//     link: "https://ds100.org/fa23/",
//   },
// ];

// const rows = [];
// const rowSize = 2;

// for (let i = 0; i < classes.length; i += rowSize) {
//   const row = classes.slice(i, i + rowSize);
//   rows.push(row);
// }

  return (
    <Box
      bg="white.000"  // Background color
      color="black"   // Text color
      width={{ base: "0px", lg: "350px" }}   // Fixed width of the side panel
      boxShadow="md"  // Box shadow
      position="fixed" // Fixed position
      left={0}         // Fixed to the left side
      top={0}          // Fixed to the top
      height="100%"    // Full height of the viewport
      flexShrink={0}
      display={{ base: "none",lg: "block" }}
    >
      {/* Content of the fixed side panel */}
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
          src="https://i.ibb.co/K0QYdgR/5-D075-D4-A-BE43-4162-B564-D64-C79-A16-C52-1-201-a.jpg"
          alt="Headshot"
          w={imageSize}
          h={imageSize}
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
                  <FaTwitter size={24} />
                </Link>
              </motion.button>
              <motion.button whileHover={{ scale: 1.5 }} whileTap={{ scale: 0.9 }}>
                <Link href="https://github.com/ethan-m-lam" isExternal>
                  <FaGithub size={24} />
                </Link>
              </motion.button>
              {/* <motion.button whileHover={{ scale: 1.5 }} whileTap={{ scale: 0.9 }}>
              <Link href="ethanmlam@berkeley.edu" isExternal>
                <FaEnvelope size={24} />
              </Link>
              </motion.button> */}
              <motion.button whileHover={{ scale: 1.5 }} whileTap={{ scale: 0.9 }}>
                <Link href="https://www.linkedin.com/in/ethan-m-lam/" isExternal>
                  <FaLinkedin size={24} />
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
        

        {/* //Resume
        <Box textAlign="center" marginTop="25px" marginBottom="15vh">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            style={{
              background:
                "linear-gradient(to right, rgba(29, 211, 189, 0.3), rgba(62, 100, 255, 0.3))",
              display: "flex",
              borderRadius: "25px",
              padding: "10px 10px",
              justifyContent: "center",
              minWidth: "150px", // Added minimum width to prevent button from shrinking too much
            }}
            onClick={onOpen}
          >
            <Text fontSize="xl" fontWeight="400">
              {" "}
              View Resume{" "}
            </Text>
          </motion.button>
        </Box>
        <ResumeModal isOpen={isOpen} onClose={onClose} />   */}
        </Box>
        <Button size='lg' bgGradient="linear-gradient(to right, rgba(300,309,206,0.1),  rgba(0,212,255,0.41), rgba(19,109,201,0.8))">
          <Link
            href={"https://www.fivew.xyz"}
            isExternal
            _hover={{ textDecoration: "none" }}
            display = {{md: "0px", lg: "block"}}
          >
            <Heading fontWeight="600" fontSize={headingSize} >
              check out what<br></br>I am building @ fivew.xyz
            </Heading>
          </Link>
        </Button>
      </VStack>
    </Box>
  );
}  
export default LeftSidebar;
