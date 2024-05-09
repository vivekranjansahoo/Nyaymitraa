import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Button, Container, Grid, VStack, Text } from "@chakra-ui/react";

import { Link } from "react-router-dom";
import Navbar from "../../../components/Navbar";

const LoginChoice = () => {
  return (
    <>
      <Navbar />
      <div style={{ backgroundColor: "#131324" }}>
        <Container>
          <Grid minH={"90vh"} alignItems={"center"}>
            <VStack direction="row" spacing={4}>
              <Link to={"/userlogin"}>
                <Button
                  h={12}
                  colorScheme="cyan"
                  variant="solid"
                  _hover={{ bgGradient: "linear(to-r, #FFD700, #FF8C00)" }}
                  w={"330px"}
                  rightIcon={<ArrowForwardIcon />}>
                  SIGN IN AS A USER
                </Button>
              </Link>
              <Text
                bgGradient="linear(to-r, #FF8C00, #FFD700)"
                backgroundClip="text"
                fontWeight="bold"
                fontSize="xl">
                {" "}
                Or{" "}
              </Text>
              <Link to={"/lsplogin"}>
                <Button
                  h={12}
                  colorScheme="cyan"
                  variant="solid"
                  _hover={{ bgGradient: "linear(to-r, #FFD700, #FF8C00)" }}
                  w={"330px"}
                  rightIcon={<ArrowForwardIcon />}>
                  SIGN IN AS A LEGAL SERVICE PROVIDER
                </Button>
              </Link>
              <Text
                bgGradient="linear(to-r, #FF8C00, #FFD700)"
                backgroundClip="text"
                fontWeight="bold"
                fontSize="xl">
                {" "}
                Or{" "}
              </Text>
              <Link to={"/agentlogin"}>
                <Button
                  h={12}
                  colorScheme="cyan"
                  variant="solid"
                  _hover={{ bgGradient: "linear(to-r, #FFD700, #FF8C00)" }}
                  w={"330px"}
                  rightIcon={<ArrowForwardIcon />}>
                  SIGN IN AS A AGENT
                </Button>
              </Link>
              <Text
                bgGradient="linear(to-r, #FF8C00, #FFD700)"
                backgroundClip="text"
                fontWeight="bold"
                fontSize="xl">
                {" "}
                Or{" "}
              </Text>
              <Link to={"/adminlogin"}>
                <Button
                  h={12}
                  colorScheme="cyan"
                  variant="solid"
                  _hover={{ bgGradient: "linear(to-r, #FFD700, #FF8C00)" }}
                  w={"330px"}
                  rightIcon={<ArrowForwardIcon />}>
                  SIGN IN AS A ADMIN
                </Button>
              </Link>
            </VStack>
          </Grid>
        </Container>
      </div>
    </>
  );
};

export default LoginChoice;
