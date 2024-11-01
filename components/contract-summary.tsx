import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { BsFileEarmark } from "react-icons/bs";
import { contactSummary } from "@/lib/type";

type ContractSummaryProps = {
  contactSummary: contactSummary[];
};

function ContractSummary({ contactSummary }: ContractSummaryProps) {
  return (
    <Accordion
      type="single"
      collapsible
      defaultValue="item-1"
      className="contract-summary-child flex flex-row w-full  items-stretch justify-stretch"
    >
      <AccordionItem value="item-1" className="w-full">
        <AccordionTrigger className="flex flex-row justify-between items-center w-full">
          <span className="text-xl font-poppins font-bold whitespace-nowrap bg-gradient-to-r  from-secondary to-primary bg-clip-text text-transparent pr-4 ">
            Contract Summary
          </span>
          <div className="h-[2px] w-full bg-gradient-to-r  from-secondary to-primary "></div>
        </AccordionTrigger>
        <AccordionContent className="col-contact-tracker-list flex flex-col gap-2 h-auto">
          <div className="contact-summary-image flex flex-col justify-between items-center gap-4">
            <div className="flex flex-row justify-between items-center gap-4">
              <div className="text-white bg-gradient-to-r from-primary to-secondary w-20 h-16 px-6 py-1  rounded-lg flex flex-row justify-center items-center">
                <BsFileEarmark className="text-white text-xl" />
              </div>
              <p className="text-lg bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                this will be service name & it can be over 2 lines based on your
                needs
              </p>
            </div>
            <hr />
            <div className="flex flex-col justify-start items-center w-full gap-2">
              {contactSummary.map((contact, i) => (
                <div
                  key={i}
                  className="flex flex-row justify-between items-center gap-4 w-full"
                >
                  <span className="text-sm font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    {contact?.name}
                  </span>
                  <span className="text-sm text-gray-600">{contact?.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

export default ContractSummary;
