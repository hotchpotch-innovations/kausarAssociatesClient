"use client";

import { useState } from "react";
import FAQItem from "./FAQItem";
import FaqSkeletonLoader from "@/components/common/loader/FaqSkeletonLoader";

const FaqList = ({ faqs }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const handleItemClick = (idx) => {
    setOpenFaqIndex(idx);
  };

  if (!faqs) return <FaqSkeletonLoader />;

  return (
    <div className="flex flex-col gap-4">
      {faqs.map((faq, idx) => (
        <FAQItem
          key={faq._id}
          title={faq.title}
          content={faq.content}
          isOpen={idx === openFaqIndex}
          onClick={() => handleItemClick(idx)}
        />
      ))}
    </div>
  );
};

export default FaqList;
