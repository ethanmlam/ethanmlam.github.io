import React, { useEffect } from "react";
import {
  VStack,
  Stack,
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
        "Distributed 100 NFTs to top content creators in a user-friendly process. Utilizing the Web3.js library, I crafted smart contracts for the minting and deployment of NFTs and seamlessly integrated with our React Frontend through ABI connections. Additionally, I coded the NFT Program website section on the RedwoodJS stack (React, TypeScript, Prisma and GraphQL).",
    },
    {
      title: "Fortress",
      description:
        "Mood-based Song Recommendation Engine",
      image: "https://i.ibb.co/nC6WQy2/Screen-Shot-2024-01-10-at-1-16-44-PM.png",
      technologies: ["React", "Flask", "PyTorch"],
      association: "CalHacks 2022",
      github: "https://github.com/ethan-m-lam/CalHacks_fortress",
      demo: "",
      longDescription: "Fortress is an advanced song recommendation system that utilizes a technology stack comprising React, Flask, and PyTorch. It employs sentiment analysis on a curated dataset containing the 10,000 most-played songs. Each song is assigned a normalized score and the results are stored in a Flask backend. The user interface allows individuals to manipulate a slider to indicate their desired mood, prompting the system to generate and present a list of tailored song recommendations. Fortress garnered an approval rating exceeding 90% in a poll conducted among fellow hackers at CalHacks2022.",
    },
    {
      title: "Future Fund",
      description:
        "Decentralized College Tuition Funding Platform",
      image: "https://i.ibb.co/BBH2x23/Screen-Shot-2024-01-13-at-10-37-09-PM.png",
      technologies: ["Solidity", "Python", "Firebase", "FastAPI"],
      association: "Decentralized Finance",
      github: "https://github.com/ownssi/Defi-Fa2023",
      demo: "",
      longDescription:
        "Future Fund is a full-stack college tuition crowdfunding platform leveraging Solidity smart contracts to ensure accountability for donors, students, and colleges. Project received VC funding interest.",
    },
    {
      title: "SIXT33N",
      description:
        "Voice-controlled car with Arduino microcontroller, circuits, and PCBs",
      image:
        "https://i.ibb.co/JjRx4Gf/IMG-0503.jpg",
      technologies: ["C++", "Arduino"],
      association: "",
      github: "",
      demo: "",
      longDescription:
        "SIXT33N is a voice-controlled car capable of recognizing 4 distinct voice commands to move in all 4 directions. SIXT33N features ML techniques (PCA Classification) to reduce noise and perform spoken commands. Built from ground up using circuits and PCBs, SIXT33N also required closed-loop control logic, audio signal amplification, and denoising circuits.",
    },  
    {
      title: "32-bit CPU",
      description:
        "Virtual CPU on Logisim with complete RISC-V command capability",
      image: "https://i.ibb.co/cQqpNVW/Screen-Shot-2024-01-09-at-5-12-45-PM.png",
      technologies: ["C", "Logisim"],
      association: "",
      github: "https://github.com/ethan-m-lam/cpu/",
      demo: "",
      longDescription:
        "32-bit CPU is a virtual CPU with RISC-V command capability. It contains advanced features, such as SIMD pipelining, to speed up the CPU's processing efficiency by 200%.",
    },
    
    {
      title: "Flower World",
      description:
        "Rogue-Like Flower Collecting RPG Game with Levels",
      image: "https://i.ibb.co/TRDsHNL/Screen-Shot-2024-01-13-at-10-29-40-PM.png",
      technologies: ["Java", "JUnit"],
      association: "",
      github: "",
      demo: "",
      longDescription: "Flower World is a rogue-like RPG based on a user traversing a randomly generated world and collecting as many flowers as possible within the time constraint. It utilizes data structures like HashMaps and traversals like Breadth First Search to ensure a robust runtime.",
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
      <Stack spacing="20px" align="center" direction={{ base: 'column', md: 'column', lg: 'column' }}>
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
      </Stack>
    </Box>
    </Box>
  );
}
