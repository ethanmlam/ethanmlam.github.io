import React from "react";
import { Box, Text } from "@chakra-ui/react";

const Footer: React.FC = () => {
  return (
    <Box mt={16} pt={8} borderTop="1px" borderColor="gray.300">
      <Text fontSize="sm" color="gray.500" textAlign="center">
        © 2025 Ethan Lam
      </Text>
    </Box>
  );
};

export default Footer;
