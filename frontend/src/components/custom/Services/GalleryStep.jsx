import React, { useState } from "react";

const GalleryStep = ({ data, onUpdate }) => {
  const [fileInput, setFileInput] = useState(null);

  const handleFileChange = (e) => {
    setFileInput(e.target.files[0]);
  };

  const handleAddImage = () => {
    if (fileInput) {
      const newGallery = [...data];
      newGallery.push(URL.createObjectURL(fileInput));
      onUpdate({ gallery: newGallery });
      setFileInput(null); // Reset input after adding
    }
  };

  return (
    <div className="bg-slate-800 rounded-lg shadow-lg p-6 space-y-4">
      <h2 className="text-2xl font-semibold text-white">Gallery</h2>
      <div className="space-y-4">
        <input
          type="file"
          className="w-full p-2 rounded-md border border-gray-300"
          onChange={handleFileChange}
        />
        <button
          onClick={handleAddImage}
          className="w-full py-2 px-4 bg-blue-600 text-white rounded-full hover:bg-blue-700"
        >
          Add Image to Gallery
        </button>
        <div className="flex space-x-4 mt-4">
          {data.map((imgSrc, index) => (
            <img
              key={index}
              src={imgSrc}
              alt={`Gallery image ${index + 1}`}
              className="w-20 h-20 object-cover rounded-md"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryStep;
