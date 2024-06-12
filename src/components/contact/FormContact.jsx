import React from 'react'

const FormContact = () => {
  return (
    <form className="basis-1/2 flex flex-col gap-6 justify-center items-center">
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="text-[#607B96] text-[15px]">
          _name:
        </label>
        <input
          type="text"
          name="name"
          id="name"
          required
          className="bg-[#011221] rounded-[12px] w-[22rem] py-[6px] border-[2px] border-[#1E2D3D] text-[#607B96] px-[16px] outline-none"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-[#607B96] text-[15px]">
          _email:
        </label>
        <input
          type="email"
          name="email"
          id="email"
          required
          className="bg-[#011221] rounded-[12px] w-[22rem] py-[6px] border-[2px] border-[#1E2D3D] text-[#607B96] px-[16px] outline-none"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="subject" className="text-[#607B96] text-[15px]">
          _subject:
        </label>
        <input
          type="text"
          name="subject"
          id="subject"
          required
          className="bg-[#011221] rounded-[12px] w-[22rem] py-[6px] border-[2px] border-[#1E2D3D] text-[#607B96] px-[16px] outline-none"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="msg" className="text-[#607B96] text-[15px]">
          _message:
        </label>
        <textarea
          name="msg"
          id="msg"
          required
          className="bg-[#011221] rounded-[12px] py-[8px] px-[16px] w-[22rem] h-[120px] border-[2px] border-[#1E2D3D] text-[#607B96] outline-none"
        ></textarea>
      </div>
      <div className="w-[22rem]">
        <input
          type="submit"
          value="Submit-Message"
          className=" self-start text-[#FFFFFF] bg-[#1C2B3A] rounded-[12px] py-[8px] px-[16px] text-[15px] cursor-pointer"
        />
      </div>
    </form>
  );
}

export default FormContact