import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Investor: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row px-[1rem] gap-5 items-center justify-center w-full min-h-[740px] bg-[#9F73C2] bg-[url('/images/IconPurple.png')] bg-cover bg-center">
      <div
        data-aos="fade-up"
        className="w-full min-h-[600px] lg:min-h-[500px] bg-white rounded-3xl p-4 lg:p-16 gap-16 flex lg:flex-row"
      >
        <div className="lg:w-[50%] w-full flex items-center justify-center min-h-[300px] lg:min-h-[480px]">
          <div className="relative w-[565.25px] h-[275.91px] flex flex-col items-center md:items-start md:justify-start">
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
              className="absolute left-14 -top-10 md:left-80 md:top-216"
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
              className="absolute left-2 top-2 md:left-56 md:-top-7"
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
              className="absolute left-0 top-[104px] md:-top-6 md:left-32"
            />
          </div>
        </div>

        <div className="lg:w-[50%] w-full flex items-center justify-center min-h-[300px] lg:min-h-[480px] md:justify-start">
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
