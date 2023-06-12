import React from "react";

import { MdOutlineCancel } from "react-icons/md";
import { AiOutlineCaretDown } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import Keypad from "./keypad";
const Shadow = () => {
  return (
    <>
      <div className="flex  items-center justify-around mt-9">
        <h5 className="text-base">NEW CALL FROM</h5>
        <h1 className="text-2xl text-gray-500">
          <MdOutlineCancel />
        </h1>
      </div>

      <div className="flex items-center justify-start ml-72 mt-2">
        <button className="rounded-full bg-blue-700  text-white px-1 py-0">
          SP
        </button>
        <h5 className="pl-4">Shadow Properties</h5>
        <p>
          <AiOutlineCaretDown />
        </p>
      </div>
      <div className="flex justify-start ml-72 mt-4 items-center ">
        <h6> Your Caller Id Displays as </h6>
        <h6 className="text-black font-semibold pl-2"> (202) 944-6641. </h6>
        <h6 className="text-purple-600 font-medium pl-3"> change</h6>
      </div>
      <div className="flex justify-start ml-72 mt-6 items-center mb-3 ">
        <h1 className="text-3xl">
          <BiSearch />
        </h1>
        <h1 className="font-light text-4xl ml-44 text-gray-500">
          {" "}
          type a name or number
        </h1>
      </div>
      <hr className="flex justify-start ml-72 mr-56  items-center border-t-2 from-neutral-600" />
      <div className="mb-20">
        <Keypad />
      </div>
    </>
  );
};

export default Shadow;
