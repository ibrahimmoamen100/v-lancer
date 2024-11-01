import React from "react";
import Image from "next/image";
import { BsSearch } from "react-icons/bs";
import Link from "next/link";

let listIcons = [
  {
    icon: <BsSearch />,
    title: "Home",
  },
  {
    icon: <BsSearch />,
    title: "About",
  },
  {
    icon: <BsSearch />,
    title: "Projects",
    count: "90",
  },
  {
    icon: <BsSearch />,
    title: "Contact",
    count: "90",
  },
  {
    icon: <BsSearch />,
    title: "Home",
    count: "90",
  },
  {
    icon: <BsSearch />,
    title: "About",
    count: "90",
  },
  {
    icon: <BsSearch />,
    title: "Projects",
    count: "90",
  },
  {
    icon: <BsSearch />,
    title: "Contact",
    count: "$90.5k",
  },
];

function Navbar() {
  return (
    <div className="flex justify-between items-center flex-row px-4 py-1 border-b border-outline bg-[#f5f5f5]">
      <Link className="logo " href="/">
        <Image src="/logo.png" alt="this logo" width={80} height={80} />
      </Link>
      <div className="all-icons flex flex-row gap-4">
        <div className="icons-list flex flex-row gap-2 mx-3">
          {listIcons.map((item, index) => (
            <div key={index} className="cursor-pointer">
              <div className="w-10 h-10 relative rounded-full bg-gradient-to-r from-primary to-secondary border-gray border-2 border-outline flex justify-center items-center">
                <div className="text-white">{item.icon}</div>
                <div className="text-blue-600 bg-gradient-to-r absolute p-[0.5px]  from-primary to-secondary left-4 top-0  w-auto h-auto rounded-full flex justify-center items-center">
                  {item.count ? (
                    <span className="bg-white text-blue-600 rounded-full px-1 text-[1px] w-full">
                      {item.count}
                    </span>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="user-avatar cursor-pointer">
          <div className="w-11 h-11 relative p-1 overflow-visible bg-gradient-to-r  from-primary to-secondary rounded-full ">
            <div className="green-circle z-40 -bottom-1 overflow-visible right-2 bg-green-400 border-2 border-white absolute rounded-full w-3 h-3"></div>
            <div className="w-10 h-10 rounded-full p-1 bg-gradient-to-r from-primary to-secondary flex justify-center items-center ">
              <Image
                src="/user.jpg"
                className=" rounded-full flex justify-center items-center object-cover"
                alt="this logo"
                fill
              />
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-primary absolute top-4 -right-5"
              fill="none"
              viewBox="0 0 23 23"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                d="M19 9l-7 7-7-7"
              />
            </svg>{" "}
          </div>
        </div>
        <div className="menu-list relative ml-4 w-auto flex flex-col justify-center items-end cursor-pointer">
          <span className="bg-gradient-to-r from-secondary to-primary w-4 h-[3px] rounded-full block m-1"></span>
          <span className="bg-gradient-to-r from-secondary to-primary w-6 h-[3px] rounded-full block m-1"></span>
          <span className="bg-gradient-to-r from-secondary to-primary w-8 h-[3px] rounded-full block m-1"></span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
