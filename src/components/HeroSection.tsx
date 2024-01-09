import React, { useEffect } from "react";
import {
  Box,
  Heading,
  useBreakpointValue,
  Stack,
  Text,
  Flex,
  Image,
  useDisclosure,
  HStack,
  VStack,
  Divider,
  Link,
} from "@chakra-ui/react";
import AOS from "aos";
import "aos/dist/aos.css";
import ClassCard from "./classcard";
import { motion } from "framer-motion";
import ResumeModal from "./resumemodal";
import Wave from "react-wavify";
import ClubCard from "./clubcard";
import CompaniesSection from "./companiesSection";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";


export default function HeroSection() {
  // useEffect(() => {
  //   AOS.init({ duration: 800 });
  // }, []);
  // const Header: React.FC = () => {
  //   return (
   
  // };
  const headerStyle = {
    display: "flex",
    // justifyContent: "center",
    // alignItems: "center",
    backgroundColor: "white",
    color: "black",
    height: "80px",
  };
  
  const headingStyle = {
    fontFamily: "Lato, serif",
    fontWeight: 300,
    fontSize: "1.5rem",
  };

  const headingSize = useBreakpointValue({ base: "100%", md: "lg" });
  const largeheadingSize = useBreakpointValue({ base: "100%", md: "4xl" });
  const imageSize = useBreakpointValue({ base: "250px", md: "250px" });
  const { isOpen, onOpen, onClose } = useDisclosure();

  const saasDescription = [
    "A community of UC Berkeley students with a shared interest in data science.",
    "Fa22: Web Development Committee",
    "Sp23: Web Development Committee",
    "Fa23: Leadership, Web Developer",
  ];

  const babDescription = [
    "A student-run organization at UC Berkeley focused on blockchain innovation via education, research, and consulting.",
    "Sp23: Internal Developer, B@BPoll  Governance: Uniswap, Aave Teams",
    "Fa23: External Developer, TBD Project",
  ];

  const classes = [
    {
      name: "EECS 16B",
      description: "Designing Information Devices and Systems II",
      link: "https://www.eecs16b.org/",
    },
    {
      name: "CS 61B",
      description: "Data Structures and Algorithms",
      link: "https://fa22.datastructur.es/",
    },
    {
      name: "CS 61C",
      description: "Great Ideas in Computer Architecture",
      link: "https://cs61c.org/",
    },
    {
      name: "CS 70",
      description: "Discrete Mathematics and Probability Theory",
      link: "https://eecs70.org/",
    },
    {
      name: "CS 194-177",
      description: "Decentralized Finance",
      link: "https://rdi.berkeley.edu/berkeley-defi/f23",
    },
    {
      name: "Data 100",
      description: "Principles of Data Science",
      link: "https://ds100.org/fa23/",
    },
  ];

  const rows = [];
  const rowSize = 2;

  for (let i = 0; i < classes.length; i += rowSize) {
    const row = classes.slice(i, i + rowSize);
    rows.push(row);
  }

  return (
    // Flex container to hold both the fixed side panel and the main content

    // <Box display="flex" height="100vh">

    // direction={{ base: "column", md: "row" }}
    // spacing={{ base: 5, md: 20 }}
    // align={{ base: "center", md: "start" }}
    // justify={{ md: "space-between" }} // Add this line
    // data-aos="fade-up"
        
  
    <Box
      bg="white.000"  // Background color
      // flex="0 0 250px"
      color="black"   // Text color
      width="350px"   // Fixed width of the side panel
      // p={5}           // Padding
      boxShadow="md"  // Box shadow
      position="fixed" // Fixed position
      left={0}         // Fixed to the left side
      top={0}          // Fixed to the top
      height="100%"    // Full height of the viewport
      flexShrink={0}
    >
      <VStack
        width="100%"
        paddingX={8}
        zIndex={999}
        spacing={5}
      >
        {/* Content of the fixed side panel */}
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
        {/* twitter github etc */}
        <Box>
          <header style={headerStyle}>
            <HStack
              justifyContent="space-between"
              width="100%"
              paddingX={8}
              zIndex={999}
              spacing={4}

            >
              {/* <Box flex="1" textAlign="left" zIndex="99">
                <Link href="/" _hover={{ textDecoration: "none" }}>
                  <h1 style={headingStyle}>Ethan Lam</h1>
                </Link>
              </Box> */}
              <HStack spacing={4} zIndex="99">
                <Link href="https://github.com/ethan-m-lam" isExternal>
                  <FaGithub size={24} />
                </Link>
    
                {/* <Link href="https://twitter.com/adriankwann" isExternal>
                  <FaTwitter size={24} />
                </Link> */}
                <Link href="https://www.linkedin.com/in/ethan-m-lam/" isExternal>
                  <FaLinkedin size={24} />
                </Link>
              </HStack>
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
        <ResumeModal isOpen={isOpen} onClose={onClose} />  
      </Box>
      </VStack>

    </Box>
  );
}  


