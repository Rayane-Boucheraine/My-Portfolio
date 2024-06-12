import React from "react";
import Link from "next/link";
// import SnakeGame from "./SnakeGame";

const HomePage = () => {
  return (
    <section className="flex items-center justify-center h-[86%] gap-12">
      <div className="flex flex-col gap-16">
        <div className="flex flex-col">
          <span className="text-[#FFF] text-[14px]">Hi all. I am</span>
          <span className="text-[#FFF] text-[42px]">Rayane Boucheraine</span>
          <span className="text-[#4D5BCE] text-[24px]">
            &gt; Front-end developer
          </span>
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-[#607B96] text-[15px]">
            &#x2F;&#x2F; complete the game to continue
          </span>
          <span className="text-[#607B96] text-[15px]">
            &#x2F;&#x2F; you can also see it on my Github page
          </span>
          <span className="flex gap-2">
            <span className="text-[#4D5BCE]">const</span>{" "}
            <span className="text-[#43D9AD]">githubLink</span>
            <span className="text-[#FFF]">=</span>
            <Link
              href="https://github.com/Rayane-Boucheraine"
              target="_blank"
              className="text-[#E99287]"
            >
              “https://github.com/Rayane-Boucheraine”
            </Link>
          </span>
        </div>
      </div>
      {/* <SnakeGame /> */}
    </section>
  );
};

export default HomePage;
