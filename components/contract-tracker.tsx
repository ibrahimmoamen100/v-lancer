import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ListItem } from "@/lib/type"; // Import the shared type

type ContractTrackerProps = {
  lists: ListItem[];
};
function ContractTracker({ lists }: ContractTrackerProps) {
  return (
    <Accordion
      defaultValue="item-1"
      type="single"
      collapsible
      className="contact-tracker-child border border-outline rounded-xl w-full p-5"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger className="flex flex-row justify-between items-center">
          <span className="text-xl font-poppins font-bold whitespace-nowrap bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent pr-4 ">
            Contract Tracker
          </span>
          <div className="h-[2px] w-full bg-gradient-to-r from-secondary to-primary "></div>
        </AccordionTrigger>
        <AccordionContent className="col-contact-tracker-list flex flex-col gap-4">
          {lists.map(({ id, date, desc, icon, view }) => (
            <div
              key={id}
              className="flex flex-row gap-4 justify-start items-center"
            >
              <div className="icon w-12 h-12 font-bold p-1 rounded-full bg-gradient-to-r from-secondary to-primary flex justify-center items-center">
                <span className="text-primary bg-white rounded-full p-[0.68rem] text-2xl">
                  {icon}
                </span>
              </div>
              <p>{desc}</p>
              <div className="date-time ml-auto">{date}</div>
              {view && (
                <div className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-decoration-underline text-transparent">
                  {view}
                </div>
              )}
            </div>
          ))}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

export default ContractTracker;
