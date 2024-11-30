import React, { useEffect, useState } from "react";
import { FaPlus, FaUsers } from "react-icons/fa";
import PageLoader from "../../components/custom/PageLoader";
import {
  getChannelById,
  getAllMembers,
  getAllPosts,
  createPost,
} from "../../api/commnityApi";
import { useParams } from "react-router-dom";

const LoadingSkeleton = () => {
  return (
    <ul className="space-y-2">
      {Array.from({ length: 8 }).map((_, index) => (
        <li className="bg-gray-800 p-4 rounded animate-pulse" key={index}>
          User {index + 1}
        </li>
      ))}
    </ul>
  );
};

const ChannelPage = () => {
  const [activeTab, setActiveTab] = useState("addPost");
  const [channel, setChannel] = useState();
  const [loading, setLoading] = useState(false);
  const [membersDataLoading, setMembersDataLoading] = useState(false);
  const [members, setMembers] = useState();
  const [post, setPost] = useState();
  const [comments, setComments] = useState([]);

  const { id } = useParams();

  const getChannel = async () => {
    const { data, error } = await getChannelById(setLoading, id);
    if (data) {
      setChannel(data);
    }
    if (error) {
      console.error(error);
    }
  };

  const getPosts = async () => {
    const { data, error } = await getAllPosts(setLoading, id);
    if (data) {
      setComments(data.comments[0]);
      setPost(data.post);
      console.log(data.comments[0]);
    }
    if (error) {
      console.error(error);
    }
  };

  const getAllusers = async () => {
    const { data, error } = await getAllMembers(setMembersDataLoading, id);

    if (data) {
      setMembers(data);
    }
  };

  useEffect(() => {
    getChannel();
    getPosts();
  }, []);

  useEffect(() => {
    if (activeTab === "users") {
      getAllusers();
    }
  }, [activeTab]);

  const handleClick = () => {};

  if (loading) {
    return <PageLoader />;
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col md:flex-row">
      {/* Sidebar */}
      <aside className="md:w-1/4 w-full bg-gray-800 flex-shrink-0 p-4">
        <h2 className="text-2xl font-bold mb-6">Channel Options</h2>
        <button
          onClick={() => setActiveTab("addPost")}
          className={`w-full mb-4 py-2 px-4 flex items-center gap-2 rounded ${
            activeTab === "addPost" ? "bg-gray-700" : ""
          }`}
        >
          <FaPlus />
          Add Post
        </button>
        <button
          onClick={() => setActiveTab("users")}
          className={`w-full py-2 px-4 flex items-center gap-2 rounded ${
            activeTab === "users" ? "bg-gray-700" : ""
          }`}
        >
          <FaUsers />
          Users
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {channel ? (
          <>
            <div className="flex items-center mb-8">
              <img
                src={channel.channel_photo}
                alt={channel.channel_name}
                className="h-16 w-16 rounded-full mr-4"
              />
              <h1 className="text-3xl font-bold">{channel.channel_name}</h1>
            </div>

            {activeTab === "addPost" && (
              <div>
                <h2 className="text-2xl font-bold mb-4">Create a Post</h2>
                <form className="space-y-4">
                  <textarea
                    placeholder="Write something..."
                    className="w-full p-4 rounded bg-gray-800 focus:outline-none"
                  />
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Upload Image/Video/GIF:
                    </label>
                    <input
                      type="file"
                      className="block w-full text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:bg-gray-700 file:text-white hover:file:bg-gray-600"
                    />
                  </div>
                  <button
                    className="bg-blue-600 py-2 px-4 rounded text-white hover:bg-blue-700"
                    onClick={handleClick}
                  >
                    Post
                  </button>
                </form>

                {/* Post Section */}
                <div className="mt-8">
                  <h2 className="text-2xl font-bold mb-4">Post</h2>
                  {post && (
                    <div className="bg-gray-800 p-6 rounded mb-6">
                      <p className="text-gray-200">{post.content}</p>
                      <p className="text-gray-500 text-sm mt-2">
                        Posted on: {new Date(post.created_at).toLocaleString()}
                      </p>
                    </div>
                  )}

                  {/* Comments Section */}
                  <h3 className="text-xl font-bold mb-2">Comments</h3>
                  {comments ? (
                    <ul className="space-y-4 max-w-4xl">
                      <li
                        key={comments.comment_id}
                        className="bg-gray-800 p-4 rounded"
                      >
                        <p className="text-gray-300">{comments.comment}</p>
                        <p className="text-gray-500 text-sm mt-2">
                          Commented on:{" "}
                          {new Date(comments.created_at).toLocaleString()}
                        </p>
                      </li>
                    </ul>
                  ) : (
                    <p>No comments yet.</p>
                  )}
                </div>
              </div>
            )}

            {activeTab === "users" && (
              <div>
                <h2 className="text-2xl font-bold mb-4">Community Members</h2>
                <ul className="space-y-2">
                  {membersDataLoading ? (
                    <LoadingSkeleton />
                  ) : members ? (
                    members.map((user, index) => (
                      <li className="bg-gray-800 p-4 rounded" key={index}>
                        {user.firstname} {user.lastname}
                      </li>
                    ))
                  ) : (
                    <p>No one joined this channel yet</p>
                  )}
                </ul>
              </div>
            )}
          </>
        ) : (
          <div>No Data found...</div>
        )}
      </main>
    </div>
  );
};

export default ChannelPage;
