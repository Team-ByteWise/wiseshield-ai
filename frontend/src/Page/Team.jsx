import React from "react";
import Profile from "../Component/Profile/Profile";

function Team() {
  return (
    <section className="w-full flex flex-col gap-y-[80px] items-center bg-gradient-to-b  from-[#aea0ff] via-[#C7BFF0] via-500%  to-[#B0A5F1]">
      <div className="py-[50px]  gap-y-5 flex flex-col justify-center items-center">
        <h2 className="text-3xl font-bold text-[#4C3EA0] tracking-tighter sm:text-4xl md:text-5xl">
          Meet Our Team
        </h2>
        <p className="mx-auto max-w-[700px] text-[#4C3EA0] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          Get in touch with our experts for any questions or inquiries.
        </p>
      </div>
      <div className="flex pb-[150px] w-full justify-evenly gapx">
        <Profile
          name="Ankan Pal"
          role="Founder & CEO"
          linkedin="https://www.linkedin.com/in/itsyourap/"
          twitter="https://twitter.com/itsyourap"
          github="https://github.com/itsyourap"
          image="https://media.licdn.com/dms/image/D4D03AQEBDxLwNyF9mg/profile-displayphoto-shrink_800_800/0/1693194284867?e=1724889600&v=beta&t=Z_dDRaFsa-pQT5UpbCjMkW-p4gRyDbs3-H9YGAGCcD8"
        />
        <Profile
          name="Anindya Koley"
          role="Lead Developer"
          linkedin="https://www.linkedin.com/in/anindyakoley/"
          twitter="https://x.com/ezy_coder"
          github="https://github.com/itsanindyak"
          image="https://media.licdn.com/dms/image/D5603AQFtHUNrqNnuwg/profile-displayphoto-shrink_800_800/0/1707448786259?e=1724889600&v=beta&t=04CJ8zjNGLsLwncpfrMfzHWV1Rh3DTwA5glD2Swviac"
        />
        <Profile
          name="Aniket De"
          role="Product Manager"
          linkedin="https://www.linkedin.com/in/aniketde2004/"
          twitter="https://x.com/AniketDe1112"
          github="https://github.com/aniketde1112"
          image="https://media.licdn.com/dms/image/D4D03AQFEGjQiV8LI_A/profile-displayphoto-shrink_800_800/0/1701025087761?e=1724889600&v=beta&t=LAAjLoeZ8omuHPStxRAUXsTTnt0hXzBKkCLlUsUt6L0"
        />
        <Profile
          name="Arkadip Ray"
          role="Lead Designer"
          linkedin="https://www.linkedin.com/in/arkadip-ray-41a1a427b/"
          twitter="https://x.com/RayArkadipTTV"
          github="https://github.com/Arkadipttv"
          image="https://media.licdn.com/dms/image/D4D03AQEY1nf-JRRhVw/profile-displayphoto-shrink_800_800/0/1719903157350?e=1725494400&v=beta&t=1pSXQomnulze0YSuF-2ruKvqWE35gxW5iTHJ2j8Nqck"
        />
      </div>
    </section>
  );
}

export default Team;
