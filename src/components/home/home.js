import React, { useEffect, useState } from "react";
import { FiUser } from "react-icons/fi";
import Header from "../header/header";
import SideBar from "../sidebar/sidebar";

const inBoxTabs = [
  "Unread",
  "All",
  "Call",
  "Missed",
  "Meetings",
  "Voicemails",
  "Recordings",
  "Messages",
  "Starred",
  "Spam",
];

const inBoxAllMsg = [
  {
    category: "Call",
    id: 1,
    iconsName: "P",
    userName: "Private",
    callTypeAndDuraion: "Outbound / 1 min",
    time: "12:55pm",
    callType: "connected",
  },
  {
    category: "Missed",
    id: 2,
    iconsName: "AW",
    userName: "Ariane Wolamot",
    callTypeAndDuraion: "Missed call and voicemail",
    time: "Yesterday",
    callType: "missed",
  },

  {
    category: "Missed",
    id: 3,
    iconsName: "WR",
    userName: "W Romanovski",
    callTypeAndDuraion: "Caller hung up",
    time: "Yesterday",
    callType: "disconnected",
  },
  {
    category: "Messages",
    id: 4,
    iconsName: "CP",
    userName: "Carnrick Paul",
    callTypeAndDuraion:
      "Good Morning from Shadow Properties,Below are The Key...",
    time: "Saturday",
    callType: "connected",
  },
  {
    category: "Call",
    id: 5,
    iconsName: <FiUser />,
    userName: "(654) 825-3661",
    callTypeAndDuraion: "Outbound / 1 min",
    time: "Saturday",
    callType: "connected",
  },
  {
    category: "Call",
    id: 6,
    iconsName: <FiUser />,
    userName: "(561) 245-2635",
    callTypeAndDuraion: "Outbound / 1 min",
    time: "Saturday",
    callType: "connected",
  },
  {
    category: "Call",
    id: 7,
    iconsName: "TC",
    userName: "Tiina Collins",
    callTypeAndDuraion: "Outbound / 1 min",
    time: "Saturday",
    callType: "connected",
  },
  {
    category: "Call",
    id: 8,
    iconsName: <FiUser />,
    userName: "(561) 901-9704",
    callTypeAndDuraion: "Outbound / 1 min",
    time: "Saturday",
    callType: "connected",
  },
  {
    category: "Call",
    id: 9,
    iconsName: <FiUser />,
    userName: "(561) 739-2462",
    callTypeAndDuraion: "Canceled call",
    time: "Saturday",
    callType: "connected",
  },
  {
    category: "Call",
    id: 10,
    iconsName: <FiUser />,
    userName: "(561) 809-7400",
    callTypeAndDuraion: "Outbound / 2 min",
    time: "Saturday",
    callType: "connected",
  },
  {
    category: "Call",
    id: 11,
    iconsName: <FiUser />,
    userName: "(954) 825-3661",
    callTypeAndDuraion: "Outbound / 1 min",
    time: "Saturday",
    callType: "connected",
  },
  {
    category: "Call",
    id: 12,
    iconsName: <FiUser />,
    userName: "(561) 542-0415",
    callTypeAndDuraion: "Outbound / 1 min",
    time: "Saturday",
    callType: "connected",
  },
  {
    category: "Call",
    id: 13,
    iconsName: <FiUser />,
    userName: "(312) 953-0961",
    callTypeAndDuraion: "Outbound / 1 min",
    time: "Saturday",
    callType: "connected",
  },
  {
    category: "Call",
    id: 14,
    iconsName: <FiUser />,
    userName: "(561) 271-3103",
    callTypeAndDuraion: "Outbound / 2 min",
    time: "Saturday",
    callType: "connected",
  },
  {
    category: "Call",
    id: 15,
    iconsName: <FiUser />,
    userName: "(561) 962-2865",
    callTypeAndDuraion: "Outbound / 1 min",
    time: "Saturday",
    callType: "connected",
  },
  {
    category: "Call",
    id: 16,
    iconsName: <FiUser />,
    userName: "(654) 825-3661",
    callTypeAndDuraion: "Outbound / 1 min",
    time: "Saturday",
    callType: "connected",
  },
];

const inboxLogoColors = [
  "conic-gradient(#f37bbe, #f0effa)",
  "conic-gradient(#fcdef2, #a0c2f4)",
  "conic-gradient(#fadc72, #f0eff6)",
];

const Home = () => {
  const [inBoxSelectedTab, setInboxSelectedTab] = useState("All");
  const [filterdTabData, setFilterdTabData] = useState([]);

  useEffect(() => {
    if (inBoxSelectedTab === "All") {
      return setFilterdTabData([...inBoxAllMsg]);
    }

    const filterdData = inBoxAllMsg.filter(
      (each) => each.category === inBoxSelectedTab
    );
    setFilterdTabData(filterdData);
  }, [inBoxSelectedTab]);

  return (
    <>
      <Header />
      <div className="flex">
        <SideBar />
        <div className="w-full  ">
          <div className="flex gap-6 ps-6 pt-6">
            {inBoxTabs.map((each) => (
              <>
                <p
                  key={each}
                  onClick={() => setInboxSelectedTab(each)}
                  className={
                    each === inBoxSelectedTab
                      ? "text-[#030303] pb-3 cursor-pointer font-medium border-b-[3.5px] border-[#7730c3] px-1"
                      : "text-[#818181] pb-3 cursor-pointer font-medium px-1"
                  }
                >
                  {each}
                </p>
              </>
            ))}
          </div>
          <hr className="w-[100%] border-[1px]  border-zinc-300" />
          <div className="overflow-y-auto max-h-[81vh]">
            {filterdTabData.length === 0 ? (
              <div className="flex justify-center items-center h-[600px]">
                <p className="text-[25px] font-semibold">
                  No Data Found in {inBoxSelectedTab}
                </p>
              </div>
            ) : (
              <>
                {filterdTabData.map((eachCall) => (
                  <>
                    <div className="p-2 ps-6 flex items-center">
                      <div
                        style={{
                          backgroundImage: `${
                            inboxLogoColors[
                              Math.floor(Math.random() * inboxLogoColors.length)
                            ]
                          }`,
                          rotate: "90deg",
                        }}
                        className="bg-[#818181] w-10 h-10 rounded-full flex justify-center items-center"
                      >
                        <span className="-rotate-90">{eachCall.iconsName}</span>
                      </div>
                      <p className="text-[#252525] ps-6 font-medium w-56 ">
                        {eachCall.userName}
                      </p>
                      <div className="flex justify-between w-[75%]">
                        {eachCall.callType === "connected" ? (
                          <p className="text-[#acacac]">
                            {eachCall.callTypeAndDuraion}
                          </p>
                        ) : (
                          <p className="text-[#e62727]">
                            {eachCall.callTypeAndDuraion}
                          </p>
                        )}

                        <p className="text-[#acacac] text-sm ">
                          {eachCall.time}
                        </p>
                      </div>
                    </div>
                    <hr className="w-[100%] border-[1px]" />
                  </>
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
