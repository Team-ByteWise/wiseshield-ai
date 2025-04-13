import React from "react";

function Feature() {
  return (
    <div className=" py-[100px] bg-[#fbe7ff]">
      <div className="py-10 px-4 md:px-20 flex items-center justify-center md:flex-row flex-col">
        <div className="md:w-1/2 w-[95%] flex items-center justify-center">
        <img
          src="src/assets/feature-2.svg"
          className="h-[350px] drop-shadow-2xl "
          alt=""
        />
        </div>
        <div className="md:w-1/2 w-[95%] flex flex-col items-center justify-center gap-y-16 ">
          <span className="text-3xl text-center font-bold text-[#5646b1]">
          Don't Get Hooked by Phishing Scams
          </span>
          <p className="text-center text-xl">
          WiseShield protects you from deceptive websites trying to steal your information, acting as your digitallifeguard against online phishing scams.
          </p>
        </div>
      </div>
      <div className="py-10 px-4 md:px-20 flex md:flex-row-reverse items-center justify-center gap-x-4 flex-col">
        <img
          src="src/assets/feature-1.svg"
          className="h-[350px] drop-shadow-2xl"
          alt=""
        />
        <div className="md:w-3/5 w-[95%] flex flex-col items-center justify-center gap-y-10 ">
          <span className="text-3xl text-center font-bold text-[#5646b1]">
          WiseShield: Your Ultimate Guard <br/>Against Phishing Attacks
          </span>
          <p className="text-center text-xl">
          WiseShield ensures your online safety with AI-powered <br/>phishing detection and blockchain verification, <br/>keeping your digital world secure.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Feature;