import React from "react";
import { Box, Text, VStack} from "@chakra-ui/react";


function Banner() {
  return (
    
      <Box w="100%" h="auto" borderRadius="0.2rem" p={10} bg="#f8f8f8" my="1rem">
          <VStack>
          <Text fontWeight="800" fontSize="2rem">Wallet Balance</Text>
          <Text fontWeight="800" fontSize="2rem">Token Balance</Text>
          <Text fontWeight="800" fontSize="2rem">Naira Balance</Text>
          </VStack>
      </Box>
    
  );
}



export default Banner;
