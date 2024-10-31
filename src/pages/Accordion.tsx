import React, { useState } from 'react'
import { IoChevronDownOutline } from 'react-icons/io5';
import { faqData } from '../utils/constants';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick }) => (
  <div className="border-b border-gray-200 py-6">
    <button onClick={onClick} className="w-full flex justify-between items-center text-left">
      <h2 className="text-[32px] font-medium text-gray-900">{question}</h2>
      <IoChevronDownOutline
        className={`w-6 h-6 text-gray-400 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`}
      />
    </button>
    {isOpen && <div className="mt-4 text-xl text-gray-600">{answer}</div>}
  </div>
);

const Accordion = () => {
     const [openIndex, setOpenIndex] = useState(0);
  return (
    <div className="max-w-[1200px] mx-auto px-6">
      {faqData.map((faq, index) => (
        <FAQItem
          key={index}
          question={faq.question}
          answer={faq.answer}
          isOpen={index === openIndex}
          onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
        />
      ))}
    </div>
  );
}

export default Accordion