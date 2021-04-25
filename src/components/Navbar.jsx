import React from "react";
import { BrowserRouter as Router, Switch, Link } from "react-router-dom";
import { Box, Grid, Text } from "@chakra-ui/layout";
import { FaHome, FaBook, FaWallet, FaRegMoneyBillAlt, FaMoneyBillAlt } from "react-icons/fa";


function Navbar() { 
  return (
    <Router>
      <Box p={6} centerContent w="100%" bg="#F8F8F8">
        <Grid templateColumns="repeat(5, 1fr)" gap={6} centerContent>
          <Box ml="auto" mr="auto" centerContent>
            <Link>
            <FaHome size={30} fill="#ff6666"/>
            <Text color="brand.red" fontWeight="700">Home</Text>
            </Link>
          </Box>

          <Box ml="auto" mr="auto" display="block">
            <Link>
            <FaBook size={30}  fill="#ff6666"/>
              <Text color="brand.red" fontWeight="700" textAlign="center">Activity</Text>
            </Link>
          </Box>

          <Box ml="auto" mr="auto">
            <Link>
            <FaWallet size={30}  fill="#ff6666"/>
              <Text color="brand.red" fontWeight="700" textAlign="center">Wallet</Text>
            </Link>
          </Box>

          <Box ml="auto" mr="auto">
            <Link>
            <FaRegMoneyBillAlt size={30}  fill="#ff6666"/>
              <Text color="brand.red" fontWeight="700" textAlign="center">Market</Text>
            </Link>
          </Box>

          <Box ml="auto" mr="auto">
            <Link>
            <FaMoneyBillAlt size={30}  fill="#ff6666"/>
              <Text color="brand.red" fontWeight="700" textAlign="center">Earn</Text>
            </Link>
          </Box>

          <Switch>
            
          </Switch>
        </Grid>
      </Box>
    </Router>
  );
}
export default Navbar;