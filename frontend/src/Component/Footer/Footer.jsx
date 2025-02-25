import React from "react";
import Logo from "../Logo/Logo";

function Footer() {
  return (
    <footer className="relative pt-8 bg-[#B0A5F1]">
      <div className="bg-black h-[2px] w-10/12 mx-auto mb-14"></div>
      <div className="px-6 flex ">
        <div className="w-2/3 flex justify-around">
          <div className="flex flex-col items-start gap-y-3 ">
            <p className="font-semibold text-lg">Home Solutions</p>
            <span className="link cursor-pointer">WiseShield Standard</span>
            <span className="link cursor-pointer">WiseShield Plus</span>
            <span className="link cursor-pointer">WiseShield Premium</span>
          </div>
          <div className="flex flex-col items-start gap-y-3 ">
            <p className="font-semibold text-lg">Quick Links</p>
            <span className="link cursor-pointer">Chrome Extension link</span>
            <span className="link cursor-pointer">Rate Us</span>
          </div>
          <div className="flex flex-col items-start gap-y-3 ">
            <p className="font-semibold text-lg">Contact us</p>
            <span className="flex items-center gap-x-3">
              <img src="src/assets/mail.svg" className="h-[20px]" alt="" />
              <span className="cursor-pointer">wiseshield@itsyourap.tech</span>
            </span>
            <span className="flex items-center gap-x-3">
              <img
                className="h-[20px]"
                src="src/assets/phone-call.svg"
                alt=""
              />
              <span className="cursor-pointer">+916969xxxx9</span>
            </span>
          </div>
        </div>
        <div className="w-1/3  gap-y-7 h-full flex flex-col justify-around">
          <div className="h-1/2 flex justify-center items-center ">
            <Logo />
          </div>
          <div className="h-1/2 flex justify-center items-center gap-x-4">
          <a href=""><img src="src/assets/instagram.svg" className="h-[30px] text-black hover:text-yellow-400" alt="" /></a>
          <a href=""><img src="src/assets/facebook.svg" className="h-[30px]" alt="" /></a>
          <a href=""><img src="src/assets/linkedin.svg" className="h-[30px]" alt="" /></a>
          <a href=""><img src="src/assets/twitter.svg" className="h-[26px]" alt="" /></a>
          </div>
        </div>
      </div>
      <div className="bg-[#8f7bff] py-2 mt-16 text-black font-semibold flex justify-center">
        <span>©️ 2024 WiseShield AI</span>
      </div>
    </footer>
  );
}

export default Footer;