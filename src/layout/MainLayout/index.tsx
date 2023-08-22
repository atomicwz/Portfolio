import React from "react";
import Head from "next/head";
import { Box } from "@chakra-ui/react";

interface IProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<IProps> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Dener Oliveira - Portfólio</title>
        <meta name="description" content="Portfólio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box>{children}</Box>
    </>
  );
};
