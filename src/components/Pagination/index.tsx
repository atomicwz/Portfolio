import React from "react";
import { Button, Flex, Text } from "@chakra-ui/react";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";

interface IProps {
  prev: () => void;
  next: () => void;
  page: number;
  hasNextPage: boolean;
}

const Pagination: React.FC<IProps> = ({ prev, next, page, hasNextPage }) => {
  return (
    <Flex gap={3} justifyContent="center" alignItems="center" my={10}>
      <Button
        onClick={prev}
        bg="transparent"
        isDisabled={page === 1}
        color={"#FFFFFF"}
        _hover={{
          bg: "transparent",
          color: "#1B70CB",
        }}
      >
        <BsFillArrowLeftCircleFill size={25} />
      </Button>
      <Text color={"#FFFFFF"}>{page}</Text>
      <Button
        isDisabled={hasNextPage}
        bg="transparent"
        onClick={next}
        color={"#FFFFFF"}
        _hover={{
          bg: "transparent",
          color: "#1B70CB",
        }}
      >
        <BsFillArrowRightCircleFill size={25} />
      </Button>
    </Flex>
  );
};

export default Pagination;
