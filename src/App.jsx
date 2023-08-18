import { Box } from "@chakra-ui/react";
import { Header } from "./features/Header";
import { Landing } from "./features/Landing";
import LatestProject from "./features/LatestProject";
import { Footer } from "./features/Footer";

export function App() {
  return (
    <>
      <Box p={5}>
        <Header />
        <Landing />
        <LatestProject />
      </Box>
      <Footer />
    </>
  );
}
