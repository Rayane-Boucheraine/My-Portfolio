import { IoClose } from "react-icons/io5";

const Head = ({name}) => {
  return (
    <div className=" border-b-[2px] border-b-[#1E2D3D]">
      <span className="py-[11px] px-[12px] w-40 flex justify-between items-center h-full text-[#607B96] border-r-[2px] border-[#1E2D3D]">
        {name}
        <IoClose />
      </span>
    </div>
  );
};

export default Head;
