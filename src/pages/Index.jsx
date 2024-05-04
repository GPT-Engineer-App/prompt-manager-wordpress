import { Container, VStack, Heading, Text, Button, Input, useToast } from "@chakra-ui/react";
import { FaWordpress, FaPlus, FaSync } from "react-icons/fa";

const Index = () => {
  const toast = useToast();

  const handleIntegration = () => {
    toast({
      title: "Integration Successful",
      description: "AI Prompt Management is now integrated with your WordPress site.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  const handleAddPrompt = () => {
    toast({
      title: "Prompt Added",
      description: "New AI prompt has been added successfully.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <Container centerContent maxW="container.md" padding={4}>
      <VStack spacing={4} align="stretch">
        <Heading as="h1" size="xl" textAlign="center">
          AI Prompt Manager for WordPress
        </Heading>
        <Text fontSize="lg" textAlign="center">
          Easily manage and integrate AI prompts with your WordPress site.
        </Text>
        <Button leftIcon={<FaWordpress />} colorScheme="blue" onClick={handleIntegration}>
          Integrate with WordPress
        </Button>
        <VStack spacing={3}>
          <Input placeholder="Enter your AI prompt" />
          <Button leftIcon={<FaPlus />} colorScheme="green" onClick={handleAddPrompt}>
            Add Prompt
          </Button>
          <Button leftIcon={<FaSync />} colorScheme="teal">
            Sync Prompts
          </Button>
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;
