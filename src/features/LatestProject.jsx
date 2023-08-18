import { Box, Flex, Heading, Text, Wrap, WrapItem } from "@chakra-ui/react";
import { ImageSlider } from "@/components/ImageSlider/ImageSlider";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Badge as SkillBadge } from "@/components/Badge";
import { ProjectsAPI } from "../api/projects";

export default function LatestProject() {
  const [projects, setProjects] = useState();
  const { t, i18n } = useTranslation("home");

  async function fetchAll() {
    const projectResp = await ProjectsAPI.fetchAll();
    const proj = projectResp.filter((item) => item.title !== "project");
    console.log("---->", proj);
    setProjects(proj);
  }
  useEffect(() => {
    fetchAll();
  }, []);

  const renderProject = (project) => {
    return (
      <WrapItem flexDirection="column">
        <ImageSlider imageList={project.images.map((img) => img.downloadURL)} />
        <Heading size="md" color="secondary" mt={3}>
          <Box
            display={"inline-block"}
            bg="primary.dark"
            w={25}
            h={1}
            mr={3}
            verticalAlign="middle"
          />
          {project.title}
        </Heading>
        <Text>{project.desc[i18n.language]}</Text>
        <Wrap mt={2} maxW={350}>
          {project.technologies.map((tech) => (
            <WrapItem key={tech}>
              <SkillBadge bg={tech}>{tech}</SkillBadge>
            </WrapItem>
          ))}
        </Wrap>
      </WrapItem>
    );
  };
  return (
    <Flex direction={"column"} w="100%">
      <Heading>{t("latestProjects")}</Heading>
      <Wrap mt={10} spacing={16}>
        <WrapItem justifyContent="space-evenly" flexWrap="wrap" gap={10}>
          {projects?.map(renderProject)}
        </WrapItem>
      </Wrap>
    </Flex>
  );
}
