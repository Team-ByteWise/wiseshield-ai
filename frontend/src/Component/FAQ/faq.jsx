import React from "react";
import Accordion from "../FAQ/Accordion.jsx";
function Faq() {
  return (
    <div className="py-[4rem]  flex flex-col gap-y-[7rem] bg-gradient-to-b from-[#fbe7ff] from-20% via-[#C7BFF0] via-60%  to-[#B0A5F1] to-900%">
      <h1 className="text-2xl text-center font-semibold text-[40px] mb-[40px]">
        Frequently Asked Questions
      </h1>

      <div className="md:w-3/4 w-[90%] m-auto  rounded-lg">
        <Accordion
          title="What is WiseShield?"
          answer=" WiseShield is a Chrome Extension designed to help users detect
              phishing websites. It uses advanced AI and data training to
              determine if a website is safe or a potential phishing threat.
              Additionally, WiseShield can show you the legitimate version of a
              site if you encounter a fake one."
        />
        <Accordion
          title="How does WiseShield help protect me from phishing websites?"
          answer=" WiseShield detects phishing websites using AI and data training.
              It checks if the website you're visiting is safe and alerts you if
              it is a potential phishing site. Additionally, it shows you the
              legitimate site if you are on a fake one."
        />
        <Accordion
          title="What should I do if the extension detects a phishing website?"
          answer="If our extension detects a phishing website, it will alert you immediately. You should close the website and avoid entering any personal information. You can also report the site to help improve our detection system."
        />
        <Accordion
          title="How can I tell if a website is safe?"
          answer="Once you have WiseShield installed, it will automatically check
              the websites you visit and notify you if a site is safe or a
              potential phishing threat."
        />
        <Accordion
          title="Is WiseShield free to use?"
          answer="Yes, WiseShield is free to use. We want to help everyone stay safe
              online."
        />
        <Accordion
          title="How is user data handled by WiseShield?"
          answer=" We take user privacy seriously. WiseShield does not collect or
              store any personal data without user consent. All data processing
              is done locally on your device to ensure privacy and security.
"
        />
      </div>
    </div>
  );
}

export default Faq;