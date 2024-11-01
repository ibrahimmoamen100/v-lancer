import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { GrFormUp } from "react-icons/gr";
import { filesItem, ListItem, summaryItem } from "@/lib/type"; // Import the type

import Image from "next/image";
import { BiRocket } from "react-icons/bi";
import { Bs1SquareFill, BsCheck2, BsFileEarmark } from "react-icons/bs";
import {
  BsCheck2Circle,
  BsChatRightText,
  BsThreeDotsVertical,
} from "react-icons/bs";
import { FcLeave } from "react-icons/fc";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import { CheckCheckIcon } from "lucide-react";
import Link from "next/link";
import ContractTracker from "@/components/contract-tracker";
import ContractDelivery from "@/components/contract-delivery";
import ContractSummary from "@/components/contract-summary";
import ContractAction from "@/components/contract-action";
import ContractPhases from "@/components/contract-phases";
import ContractSupport from "@/components/contract-support";

const lists: ListItem[] = [
  {
    id: 1,
    desc: "your contact started with <V-Client name>",
    icon: <BiRocket />,
    date: "09-Sep-2023 10:00 AM",
    view: "View Requirements",
  },
  {
    id: 2,
    desc: "your contact started with <V-Client name>",
    icon: <BsCheck2 />,
    date: "09-Sep-2023 10:00 AM",
  },
  {
    id: 3,
    desc: "your contact started with <V-Client name>",
    icon: <BsCheck2 />,
    date: "09-Sep-2023 10:00 AM",
  },
  {
    id: 4,
    desc: "your contact started with <V-Client name>",
    icon: <BsCheck2 />,
    date: "09-Sep-2023 10:00 AM",
  },
  {
    id: 5,
    desc: "your contact started with <V-Client name>",
    icon: <BsCheck2 />,
    date: "09-Sep-2023 10:00 AM",
  },
  {
    id: 6,
    desc: "your contact started with <V-Client name>",
    icon: <BsCheck2Circle />,
    date: "09-Sep-2023 10:00 AM",
  },
];

const files: filesItem[] = [
  {
    id: 1,
    icon: <BsCheck2 />,
    bgColor: true,
  },
  {
    id: 2,
    icon: <BsCheck2 />,
    bgColor: true,
  },
  {
    id: 3,
    icon: <BsCheck2 />,
    bgColor: true,
  },
  {
    id: 4,
    icon: <FcLeave />,
    bgColor: false,
  },
  {
    id: 5,
    icon: <FcLeave />,
    bgColor: false,
  },
  {
    id: 6,
    icon: <FcLeave />,
    bgColor: false,
  },
  {
    id: 7,
    icon: <FcLeave />,
    bgColor: false,
  },
];

const contactSummary: summaryItem[] = [
  { id: 1, name: "Order ID ", desc: "#ORDSRV-123" },
  { id: 2, name: "Tier", desc: "<Tier Name>" },
  { id: 3, name: "Sold By", desc: "<Client Name>" },
  { id: 4, name: "Sold To", desc: "<Client Name>" },
  { id: 5, name: "Price", desc: "<Client Name>" },
  { id: 6, name: "Escrow Amount", desc: "<Client Name>" },
  { id: 7, name: "Starting Date", desc: "09-Sep-2023 10:00 AM" },
  { id: 8, name: "Delivery Date", desc: "09-Sep-2023 10:00 AM" },
];
const contactPhases = [
  { id: 1, icon: <BsCheck2 />, desc: "Contract Started", line: true },
  {
    id: 2,
    icon: <BsCheck2 />,
    desc: "Contract Requirements Submmitted",
    line: true,
  },
  { id: 3, icon: <BsCheck2 />, desc: "Contract in Progress", line: true },
  { id: 4, icon: <BsCheck2 />, desc: "Contract Contract Closure", line: false },
];

function ServicePage() {
  return (
    <div className="bg-[#f5f5f5] flex flex-col gap-4 space-y-4 py-4 pt-8 px-5">
      <div className="flex flex-row justify-center items-center gap-4">
        <Link
          href="/"
          className="circle bg-gradient-to-r from-primary to-secondary rounded-full text-white p-3 text-xl"
        >
          <BiArrowBack />
        </Link>
        <div className="text-2xl font-poppins font-bold whitespace-nowrap bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
          Service Contract
        </div>
        <div className="h-[2px] w-full bg-gradient-to-r from-secondary to-primary"></div>
      </div>
      <div className="grid grid-cols-12  gap-4 h-auto justify-center items-start">
        <div className="contact-tracker bg-white h-auto rounded-2xl w-full border border-outline flex flex-col gap-4 p-5 col-span-8">
          <ContractTracker lists={lists} />

          <ContractDelivery files={files} />
        </div>
        <div className="contract-summary flex flex-col bg-white h-auto rounded-2xl w-full border border-outline p-5 col-span-4">
          <ContractSummary contactSummary={contactSummary} />

          <ContractAction />

          <ContractPhases contactPhases={contactPhases} />

          <ContractSupport />
        </div>
      </div>
    </div>
  );
}

export default ServicePage;
