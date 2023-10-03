import React from "react";
import { Flex, Heading, Image, chakra, Text, Grid } from "@chakra-ui/react";
import { projects } from "@/resources/projects";
import Apresentation from "@/components/Apresentation";
import Technologies from "@/components/Technologies";
import CardProject from "@/components/CardProject";
import SiteHead from "@/components/SiteHead";
import Pagination from "@/components/Pagination";

const Home: React.FC = () => {
  const ref = React.useRef<HTMLHeadingElement | null>(null);
  const [page, setPage] = React.useState(1);
  const itemPerPage = 6;

  const indexLast = page * itemPerPage;
  const indexFirst = indexLast - itemPerPage;
  const projectList = projects.slice(indexFirst, indexLast);

  const nextPage = () => {
    if (projectList.length >= itemPerPage) {
      setPage(page + 1);
      if (ref.current) {
        ref.current.scrollIntoView({ behavior: "smooth" });
      }
    }
  };
  const prevPage = () => {
    if (page > 1) {
      setPage(page - 1);
      if (ref.current) {
        ref.current.scroll({ behavior: "smooth" });
      }
    }
  };
  return (
    <>
      <SiteHead />
      <Flex
        background={{
          md: "url('/background.webp')",
          base: "url('/background_mobile.webp')",
        }}
        backgroundRepeat={{
          md: "no-repeat",
          base: "no-repeat",
        }}
        backgroundSize={{
          md: "cover",
          base: "cover",
        }}
        backgroundPosition={{
          base: "center",
          md: "center",
        }}
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
        <Heading
          fontSize={{ base: 28, md: 60 }}
          textAlign="center"
          mt={{ base: 16, md: 20 }}
          ref={ref}
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
          {projectList.map((project, index) => {
            return <CardProject project={project} key={index} />;
          })}
        </Grid>
        <Pagination
          page={page}
          prev={prevPage}
          next={nextPage}
          hasNextPage={!(projectList.length >= itemPerPage)}
        />
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
