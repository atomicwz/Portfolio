/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Button, Flex, Image, useMediaQuery } from "@chakra-ui/react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { ReactNode } from "react";

interface IOptions {
  isSelected?: boolean;
  isPrevious?: boolean;
}

const Projects: React.FC = () => {
  const [isLargerThan800] = useMediaQuery("(min-width: 1280px)");
  const buttonNext = (onClickHandler: () => void) => (
    <Button
      position="absolute"
      bg="transparent"
      _hover={{
        bg: "transparent",
      }}
      top={!isLargerThan800 ? "60%" : "70%"}
      right={{ base: "-13px", md: "20px" }}
      cursor="pointer"
      transform="translateY(-50%)"
      zIndex={30}
      onClick={onClickHandler}
      w={{ base: 12, md: 16 }}
    >
      <Image cursor="pointer" w="100%" alt="Seta" src="/seta_direita.svg" />
    </Button>
  );
  const buttonPrev = (onClickHandler: () => void) => (
    <Button
      position="absolute"
      bg="transparent"
      _hover={{
        bg: "transparent",
      }}
      mx="auto"
      top={!isLargerThan800 ? "60%" : "70%"}
      left={{ base: "-13px", md: "20px" }}
      cursor="pointer"
      w={{ base: 12, md: 16 }}
      transform="translateY(-50%)"
      zIndex={30}
      onClick={onClickHandler}
    >
      <Image cursor="pointer" w="100%" alt="Seta" src="/seta_esquerda.svg" />
    </Button>
  );

  const images = [
    "/projetos/dashfish.png",
    "/projetos/lumiar.png",
    "/projetos/meuloc.png",
    "/projetos/sisalgomes.png",
    "https://images.unsplash.com/photo-1550223640-23097fc71cb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1550353175-a3611868086b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  ];

  const renderItem = (item: ReactNode, { isSelected }: IOptions): ReactNode => {
    return (
      <Flex
        mt={24}
        h="300px"
        mx="auto"
        w={isSelected && isLargerThan800 ? "90%" : "80%"}
        transform={
          isSelected && isLargerThan800
            ? "translate(-30px, -75px)"
            : "translate(0px, 0px)"
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
    <Box
      mt={{ base: 0, md: 20 }}
      position="relative"
      w={{ base: "100%", md: "90%" }}
      mx="auto"
      h={500}
    >
      <Box
        w="20%"
        position="absolute"
        h="100%"
        right="-2px"
        zIndex={30}
        bg="linear-gradient(270deg, #0E1119 0%,  transparent 90%)"
      />
      <Box
        w="20%"
        position="absolute"
        h="100%"
        left="-2px"
        zIndex={30}
        bg="linear-gradient(270deg, transparent  0%,  #0E1119 90%)"
      />
      <Carousel
        renderArrowPrev={buttonPrev}
        renderArrowNext={buttonNext}
        infiniteLoop
        autoPlay
        autoFocus
        centerMode={isLargerThan800}
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
