import Head from "next/head";
import React from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";

const Home = () => {
  return (
    <div>
      <Head>
        <title>Hulu</title>
      </Head>
      <Header />
      <Nav/>
    </div>
  );
};

export default Home;
