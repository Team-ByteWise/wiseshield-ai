import React from "react";
import Navbar from "../Navbar/Navbar.jsx";
import { motion } from "framer-motion";

function Hero() {
  const svgHover = {
    default: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 900,
        damping: 15,
      },
    },
    hover: {
      x: 3,
      transition: {
        type: "spring",
        stiffness: 600,
        damping: 10,
      },
    },
    tap: {
      x: -1,
      transition: {
        type: "spring",
        stiffness: 900,
        damping: 15,
      },
    },
  };
  const buttonHover = {
    default: {
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 900,
        damping: 15,
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 600,
        damping: 10,
      },
    },
    tap: {
      scale: 0.97,
      transition: {
        type: "spring",
        stiffness: 900,
        damping: 15,
      },
    },
  };

  return (
    <div className="home h-screen bg-gradient-to-b   from-[#aea0ff] from-20% via-[#C7BFF0] via-60%  to-[#fbe7ff] to-900%">
      <div className="pt-[120px] flex flex-col justify-center items-center">
        <motion.div
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className=" font-bold text-[80px] bg-clip-text text-center text-transparent bg-gradient-to-r from-[#4E37D9] from-20% via-[#4C3EA0] to-[#19114B] to-90%"
        >
          Phishing Prohibited,
          <br /> Fishing Allowed
        </motion.div>
        <span className=" mt-4 text-center text-[18px] text-[#1B134E] font-medium">
          Keep your internet use{" "}
          <span className="font-bold text-[#4833cc]">safe and private</span> and
          your devices running
          <br /> smoothly with one of our award-winning, easy-to-use security
          plans.
        </span>
      </div>
      <div className="mt-[60px] pb-[80px] flex justify-center">
        <motion.button
          initial="default"
          whileHover="hover"
          whileTap="tap"
          variants={buttonHover}
          onClick={() => {
            window.open("https://github.com/Team-ByteWise/wiseshield-ai/");
          }}
          className=" group bg-gradient-to-br from-[#4E37D9] from-20% via-[#4C3EA0] via-40% to-[#19114B] to-90%  text-white text-[22px] font-semibold px-6 py-2 rounded-3xl justify-center items-center flex gap-x-2 "
        >
          <span className="">Get Started</span>
          <motion.svg
            variants={svgHover}
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            class="bi bi-arrow-up-right-square-fill"
            viewBox="0 0 16 16"
          >
            <path d="M14 0a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zM5.904 10.803 10 6.707v2.768a.5.5 0 0 0 1 0V5.5a.5.5 0 0 0-.5-.5H6.525a.5.5 0 1 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 .707.707" />
          </motion.svg>
        </motion.button>
      </div>
    </div>
  );
}

export default Hero;
