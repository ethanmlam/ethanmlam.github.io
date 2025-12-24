import React from "react";
import { Box, Text, Link, VStack } from "@chakra-ui/react";

const Footer: React.FC = () => {
  return (
    <Box mt={16} pt={8} borderTop="1px" borderColor="gray.300">
      <VStack spacing={2}>
        <Link
          href="https://www.admonymous.co/ethan-lam"
          isExternal
          fontSize="sm"
          color="blue.500"
          _hover={{ color: "blue.600", textDecoration: "underline" }}
        >
          Give me anonymous feedback ↗
        </Link>
        <Text fontSize="sm" color="gray.500" textAlign="center">
          © 2025 Ethan Lam
        </Text>
      </VStack>
    </Box>
  );
};

export default Footer;
