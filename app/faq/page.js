"use client";
import { useState } from "react";

export default function FAQ() {
  const faqData = [
    {
      question: "What is Cerebra Brain?",
      answer:
        "Cerebra Brain is an innovative AI platform designed to enhance cognitive processes and provide assistance in various tasks.",
    },
    {
      question: "How does Cerebra Brain work?",
      answer:
        "Cerebra Brain utilizes advanced algorithms to analyze data, learn from interactions, and provide insights and recommendations.",
    },
    {
      question: "What are the main features of Cerebra Brain?",
      answer:
        "Key features include data analysis, personalized recommendations, and task automation to improve productivity.",
    },
    {
      question: "Is Cerebra Brain suitable for all users?",
      answer:
        "Yes, Cerebra Brain is designed to cater to a wide range of users, from individuals to businesses.",
    },
    {
      question: "Can I integrate Cerebra Brain with other tools?",
      answer:
        "Absolutely, Cerebra Brain offers integration options with various tools and applications to streamline workflows.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <main className="container">
      <h1>Frequently Asked Questions</h1>

      <div className="faq">
        {faqData.map((item, index) => (
          <div key={index} className="faq-item">
            <button
              className="faq-question"
              onClick={() => toggleFAQ(index)}
            >
              {item.question}
            </button>

            {activeIndex === index && (
              <p className="faq-answer">{item.answer}</p>
            )}
          </div>
        ))}
      </div>
    </main>
  );
}