// {/* 
// // import { useState, useEffect } from "react";
// // import {
// //   HStack,
// //   Image,
// //   Heading,
// //   useBreakpointValue,
// //   Box,
// //   Text,
// //   Button,
// //   Stack,
// // } from "@chakra-ui/react";
// // import { Link as ScrollLink } from "react-scroll";
// // import AOS from "aos";
// // import "aos/dist/aos.css";
// // import { motion } from "framer-motion";
// // const HeroSection = () => {
// //   useEffect(() => {
// //     AOS.init({ duration: 800 });
// //   }, []);
// //   const bulletPoints = [
// //     "EECS and Industrial Engineering and Operations Research (IEOR) Double Major @ UC Berkeley",
// //     "SWE Intern @ Utopic AI",
// //     "Product Management Intern @ RoverX (YC S21)",
// //     "XRP Ledger Lead Campus Ambassador",
// //     "Previous: PM Intern @ Avalanche Computing",
// //   ];

// //   const [currentIndex, setCurrentIndex] = useState(0);
// //   const [fade, setFade] = useState(false);
// //   const scrollLinkStyles = {
// //     cursor: "pointer",
// //   };
// //   const headingSize = useBreakpointValue({ base: "100%", md: "lg" });
// //   const largeheadingSize = useBreakpointValue({ base: "100%", md: "4xl" });
  

// //   useEffect(() => {
// //     const interval = setInterval(() => {
// //       setFade(true); // Start fade-out animation

// //       setTimeout(() => {
// //         setCurrentIndex((prevIndex) => (prevIndex + 1) % bulletPoints.length);
// //         setFade(false); // Start fade-in animation
// //       }, 500); // Delay before switching text and starting fade-in
// //     }, 3000); // Change text every 3 seconds

// //     return () => clearInterval(interval); // Clean up the interval on unmount
// //   }, []);

// //   return (
// //   <Box className="relative h-[60vh] bg-white sm:h-[38vh] lg:h-[83vh]">
// //     <Box className="relative isolate flex flex-row items-start justify-center px-6 pt-6 lg:px-8">
// //       <Box className="ml-auto max-w-7xl items-start py-8 sm:py-32 lg:py-40">
// //         <Stack
// //           direction={{ base: "column", md: "row" }}
// //           spacing={{ base: 5, md: 20 }}
// //           align={{ base: "center", md: "start" }}
// //           justify={{ md: "space-between" }} // Add this line
// //           data-aos="fade-up"
// //         >
          

// //           {/* Text content */
// //           <Box flex="1" pr={{ base: 0, md: 100 }}>
// //             <Heading fontWeight="20" fontSize={largeheadingSize}>
// //               Hi there! My name is Ethan Lam. 
// //             </Heading>
// //           {/* Additional text content and buttons can be added here */}
// //             <Heading fontWeight="20" fontSize={headingSize}>
// //                 I’m a 3rd year at University of California, Berkeley studying EECS and Industrial Engineering & Operations Research (IEOR). My academic interests are in LLMs, machine learning, zero knowledge proofs,
// //               and decentralized finance. I also like playing poker, watching Dodgers baseball or Rams football, working out, and listening to music.
// //             </Heading>
// //           </Box>
// //         </Stack>
// //       </Box>
// //     </Box>
// //   </Box>

// //   );
// // }
// // export default HeroSection; */}
