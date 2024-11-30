import React from "react";

const PricingStep = ({ data, onUpdate }) => {
  return (
    <div className="bg-slate-800 rounded-lg shadow-lg p-6 space-y-4">
      <h2 className="text-2xl font-semibold text-white">Pricing</h2>
      <div className="space-y-4">
        <input
          type="number"
          placeholder="Base Price"
          className="w-full p-2 rounded-md border border-gray-300"
          value={data.basePrice}
          onChange={(e) => onUpdate({ basePrice: e.target.value })}
        />
        <textarea
          placeholder="Package Details"
          className="w-full p-2 rounded-md border border-gray-300"
          value={data.packageDetails}
          onChange={(e) => onUpdate({ packageDetails: e.target.value })}
        />
      </div>
    </div>
  );
};

export default PricingStep;
