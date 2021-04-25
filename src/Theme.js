import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors:{
    brand:{
      red: "#ff6666",
      bg: "#3399ff"
    }
  },
  styles: {
    global: {
      html: {
        fontSize: '62.5%',
        bg: '#F8F8F8',
      },
      body: {
        fontFamily: "'Montserrat'",
        fontSize: '1.4rem',
        bg: '#F8F8F8',
        padding: '0.5rem'
      },
    },
  },
});
export default theme;
