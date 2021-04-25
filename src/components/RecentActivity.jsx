import React from "react";
import { Box, Table, Tbody, Tr, Td, Text, Thead, Th } from "@chakra-ui/react";



function Recent() {
  return (
    <Box p={10}>
        <Text color="black" fontWeight="800">
          Recent Activity
        </Text>
      <Table variant="simple" textAlign="center">
        <Thead>
          <Tr>
            <Th fontWeight="700" fontSize="1.5rem" textTransform="capitalize" textAlign="center">Date</Th>
            <Th fontWeight="700" fontSize="1.5rem" textTransform="capitalize"textAlign="center">Description</Th>
            <Th fontWeight="700" fontSize="1.5rem" textTransform="capitalize" textAlign="center">Amount</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td textAlign="center"><Text>1/1/2021</Text></Td>
            <Td textAlign="center">
              <Text>Sent</Text>
            </Td>
            <Td textAlign="center">
              <Text>N100.00</Text>
            </Td>
          </Tr>
          <Tr>
            <Td textAlign="center"><Text>2/2/2021</Text></Td>
            <Td textAlign="center">
              <Text>Received</Text>
            </Td>
            <Td textAlign="center">
              <Text>N200.00</Text>
            </Td>
          </Tr>
          <Tr>
            <Td textAlign="center"><Text>3/3/2021</Text></Td>
            <Td textAlign="center">
              <Text>Sent</Text>
            </Td>
            <Td textAlign="center">
              <Text>N300.00</Text>
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </Box>
  );
}

export default Recent;
