import { Box } from "@chakra-ui/react";
import { Header } from "./features/Header";
import { Landing } from "./features/Landing";
import LatestProject from "./features/LatestProject";
import { Footer } from "./features/Footer";

export function App() {
  return (
    <>
      <Box p={10}>
        <Header />
        <Landing />
        <Box ml={10}>
          <LatestProject />
        </Box>
      </Box>
      <Footer />
    </>
  );
}
