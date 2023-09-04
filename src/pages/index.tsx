import React from "react";
import { Flex, Heading, Image, chakra, Text, Grid } from "@chakra-ui/react";
import Head from "next/head";
import Apresentation from "@/components/Apresentation";
import Technologies from "@/components/Technologies";
import CardProject from "@/components/CardProject";
import { projects } from "@/resources/projects";

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Dener Oliveira - Portfólio</title>
        <meta name="description" content="Portfólio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Flex
        background={{
          md: "url('/background.webp')",
          base: "url('/background_mobile.webp')",
        }}
        backgroundSize={{
          md: "cover",
          base: "cover",
        }}
        backgroundAttachment={{
          md: "fixed",
          base: "fixed",
        }}
        backgroundPosition="center"
        color="#FFFFFF"
        direction="column"
        py={10}
        px={4}
      >
        <Image
          src="/marca_portfolio.svg"
          alt="Logo"
          mx="auto"
          w={{ base: 350, lg: 400 }}
        />
        <Apresentation />
        {/* SLIDE */}
        <Heading
          fontSize={{ base: 28, md: 60 }}
          textAlign="center"
          mt={{ base: 16, md: 20 }}
        >
          Trabalhos desenvolvidos
          <chakra.span color="#1B70CB">.</chakra.span>
        </Heading>
        <Grid
          w="70%"
          mx="auto"
          mt={{ base: 10, md: 20 }}
          gridTemplateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          }}
          gap={30}
          justifyContent="center"
          alignItems="center"
        >
          {projects.map((project, index) => (
            <CardProject project={project} key={index} />
          ))}
        </Grid>
        <Technologies />
        <Text
          mt={10}
          color="white"
          fontWeight={500}
          textAlign="center"
          fontSize={{ base: 14, md: 18 }}
        >
          Todos os direitos reservados. © 2023
        </Text>
      </Flex>
    </>
  );
};

export default Home;
