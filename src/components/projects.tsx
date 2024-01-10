import React, { useEffect } from "react";
import {
  VStack,
  HStack,
  Box,
  Heading,
  useDisclosure,
  SimpleGrid,
} from "@chakra-ui/react";
import ProjectCard from "./projectcard";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Projects() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);
  const delayStep = 50;

  const projects = [
    {
      title: "Utopic.ai's NFT Program",
      description:
        "Wrote smart contracts and website integration for NFT Program",
      image: "	https://utopic.ai/static/media/nft.4551bec3.png",
      technologies: ["Solidity", "React", "TypeScript", "GraphQL"],
      association: "Utopic.ai",
      github: "",
      demo: "",
      longDescription:
        "Crafted custom Ethereum smart-contracts for minting and deploying of exclusive NFTs and integrated with website Frontend + MetaMask using React, TypeScript and CSS preparing for NFT launch.",
    },
    {
      title: "Future Fund",
      description:
        "Decentralized College Tuition Funding Platform",
      image: "https://i.ibb.co/Vjvd3Ly/Screen-Shot-2024-01-09-at-5-15-59-PM.png",
      technologies: ["Solidity", "Python", "Firebase", "FastAPI"],
      association: "",
      github: "https://github.com/ownssi/Defi-Fa2023",
      demo: "",
      longDescription:
        "Worked with a team of 4 on the backend and smart contracts for the Future Fund. Developed from Sept to Nov 2023, Future Fund is an innovative college-tuition crowdfunding platform that leverages Solidity, React, and JavaScript to ensure accessible, transparent, cheap, and quick tuition fundraising. By incorporating a unique 'verifier' system (the college), the platform establishes a new standard for control and security.",
    },
    {
      title: "8-bit CPU",
      description:
        "Virtual CPU utilizing C and Logisim with complete RISC-V command capability",
      image: "https://i.ibb.co/cQqpNVW/Screen-Shot-2024-01-09-at-5-12-45-PM.png",
      technologies: ["C", "Logisim"],
      association: "",
      github: "https://github.com/61c-student/sp23-proj3-aariyur",
      demo: "https://gifyu.com/image/SQj2R",
      longDescription:
        "Implemented advanced features, such as SIMD pipelining, to speed up the CPU's processing efficiency by 200%",
    },
    {
      title: "SIXT33N",
      description:
        "Voice-controlled car with Arduino microcontroller, circuits, and PCBs",
        //fix the image and github 
      image:
        "https://cloudstudio.com.au/wp-content/uploads/2021/06/GitWorkflow-4.png",
      technologies: ["C++"],
      association: "",
      github: "https://github.com/adriankwann/61b/tree/main/gitlet",
      demo: "",
      longDescription:
        "Developed in Java between April and May 2022, the voice controlled car required closed-loop control logic, audio signal amplification and denoising circuits to recognize 4 voice commands to move in the 4 different directions.",
    },  
    {
      title: "Fortress",
      description:
        "Mood-based Song Recommendation Engine",
      image: "https://i.ibb.co/LRd89qL/Screen-Shot-2024-01-09-at-5-11-58-PM.png",
      technologies: ["React", "Flask", "PyTorch"],
      association: "CalHacks 2022",
      github: "https://github.com/ethan-m-lam/CalHacks_fortress",
      demo: "",
      longDescription: "Website built on React and Flask. Performed Sentiment Analysis on over 10,000 songs, plotting each on a coordinate axis and orthonormalizing to achieve recommendations. User drags a slider to select a mood ranging from happy to sad, and receives a list of song recommendations that fit that mood",
    },
    {
      //re screenshot without the keyboard sticking in
      title: "Flower World",
      description:
        "Rogue-Like Flower Collecting RPG Game with Levels",
      image: "https://i.ibb.co/zXbzjg1/Screen-Shot-2024-01-09-at-5-10-22-PM.png",
      technologies: ["Java"],
      association: "",
      github: "",
      demo: "",
      longDescription: "Designed a rogue-like RPG based on a user traversing a randomly generated world and collecting as many flowers as possible within the time constraint.",
    },
  ];

  return (
    <Box>
    <Heading
          size="lg"
          marginTop="30px"
          marginLeft="30px"
          textAlign="left"
          // color="transparent"
          // bgGradient="linear-gradient(to right, rgba(29, 211, 189, 0.5), rgba(62, 100, 255, 0.5))"
          // bgClip="text"
          data-aos="fade-up"
          fontWeight="400"
        >
          Projects
    </Heading>
    <Box
      display="flex"
      alignItems="flex-start" // Align items to the top
      justifyContent="center"
      height="auto"
      marginTop="5vh"
    >
      <VStack spacing="20px" align="center">
        <SimpleGrid columns={{ base: 1, lg: 3 }} spacing="20px">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              technologies={project.technologies}
              association={project.association}
              github={project.github}
              longDescription={project.longDescription}
              data-aos="fade-in"
              delay={delayStep * index}
              demo={project.demo}
            />
          ))}
        </SimpleGrid>
      </VStack>
    </Box>
    </Box>
  );
}
