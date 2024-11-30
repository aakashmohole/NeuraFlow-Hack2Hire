import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

import { createCommunity } from "../../api/commnityApi";

const CreateChannel = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    watch,
  } = useForm();
  const [loading, setLoading] = useState(false);

  // Handle file input separately
  const [file, setFile] = useState(null); // store file locally

  const optionData = [
    "Web Development",
    "Graphic Design",
    "Content Writing",
    "Digital Marketing",
    "Video Editing",
    "SEO & SEM",
    "App Development",
    "Data Science",
    "Voice Over",
    "Translation",
    "Virtual",
  ];

  // Handle file selection
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile); // Update the local file state
    setValue("channel_photo", selectedFile); // Update the file input value in form state
  };

  const onSubmit = async (data) => {
    // Create FormData object
    const formData = new FormData();
    formData.append("channel_name", data.channel_name);
    formData.append("description", data.description);
    formData.append("channel_category", data.channel_category);
    if (file) {
      formData.append("channel_photo", file); // Append the file properly
    }

    const { data: result, error } = await createCommunity(formData, setLoading);

    if (result) {
      console.log(data);
      toast.success("Channel created successfully");

      setValue("channel_name", "");
      setValue("description", "");
      setValue("channel_category", "");
      setFile(null);

      setTimeout(() => {
        navigate("/community");
      }, 1500);
    }

    if (error) {
      toast.error(error);
      console.error(error);
    }
  };

  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-gray-900 text-gray-100">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full max-w-md bg-gray-800 p-8 shadow-lg rounded-lg"
        >
          <h2 className="text-2xl font-semibold text-center mb-6">
            Create Community
          </h2>
          {/* Channel Name */}
          <div className="mb-4">
            <label
              htmlFor="channelName"
              className="block text-sm font-medium text-gray-300"
            >
              Channel Name
            </label>
            <input
              type="text"
              id="channelName"
              {...register("channel_name", {
                required: "Channel name is required",
              })}
              className="w-full px-3 py-2 mt-1 border border-gray-600 bg-gray-700 text-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter channel name"
            />
            {errors.channel_name && (
              <span className="text-red-500 text-sm">
                {errors.channel_name.message}
              </span>
            )}
          </div>

          {/* Photo */}
          <div className="mb-4">
            <label
              htmlFor="photo"
              className="block text-sm font-medium text-gray-300"
            >
              Channel Photo
            </label>
            <input
              type="file"
              id="photo"
              accept="image/*"
              onChange={handleFileChange}
              className="w-full mt-1 text-sm file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-indigo-700 file:text-indigo-100 hover:file:bg-indigo-800"
            />
            {errors.channel_photo && (
              <span className="text-red-500 text-sm">
                {errors.channel_photo.message}
              </span>
            )}
          </div>

          {/* Description */}
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-300"
            >
              Description
            </label>
            <textarea
              id="description"
              {...register("description", {
                required: "Description is required",
              })}
              className="w-full px-3 py-2 mt-1 border border-gray-600 bg-gray-700 text-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Write a brief description of your community"
              rows="4"
            ></textarea>
            {errors.description && (
              <span className="text-red-500 text-sm">
                {errors.description.message}
              </span>
            )}
          </div>

          {/* Category */}
          <div className="mb-4">
            <label
              htmlFor="category"
              className="block text-sm font-medium text-gray-300"
            >
              Category
            </label>
            <select
              id="category"
              {...register("channel_category", {
                required: "Category is required",
              })}
              className="w-full px-3 py-2 mt-1 border border-gray-600 bg-gray-700 text-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="" disabled>
                Select a category
              </option>
              {optionData.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
            {errors.channel_category && (
              <span className="text-red-500 text-sm">
                {errors.channel_category.message}
              </span>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 mt-4 text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            {loading ? (
              <div className="w-7 h-7 rounded-full mx-auto loader"></div>
            ) : (
              "Create Community"
            )}
          </button>
        </form>
      </div>
      <ToastContainer />
    </>
  );
};

export default CreateChannel;
