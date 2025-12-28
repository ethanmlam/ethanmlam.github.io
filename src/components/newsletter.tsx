import React, { useState } from "react";
import {
  Box,
  Text,
  Input,
  Button,
  VStack,
  useToast,
} from "@chakra-ui/react";
import { supabase } from "../lib/supabase";

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !validateEmail(email)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    setIsLoading(true);

    try {
      const { error } = await supabase
        .from("newsletter_subscribers")
        .insert([{ email }]);

      if (error) {
        // Check if it's a duplicate email error
        if (error.code === "23505") {
          toast({
            title: "Already subscribed",
            description: "This email is already subscribed to the newsletter",
            status: "info",
            duration: 3000,
            isClosable: true,
          });
        } else {
          throw error;
        }
      } else {
        toast({
          title: "Success!",
          description: "You've been subscribed to the newsletter",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        setEmail("");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again later.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box mt={5}>
      <Text fontWeight="bold" mb={2}>
        Updates.
      </Text>
      <Text fontSize="13px" lineHeight="1.7" mb={3}>
        Get quarterly updates on my latest projects, research, and thoughts.
      </Text>
      <form onSubmit={handleSubmit}>
        <VStack spacing={2} align="flex-start">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fontSize="11px"
            height="24px"
            px={2}
            py={1}
            maxWidth="300px"
            isDisabled={isLoading}
            isInvalid={email !== "" && !validateEmail(email)}
          />
          <Button
            type="submit"
            colorScheme="blue"
            isLoading={isLoading}
            loadingText="Subscribing..."
            fontSize="11px"
            height="24px"
            px={2}
            py={1}
            maxWidth="300px"
            width="100%"
          >
            Subscribe
          </Button>
        </VStack>
      </form>
    </Box>
  );
};

export default Newsletter;

