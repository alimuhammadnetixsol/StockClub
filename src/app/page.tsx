"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Signup from "@/components/Signup";
import Community from "@/components/Community";
import Accounts from "@/components/Accounts";
import Investor from "@/components/Investor";
import useMediaQuery from "@mui/material/useMediaQuery";

const Home: React.FC = () => {
  const isMobile = useMediaQuery("(max-width: 1020px)");

  useEffect(() => {
    AOS.init({
      duration: 1300,
      once: false,
    });
  }, []);

  return (
    <>
      {isMobile ? (
        <>
          <Community />
          <Accounts />
          <Investor />
        </>
      ) : (
        <>
          <Signup />
          <Community />
          <Accounts />
          <Investor />
        </>
      )}
    </>
  );
};

export default Home;
