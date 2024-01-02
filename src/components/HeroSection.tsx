import { useState, useEffect } from "react";
import {
  HStack,
  Image,
  Heading,
  useBreakpointValue,
  Box,
  Text,
  Button,
  Stack,
} from "@chakra-ui/react";
import { Link as ScrollLink } from "react-scroll";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";

export default function HeroSection() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);
  const bulletPoints = [
    "EECS and Industrial Engineering and Operations Research (IEOR) Double Major @ UC Berkeley",
    "SWE Intern @ Utopic AI",
    "Product Management Intern @ RoverX (YC S21)",
    "XRP Ledger Lead Campus Ambassador",
    "Previous: PM Intern @ Avalanche Computing",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(false);
  const scrollLinkStyles = {
    cursor: "pointer",
  };
  const headingSize = useBreakpointValue({ base: "100%", md: "md" });
  const imageSize = useBreakpointValue({ base: "150px", md: "300px" });

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true); // Start fade-out animation

      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % bulletPoints.length);
        setFade(false); // Start fade-in animation
      }, 500); // Delay before switching text and starting fade-in
    }, 3000); // Change text every 3 seconds

    return () => clearInterval(interval); // Clean up the interval on unmount
  }, []);

  return (
  <Box className="relative h-[60vh] bg-white sm:h-[38vh] lg:h-[83vh]">
    <Box className="relative isolate flex flex-col items-start justify-center px-6 pt-6 lg:px-8">
      <Box className="ml-auto max-w-7xl items-start py-8 sm:py-32 lg:py-40">
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={{ base: 5, md: 20 }}
          align={{ base: "center", md: "start" }}
          justify={{ md: "space-between" }} // Add this line
          data-aos="fade-up"
        >
          {/* Image */}
          <Box flex="1" data-aos="fade-up">
            <Image
              src="https://i.ibb.co/6bYBGDq/IMG-1048-copy.png"
              alt="Headshot"
              w={imageSize}
              h={imageSize}
              className="rounded-md"
            />
          </Box>

          {/* Text content */}
          <Box flex="1" pr={{ base: 0, md: 100 }}>
            <Heading fontWeight="20" fontSize={headingSize}>
              Hi there! My name is Ethan. I’m a 3rd year at University of California, Berkeley studying Electrical Engineering & Computer Science and Industrial Engineering & Operations Research. My academic interests are in LLMs, machine learning, zero knowledge proofs,
            and decentralized finance. I also like playing poker, watching Dodgers baseball or Rams football, working out, and listening to music.
          </Heading>
          {/* Additional text content and buttons can be added here */}
          </Box>
        </Stack>
      </Box>
    </Box>
  </Box>

  );
}
