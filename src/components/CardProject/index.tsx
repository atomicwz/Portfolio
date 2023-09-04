import React from "react";
import { Flex, Image, Text, Button } from "@chakra-ui/react";

const CardProject: React.FC = () => {
  return (
    <Flex
      flexDirection="column"
      bg="black"
      mx="auto"
      borderTop="10px solid"
      borderBottom="10px solid"
      borderColor="#1B70CB"
      rounded="xl"
      transition=".4s"
      _hover={{
        transform: "scale(1.03)",
      }}
    >
      <Image
        src="/projetos/lumiar.png"
        alt="Lumiar"
        w="100%"
        objectFit="cover"
      />
      <Flex flexDirection="column" p={5}>
        <Text color="#1B70CB" fontWeight={700} fontSize={24}>
          Lumiar Internet
        </Text>
        <Text fontSize={14} color="white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
          voluptas assumenda reprehenderit soluta a alias, libero repellendus
          pariatur ducimus veniam tempora voluptatum expedita repellat
          distinctio provident? Vitae eius dolore hic?
        </Text>
        <Flex gap={4} mt={5}>
          <Button
            borderColor="#1B70CB"
            color="white"
            variant="outline"
            _hover={{ color: "black", bg: "#fff" }}
          >
            Ver Repositório
          </Button>
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
        </Flex>
      </Flex>
    </Flex>
  );
};

export default CardProject;
