import React from "react";

const FAQStep = ({ data, onUpdate }) => {
  const handleFAQChange = (index, field, value) => {
    const updatedFaq = [...data];
    updatedFaq[index][field] = value;
    onUpdate({ faq: updatedFaq });
  };

  const handleAddFAQ = () => {
    onUpdate({ faq: [...data, { question: "", answer: "" }] });
  };

  return (
    <div className="bg-slate-800 rounded-lg shadow-lg p-6 space-y-4">
      <h2 className="text-2xl font-semibold text-white">FAQ</h2>
      {data.map((faq, index) => (
        <div key={index} className="space-y-2">
          <input
            type="text"
            placeholder="Question"
            className="w-full p-2 rounded-md border border-gray-300"
            value={faq.question}
            onChange={(e) => handleFAQChange(index, "question", e.target.value)}
          />
          <textarea
            placeholder="Answer"
            className="w-full p-2 rounded-md border border-gray-300"
            value={faq.answer}
            onChange={(e) => handleFAQChange(index, "answer", e.target.value)}
          />
        </div>
      ))}
      <button
        onClick={handleAddFAQ}
        className="w-full py-2 px-4 bg-blue-600 text-white rounded-full hover:bg-blue-700"
      >
        Add Another FAQ
      </button>
    </div>
  );
};

export default FAQStep;
