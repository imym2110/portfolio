import { Flex, Heading } from "@chakra-ui/react";

export function Badge({ bg, children }) {
  return (
    <Flex justify={"center"} alignItems={"center"}>
      <Heading
        size="sm"
        bg={bg}
        color="white"
        borderRadius={3}
        p={3}
        width={130}
        textAlign="center"
        
      >
        {children}
      </Heading>
    </Flex>
  );
}
