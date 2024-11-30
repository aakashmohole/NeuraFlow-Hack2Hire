import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import bg from "../assets/background-community.gif";

import { getAllChannels } from "../api/commnityApi";

const Forum = () => {
  const [channels, setChannels] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchChannels = async () => {
      const { data, error } = await getAllChannels(setLoading);
      if (data) {
        setChannels(data);
      }

      if (error) {
        console.error(error);
      }
    };

    fetchChannels();
  }, []);

  const LoadingSkeleton = () => (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-6 bg-slate-950 animate-pulse">
      {Array(4)
        .fill(0)
        .map((_, index) => (
          <div
            key={index}
            className={`rounded-lg bg-gray-500 ${
              index === 0
                ? "md:col-span-2 md:row-span-2 h-64"
                : index === 1 || index === 2
                ? "md:col-span-1 md:row-span-1 h-32"
                : "md:col-span-2 h-48"
            }`}
          ></div>
        ))}
    </div>
  );

  return (
    <>
      <section className="bg-slate-950 ">
        <div className=" flex justify-center ">
          <div className=" w-full h-80 bg-black mt-10 rounded-lg">
            <img src={bg} className="w-full h-full object-contain rounded-lg" />
          </div>

          <form className="flex items-center max-w-sm mx-auto absolute top-44  left-[45%]">
            <label htmlFor="simple-search" className="sr-only">
              Search
            </label>
            <div className="relative w-full  bg-[030713]">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2"
                  />
                </svg>
              </div>
              <input
                type="text"
                id="simple-search"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search topics..."
                required
              />
            </div>
            <button
              type="submit"
              className="p-2.5 ms-2 text-sm font-medium text-white bg-[#524AE6] rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span className="sr-only">Search</span>
            </button>
          </form>
        </div>
      </section>

      <section>
        <div className="py-6 px-12 space-y-12 bg-[#030713] w-full animate__animated animate__fadeInDown">
          <section className="grid grid-cols-1 gap-6   md:grid-cols-4 bg-[#6264EB] divide-x w-full rounded-lg animate__animated animate__fadeInDown">
            <div className="flex px-8 py-5 cursor-pointer text-white items-center hover:bg-gray-900 ">
              <div className="ml-3">
                <div className="leading-6 text-white font-bold">Overview</div>
                <div className="mt-0.5 text-sm text-white">
                  The NeuraFlow's Hub is a vibrant, community-driven forum
                  designed for freelancers to connect, share knowledge, and grow
                  their businesses.
                </div>
              </div>
            </div>
            <div className="flex px-8 py-5 cursor-pointer text-gray-900 items-center hover:bg-gray-900">
              <div className="ml-3">
                <div className="leading-6 text-white font-bold">
                  Community Engagement
                </div>
                <div className="mt-0.5 text-sm text-white">
                  The Freelancers' Hub is built on active participation and
                  collaboration. Join lively discussions, attend virtual
                  meetups, and contribute your expertise to help others.
                </div>
              </div>
            </div>
            <div className="flex px-8 py-5 cursor-pointer text-white items-center hover:bg-gray-900">
              <div className="ml-3">
                <div className="leading-6 text-white font-bold">Contacts</div>
                <div className="mt-0.5 text-sm text-white">
                  For any questions or support, our dedicated team is always
                  ready to help. You can easily reach out through the forum's
                  private messaging system or by emailing our support team.
                </div>
              </div>
            </div>

            <div className="flex px-8 py-5 cursor-pointer text-gray-900 items-center hover:bg-gray-900">
              <div className="ml-3">
                <div className="leading-6 text-white font-bold">
                  NeuraFlow Community
                </div>
                <div className="mt-0.5 text-sm text-white">
                  The NeuraFlow Community is a collaborative space for
                  developers, data scientists, and AI enthusiasts to connect,
                  share knowledge, and collaborate on neural network projects.{" "}
                </div>
              </div>
            </div>
          </section>

          <div className="flex flex-col h-full w-full mx-auto  space-y-6">
            <section className="flex flex-col mx-auto bg-[#0f1726] rounded-lg p-6 shadow-md space-y-6 w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full min-w-0">
                <div className="flex flex-col px-6 py-2 bg-[#030713] shadow rounded-lg overflow-hidden">
                  <div className="flex flex-col items-center space-y-2">
                    <div className="text-6xl font-bold tracking-tight leading-none text-blue-500">
                      1500+
                    </div>
                    <div className="text-lg font-medium text-blue-500">
                      Users
                    </div>
                  </div>
                </div>

                <div className="flex flex-col px-6 py-2 bg-[#030713] shadow rounded-lg overflow-hidden">
                  <div className="flex flex-col items-center space-y-2">
                    <div className="text-6xl font-bold tracking-tight leading-none text-amber-500">
                      1200+
                    </div>
                    <div className="text-lg font-medium text-amber-600">
                      Freelancers
                    </div>
                  </div>
                </div>

                <div className="flex flex-col px-6 py-2 bg-[#030713] shadow rounded-lg overflow-hidden">
                  <div className="flex flex-col items-center space-y-2">
                    <div className="text-6xl font-bold tracking-tight leading-none text-red-500">
                      24
                    </div>
                    <div className="text-lg font-medium text-red-600">
                      Compaines
                    </div>
                  </div>
                </div>

                <div className="flex flex-col px-6 py-2 bg-[#030713] shadow rounded-lg overflow-hidden">
                  <div className="flex flex-col items-center space-y-2">
                    <div className="text-6xl font-bold tracking-tight leading-none text-white">
                      38
                    </div>
                    <div className="text-lg font-medium text-white">MNC</div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>

      <section className="bg-[#030713] px-4  animate__animated animate__fadeInUp">
        <div className="container mx-auto p-6">
          <h1 className="text-4xl font-bold text-center text-gray-100 mb-6 animate__animated animate__fadeInDown">
            Community Events & Webinars
          </h1>
          <p className="text-center text-gray-300 mb-8 animate__animated animate__fadeInUp">
            Stay updated on upcoming events, webinars, and networking
            opportunities designed to help freelancers thrive.
          </p>

          <div className="flex flex-col md:flex-row justify-between items-center gap-10 sm:px-4 md:px-10 lg:px-20">
            <Link
              to="/events"
              className="bg-[#0F1726] p-6 rounded-lg shadow hover:shadow-lg transition-shadow hover:bg-[#6B21A8] transform hover:-translate-y-1 animate__animated animate__zoomIn"
            >
              <img
                src="https://images.unsplash.com/photo-1712903276864-79723b184ffa?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Events"
                className="w-full h-40 rounded-t-lg mb-4 object-cover"
              />
              <h2 className="text-2xl font-semibold text-gray-200">
                Event Announcements
              </h2>
              <p className="text-gray-400 mt-2">
                Get the latest news on upcoming events, workshops, and
                conferences in freelancing.
              </p>
            </Link>

            <Link
              to="/webinar"
              className="bg-[#0F1726] p-6 rounded-lg shadow hover:shadow-lg transition-shadow hover:bg-[#6B21A8] transform hover:-translate-y-1 animate__animated animate__zoomIn"
            >
              <img
                src="https://plus.unsplash.com/premium_photo-1661754876215-247b4db12e83?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Webinars"
                className="w-full h-40 rounded-t-lg mb-4 object-cover"
              />
              <h2 className="text-2xl font-semibold text-gray-200">
                Webinar Recordings & Recaps
              </h2>
              <p className="text-gray-400 mt-2">
                Watch recordings and read summaries of past webinars to learn at
                your own pace.
              </p>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#030713] pt-2">
        <div className="my-5 flex items-center justify-between bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-8 w-auto">
          <h2 className="text-lg font-semibold text-gray-100 m-4">
            Best Communities
          </h2>
        </div>
        <div className="h-screen grid grid-cols-1 md:grid-cols-4 gap-4 p-6 bg-slate-950 ">
          {loading ? (
            <LoadingSkeleton />
          ) : (
            channels.slice(0, 4).map((channel, index) => (
              <div
                key={index}
                className={`border-2 border-gray-500 hover:border-gray-600 relative group rounded-lg overflow-hidden shadow-lg ${
                  index === 0
                    ? "md:col-span-2 md:row-span-2"
                    : index === 1 || index === 2
                    ? "md:col-span-1 md:row-span-1"
                    : "md:col-span-2"
                }`}
              >
                <img
                  src={channel.channel_photo}
                  alt={channel.channel_name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 transition duration-300 flex flex-col justify-end p-4">
                  <h3 className="text-white text-xl font-bold">
                    {channel.channel_name}
                  </h3>
                  <p className="text-gray-200 text-sm">{channel.description}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </section>
    </>
  );
};

export default Forum;
