import React from "react";
import {
  Box,
  Text,
  Stack,
  InputGroup,
  Input,
  InputLeftAddon,
  Flex,
  Spacer
} from "@chakra-ui/react";
import Button from "./UI/Button"

function SelectCurrency() {
  return (
    <Box w="100%" h="auto" borderRadius="0.2rem" p={10} bg="#f8f8f8" my="1rem">
      <Text fontWeight="800" fontSize="1.7rem">
        Select Currency:
      </Text>
      <Stack spacing={4}>
        <InputGroup size="lg">
          <InputLeftAddon children="TOKEN" />
          <Input type="number" placeholder="0.000000001" />
        </InputGroup>
      </Stack>
      <Flex my={5}>
        <Button>SEND</Button>
        <Spacer />
        <Button>RECEIVE</Button>
      </Flex>
    </Box>
  );
}

export default SelectCurrency;
