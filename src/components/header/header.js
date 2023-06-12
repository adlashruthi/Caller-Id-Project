import React from "react";
import { Link } from "react-router-dom";

import {
  BiMessageRounded,
  BiPhone,
  BiMessage,
  BiVideo,
  BiSearch,
  BiDotsVerticalRounded,
} from "react-icons/bi";
import { AiOutlineReload, AiOutlineSetting } from "react-icons/ai";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { MdDateRange } from "react-icons/md";

const Header = () => {
  return (
    <div className="border-b h-[10vh] ">
      <div className="flex justify-start items-center pt-4 pl-4">
        <h1 className=" fill-purple-700 h-4 w-4 rotate-180 ">
          <BiMessageRounded className="text-xl" />
        </h1>
        <h1 className="h-4 w-4 ">
          <BiMessageRounded className="text-xl" />
        </h1>
        <div className="flex justify-start items-center pl-5">
          <button className="border border-slate-700 rounded-full px-1 py-1 text-white mx-4">
            <BiPhone className="text-lg text-slate-950" />
          </button>
          <h1 className="h-4 w-4  ">
            <BiMessage className="text-xl" />
          </h1>
          <h1 className="ml-4">
            <BiVideo className="text-xl" />
          </h1>
        </div>
        <div className="flex justify-center items-center ml-40">
          <h1>
            <BsArrowLeftShort className="text-2xl" />
          </h1>
          <h1>
            <BsArrowRightShort className="text-2xl " />
          </h1>
          <h1>
            <AiOutlineReload className="text-lg " />
          </h1>
          <Link to="/contact" className="bg-slate-300 ml-2 p-1 rounded-xl">
            <div className="flex pl-3">
              <h1 className="text-slate-700 pt-1">
                <BiSearch className="text-lg " />
              </h1>
              <h1 className="px-32 text-slate-700 font-medium">
                Search Dialpad
              </h1>
            </div>
          </Link>

          <div className="flex justify-end items-center ml-56">
            <h1 className="ml-24">
              <AiOutlineSetting className="text-xl" />
            </h1>
            <h1 className="ml-2">
              <MdDateRange className="text-xl" />
            </h1>
            <button className="bg-slate-700 rounded-full px-1 py-0 text-white ml-2">
              SP
            </button>
            <h1 className="ml-2">
              <BiDotsVerticalRounded className="text-xl" />
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
