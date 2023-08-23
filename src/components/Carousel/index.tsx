/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Button, Flex, Image } from "@chakra-ui/react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { ReactNode } from "react";

interface IOptions {
  isSelected?: boolean;
  isPrevious?: boolean;
}

const Projects: React.FC = () => {
  const buttonNext = (onClickHandler: () => void) => (
    <Button
      position="absolute"
      bg="transparent"
      _hover={{
        bg: "transparent",
      }}
      top="50%"
      right={{ base: "-20px", md: "20px" }}
      cursor="pointer"
      transform="translateY(-50%)"
      zIndex={30}
      onClick={onClickHandler}
    >
      <Image
        cursor="pointer"
        style={{
          width: "30px",
        }}
        alt="Seta"
        src="/seta_direita.svg"
      />
    </Button>
  );
  const buttonPrev = (onClickHandler: () => void) => (
    <Button
      position="absolute"
      bg="transparent"
      _hover={{
        bg: "transparent",
      }}
      top="50%"
      left={{ base: "-20px", md: "20px" }}
      cursor="pointer"
      transform="translateY(-50%)"
      zIndex={30}
      onClick={onClickHandler}
    >
      <Image
        cursor="pointer"
        style={{
          width: "30px",
        }}
        alt="Seta"
        src="/seta_esquerda.svg"
      />
    </Button>
  );

  const images = [
    "/projetos/dashfish.png",
    "/projetos/lumiar.png",
    "/projetos/meuloc.png",
    "/projetos/sisalgomes.png",
    "https://images.unsplash.com/photo-1550223640-23097fc71cb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1550353175-a3611868086b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1550330039-a54e15ed9d33?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1549737328-8b9f3252b927?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1549833284-6a7df91c1f65?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1549985908-597a09ef0a7c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1550064824-8f993041ffd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  ];

  const renderItem = (item: ReactNode, { isSelected }: IOptions): ReactNode => {
    return (
      <Flex
        mt={24}
        h="300px"
        w={isSelected ? "600px" : "500px"}
        transform={
          isSelected ? "translate(-50px, -75px)" : "translate(0px, 0px)"
        }
        rounded="3xl"
        position="relative"
        transition=".8s"
      >
        <Box
          position="absolute"
          h="100%"
          w="100%"
          left="0px"
          top={0}
          zIndex={30}
          rounded="3xl"
          bg="linear-gradient(0deg, rgba(14,17,25,.8) 0%, rgba(54,40,166,0) 80%)"
        />
        {item}
      </Flex>
    );
  };

  return (
    <Box mt={20} position="relative" w="90%" mx="auto" h={500}>
      <Box
        w="20%"
        position="absolute"
        h="100%"
        right="0px"
        zIndex={30}
        bg="linear-gradient(270deg, #0E1119 0%,  transparent 90%)"
      />
      <Box
        w="20%"
        position="absolute"
        h="100%"
        left="0px"
        zIndex={30}
        bg="linear-gradient(270deg, transparent  0%,  #0E1119 90%)"
      />
      <Carousel
        renderArrowPrev={buttonPrev}
        renderArrowNext={buttonNext}
        infiniteLoop
        autoPlay
        autoFocus
        centerMode
        renderItem={renderItem as any}
        centerSlidePercentage={35}
        showIndicators={false}
        showStatus={false}
      >
        {images.map((image) => {
          return (
            <Image
              key={image}
              rounded="3xl"
              src={image}
              alt={image}
              objectFit="cover"
            />
          );
        })}
      </Carousel>
    </Box>
  );
};

export { Projects };
