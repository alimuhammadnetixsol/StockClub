import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Investor: React.FC = () => {
  return (
    <div className="flex items-center justify-center p-[20px] w-full min-h-[740px] bg-[#9F73C2] bg-[url('/images/IconPurple.png')] bg-cover bg-center">
      <div
        data-aos="fade-up"
        className="w-full flex lg:flex-row flex-col min-h-[600px] lg:min-h-[500px] bg-white rounded-3xl p-4 lg:p-16"
      >
        <div className="w-[100%] lg:w-[50%] flex items-center min-h-[300px] lg:min-h-[480px]">
          <div className="relative top-48 lg:top-0 w-[100%] h-full flex flex-col items-center lg:items-center justify-center">
            <motion.img
              whileHover={{
                scale: 1.35,
                zIndex: 1,
                rotate: -13,
                transition: {
                  duration: 0.001, // Very short duration
                  ease: "linear", // Linear easing for an immediate effect
                },
              }}
              data-aos="fade-up"
              src="/images/IR3.png"
              alt="Brokers"
              width={273.93}
              height={390}
              className="absolute left-[100px] bottom-[40px]"
            />
            <motion.img
              whileHover={{
                scale: 1.35,
                zIndex: 1,
                rotate: -8,
                transition: {
                  duration: 0.001, // Very short duration
                  ease: "linear", // Linear easing for an immediate effect
                },
              }}
              data-aos="fade-up"
              src="/images/IR2.png"
              alt="Accounts"
              width={273.93}
              height={390}
              className="absolute left-[60px] bottom-[40px]"
            />
            <motion.img
              whileHover={{
                scale: 1.35,
                zIndex: 1,
                rotate: 17,
                transition: {
                  duration: 0.001, // Very short duration
                  ease: "linear", // Linear easing for an immediate effect
                },
              }}
              data-aos="fade-up"
              src="/images/IR1.png"
              alt="Account1"
              width={273.93}
              height={390}
              className="absolute left-[-20px] bottom-[40px]"
            />
          </div>
        </div>

        <div className="w-[100%] lg:w-[50%] flex flex-wrap items-center justify-center min-h-[300px] lg:min-h-[480px]">
          <div
            data-aos="fade-up"
            className="font-[500] text-[20px] lg:text-[33px] text-wrap text-[#127398] leading-[30px] lg:leading-[40px] text-center lg:text-left"
          >
            <span className="font-[700]">
              Receive personalized investor reports{" "}
            </span>
            Receive personalized investor reports and understand how your
            trading activities contribute to your overall wealth.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Investor;
