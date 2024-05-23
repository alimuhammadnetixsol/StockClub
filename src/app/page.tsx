"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Signup from "@/components/Signup";
import Community from "@/components/Community";
import Accounts from "@/components/Accounts";
import Investor from "@/components/Investor";

const Home: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1300,
      once: false,
    });
  }, []);
  return (
    <div>
      <Signup />
      <Community />
      <Accounts />
      <Investor />
    </div>
  );
};

export default Home;
