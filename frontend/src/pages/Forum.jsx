import React from "react";
import { Link } from "react-router-dom";

import bg from "../assets/background-community.gif";

const Forum = () => {
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

          <div className="w-full flex justify-between items-center gap-10 px-32">
            <Link
              to="events"
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
            Topic Based Forums
          </h2>
        </div>
        <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-6 relative">
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-5">
            <div className="sm:col-span-5">
              <a href="#">
                <div
                  className="bg-cover text-center overflow-hidden hover:-translate-y-1 animate__animated animate__zoomIn"
                  style={{
                    minHeight: "300px",
                    backgroundImage: `url(
                      "https://images.unsplash.com/photo-1719937050792-a6a15d899281?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    )`,
                  }}
                  title="Woman holding a mug"
                ></div>
              </a>
              <div className="mt-3 bg-[#0f1726] ps-4 rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
                <div className="">
                  <a
                    href="#"
                    className="text-xs text-gray-300 uppercase font-medium hover:text-indigo-900 transition duration-500 ease-in-out"
                  >
                    Music & Audio
                  </a>
                  <a
                    href="#"
                    className="block text-gray-100 font-bold text-2xl mb-2 hover:text-indigo-600 transition duration-500 ease-in-out"
                  >
                    {" "}
                    Music & Audio Discussions
                  </a>
                  <p className="text-gray-300 text-base mt-2">
                    This is the home for music & audio discussions and news for
                    anyone interested in music, audio engineering, voice-over,
                    and more! A place for sellers and buyers to talk gear, tips
                    & tricks, get feedback, and of course debate what the 1 DAW.
                  </p>
                </div>
              </div>
            </div>

            <div className="sm:col-span-7 grid grid-cols-2 lg:grid-cols-3 gap-5">
              <div className="">
                <a href="#">
                  <div
                    className="h-40 bg-cover text-center overflow-hidden hover:-translate-y-1 animate__animated animate__zoomIn"
                    style={{
                      backgroundImage: `url(
                        "https://images.unsplash.com/photo-1487537708572-3c850b5e856e?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      )`,
                    }}
                  ></div>
                </a>
                <a
                  href="#"
                  className="text-gray-300 inline-block font-semibold text-md my-2 hover:text-indigo-600 transition duration-500 ease-in-out"
                >
                  This forum is dedicated to Logo Maker sellers.{" "}
                </a>
              </div>
              <div className="">
                <a href="#">
                  <div
                    className="h-40 bg-cover text-center overflow-hidden hover:-translate-y-1 animate__animated animate__zoomIn"
                    style={{
                      backgroundImage: `url(
                        "https://images.unsplash.com/photo-1719937206498-b31844530a96?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      )`,
                    }}
                  ></div>
                </a>
                <a
                  href="#"
                  className="text-gray-300 inline-block font-semibold text-md my-2 hover:text-indigo-600 transition duration-500 ease-in-out"
                >
                  Welcome to our Photography forum board!{" "}
                </a>
              </div>
              <div className="">
                <a href="#">
                  <div
                    className="h-40 bg-cover text-center overflow-hidden hover:-translate-y-1 animate__animated animate__zoomIn"
                    style={{
                      backgroundImage: `url(
                        "https://images.unsplash.com/photo-1678690833065-965b52c0fa8d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      )`,
                    }}
                  ></div>
                </a>
                <a
                  href="#"
                  className="text-gray-300 inline-block font-semibold text-md my-2 hover:text-indigo-600 transition duration-500 ease-in-out"
                >
                  This is the home for website development and design
                  discussions.
                </a>
              </div>
              <div className="">
                <a href="#">
                  <div
                    className="h-40 bg-cover text-center overflow-hidden hover:-translate-y-1 animate__animated animate__zoomIn"
                    style={{
                      backgroundImage: `url(
                        "https://images.unsplash.com/photo-1528109966604-5a6a4a964e8d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      )`,
                    }}
                    title="Woman holding a mug"
                  ></div>
                </a>
                <a
                  href="#"
                  className="text-gray-300 inline-block font-semibold text-md my-2 hover:text-indigo-600 transition duration-500 ease-in-out"
                >
                  The place for NeuraFlow video makers, editors, animators,
                  photographers and all interested in the world of video and
                  animation!
                </a>
              </div>
              <div className="">
                <a href="#">
                  <div
                    className="h-40 bg-cover text-center overflow-hidden hover:-translate-y-1 animate__animated animate__zoomIn"
                    style={{
                      backgroundImage: `url(
                        "https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      )`,
                    }}
                    title="Woman holding a mug"
                  ></div>
                </a>
                <a
                  href="#"
                  className="text-gray-300 inline-block font-semibold text-md my-2 hover:text-indigo-600 transition duration-500 ease-in-out"
                >
                  This is the home for data discussions, where data scientists
                  and analysts share tips, techniques, and inspiration.
                </a>
              </div>
              <div className="">
                <a href="#">
                  <div
                    className="h-40 bg-cover text-center overflow-hidden hover:-translate-y-1 animate__animated animate__zoomIn"
                    style={{
                      backgroundImage: `url(
                        "https://images.unsplash.com/photo-1605152277138-359efd4a6862?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      )`,
                    }}
                    title="Woman holding a mug"
                  ></div>
                </a>
                <a
                  href="#"
                  className="text-gray-300 inline-block font-semibold text-md my-2 hover:text-indigo-600 transition duration-500 ease-in-out"
                >
                  This forum is dedicated to Logo Maker sellers
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Forum;
