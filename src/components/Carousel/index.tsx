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
      top="70%"
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
      top="70%"
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
    "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1550167164-1b67c2be3973?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
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
        pt={24}
        h={400}
        w={isSelected ? 600 : 500}
        transform={
          isSelected ? "translate(-50px, -75px)" : "translate(0px, 0px)"
        }
        rounded="3xl"
        position="relative"
        transition=".8s"
      >
        {item}
      </Flex>
    );
  };

  return (
    <Box mt={40} position="relative" w="90%" mx="auto" h={500}>
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
            <Flex key={image} position="relative">
              <Image rounded="3xl" src={image} alt={image} objectFit="cover" />
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
            </Flex>
          );
        })}
      </Carousel>
    </Box>
  );
};

export { Projects };
