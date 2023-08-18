import { Flex, Heading } from "@chakra-ui/react";

export function Badge({ bg, children }) {
  return (
    <Flex justify={"center"} alignItems={"center"}>
      <Heading
        size="sm"
        bg={bg}
        color="white"
        borderRadius={3}
        p={2}
        width={110}
        textAlign="center"
      >
        {children}
      </Heading>
    </Flex>
  );
}
