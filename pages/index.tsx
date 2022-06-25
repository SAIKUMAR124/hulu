import Head from "next/head";
import React from "react";
import Header from "../components/Header";

const Home = () => {
  return (
    <div>
      <Head>
        <title>Hulu</title>
      </Head>
      <Header />
    </div>
  );
};

export default Home;
