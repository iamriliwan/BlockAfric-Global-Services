import React from "react";
import { HStack, Box, Text, Spacer } from "@chakra-ui/react";
import { FaBell, FaUserCircle } from "react-icons/fa";

function Header() {
  return (
    <HStack templateColumns="repeat(5, 1fr)" gap={4} p={4}>
      <Box w="7rem" h="3rem" border="0.2rem solid black" p={1}>
        <Text fontWeight="800" fontSize="1.7rem">
          LOGO
        </Text>
      </Box>
      <Spacer />
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <FaUserCircle size={30} fill="#ff6666" />
        <FaBell size={30} fill="#ff6666" />
      </Box>
    </HStack>
  );
}

export default Header;
