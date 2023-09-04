import {
  Button,
  Flex,
  Heading,
  Link,
  Image,
  Text,
  chakra,
  keyframes,
} from "@chakra-ui/react";
import React from "react";

const Apresentation: React.FC = () => {
  const colorChange = keyframes`
    0% { color: #1B70CB; }
    25% { color: #1B70CB; }
    50% { color: white; }
    75% { color: white; }
    100% { color: #1B70CB; }
  `;

  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      mt={10}
      zIndex={1}
      direction={{ base: "column-reverse", lg: "row" }}
    >
      <Flex direction="column">
        <Heading
          fontSize={{ base: 32, lg: 60 }}
          fontWeight={300}
          mt={{ base: 10, lg: 0 }}
        >
          Olá, eu sou
        </Heading>
        <Heading
          fontSize={{ base: 32, lg: 60 }}
          color="#1B70CB"
          animation={`${colorChange} 4s infinite`}
        >
          Denner Oliveira<chakra.span color="white">.</chakra.span>
        </Heading>
        <Text maxW={500} fontSize={{ base: 16, md: 18 }} my={5}>
          Sou alguém dedicado e determinado a alcançar meus objetivos. Minha
          trajetória é marcada pelo constante esforço em aprender e evoluir.
          Além disso, sou sociável e gosto de colaborar com outros, acreditando
          que juntos podemos conquistar muito mais. Estou sempre decidido a
          enfrentar desafios com entusiasmo.
        </Text>
        <Heading fontWeight={500} maxW={500} fontSize={{ base: 25, lg: 40 }}>
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
              alt="Linkedin"
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
              alt="WhatsApp"
              cursor="pointer"
              transition=".4s"
              _hover={{
                w: 8,
              }}
            />
          </Link>
        </Flex>
      </Flex>
      <Image
        src="/foto_desktop.webp"
        alt="Dener"
        display={{ base: "none", lg: "block" }}
      />
      <Image
        src="/foto_mobile.webp"
        alt="Dener"
        display={{ base: "block", lg: "none" }}
      />
    </Flex>
  );
};

export default Apresentation;
