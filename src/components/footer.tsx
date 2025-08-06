import React from "react";
import { Box, Text, HStack, Link } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

const Footer: React.FC = () => {
  return (
    <Box mt={16} pt={8} borderTop="1px" borderColor="gray.200">
      <HStack justifyContent="center" spacing={3}>
        
        <Link href="https://www.twitter.com/ethanmlam" isExternal color="gray.500" _hover={{ color: "gray.800", transform: "scale(1.2)" }} transition="all 0.2s">
          <FaXTwitter size={16} />
        </Link>
        <Link href="https://github.com/ethanmlam" isExternal color="gray.500" _hover={{ color: "gray.800", transform: "scale(1.2)" }} transition="all 0.2s">
          <FaGithub size={16} />
        </Link>
        <Link href="https://www.linkedin.com/in/ethanmlam/" isExternal color="gray.500" _hover={{ color: "blue.600", transform: "scale(1.2)" }} transition="all 0.2s">
          <FaLinkedin size={16} />
        </Link>
        <Text fontSize="sm" color="gray.500">
          © 2024 Ethan Lam
        </Text>
      </HStack>
    </Box>
  );
};

export default Footer;
