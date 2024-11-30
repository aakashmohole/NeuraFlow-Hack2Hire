import React from "react";

const PublishStep = ({ data, onUpdate, onSubmit }) => {
  return (
    <div className="bg-slate-800 rounded-lg shadow-lg p-6 space-y-4">
      <h2 className="text-2xl font-semibold text-white">Publish</h2>
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={data}
          onChange={(e) => onUpdate(e.target.checked)}
          className="mr-2"
        />
        <label className="text-white">
          I agree to the{" "}
          <span className="text-blue-400">Terms and Conditions</span>
        </label>
      </div>
      <button
        onClick={onSubmit}
        className="w-full py-2 px-4 bg-green-600 text-white rounded-full hover:bg-green-700"
      >
        Publish Project
      </button>
    </div>
  );
};

export default PublishStep;
