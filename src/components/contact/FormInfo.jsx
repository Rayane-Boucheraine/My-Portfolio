import React from "react";

const FormInfo = () => {
  return (
    <div className="flex flex-col gap-1 justify-center items-center basis-1/2 border-l-[2px] border-l-[#1E2D3D]">
      <div className="flex items-center justify-start gap-6">
        <span className="text-[#607B96]">1</span>
        <span>
          <span className="text-[#C98BDF]">const</span>{" "}
          <span className="text-[#5565E8]">button</span>{" "}
          <span className="text-[#C98BDF]">= </span>
          <span className="text-[#5565E8]">
            document<span className="text-[#607B96]">.</span>querySelector
          </span>
          <span className="text-[#607B96]">(</span>
          <span className="text-[#FEA55F]">&apos;#sendBtn&apos;</span>
          <span className="text-[#607B96]">);</span>
        </span>
      </div>
      <div className="flex items-center justify-start gap-6 w-[80.8%]">
        <span className="text-[#607B96]">2</span>
        <span></span>
      </div>
      <div className="flex items-center justify-start gap-6 w-[80.8%]">
        <span className="text-[#607B96]">3</span>
        <span>
          <span className="text-[#C98BDF]">const </span>
          <span className="text-[#5565E8]">message</span>{" "}
          <span className="text-[#C98BDF]">=</span>{" "}
          <span className="text-[#607B96]">{"{"}</span>
        </span>
      </div>
      <div className="flex items-center justify-start gap-16 w-[80.8%]">
        <span className="text-[#607B96]">4</span>
        <span>
          {" "}
          <span className="text-[#5565E8]">name:</span>{" "}
          <span className="text-[#FEA55F]">&quot;Jonathan Davis&quot;</span>
          {""}
          <span className="text-[#607B96]">,</span>
        </span>
      </div>
      <div className="flex items-center justify-start gap-16 w-[80.8%]">
        <span className="text-[#607B96]">5</span>
        <span>
          {" "}
          <span className="text-[#5565E8]">email:</span>
          <span className="text-[#FEA55F]">&quot;&quot;</span>
          {""}
          <span className="text-[#607B96]">,</span>
        </span>
      </div>
      <div className="flex items-center justify-start gap-16 w-[80.8%]">
        <span className="text-[#607B96]">6</span>
        <span>
          <span className="text-[#5565E8]">message:</span>{" "}
          <span className="text-[#FEA55F]">&quot;&quot;</span>
          {""}
          <span className="text-[#607B96]">,</span>
        </span>
      </div>
      <div className="flex items-center justify-start gap-16 w-[80.8%]">
        <span className="text-[#607B96]">7</span>
        <span>
          <span className="text-[#607B96]">date:</span>{" "}
          <span className="text-[#FEA55F]">&quot;Thu 21 Apr&quot;</span>
          {""}
          <span className="text-[#607B96]">,</span>
        </span>
      </div>
      <div className="flex items-center justify-start gap-6 w-[80.8%]">
        <span className="text-[#607B96]">8</span>
        <span className="text-[#607B96]">{"}"}</span>
      </div>
      <div className="flex items-center justify-start gap-6 w-[80.8%]">
        <span className="text-[#607B96]">9</span>
        <span></span>
      </div>
      <div className="flex items-center justify-start gap-6 w-[80.8%]">
        <span className="text-[#607B96]">10</span>
        <span>
          <span className="text-[#5565E8]">
            button<span className="text-[#607B96]">.</span>addEventListener
          </span>
          <span className="text-[#607B96]">(</span>
          <span className="text-[#FEA55F]">&apos;click&apos;</span>
          <span className="text-[#607B96]">,</span>{" "}
          <span className="text-[#607B96]">()</span>{" "}
          <span className="text-[#C98BDF]">{"=>"}</span>{" "}
          <span className="text-[#607B96]">{"{"}</span>
        </span>
      </div>
      <div className="flex items-center justify-start gap-16 w-[80.8%]">
        <span className="text-[#607B96]">11</span>
        <span>
          {" "}
          <span className="text-[#5565E8]">
            form<span className="text-[#607B96]">.</span>send
          </span>
          <span className="text-[#607B96]">(</span>
          <span className="text-[#5565E8]">message</span>
          <span className="text-[#607B96]">);</span>
        </span>
      </div>
      <div className="flex items-center justify-start gap-6 w-[80.8%]">
        <span className="text-[#607B96]">12</span>
        <span className="text-[#607B96]">{"}"})</span>
      </div>
    </div>
  );
};

export default FormInfo;
