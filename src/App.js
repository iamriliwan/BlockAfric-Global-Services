import { Container, ChakraProvider } from '@chakra-ui/react'
import theme from './Theme'
import Header from './components/Header'
import SelectCurrency from './components/SelectCurrency'
import RecentActivity from './components/RecentActivity'
import Navbar from './components/Navbar'
import Banner from './components/Banner'


function App() {
  return (
    <ChakraProvider theme={theme}>
      <Container bg="#fff" border="0.2rem solid black" borderRadius="0.5rem">
      <Header/>
      <Banner/>
      <SelectCurrency />
      <RecentActivity />
      <Navbar/>
      </Container>
    </ChakraProvider>
    
  );
}

export default App;