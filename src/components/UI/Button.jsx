import { Button } from "@chakra-ui/button";

export default function Btn(props) {
  const { children, ...rest } = props;
  return (
    <Button
      fontSize="1.4rem"
      px="30px"
      py="20px"
      bg="#3399ff"
      color="#fff"
      _hover={{ bg: "#3399ff" }}
      {...rest}
    >
      {children}
    </Button>
  );
}
