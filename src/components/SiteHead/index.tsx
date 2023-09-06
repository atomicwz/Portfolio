import React from "react";
import Head from "next/head";

const SiteHead = () => {
  return (
    <Head>
      <title>Dener Oliveira - Portfólio</title>
      <meta name="description" content="Portfólio" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.svg" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;500;700&display=swap"
        rel="stylesheet"
      />
    </Head>
  );
};

export default SiteHead;
