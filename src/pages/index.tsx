import React from "react";
import {
  Flex,
  Heading,
  Image,
  chakra,
  Text,
  Button,
  keyframes,
} from "@chakra-ui/react";
import Head from "next/head";
import { Projects } from "@/components/Carousel";
import Link from "next/link";

const Home: React.FC = () => {
  const colorChange = keyframes`
  0% { color: #1B70CB; }
  25% { color: #1B70CB; }
  50% { color: white; }
  75% { color: white; }
  100% { color: #1B70CB; }
`;

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
        background="url('/background.webp')"
        color="#FFFFFF"
        direction="column"
        py={10}
      >
        <Image src="/marca_portfolio.svg" alt="Logo" mx="auto" w={400} />
        <Flex alignItems="center" justifyContent="center" mt={10} zIndex={1}>
          <Flex direction="column">
            <Heading fontSize={{ base: 32, md: 60 }} fontWeight={300}>
              Olá, eu sou
            </Heading>
            <Heading
              fontSize={{ base: 32, md: 60 }}
              color="#1B70CB"
              animation={`${colorChange} 5s infinite`}
            >
              Denner Oliveira<chakra.span color="white">.</chakra.span>
            </Heading>
            <Text maxW={500} fontSize={{ base: 16, md: 18 }} my={5}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac
              justo ex. Pellentesque laoreet eros non est gravida bibendum.
              Morbi in interdum nisi. Maecenas mattis lacus non arcu convallis,
              a efficitur risus eleifend. Etiam ullamcorper posuere lorem rutrum
              molestie. Pellentesque vel imperdiet
            </Text>
            <Heading
              fontWeight={500}
              maxW={500}
              fontSize={{ base: 25, md: 40 }}
            >
              +1.5 anos trabalhando com React e Typescript.
            </Heading>
            <Flex alignItems="center" gap={3} mt={10}>
              <Link href="/dener.cv.pdf" download>
                <Button
                  fontWeight="bold"
                  color="black"
                  bg="#1B70CB"
                  rounded="3xl"
                  display="flex"
                  gap={2}
                >
                  <Image src="/download.svg" w={5} alt="Download" />
                  Baixar CV
                </Button>
              </Link>
              <Link href="mailto:denerdev013@gmail.com?subject=&body=">
                <Image
                  src="/icone_email.svg"
                  w={7}
                  alt="Email"
                  cursor="pointer"
                  transition=".4s"
                  _hover={{
                    w: 8,
                  }}
                />
              </Link>
              <Link
                href="https://www.instagram.com/denneroliveira013/"
                target="_blank"
              >
                <Image
                  src="/icone_insta.svg"
                  w={7}
                  alt="Instagram"
                  cursor="pointer"
                  transition=".4s"
                  _hover={{
                    w: 8,
                  }}
                />
              </Link>
              <Link
                href="https://www.linkedin.com/in/dener-oliveira-lima-117496222/"
                target="_blank"
              >
                <Image
                  src="/icone_linkedin.svg"
                  w={7}
                  alt="Download"
                  cursor="pointer"
                  transition=".4s"
                  _hover={{
                    w: 8,
                  }}
                />
              </Link>
              <Link href="https://wa.me/5575998468810" target="_blank">
                <Image
                  src="/icone_whatsapp.svg"
                  w={7}
                  alt="Whatsapp"
                  cursor="pointer"
                  transition=".7s"
                  _hover={{
                    w: 8,
                  }}
                />
              </Link>
            </Flex>
          </Flex>
          <Image src="/foto_desktop.webp" alt="Dener" />
        </Flex>
        {/* SLIDE */}
        <Projects />
        <Heading fontSize={{ base: 32, md: 60 }} textAlign="center" mt={20}>
          Habilidades Técnicas<chakra.span color="#1B70CB">.</chakra.span>
        </Heading>
        <Flex direction="column" mt={20} mb={34}>
          <Flex justifyContent="space-between" w="60%" mx="auto">
            <Flex
              direction="column"
              alignItems="center"
              gap={2}
              transition=".4s"
              _hover={{ transform: "scale(1.2)" }}
            >
              <Image w={100} src="/tecnologias/html5.svg" alt="html5" />
              <Text color="#C9CED3" fontWeight={500}>
                HTML5
              </Text>
            </Flex>
            <Flex
              direction="column"
              alignItems="center"
              gap={2}
              transition=".4s"
              _hover={{ transform: "scale(1.2)" }}
            >
              <Image w={100} src="/tecnologias/css.svg" alt="CSS" />
              <Text color="#C9CED3" fontWeight={500}>
                CSS3
              </Text>
            </Flex>
            <Flex
              direction="column"
              alignItems="center"
              gap={2}
              transition=".4s"
              _hover={{ transform: "scale(1.2)" }}
            >
              <Image
                w={100}
                src="/tecnologias/javascript.svg"
                alt="Javascript"
              />
              <Text color="#C9CED3" fontWeight={500}>
                Javascript
              </Text>
            </Flex>
            <Flex
              direction="column"
              alignItems="center"
              gap={2}
              transition=".4s"
              _hover={{ transform: "scale(1.2)" }}
            >
              <Image w={100} src="/tecnologias/react.svg" alt="React" />
              <Text color="#C9CED3" fontWeight={500}>
                React
              </Text>
            </Flex>
            <Flex
              direction="column"
              alignItems="center"
              gap={2}
              transition=".4s"
              _hover={{ transform: "scale(1.2)" }}
            >
              <Image
                w={100}
                src="/tecnologias/typescript.svg"
                alt="Typescript"
              />
              <Text color="#C9CED3" fontWeight={500}>
                Typescript
              </Text>
            </Flex>
          </Flex>
          <Flex justifyContent="space-between" w="70%" mx="auto" mt={24}>
            <Flex
              direction="column"
              alignItems="center"
              gap={2}
              transition=".4s"
              _hover={{ transform: "scale(1.2)" }}
            >
              <Image
                w={100}
                src="/tecnologias/react-native.svg"
                alt="React Native"
              />
              <Text color="#C9CED3" fontWeight={500}>
                React Native
              </Text>
            </Flex>
            <Flex
              direction="column"
              alignItems="center"
              gap={2}
              transition=".4s"
              _hover={{ transform: "scale(1.2)" }}
            >
              <Image w={100} src="/tecnologias/chakra-ui.svg" alt="Chakra UI" />
              <Text color="#C9CED3" fontWeight={500}>
                Chakra UI
              </Text>
            </Flex>
            <Flex
              direction="column"
              alignItems="center"
              gap={2}
              transition=".4s"
              _hover={{ transform: "scale(1.2)" }}
            >
              <Image w={100} src="/tecnologias/mobx.svg" alt="Mobx" />
              <Text color="#C9CED3" fontWeight={500}>
                Mobx
              </Text>
            </Flex>
            <Flex
              direction="column"
              alignItems="center"
              gap={2}
              transition=".4s"
              _hover={{ transform: "scale(1.2)" }}
            >
              <Image w={100} src="/tecnologias/next.svg" alt="Next" />
              <Text color="#C9CED3" fontWeight={500}>
                Next
              </Text>
            </Flex>
            <Flex
              direction="column"
              alignItems="center"
              gap={2}
              transition=".4s"
              _hover={{ transform: "scale(1.2)" }}
            >
              <Image w={100} src="/tecnologias/node.svg" alt="Node" />
              <Text color="#C9CED3" fontWeight={500}>
                Node
              </Text>
            </Flex>
            <Flex
              direction="column"
              alignItems="center"
              gap={2}
              transition=".4s"
              _hover={{ transform: "scale(1.2)" }}
            >
              <Image w={100} src="/tecnologias/nest_js.svg" alt="Nest" />
              <Text color="#C9CED3" fontWeight={500}>
                Nest
              </Text>
            </Flex>
          </Flex>
          <Flex justifyContent="space-between" w="60%" mx="auto" mt={24}>
            <Flex
              direction="column"
              alignItems="center"
              gap={2}
              transition=".4s"
              _hover={{ transform: "scale(1.2)" }}
            >
              <Image w={100} src="/tecnologias/postgres.svg" alt="Postgres" />
              <Text color="#C9CED3" fontWeight={500}>
                Postgres
              </Text>
            </Flex>
            <Flex
              direction="column"
              alignItems="center"
              gap={2}
              transition=".4s"
              _hover={{ transform: "scale(1.2)" }}
            >
              <Image w={100} src="/tecnologias/jest.svg" alt="Jest" />
              <Text color="#C9CED3" fontWeight={500}>
                Jest
              </Text>
            </Flex>
            <Flex
              direction="column"
              alignItems="center"
              gap={2}
              transition=".4s"
              _hover={{ transform: "scale(1.2)" }}
            >
              <Image w={100} src="/tecnologias/typeorm.svg" alt="Typeorm" />
              <Text color="#C9CED3" fontWeight={500}>
                TypeORM
              </Text>
            </Flex>

            <Flex
              direction="column"
              alignItems="center"
              gap={2}
              transition=".4s"
              _hover={{ transform: "scale(1.2)" }}
            >
              <Image w={100} src="/tecnologias/linux.svg" alt="Linux" />
              <Text color="#C9CED3" fontWeight={500}>
                Linux
              </Text>
            </Flex>
            <Flex
              direction="column"
              alignItems="center"
              gap={2}
              transition=".4s"
              _hover={{ transform: "scale(1.2)" }}
            >
              <Image w={100} src="/tecnologias/github.svg" alt="GitHub" />
              <Text color="#C9CED3" fontWeight={500}>
                GitHub
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default Home;
