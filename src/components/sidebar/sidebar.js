import React from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import { FiUser } from "react-icons/fi";
const allNames = [
  {
    id: 1,
    iconsName: "P",
    userName: "Private",
  },
  {
    id: 2,
    iconsName: "AW",
    userName: "Ariane Wolamot",
  },
  {
    id: 3,
    iconsName: "WR",
    userName: "W Romanovski",
  },
  {
    id: 4,
    iconsName: "CP",
    userName: "Carnrick Paul",
  },
  {
    id: 5,
    iconsName: <FiUser />,
    userName: "(654) 825-3661",
  },
  {
    id: 6,
    iconsName: <FiUser />,
    userName: "(561) 245-2635",
  },
  {
    id: 7,
    iconsName: "TC",
    userName: "Tiina Collins",
  },
  {
    id: 8,
    iconsName: <FiUser />,
    userName: "(561) 901-9704",
  },
  {
    id: 9,
    iconsName: <FiUser />,
    userName: "(561) 739-2462",
  },
  {
    id: 10,
    iconsName: <FiUser />,
    userName: "(561) 809-7400",
  },
  {
    id: 11,
    iconsName: <FiUser />,
    userName: "(954) 825-3661",
  },
  {
    id: 12,
    iconsName: <FiUser />,
    userName: "(561) 542-0415",
  },
  {
    id: 13,
    iconsName: <FiUser />,
    userName: "(312) 953-0961",
  },
  {
    id: 14,
    iconsName: <FiUser />,
    userName: "(561) 271-3103",
  },
  {
    id: 15,
    iconsName: <FiUser />,
    userName: "(561) 962-2865",
  },
  {
    id: 16,
    iconsName: <FiUser />,
    userName: "(654) 825-3661",
  },
];

const inboxLogoColors = [
  "conic-gradient(#f37bbe, #f0effa)",
  "conic-gradient(#fcdef2, #a0c2f4)",
  "conic-gradient(#fadc72, #f0eff6)",
];

const SideBar = () => {
  return (
    <div className="bg-[#f9f9f9] w-[18%] h-[90vh] p-3 overflow-scroll overflow-x-hidden">
      <div>
        <p className="bg-[#e9e9e9] hover:bg-[#e0e0e0] p-1 rounded-full ps-3">
          Inbox
        </p>
        <p className="hover:bg-[#e0e0e0] p-1 rounded-full ps-3">Contacts</p>
        <p className=" p-1 rounded-full ps-3"># All Channels</p>
      </div>
      <div className="flex ml-2 mt-3">
        <h1 className="pt-1 text-xl">
          <RiArrowDownSLine />
        </h1>
        <h1 className="text-gray-500 font-normal">Departments</h1>
      </div>
      <div className="flex ml-2 mt-3">
        <h1 className="mt-1 text-xl bg-pink-700 h-4 w-4"> </h1>
        <h1 className="pl-2">ShadowPropeties</h1>
      </div>
      <div className="flex ml-2 mt-3">
        <h1 className="pt-1 text-xl">
          <RiArrowDownSLine />
        </h1>
        <h1 className="text-gray-500 font-medium">Recents</h1>
      </div>
      {allNames.map((name) => (
        <div className="flex mt-3" key={name.id}>
          <div
            style={{
              backgroundImage: `${
                inboxLogoColors[
                  Math.floor(Math.random() * inboxLogoColors.length)
                ]
              }`,
              rotate: "90deg",
            }}
            className="bg-[#818181] w-8 h-8 rounded-full flex justify-center items-center"
          >
            <span className="-rotate-90">{name.iconsName}</span>
          </div>
          <p className="text-[#252525] pl-2">{name.userName}</p>
        </div>
      ))}
    </div>
  );
};

export default SideBar;
