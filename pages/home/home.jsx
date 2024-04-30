import React, { useEffect } from "react";
import { useTheme } from "next-themes";
import Head from "../../components/Head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";



const Home = () => {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setTheme("dark");
  }, [setTheme]);

  return (
    <>
     <Head/>
     <Header/>
    <Footer/>
    </>
  );
};

export default Home;
