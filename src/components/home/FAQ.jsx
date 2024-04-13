"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/shadcn/ui/accordion";
import Image from "next/image";
import { useState } from "react";

const data = [
  {
    id: "1",
    ques: "What should I expect during my first visit?",
    ans: "Your first visit involves a comprehensive dental examination, including digital X-rays, oral health assessment, and a discussion about your dental history and goals. This helps us create a tailored treatment plan for you.",
  },
  {
    id: "2",
    ques: "What payment options do you accept? ",
    ans: "Your first visit involves a comprehensive dental examination, including digital X-rays, oral health assessment, and a discussion about your dental history and goals. This helps us create a tailored treatment plan for you.",
  },
  {
    id: "3",
    ques: "What should I do if I have a toothache?",
    ans: "Your first visit involves a comprehensive dental examination, including digital X-rays, oral health assessment, and a discussion about your dental history and goals. This helps us create a tailored treatment plan for you.",
  },
  {
    id: "4",
    ques: "Can you accommodate patients with dental anxiety?",
    ans: "Your first visit involves a comprehensive dental examination, including digital X-rays, oral health assessment, and a discussion about your dental history and goals. This helps us create a tailored treatment plan for you.",
  },
  {
    id: "5",
    ques: "Do you offer teeth whitening services?",
    ans: "Your first visit involves a comprehensive dental examination, including digital X-rays, oral health assessment, and a discussion about your dental history and goals. This helps us create a tailored treatment plan for you.",
  },
  {
    id: "6",
    ques: "Are dental X-rays safe? ",
    ans: "Your first visit involves a comprehensive dental examination, including digital X-rays, oral health assessment, and a discussion about your dental history and goals. This helps us create a tailored treatment plan for you.",
  },
  {
    id: "7",
    ques: "Do you offer emergency dental services?",
    ans: "Your first visit involves a comprehensive dental examination, including digital X-rays, oral health assessment, and a discussion about your dental history and goals. This helps us create a tailored treatment plan for you.",
  },
];

const FAQ = () => {
  const [activeAccordion, setActiveAccordion] = useState(data[0]);
  const handleSelected = (id) => {
    const selectedItem = data.find((item) => item.id === id);
    setActiveAccordion(selectedItem);
  };

  return (
    <div className="md:pt-20 pt-10 container">
      <h1 className="xl:text-[96px] text-[32px] font-source font-bold max-md:text-center">
        FAQ
      </h1>
      <div className="md:grid grid-cols-2 gap-10 hidden">
        <div className="py-6">
          <h3 className="text-[32px] font-bold mb-7">{activeAccordion.ques}</h3>
          <p className="text-lg">{activeAccordion.ans}</p>
        </div>
        <div className="p-6  grid grid-cols-2 gap-10">
          {data.map((item) => (
            <div
              key={item.id}
              className="text-[20px] font-bold cursor-pointer"
              onClick={() => handleSelected(item.id)}
            >
              {item.ques}
            </div>
          ))}
        </div>
      </div>
      <div className="md:hidden px-4">
        <Accordion
          type="single"
          collapsible
          className="w-full"
          value={activeAccordion}
          onValueChange={(value) => setActiveAccordion(value)}
        >
          {data.map((item) => (
            <AccordionItem
              key={item.id}
              value={item.id}
              className={`md:px-4 md:py-4 `}
            >
              <AccordionTrigger
                className={`text-base sm:text-xl text-left text-[14px] font-bold flex items-start`}
                style={{ textDecoration: "none" }}
              >
                <span>{item.ques}</span>
                <Image
                  src={
                    item.id === activeAccordion
                      ? "/icons/mainus.svg"
                      : "/icons/plus.svg"
                  }
                  alt="icon"
                  width={10}
                  height={10}
                  className="mt-2"
                />
              </AccordionTrigger>
              <AccordionContent className="text-[12px]">
                {item.ans}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQ;
