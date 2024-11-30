import React, { useState } from "react";

const OverviewStep = ({ data, onUpdate }) => {
  const [tags, setTags] = useState([]);

  const handleTagRemove = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  const handleTagAdd = (e) => {
    if (e.key === "Enter" && e.target.value && tags.length < 5) {
      setTags([...tags, e.target.value]);
      e.target.value = "";
    }
  };

  return (
    <div className="container mx-auto max-w-3xl space-y-8 text-white">
      {/* Form Container */}
      <section className="bg-slate-800 rounded-lg shadow-lg p-6 space-y-4">
        <h2 className="text-2xl font-semibold text-white">Overview</h2>

        {/* Service Title */}
        <div className="mb-8">
          <label
            className="block text-lg font-semibold mb-2"
            htmlFor="service-title"
          >
            Service Title
          </label>
          <p className="text-sm text-gray-400 mb-3">
            As your service storefront, your title is the most important place
            to include keywords that buyers would likely use to search for a
            service like yours.
          </p>
          <textarea
            id="service-title"
            className="w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            maxLength="80"
            rows="2"
            placeholder="Enter your title"
            value={data.serviceTitle}
            onChange={(e) => onUpdate({ serviceTitle: e.target.value })}
          />
        </div>

        {/* Category Section */}
        <div className="mb-8">
          <label
            className="block text-lg font-semibold mb-2"
            htmlFor="category"
          >
            Category
          </label>
          <p className="text-sm text-gray-400 mb-3">
            Choose the category and sub-category most suitable for your Gig.
          </p>
          <div className="flex space-x-4">
            <select
              id="category"
              className="w-1/2 p-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
              value={data.category}
              onChange={(e) => onUpdate({ category: e.target.value })}
            >
              <option>DIGITAL MARKETING</option>
              <option>WRITE & TRANSLATION</option>
              <option>VIDEO & ANIMATION</option>
              <option>PROGRAMMING & TECH</option>
              <option>DATA</option>
              <option>BUSINESS</option>
              <option>PHOTOGRAPHY</option>
              <option>FINANCE</option>
              <option>END-TO-END PROJECT</option>
            </select>
            <select
              id="sub-category"
              className="w-1/2 p-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
              value={data.subCategory}
              onChange={(e) => onUpdate({ subCategory: e.target.value })}
            >
              <option>DATA SCIENCE & ML</option>
              <option>WEB DEVELOPMENT</option>
              <option>GRAPHIC DESIGN</option>
            </select>
          </div>
        </div>

        {/* Add Skills */}
        <div className="mb-8">
          <label className="block text-lg font-semibold mb-2" htmlFor="skills">
            Add Skills
          </label>
          <textarea
            id="skills"
            className="w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            maxLength="80"
            rows="2"
            placeholder="Enter your skills"
            value={data.skills}
            onChange={(e) => onUpdate({ skills: e.target.value })}
          />
          <p className="text-gray-400 mt-2">
            Tag your Gig with buzz words that are relevant to the services you
            offer. Use all 5 tags to get found.
          </p>
        </div>

        {/* Positive Keywords */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-2">Positive Keywords</h2>
          <p className="text-gray-400 mb-4">
            Enter search terms you feel your buyers will use when looking for
            your service.
          </p>

          {/* Tag Container */}
          <div className="border border-gray-700 p-4 rounded-lg bg-gray-800">
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="flex items-center bg-gray-700 text-sm text-white py-1 px-3 rounded-full"
                >
                  {tag}
                  <button
                    className="ml-2 text-gray-400 hover:text-white"
                    onClick={() => handleTagRemove(tag)}
                  >
                    &times;
                  </button>
                </span>
              ))}
            </div>
          </div>
          <input
            type="text"
            className="w-full p-3 mt-4 bg-gray-800 text-white rounded-lg border border-gray-700 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            placeholder="Press Enter to add keywords"
            onKeyDown={handleTagAdd}
          />
          <p className="text-gray-500 text-xs mt-2">
            5 tags maximum. Use letters and numbers only.
          </p>
        </div>
      </section>
    </div>
  );
};

export default OverviewStep;
