import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import Image from "next/image";
import { CheckCheckIcon } from "lucide-react";
import { BiRocket } from "react-icons/bi";
import { Separator } from "./ui/separator";

function ContractSupport() {
  return (
    <Accordion
      type="single"
      collapsible
      defaultValue="item-1"
      className="contract-Support flex flex-row w-full  items-stretch justify-stretch"
    >
      <AccordionItem value="item-1" className="w-full">
        <AccordionTrigger className="flex flex-row justify-between items-center w-full">
          <span className="text-xl font-poppins font-bold whitespace-nowrap bg-gradient-to-r  from-secondary to-primary bg-clip-text text-transparent pr-4 ">
            Contract Support
          </span>
          <div className="h-[2px] w-full bg-gradient-to-r  from-secondary to-primary "></div>
        </AccordionTrigger>
        <AccordionContent className="col-contact-tracker-list flex flex-col gap-2 h-auto">
          <div className="contact-Support p-4 rounded-xl flex flex-row border border-outline justify-between items-center gap-4">
            <div className="icons-support border border-outline rounded-lg p-4">
              <CheckCheckIcon />
            </div>
            <div className="text-support flex flex-col justify-start items-start gap-1">
              <span className="text-base font-bold bg-gradient-to-r  from-secondary to-primary bg-clip-text text-transparent">
                Paymeent Protection
              </span>
              <span className="text-sm text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing
              </span>
            </div>
          </div>
          <div className="contact-Support p-2 rounded-xl flex flex-col border border-outline justify-between items-start gap-2">
            <div className="contact-Support p-1 rounded-xl flex flex-row justify-start items-center gap-4">
              <div className="icons-support border border-primary rounded-full p-2 relative">
                <Image src="/logo.png" alt="this logo" width={30} height={30} />
                <div className="absolute w-3 h-3 bg-green-500   rounded-full top-8 border border-white right-2"></div>
              </div>
              <div className="text-support flex flex-col justify-start items-start gap-1">
                <span className="text-base font-bold bg-gradient-to-r  from-secondary to-primary bg-clip-text text-transparent">
                  Need Help With This Contract?
                </span>
                <span className="text-sm text-gray-600">
                  We are always here for you
                </span>
              </div>
            </div>
            <Separator className="my-1" />
            <button className="text-sm  bg-gradient-to-r flex flex-row gap-2 justify-center items-center border border-primary from-secondary to-primary w-fit m-auto text-white  rounded-full px-5 py-3">
              <BiRocket /> <span> Visit Help Desk</span>
            </button>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

export default ContractSupport;
