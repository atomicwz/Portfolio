import { Flex, Image, Text, Heading, chakra } from "@chakra-ui/react";
import React from "react";

const Technologies: React.FC = () => {
  return (
    <Flex direction="column" mt={{ base: 10, md: 20 }} mb={34}>
      <Heading
        fontSize={{ base: 28, md: 60 }}
        textAlign="center"
        mb={{ base: 10, md: 20 }}
      >
        Habilidades Técnicas<chakra.span color="#1B70CB">.</chakra.span>
      </Heading>
      <Flex
        justifyContent="space-between"
        w={{ base: "90%", md: "80%", lg: "60%" }}
        mx="auto"
      >
        <Flex
          direction="column"
          alignItems="center"
          gap={2}
          transition=".4s"
          _hover={{ transform: "scale(1.2)" }}
        >
          <Image
            w={{ base: "30px", md: 100 }}
            src="/tecnologias/html5.svg"
            alt="html5"
          />
          <Text
            color="#C9CED3"
            fontWeight={500}
            fontSize={{ base: 12, md: 18 }}
          >
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
          <Image
            w={{ base: "30px", md: 100 }}
            src="/tecnologias/css.svg"
            alt="CSS"
          />
          <Text
            color="#C9CED3"
            fontWeight={500}
            fontSize={{ base: 12, md: 18 }}
          >
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
            w={{ base: "30px", md: 100 }}
            src="/tecnologias/javascript.svg"
            alt="Javascript"
          />
          <Text
            color="#C9CED3"
            fontWeight={500}
            fontSize={{ base: 12, md: 18 }}
          >
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
          <Image
            w={{ base: "30px", md: 100 }}
            src="/tecnologias/react.svg"
            alt="React"
          />
          <Text
            color="#C9CED3"
            fontWeight={500}
            fontSize={{ base: 12, md: 18 }}
          >
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
            w={{ base: "30px", md: 100 }}
            src="/tecnologias/typescript.svg"
            alt="Typescript"
          />
          <Text
            color="#C9CED3"
            fontWeight={500}
            fontSize={{ base: 12, md: 18 }}
          >
            Typescript
          </Text>
        </Flex>
      </Flex>
      <Flex
        justifyContent="space-between"
        w={{ base: "100%", md: "80%", lg: "60%" }}
        mx="auto"
        mt={{ base: 16, md: 24 }}
      >
        <Flex
          direction="column"
          alignItems="center"
          gap={2}
          transition=".4s"
          _hover={{ transform: "scale(1.2)" }}
        >
          <Image
            w={{ base: "30px", md: 100 }}
            src="/tecnologias/react-native.svg"
            alt="React Native"
          />
          <Text
            color="#C9CED3"
            fontWeight={500}
            fontSize={{ base: 12, md: 18 }}
          >
            RN
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
            w={{ base: "30px", md: 100 }}
            src="/tecnologias/chakra-ui.svg"
            alt="Chakra UI"
          />
          <Text
            color="#C9CED3"
            fontWeight={500}
            fontSize={{ base: 12, md: 18 }}
          >
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
          <Image
            w={{ base: "30px", md: 100 }}
            src="/tecnologias/mobx.svg"
            alt="Mobx"
          />
          <Text
            color="#C9CED3"
            fontWeight={500}
            fontSize={{ base: 12, md: 18 }}
          >
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
          <Image
            w={{ base: "30px", md: 100 }}
            src="/tecnologias/next.svg"
            alt="Next"
          />
          <Text
            color="#C9CED3"
            fontWeight={500}
            fontSize={{ base: 12, md: 18 }}
          >
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
          <Image
            w={{ base: "30px", md: 100 }}
            src="/tecnologias/node.svg"
            alt="Node"
          />
          <Text
            color="#C9CED3"
            fontWeight={500}
            fontSize={{ base: 12, md: 18 }}
          >
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
          <Image
            w={{ base: "30px", md: 100 }}
            src="/tecnologias/nest_js.svg"
            alt="Nest"
          />
          <Text
            color="#C9CED3"
            fontWeight={500}
            fontSize={{ base: 12, md: 18 }}
          >
            Nest
          </Text>
        </Flex>
      </Flex>
      <Flex
        justifyContent="space-between"
        w={{ base: "90%", md: "80%", lg: "60%" }}
        mx="auto"
        mt={{ base: 16, md: 24 }}
      >
        <Flex
          direction="column"
          alignItems="center"
          gap={2}
          transition=".4s"
          _hover={{ transform: "scale(1.2)" }}
        >
          <Image
            w={{ base: "30px", md: 100 }}
            src="/tecnologias/postgres.svg"
            alt="Postgres"
          />
          <Text
            color="#C9CED3"
            fontWeight={500}
            fontSize={{ base: 12, md: 18 }}
          >
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
          <Image
            w={{ base: "30px", md: 100 }}
            src="/tecnologias/jest.svg"
            alt="Jest"
          />
          <Text
            color="#C9CED3"
            fontWeight={500}
            fontSize={{ base: 12, md: 18 }}
          >
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
          <Image
            w={{ base: "30px", md: 100 }}
            src="/tecnologias/typeorm.svg"
            alt="Typeorm"
          />
          <Text
            color="#C9CED3"
            fontWeight={500}
            fontSize={{ base: 12, md: 18 }}
          >
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
          <Image
            w={{ base: "30px", md: 100 }}
            src="/tecnologias/linux.svg"
            alt="Linux"
          />
          <Text
            color="#C9CED3"
            fontWeight={500}
            fontSize={{ base: 12, md: 18 }}
          >
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
          <Image
            w={{ base: "30px", md: 100 }}
            src="/tecnologias/github.svg"
            alt="GitHub"
          />
          <Text
            color="#C9CED3"
            fontWeight={500}
            fontSize={{ base: 12, md: 18 }}
          >
            GitHub
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Technologies;
