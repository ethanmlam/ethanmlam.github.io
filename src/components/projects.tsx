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
        "Smart contract and website integration allowing users to mint exclusive NFTs",
      image: "https://i.ibb.co/RvRLCSz/zetta.png",
      technologies: ["Solidity", "React", "TypeScript", "GraphQL"],
      association: "Utopic.ai",
      github: "",
      demo: "",
      longDescription:
        "sample",
    },
    {
      title: "Future Fund",
      description:
        "An autonomous, decentralized, college-tuition funding platform",
      image: "https://i.ibb.co/XYVmHDz/babpoll.png",
      technologies: ["Solidity", "Python", "Firebase", "FastAPI"],
      association: "Decentralized Finance",
      github: "https://github.com/adriankwann/babpollfront",
      demo: "https://www.youtube.com/embed/Wcbaz2JtV-0&t=3s",
      longDescription:
        "Future Fund, developed from Sept to Nov 2023, is an innovative college-tuition crowdfunding platform that leverages Solidity, React, and JavaScript to ensure accessible, transparent, cheap, and quick tuition fundraising. By incorporating a unique 'verifier' system (the college), the platform establishes a new standard for control and security.",
    },
    {
      title: "CPU",
      description:
        "Virtual CPU utilizing C and Logisim, executing RISC-V commands",
      image: "https://i.ibb.co/cxDvqZw/Screenshot-2023-04-24-at-3-30-59-PM.png",
      technologies: ["C", "Logisim"],
      association: "",
      github: "https://github.com/adriankwann/dexapp",
      demo: "https://gifyu.com/image/SQj2R",
      longDescription:
        "Implemented advanced features, such as SIMD pipelining, to speed up the CPU's processing efficiency by 200%",
    },
    {
      title: "SIXT33N",
      description:
        "Voice-controlled car with microcontroller, circuits, and PCBs",
      image:
        "https://cloudstudio.com.au/wp-content/uploads/2021/06/GitWorkflow-4.png",
      technologies: ["C++"],
      association: "",
      github: "https://github.com/adriankwann/61b/tree/main/gitlet",
      demo: "",
      longDescription:
        " Developed in Java between April and May 2022, the voice controlled car required closed-loop control logic, audio signal amplification and denoising circuits to recognize 4 voice commands to move in the 4 different directions.",
    },
    {
      title: "Fortress",
      description:
        "Mood-based Song Recommendation Engine",
      image: "https://i.ibb.co/px90hRH/saas.png",
      technologies: ["React", "Flask"],
      association: "CalHacks 2022",
      github: "https://github.com/ethan-m-lam/CalHacks_fortress",
      demo: "",
      longDescription: "Website built on React and Flask. User drags a slider to select a mood ranging from happy to sad, and receives a list of song recommendations that fit that mood",
    },
    {
      title: "Flower World",
      description:
        "Rogue-Like Flower-Collecting RPG Game",
      image: "https://i.ibb.co/7VGkZXk/Screenshot-2023-06-28-at-3-38-15-PM.png",
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
