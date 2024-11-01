import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "./ui/accordion";

type Props = {};

function ContractAction({}: Props) {
  return (
    <Accordion type="single" collapsible defaultValue="item-1">
      <AccordionItem value="item-1" className="w-full">
        <AccordionTrigger className="flex flex-row justify-between items-center w-full">
          <span className="text-xl font-poppins font-bold whitespace-nowrap bg-gradient-to-r  from-secondary to-primary bg-clip-text text-transparent pr-4 ">
            Contract Action
          </span>
          <div className="h-[2px] w-full bg-gradient-to-r  from-secondary to-primary "></div>
        </AccordionTrigger>
        <AccordionContent className="col-contact-tracker-list flex flex-col gap-2 h-auto">
          <button className="text-white bg-gradient-to-r from-10% from-primary to-secondary p-3 hover:from-secondary hover:from-40% hover:to-primary transition-all delay-100 rounded-full flex flex-row justify-center items-center">
            {" "}
            Endorse Client
          </button>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

export default ContractAction;
