import React from "react";
import {
  Box,
  Heading,
  useBreakpointValue,
  Stack,
  Text,
  Image,
} from "@chakra-ui/react";
import "aos/dist/aos.css";
// import ClassCard from "./classcard";

export default function About() {

  
  const headingSize = useBreakpointValue({ base: "100%", md: "xl" });
  const largeheadingSize = useBreakpointValue({ base: "100%", md: "4xl" });
  const imageSize = useBreakpointValue({ base: "250px", md: "250px" });


  return (

    <Box flex="1"  marginLeft="30px" marginTop="75px" marginBottom="50px" marginRight={{base: "30", lg: '3%' }}>
      {/* Your main content goes here */}
      {/* <HeroSection /> */}
      <Stack
        direction={{ base: "column", md: "row", lg: "row" }}
        spacing={{ base: 5, md: 25 }}
        align={{ base: "center", md: "start" }}
        justify={{ md: "space-between" }} // Add this line
      >
        

        {/* Text content */}
        <Box flex="1" pr={{ base: 0, md: 140 }}>
          <Heading fontWeight="20" fontSize='2xl' textAlign="center" display = {{base: "block", md: "none"}}>
            Hi there!<br></br>My name is Ethan Lam. 
          </Heading>
          <Image
            src="/ethan_pfp.jpeg"
            alt="Headshot"
            w={imageSize}
            h={imageSize}
            textAlign="center"
            mx = "auto"
            mb = "20px"
            display = {{base: "block", md: "none"}}
            className="rounded-md"
          /> 
          <Heading fontWeight="20" fontSize={largeheadingSize} display = {{base: "none", md: "block"}}>
            Hi there! My name is Ethan Lam. 
          </Heading>
        {/* Additional text content and buttons can be added here */}
          <Text fontWeight="20" fontSize={headingSize}>
              I’m a Senior at University of California, Berkeley studying Electrical Engineering and Computer Science (EECS) and Industrial Engineering and Operations Research (IEOR), providing me a holistic perspective within hardware, software, and organizational contexts. 
              <br></br>Currently, I am building FiveW, an Ava Labs funded SocialFi platform for researchers.
              <br></br>My academic interests are in decentralized finance, generative AI, and emerging tech entrepreneurship. 
              <br></br>I enjoy playing poker, watching LA sports, working out, and attending music festivals.
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
