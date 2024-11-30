import React, { useState } from "react";

const AddPostForm = ({ community }) => {
  const [postContent, setPostContent] = useState("");
  const [media, setMedia] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate post creation
    console.log({
      communityId: community.id,
      content: postContent,
      media,
    });
    alert("Post created successfully!");
    setPostContent("");
    setMedia(null);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-800 p-6 rounded-lg shadow-md"
    >
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Post Content
        </label>
        <textarea
          value={postContent}
          onChange={(e) => setPostContent(e.target.value)}
          className="w-full bg-gray-700 text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Write your post here..."
          rows="4"
        ></textarea>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Upload Media (Optional)
        </label>
        <input
          type="file"
          accept="image/*,video/*,.gif"
          onChange={(e) => setMedia(e.target.files[0])}
          className="w-full text-gray-300 bg-gray-700 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-500 text-white py-2 rounded-md"
      >
        Create Post
      </button>
    </form>
  );
};

export default AddPostForm;
