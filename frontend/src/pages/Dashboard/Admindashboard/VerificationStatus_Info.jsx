import React, { useState, useEffect } from "react";
import {
  ChakraProvider,
  CSSReset,
  extendTheme,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  VStack,
  Text,
  Box,
  HStack,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { BiSearch } from "react-icons/bi";
import { alllspde, isverified } from "../../../Routes/APIRoutes";
import axios from "axios";

const theme = extendTheme({
  styles: {
    global: {
      "html, body": {
        margin: 0,
        padding: 0,
        boxSizing: "border-box",
        fontFamily: "sans-serif",
      },
    },
  },
});

const VerificationPage_Info = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [legalServiceProviders, setLegalServiceProviders] = useState([]);
  const [selectedProvider, setSelectedProvider] = useState(null);
  const [lspdata, setlspdata] = useState("Pending");

  // Placeholder function to simulate fetching data from the database

  //fetch the legal service providers for approved
  const lspapproved = async () => {
    try {
      const response = await axios.get(alllspde);
      console.log(response.data);
      setLegalServiceProviders(response.data);
    } catch (error) {
      console.log("error");
    }
  };

  const fetchData = () => {
    // Replace this with your actual API call to fetch legal service providers
    const mockData = [
      {
        id: 1,
        name: "John Doe",
        email: "john.doe@example.com",
        phone: "123-456-7890",
        idProof: "A1234567",
        licenseId: "L9876543",
      },
      {
        id: 2,
        name: "Jane Smith",
        email: "jane.smith@example.com",
        phone: "987-654-3210",
        idProof: "B7654321",
        licenseId: "L8765432",
      },
      // Add more data as needed
    ];
    setLegalServiceProviders(mockData);
  };

  useEffect(() => {
    // Fetch data when the component mounts
    // fetchData();
    lspapproved();
  }, []);

  const handleVerify = (id) => {
    // Placeholder function to simulate verification from the database
    // Replace this with your actual API call for verification
    console.log("Verifying legal service provider with ID:", id);
  };

  const handleAccept = async (id) => {
    // Placeholder function to simulate acceptance
    // Replace this with your actual API call for acceptance
    console.log(id);
    const responses = await axios.post(`${isverified}/${id}`);

    if (responses.data.message == "lsp approved successfully") {
      setlspdata("Approved");
    }

    console.log(responses.data.message);
    console.log("Accepting legal service provider with ID:", id);
  };

  const handleReject = (id) => {
    // Placeholder function to simulate rejection
    // Replace this with your actual API call for rejection
    console.log("Rejecting legal service provider with ID:", id);
  };

  const handleRowClick = (provider) => {
    setSelectedProvider(provider);
  };

  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <VStack spacing={["4", "8"]} align="center" padding={["4", "8"]}>
        <Text fontSize="xl" fontWeight="bold">
          Verification Page
        </Text>
        {/* Rectangular search bar */}
        <Box width="100%" maxW={["100%", "600px"]}>
          <InputGroup>
            <InputLeftElement>
              <BiSearch color="gray.300" />
            </InputLeftElement>
            <Input
              type="text"
              placeholder="Search by name, email, or phone"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              borderRadius="md"
            />
          </InputGroup>
        </Box>
        {/* Table of legal service providers */}
        <Box width="100%" overflow="auto">
          <Table variant="simple" width="100%">
            <Thead>
              <Tr>
                <Th>Name</Th>
                <Th>Email</Th>
                <Th>Phone</Th>
                <Th>ID Proof</Th>
                <Th>License ID</Th>
                <Th>Status</Th>
                <Th>Actions</Th>
              </Tr>
            </Thead>
            <Tbody>
              {legalServiceProviders
                .filter(
                  (provider) =>
                    provider.firstname
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase()) ||
                    provider.email
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase()) ||
                    provider.phoneno
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase())
                )
                .map((provider) => (
                  <Tr
                    key={provider.id}
                    cursor="pointer"
                    onClick={() => handleRowClick(provider)}
                    bg={
                      selectedProvider && selectedProvider.id === provider.id
                        ? "gray.200"
                        : ""
                    }
                  >
                    <Td>
                      {provider.firstname}

                      {provider.lastname}
                    </Td>
                    <Td>{provider.email}</Td>
                    <Td>{provider.phoneno}</Td>
                    <Td>1</Td>
                    <Td>
                      {provider.isverified == "0" ? (
                        <p className="p-3 text-xs font-bold uppercase tracking-wider text-black-300 bg-red-600 rounded-lg bg-opacity-50">
                          Pending
                        </p>
                      ) : (
                        <p className="p-3 text-xs font-bold uppercase tracking-wider text-black-300 bg-green-600 rounded-lg bg-opacity-50">
                          Accepted
                        </p>
                      )}
                    </Td>
                    <Th>{lspdata}</Th>
                    <Td>
                      <HStack spacing="2">
                        {/* <Button
                          colorScheme="teal"
                          size="sm"
                          onClick={() => handleVerify(provider.id)}
                        >
                          Verify
                        </Button> */}
                        <Button
                          colorScheme="green"
                          size="sm"
                          onClick={() => handleAccept(provider._id)}
                        >
                          Accept
                        </Button>
                        <Button
                          colorScheme="red"
                          size="sm"
                          onClick={() => handleReject(provider.id)}
                        >
                          Reject
                        </Button>
                      </HStack>
                    </Td>
                  </Tr>
                ))}
            </Tbody>
          </Table>
        </Box>
      </VStack>
    </ChakraProvider>
  );
};

export default VerificationPage_Info;
