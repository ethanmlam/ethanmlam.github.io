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
          © 2026 Ethan Lam{" "}
          <Text as="span" mx={2}>·</Text>{" "}
          <Link href="https://www.twitter.com/ethanmlam" color="blue.500" textDecoration="underline" isExternal _hover={{ color: "blue.600" }}>Twitter</Link>,{" "}
          <Link href="https://github.com/ethanmlam" color="blue.500" textDecoration="underline" isExternal _hover={{ color: "blue.600" }}>GitHub</Link>,{" "}
          <Link href="https://www.linkedin.com/in/ethanmlam/" color="blue.500" textDecoration="underline" isExternal _hover={{ color: "blue.600" }}>LinkedIn</Link>
        </Text>
      </VStack>
    </Box>
  );
};

export default Footer;
