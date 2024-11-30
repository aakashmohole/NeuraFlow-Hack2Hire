import React from "react";

const DescriptionStep = ({ data, onUpdate }) => {
  return (
    <div className="bg-slate-800 rounded-lg shadow-lg p-6 space-y-4">
      <h2 className="text-2xl font-semibold text-white">Description</h2>
      <div className="space-y-4">
        <textarea
          placeholder="Detailed Description"
          className="w-full p-2 rounded-md border border-gray-300"
          value={data.detailedDescription}
          onChange={(e) => onUpdate({ detailedDescription: e.target.value })}
        />
        <input
          type="text"
          placeholder="Key Highlights"
          className="w-full p-2 rounded-md border border-gray-300"
          value={data.highlights}
          onChange={(e) => onUpdate({ highlights: e.target.value })}
        />
      </div>
    </div>
  );
};

export default DescriptionStep;
