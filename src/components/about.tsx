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


export default function About() {
  


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
    fontFamily: "Montserrat, sans-serif",
    fontWeight: 300,
    fontSize: "1.5rem",
  };
  const headingSize = useBreakpointValue({ base: "100%", md: "xl" });
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
          
    
      /* <Box
        bg="lime.000"  // Background color
        // flex="0 0 250px"
        color="black"   // Text color
        width="350px"   // Fixed width of the side panel
        p={5}           // Padding
        boxShadow="md"  // Box shadow
        position="fixed" // Fixed position
        left={0}         // Fixed to the left side
        top={0}          // Fixed to the top
        height="100%"    // Full height of the viewport
        justifyContent="flex-start"
      >
        <VStack
          width="100%"
          paddingX={8}
          zIndex={999}
          spacing={5}
        >
          {/* Content of the fixed side panel */
          // {/* Buffer Box */}
      //     <Box height="25px" />

      //     {/* Heading */}
      //     <Heading fontWeight="20" fontSize={largeheadingSize} >
      //     Ethan Lam
      //     </Heading>
          

      //     {/* Image */}
      //     <Image
      //       src="https://i.ibb.co/6bYBGDq/IMG-1048-copy.png"
      //       alt="Headshot"
      //       w={imageSize}
      //       h={imageSize}
      //       className="rounded-md"
      //     /> 
      //     {/* twitter github etc */}
      //     <Box>
      //       <header style={headerStyle}>
      //         <HStack
      //           justifyContent="space-between"
      //           width="100%"
      //           paddingX={8}
      //           zIndex={999}
      //           spacing={4}

      //         >
      //           {/* <Box flex="1" textAlign="left" zIndex="99">
      //             <Link href="/" _hover={{ textDecoration: "none" }}>
      //               <h1 style={headingStyle}>Ethan Lam</h1>
      //             </Link>
      //           </Box> */}
      //           <HStack spacing={4} zIndex="99">
      //             <Link href="https://github.com/ethan-m-lam" isExternal>
      //               <FaGithub size={24} />
      //             </Link>
      
      //             <Link href="https://twitter.com/adriankwann" isExternal>
      //               <FaTwitter size={24} />
      //             </Link>
      //             <Link href="https://www.linkedin.com/in/ethan-m-lam/" isExternal>
      //               <FaLinkedin size={24} />
      //             </Link>
      //           </HStack>
      //         </HStack>
      //       </header>
      //       <Divider orientation="horizontal" />
      //     </Box>
      //   </VStack>

    <Box flex="1"  marginLeft="30px" marginTop="75px" marginBottom="50px">
      {/* Your main content goes here */}
      <Box height="px" />
      
      {/* <HeroSection /> */}
      <Stack
        direction={{ base: "column", md: "row" }}
        spacing={{ base: 5, md: 25 }}
        align={{ base: "center", md: "start" }}
        justify={{ md: "space-between" }} // Add this line
        data-aos="fade-up"
      >
        

        {/* Text content */}
        <Box flex="1" pr={{ base: 0, md: 100 }}>
          <Heading fontWeight="20" fontSize={largeheadingSize}>
            Hi there! My name is Ethan Lam. 
          </Heading>
        {/* Additional text content and buttons can be added here */}
          <Text fontWeight="20" fontSize={headingSize}>
              I’m a 3rd year at University of California, Berkeley studying EECS and Industrial Engineering & Operations Research (IEOR). My academic interests are in LLMs, machine learning, zero knowledge proofs,
            and decentralized finance. I also enjoy playing poker, watching Dodgers baseball, working out, and listening to music.
          </Text>
        </Box>
      </Stack>
      
      { /*Student Orgs below (deleted)*/  }
      {/* <Box data-aos="zoom-in-left" marginTop={{ base: "5vh", md: "10vh" }}>
        <Heading
          size="lg"
          textAlign="center"
          fontWeight="100"
          marginBottom={{ base: "20px", md: "40px" }}
        >
          Student Organizations
        </Heading>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center" // Ensure the items are centered
          justifyContent="center"
          marginBottom="25px"
          marginTop="40px"
          width="100%" // Ensure it takes full width
        >
          <Stack
            direction={{ base: "column", lg: "row" }}
            data-aos="fade-in"
            spacing={8}
            align="center" // Center items in the Stack
            justify="center" // Center items in the Stack for horizontal centering
            fontWeight="300"
            maxWidth="800px" // Limit the width of the Stack on larger screens
            width="100%" // Ensure Stack takes full width
            marginX="auto" // Center the Stack horizontally
          >
            <ClubCard
              name="Blockchain at Berkeley"
              description={babDescription}
              link="https://blockchain.berkeley.edu/"
              logo="https://i.ibb.co/dQdstSH/1519869642581.jpg"
              delay={100}
            />

            <ClubCard
              name="Institute of Industrial and Systems Engineers"
              description={saasDescription}
              link="https://iise.berkeley.edu/"
              logo="https://i.ibb.co/PmG450P/Screenshot-2023-06-27-at-11-56-54-AM.png"
              delay={200}
            />
          </Stack>
        </Box>
      </Box> */}


      {/* <Box data-aos="fade-up" marginTop="10vh">
        <Heading size="lg" textAlign="center" fontWeight="100">
          Previous Coursework
        </Heading>
      </Box>

      <Box
        display="flex"
        alignItems="flex-start"
        justifyContent="center"
        height="auto"
        marginBottom="25px"
        data-aos="zoom-in"
        marginTop={{ base: "5vh", md: "7vh" }}
      >
        <Stack
          direction={{ base: "column", lg: "row" }}
          spacing={8}
          align="center"
          maxWidth={{ base: "100%", md: "1200px" }} // Added maxWidth to limit the width of the stack on larger screens
          marginX="auto" // Center the stack horizontally
        >
          //class cards
          {rows.map((row, index) => (
            <Stack
              key={index}
              direction="column"
              spacing={4}
              width={{ base: "100%", md: "auto" }}
            >
              {row.map((classItem) => (
                <ClassCard
                  key={classItem.name}
                  name={classItem.name}
                  description={classItem.description}
                  link={classItem.link}
                />
              ))}
            </Stack>
          ))}
        </Stack>
        
      </Box> */}
    </Box>       
    // </Box>
  );
}
