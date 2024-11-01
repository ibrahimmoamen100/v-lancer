import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { BsChatRightText, BsThreeDotsVertical } from "react-icons/bs";
import { filesItem } from "@/lib/type";

type ContractDeliveryProps = {
  files: filesItem[];
};

function ContractDelivery({ files }: ContractDeliveryProps) {
  return (
    <Accordion
      type="single"
      className="contact-deliverables border border-outline rounded-xl w-full p-5"
      defaultValue="item-1"
      collapsible
    >
      <AccordionItem value="item-1">
        <AccordionTrigger className="flex flex-row justify-between items-center">
          <span className="text-xl font-poppins font-bold whitespace-nowrap bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent pr-4 ">
            Contract Deliverables
          </span>
          <div className="h-[2px] w-full bg-gradient-to-r from-secondary to-primary "></div>
        </AccordionTrigger>
        <AccordionContent className="col-contact-tracker-list flex flex-row gap-4">
          <div className="circle bg-gradient-to-r flex justify-center items-center  from-primary to-secondary w-11 h-11 rounded-full text-primary p-1 ">
            <span className="bg-white rounded-full flex justify-center items-center p-2 text-2xl">
              <BsChatRightText />
            </span>
          </div>
          <div className="delivery-1 border border-outline rounded-lg w-full p-2">
            <div className="flex flex-row justify-between items-center pb-2">
              <span> delivery-1</span>
              <div className="date flex flex-row gap-2 justify-center items-center">
                <span>09-Sep-2023 10:00 AM</span>
                <div className="status bg-gradient-to-r px-2 py-1 box-border rounded-full text-[1px] from-secondary to-primary flex justify-center items-center text-white">
                  Pending
                </div>
              </div>
            </div>
            <hr />
            <div className="pt-2">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Inventore quaerat saepe sapiente molestias et iusto, non possimus
              facere cumque numquam.
            </div>
            <Accordion type="single" defaultValue="item-1" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="flex flex-row justify-start gap-2 ">
                  <span className=" text-sm  w-fit border border-outline rounded-full px-2 whitespace-nowrap py-1">
                    {" "}
                    8 Files
                  </span>
                  <div className="h-[1px] w-full bg-gradient-to-r from-secondary to-primary "></div>
                </AccordionTrigger>
                <AccordionContent className="col-contact-tracker-list flex flex-row flex-wrap gap-4">
                  {files.map((file, i) => (
                    <div
                      key={i}
                      className={`${
                        file.bgColor
                          ? "bg-gradient-to-r from-primary to-secondary"
                          : ""
                      } py-8 px-12 relative rounded-xl border border-outline`}
                    >
                      <div className="cursor-pointer w-7 h-7 absolute top-2 right-2 rounded-full bg-white flex justify-center items-center border border-outline">
                        <BsThreeDotsVertical />
                      </div>
                      <div className="text-2xl text-white">{file.icon}</div>
                    </div>
                  ))}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

export default ContractDelivery;
