import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { phasesItem } from "@/lib/type"; // Import the shared type

type ContractPhasesProps = {
  contactPhases: phasesItem[];
};

function ContractPhases({ contactPhases }: ContractPhasesProps) {
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
            Contract Phases
          </span>
          <div className="h-[2px] w-full bg-gradient-to-r  from-secondary to-primary "></div>
        </AccordionTrigger>
        <AccordionContent className="col-contact-tracker-list flex flex-col gap-2 h-auto">
          <div className="contact-phases-image flex flex-col justify-between items-center gap-4">
            <div className="flex flex-col justify-start items-center w-full gap-4">
              {contactPhases.map((contact, i) => (
                <div
                  key={i}
                  className="flex flex-row justify-start items-center gap-4 w-full"
                >
                  <div
                    className={`text-2xl relative font-bold ${
                      contact.line ? "bg-secondary" : "bg-primary"
                    } text-white border border-blue-900 w-10 h-10   rounded-full flex flex-row justify-center items-center`}
                  >
                    {contact?.icon}

                    {contact.line ? (
                      <div className="absolute h-6 w-[3px] bg-blue-900 right-[1.1rem] top-[2.40rem]"></div>
                    ) : (
                      ""
                    )}
                  </div>
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

export default ContractPhases;
