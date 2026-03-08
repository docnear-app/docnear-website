"use client";

import { useState, useCallback } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQ_ITEMS } from "@/data/faqs";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Faq() {
  const [openItem, setOpenItem] = useState<string>("item-0");

  const handleValueChange = useCallback((value: string) => {
    setOpenItem(value);
  }, []);

  return (
    <section id="faq" className="py-20 lg:py-28 bg-gray-50" aria-labelledby="faq-heading">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="FAQ"
          title="Questions? We have answers"
          subtitle="Everything you need to know about DocNear."
        />

        {/* suppressHydrationWarning stops browser extension attribute mismatches */}
        <div className="mt-12" suppressHydrationWarning>
          <Accordion
            type="single"
            collapsible
            value={openItem}
            onValueChange={handleValueChange}
            className="space-y-3"
          >
            {FAQ_ITEMS.map((item, i) => (
              <AccordionItem
                key={item.question}
                value={`item-${i}`}
                className="bg-white border border-gray-100 rounded-xl px-6 shadow-sm data-[state=open]:border-teal-200"
                suppressHydrationWarning
              >
                <AccordionTrigger
                  className="text-sm font-semibold text-gray-900 hover:no-underline text-left py-5"
                  suppressHydrationWarning
                >
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-gray-500 leading-relaxed pb-5">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
