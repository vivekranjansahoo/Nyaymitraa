import UserNavbar from "../../../components/Topnavbar/UserNavbar/UserNavbar";
import styled from "styled-components";
import Robot from "../../../assets/robot.gif";
import axios from "axios";
import { getuserdetails, usercheck } from "../../../Routes/APIRoutes.js";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Image,
  Text,
  VStack,
  HStack,
  Box,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserSidebar from "../../../components/Sidebar/UserSidebar.jsx";
const UserWelcome = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [userId, setUserId] = useState("");
  const [user, setuser] = useState([]);
  const navigate = useNavigate();

  const getuserdetailss = async (id) => {
    try {
      const getuserdetailss = getuserdetails;
      const response = await axios.get(`${getuserdetailss}/${id}`);

      console.log(response.data);
      setuser(response.data.user);
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  const getuser = async () => {
    const token = localStorage.getItem("token");
    console.log(token);
    try {
      const response = await axios.get(usercheck, {
        headers: {
          token: `${token}`, // Replace with your actual JWT token
        }, // Include credentials (cookies, authorization headers)
      });

      console.log("Data from server:", response.data);
      setUserId(response.data.userId);
      getuserdetailss(response.data.userId);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/");
    }
  });

  useEffect(() => {
    getuser();
    const delayTimeout = setTimeout(() => {
      onOpen();
      return () => clearTimeout(delayTimeout);
    }, 2000);
  }, []);
  return (
    <div style={{ position: "relative" }}>
      <UserNavbar />
      <UserSidebar />
      <Container>
        <img src={Robot} alt="" />
        <h1>
          Welcome,{" "}
          <span className="color-red">
            Hi {user.firstname} <span> </span> {user.lastname} & Email :{" "}
            {user.email}
          </span>
        </h1>
        {/* 
        <Button onClick={onOpen}>Trigger modal</Button> */}

        <Modal onClose={onClose} isOpen={isOpen} isCentered size="2xl">
          <ModalOverlay />
          <ModalContent backgroundColor="purple.700">
            <ModalHeader textAlign="center" color="white">
              Find the Legal Service Provider{" "}
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <VStack spacing={8} align="center" justify="center" size>
                <HStack spacing={8}>
                  <Box
                    backgroundColor="cyan"
                    borderRadius="lg"
                    overflow="hidden"
                    width="300px" // Adjust the width as needed
                    height="400px">
                    <Image
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAZpl1RUV7fHakOoKawPThDQeazIZLNf9bkA&usqp=CAU"
                      alt="Image 1"
                      borderRadius="lg"
                      style={{ marginLeft: "40px" }}
                      mt={4}
                    />
                    <Text
                      mt={2}
                      style={{ color: "black" }}
                      p={4}
                      textAlign={"center"}
                      fontWeight={"700"}>
                      Already Know About Your Legal Requirements .
                    </Text>
                    <Link to="/choice">
                      <Button
                        style={{ marginLeft: "90px" }}
                        variant={"solid"}
                        bg={"black"}
                        _hover={{
                          bgGradient: "linear(to-r, #FFD700, #FF8C00)",
                          color: "black",
                        }}>
                        CLICK HERE
                      </Button>
                    </Link>
                  </Box>

                  <Box
                    backgroundColor="cyan"
                    borderRadius="lg"
                    overflow="hidden"
                    width="300px" // Adjust the width as needed
                    height="400px">
                    <Image
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAZpl1RUV7fHakOoKawPThDQeazIZLNf9bkA&usqp=CAU"
                      alt="Image 2"
                      borderRadius="lg"
                      style={{ marginLeft: "40px" }}
                      mt={4}
                    />
                    <Text
                      mt={2}
                      style={{ color: "black" }}
                      p={4}
                      textAlign={"center"}
                      fontWeight={"700"}>
                      Dont't Know about Your Legal requirement . ASK our ML
                      Model
                    </Text>
                    <Link to="/unknownchoice">
                      <Button
                        style={{ marginLeft: "90px" }}
                        variant={"solid"}
                        bg={"black"}
                        _hover={{
                          bgGradient: "linear(to-r, #FFD700, #FF8C00)",
                          color: "black",
                        }}>
                        CLICK HERE
                      </Button>
                    </Link>
                  </Box>
                </HStack>
              </VStack>
            </ModalBody>
            <ModalFooter>
              {/* Additional footer content if needed */}
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Container>
    </div>
  );
};

const Container = styled.div`
  height: 89.2vh;
  background-color: #131324;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  flex-direction: column;
  span {
    color: #4e0eff;
  }
`;

export default UserWelcome;
