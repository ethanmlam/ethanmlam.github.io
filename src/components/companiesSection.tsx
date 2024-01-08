import React from "react";
import { Box, Heading, Grid, HStack } from "@chakra-ui/react";
import ClubCard from "./clubcard"; // Make sure to import ClubCard component

const zbDescription = [
  "A NFT notification and blockchain analytics app",
  "Su23: Product Management Intern",
  "Project: Case study on Payments",
];

const flowDescription = [
  "An use-to-earn social media platform",
  "Su23: Software Engineering Intern",
  "Project: One-Click NFT Minting on Website",
];

const circleDescription = [
  "SAAS tool for speeding up machine learning training",
  "Su22: Product Management Intern",
  "Project: Business operations, and identification of customers",
];

const auguryDescription = [
  "Autonomous sensing and collision prediction tech",
  "Su22: Product Management Intern",
];
const companies = [
  {
    logo: "https://pbs.twimg.com/profile_images/1587543750271811584/ZyZ6Zhg__400x400.jpg",
    caption: "Utopic.ai",
    link: "https://utopic.ai",
    description: zbDescription,
  },
  {
    logo: "https://flowgpt.com/flowgpt.png",
    caption: "RoverX",
    link: "https://roverx.io",
    description: flowDescription,
  },
  {
    logo: "https://www.circle.com/hubfs/Circle%20logo%202020/circle-icon.png",
    caption: "Avalanche Computing Taiwan",
    link: "https://www.avalanc.com",
    description: circleDescription,
  },
  {
    logo: "https://www.augury.com/wp-content/uploads/2023/05/Augury-Logo-for-Author-page.png",
    caption: "Evitado",
    link: "https://evitado.io",
    description: auguryDescription,
  },
];

const CompaniesSection = () => {
  return (
    <Box data-aos="fade-right">
      <Heading
        size="lg"
        marginLeft="30px"
        textAlign="left"
        fontWeight="100"
        marginBottom={{ base: "20px", md: "40px" }}
      >
        Experiences
      </Heading>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center" // Ensure the items are centered
        justifyContent="center"
        marginBottom="25px"
        marginTop="30px"
        // width="100%" // Ensure it takes full width
      >
        <HStack spacing='24px'>
          {companies.map((company, index) => (
            <ClubCard
              key={index}
              name={company.caption}
              description={company.description}
              link={company.link}
              logo={company.logo}
              delay={index * 50}
            />
          ))}
        </HStack>
      </Box>
    </Box>
  );
};
export default CompaniesSection;
