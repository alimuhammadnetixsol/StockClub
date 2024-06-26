import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
const Community: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row px-[1rem] gap-5 items-center justify-center w-full min-h-[740px] bg-[#3994E9] bg-[url('/images/icon.png')] bg-cover bg-center">
      <div
        data-aos="fade-up"
        className="w-full min-h-[600px] sm:mt-8 lg:min-h-[500px] bg-white rounded-3xl p-4 lg:p-16 gap-16 flex flex-col-reverse lg:flex-row"
      >
        <div className="lg:w-[50%] w-full flex items-center justify-center min-h-[300px] lg:min-h-[480px] md:justify-start">
          <div
            data-aos="fade-up"
            className="font-[500] sm:px-12 text-[20px] lg:text-[33px] text-wrap text-[#127398] leading-[30px] lg:leading-[40px] text-center lg:text-left"
          >
            <span className="font-[700]">Connect your brokerage accounts </span>
            and get access to trading ideas, aggregated stats and discussions in
            your tech investing community right away.
          </div>
        </div>
        <div className="lg:w-[50%] px-8 sm:max-w-full sm:mt-20 w-full flex items-center justify-center min-h-[300px] lg:min-h-[480px]">
          <div className=" relative w-[565.25px] h-[275.91px] flex flex-col items-center md:items-start md:justify-start">
            <motion.img
              whileHover={{
                scale: 1.15,
                zIndex: 1,
                rotate: -10,
                transition: {
                  duration: 0.001,
                  ease: "linear",
                },
              }}
              data-aos="fade-up"
              src="/images/Amazon.png"
              alt="Amazon"
              width={565.25}
              height={275.91}
              className="absolute left-14 sm:left-4 -top-10 md:left-12 md:-top-32"
            />
            <motion.img
              whileHover={{
                scale: 1.15,
                zIndex: 1,
                rotate: 6,
                transition: {
                  duration: 0.001,
                  ease: "linear",
                },
              }}
              data-aos="fade-up"
              src="/images/Google.png"
              alt="Google"
              width={565.25}
              height={275.91}
              className="absolute left-2 top-2 sm:top-4 sm:left-18 md:left-0 md:-top-20"
            />
            <motion.img
              whileHover={{
                scale: 1.15,
                zIndex: 1,
                rotate: -6,
                transition: {
                  duration: 0.001,
                  ease: "linear",
                },
              }}
              data-aos="fade-up"
              src="/images/StockClub.png"
              alt="StockClub"
              width={565.25}
              height={275.91}
              className="absolute top-[104px] sm:top-28 left-0 md:top-6 md:left-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Community;
