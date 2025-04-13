import React from "react";
import "../Logo/style.css";
import { NavLink } from "react-router-dom";

function Logo() {
  return (
    <>
    <NavLink to="/">
              
      <div class="w-[170px] flex flex-col cursor-pointer" href="/">
        <span class="font-extrabold text-2xl">
          WiseShield
          <span class="bg-clip-text ml-1 text-transparent bg-gradient-to-r from-[#3196DC] to-[#9068C1]">
            Ai
          </span>
        </span>
        <span class="text-xs text-right mr-3">Secured by AI</span>
        <div class="absolute flex justify-end  w-[145px]">
          <img
            src="src/assets/google-gemini-icon.png"
            class="blink relative h-[18px] top-[-8px] right-[-34px]"
            alt=""
          />
        </div>
      </div>

      </NavLink>
    </>
  );
}

export default Logo;