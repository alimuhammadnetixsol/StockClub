import React from "react";
import Image from "next/image";

const Accounts: React.FC = () => {
  return (
  
    <div className="flex flex-col lg:flex-row px-[1rem] gap-5 items-center justify-center w-full min-h-[740px] bg-[#31CE5D] bg-[url('/images/IconsGreen.png')] bg-cover bg-center">
      <div className="w-full min-h-[600px] lg:min-h-[500px] bg-white rounded-3xl p-4 lg:p-16 gap-16 flex flex-col-reverse lg:flex-row">

        <div className="lg:w-[50%] w-full flex items-center justify-center min-h-[300px] lg:min-h-[480px]">
          <div className="relative w-[565.25px] h-[275.91px] flex flex-col items-center md:items-start md:justify-start">
            <Image
              src="/images/Brokers.png"
              alt="Brokers"
              width={565.25}
              height={275.91}
              className="absolute left-14 -top-10 md:-left-4 md:-top-20"
            />
            <Image
              src="/images/Accounts.png"
              alt="Accounts"
              width={565.25}
              height={275.91}
              className="absolute left-2 top-2 md:left-4 md:top-6"
            />
            <Image
              src="/images/Account1.png"
              alt="Account1"
              width={565.25}
              height={275.91}
              className="absolute top-[104px] left-0 md:top-20 md:-left-4"
            />
          </div>
        </div>

        <div className="lg:w-[50%] w-full flex items-center justify-center min-h-[300px] lg:min-h-[480px] md:justify-start">
          <div className="font-[500] text-[20px] lg:text-[33px] text-wrap text-[#127398] leading-[30px] lg:leading-[40px] text-center lg:text-left">
            <span className="font-[700]">Track your net worth </span>
             automatically and spend less time managing your personal finances. No need to update spreadsheets manually anymore.
          </div>
        </div>

      </div>
    </div>
  );
};

export default Accounts;
