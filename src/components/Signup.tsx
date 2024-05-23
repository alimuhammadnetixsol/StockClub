import React from "react";
import Image from "next/image";

const Signup: React.FC = () => {
  return (
    // <div className="relative bg-[#00ABE1] w-full min-h-[680px] flex items-center justify-center">
    //   <Image
    //     src={icon}
    //     alt="Description of the image"
    //     className="object-cover h-[680px]"
    //   />

    // </div>

    <div className="flex flex-col lg:flex-row px-[3rem] gap-5 items-center justify-center w-full min-h-[680px] bg-[#00ABE1] bg-[url('/images/icon.png')] bg-cover bg-center">
      <div
        data-aos="fade-up"
        className="p-5 w-full lg:w-[35%] h-[540px] bg-white rounded-2xl"
      >
        <div className="flex flex-col gap-5 items-center justify-center w-full h-full bg-[#00ABE1] rounded-2xl">
          <Image src="/images/qr.png" alt="QR" width={219} height={219} />
          <div className="text-[45px] text-white font-[500] leading-[52.73px] text-center">
            Sign Up
          </div>
        </div>
      </div>
      <div
        data-aos="fade-up"
        className="w-full flex flex-col gap-5 lg:relative items-center justify-center lg:flex-row  lg:w-[65%] min-h-[540px] bg-white rounded-2xl"
      >
        <div className=" lg:w-[40%] w-full flex lg:absolute lg:-left-20 items-center justify-start">
          <Image
            src="/images/Illistration.png"
            alt="QR"
            width={343}
            height={480}
          />
        </div>
        <div className="lg:w-[60%] w-full lg:absolute lg:right-4 flex items-center justify-start">
          <div className="font-[500] text-[33px] text-[#127398]">
            <span className="font-[700]"> Sign up today </span> and manage your
            portfolio like a pro with personalized assistant and access to a
            trusted tech community of 1,200 members who connected $150M+ of
            total assets.{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
