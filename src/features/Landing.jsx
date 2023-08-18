import {
  Badge,
  Box,
  Flex,
  Heading,
  Image,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import humanImg from "@/assets/images/human.png";
import { useTranslation } from "react-i18next";
import { Badge as SkillBadge } from "@/components/Badge";

const SKILLS = [
  { label: "React" },
  { label: "Redux" },
  { label: "Typescript" },
  { label: "Javascript" },
  { label: "Angular" },
];

export function Landing() {
  const { t } = useTranslation("home");
  const leftSection = (
    <Box>
      <Heading
        fontSize={{ base: "2xl", md: "4xl", xl: "7xl" }}
        color="secondary"
        whiteSpace="pre-line"
      >
        {t("greetings")}
        <Text as="span" color="primary.dark">
          .
        </Text>
      </Heading>
      <Text fontSize="lg" color="secondary">
        {t("iAm")}
        <Text as="span" fontWeight="bold">
          {" " + t("job")}
        </Text>
        <br /> {t("location")}
      </Text>
      <Wrap mt={14}>
        {SKILLS.map((skill) => (
          <WrapItem key={skill}>
            <SkillBadge bg={skill.label}>{skill.label}</SkillBadge>
          </WrapItem>
        ))}
      </Wrap>
    </Box>
  );
  const badgeExperience = (
    <Badge bg="primary.light" borderRadius={7} p={3} textAlign="center">
      <Text fontSize="xl">{new Date().getFullYear() - 2023}</Text>
      <Text>{t("exp")}</Text>
    </Badge>
  );
  const rightSection = (
    <Box mt={{ base: 10, md: 0 }}>
      <Flex justify="flex-end">{badgeExperience}</Flex>
      <Image src={humanImg} w={400} />
    </Box>
  );

  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      justify={"space-evenly"}
      mt={{ base: 50, md: 150 }}
    >
      {leftSection}
      {rightSection}
    </Flex>
  );
}
