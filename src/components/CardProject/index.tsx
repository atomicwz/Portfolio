import React from "react";
import { Flex, Image, Text, Button, Box } from "@chakra-ui/react";
import { IProject } from "@/resources/projects";
import Link from "next/link";

interface IProps {
  project: IProject;
}
const CardProject: React.FC<IProps> = ({ project }) => {
  return (
    <Flex
      flexDirection="column"
      bg="linear-gradient(135deg, rgba(27,112,203,0.3) 0%, rgba(0,0,0,1) 67%)"
      mx="auto"
      borderTop="10px solid"
      borderBottom="10px solid"
      borderColor="#1B70CB"
      rounded="xl"
      h={470}
      transition=".4s"
      _hover={{
        transform: "scale(1.03)",
      }}
    >
      <Image
        src={project.imageUrl}
        alt={project.title}
        w="100%"
        objectFit="cover"
      />
      <Flex
        flexDirection="column"
        p={5}
        justifyContent="space-between"
        h="100%"
      >
        <Box>
          <Text color="#1B70CB" fontWeight={700} fontSize={24}>
            {project.title}
          </Text>
          <Text fontSize={12} color="white">
            {project.description}
          </Text>
        </Box>
        <Flex gap={4} mt={5}>
          <Link href={project.repositoryUrl || ""} target="_blank">
            <Button
              borderColor="#1B70CB"
              color="white"
              variant="outline"
              _hover={{ color: "black", bg: "#fff" }}
              isDisabled={!project.repositoryUrl}
            >
              Ver Repositório
            </Button>
          </Link>
          <Link href={project.url} target="_blank">
            <Button
              bg="#1B70CB"
              _hover={{
                bg: "white",
                color: "black",
              }}
              color="black"
            >
              Visitar Site
            </Button>
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default CardProject;
