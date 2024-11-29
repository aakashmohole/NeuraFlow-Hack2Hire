import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/custom/Header";
import { getUser } from "../../api/userApi";
import PageLoader from "../../components/custom/PageLoader";

export default function ProfilePage() {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      const data = await getUser(setLoading);

      if (data) setUser(data.data.user);
    };

    fetchUser();
  }, []);

  if (loading) {
    return <PageLoader />;
  }

  return (
    <>
      <Header />
      <section className="w-full min-h-screen bg-[#030713] p-10">
        <div className="h-full bg-[#030713] mt-16">
          <div className="w-full h-[250px]">
            <img
              src="https://vojislavd.com/ta-template-demo/assets/img/profile-background.jpg"
              className="w-full h-full rounded-tl-lg rounded-tr-lg"
            />
          </div>
          <div className="flex flex-col items-center -mt-20 gap-2">
            {user &&
              (user.profile_photo ? (
                <img
                  src={user.profile_photo}
                  className="w-40 h-40 object-cover border-4 border-white rounded-full"
                />
              ) : (
                <div className="w-40 h-40 rounded-full bg-gradient-to-tr from-pink-600 to-purple-600 flex justify-center items-center text-white p-2 font-semibold ">
                  user.firstname[0].toUpperCase() user.lastname[0].toUpperCase()
                </div>
              ))}

            <div className="flex items-center space-x-2 mt-2">
              {user && (
                <>
                  <p className="text-2xl text-white font-bold">
                    {user.firstname} {user.lastname}
                  </p>
                  <p className="text-gray-400">{user.email}</p>
                </>
              )}
            </div>
            {user && (
              <>
                <p className="text-xl text-gray-400 font-bold">
                  {user.hourly_rate ? `$${user.hourly_rate}` : "Hourly rate"}
                </p>
                <p className="text-xl text-gray-400 font-bold">
                  Connects : {user.connects}
                </p>
                <p className="text-gray-400">
                  {user.working_domain} |{" "}
                  <span className="text-sm">{user.country}</span>
                </p>
              </>
            )}

            <div className="flex items-center">
              <svg
                className="w-4 h-4 text-yellow-300 me-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                className="w-4 h-4 text-yellow-300 me-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                className="w-4 h-4 text-yellow-300 me-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                className="w-4 h-4 text-yellow-300 me-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                className="w-4 h-4 text-gray-300 me-1 dark:text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
                4.95
              </p>
              <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
                out of
              </p>
              <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
                5
              </p>
            </div>
          </div>
        </div>
        <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-900 shadow-md rounded-lg space-y-8 mt-4">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
            About Me
          </h2>
          <div>
            <div>
              {user && user.bio && (
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  {user.bio}
                </p>
              )}
            </div>

            <div className="mt-4">
              <button
                className="flex items-center bg-blue-600 hover:bg-blue-700 text-gray-100 px-4 py-2 rounded text-sm space-x-2 transition duration-100"
                onClick={() => navigate("update")}
              >
                <svg
                  className="w-3 h-4 md:w-6 md:h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M15.514 3.293a1 1 0 0 0-1.415 0L12.151 5.24a.93.93 0 0 1 .056.052l6.5 6.5a.97.97 0 0 1 .052.056L20.707 9.9a1 1 0 0 0 0-1.415l-5.193-5.193ZM7.004 8.27l3.892-1.46 6.293 6.293-1.46 3.893a1 1 0 0 1-.603.591l-9.494 3.355a1 1 0 0 1-.98-.18l6.452-6.453a1 1 0 0 0-1.414-1.414l-6.453 6.452a1 1 0 0 1-.18-.98l3.355-9.494a1 1 0 0 1 .591-.603Z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Profile Update</span>
              </button>
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
              Technical Skills
            </h2>
            <div className="flex flex-wrap gap-2 mt-2">
              {user &&
                user.technical_skills &&
                user.technical_skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
            </div>
          </div>

          {/* Work Experience */}

          <div>
            <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
              Work Experience
            </h2>
            {user && user.work_experience ? (
              <div className="mt-2 space-y-4">
                {user.work_experience.map((work, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 dark:bg-gray-800 p-4 rounded-md shadow"
                  >
                    <h3 className="text-md font-semibold text-gray-800 dark:text-gray-200">
                      {work.job_title} @ {work.company}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {work.duration}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="mt-2 text-md font-noraml text-gray-400">
                Work experience details not found
              </div>
            )}
          </div>

          <hr />

          {/* Education */}
          <div>
            <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
              Education
            </h2>
            {user && user.educational_details ? (
              <div className="mt-2 space-y-4">
                {user.educational_details.map((edu, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 dark:bg-gray-800 p-4 rounded-md shadow"
                  >
                    <h3 className="text-md font-semibold text-gray-800 dark:text-gray-200">
                      {edu.degree}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {edu.field}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {edu.institute}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {edu.year_of_graduation}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="mt-2 text-md font-noraml text-gray-400">
                No educational deatils found
              </div>
            )}
          </div>

          <hr />

          {/* Social Links */}
          <div>
            <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
              Social Links
            </h2>
            <div className="flex gap-4 mt-2">
              {user && (
                <>
                  <a
                    href={user?.social_media_links?.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-600 hover:underline cursor-pointer"
                  >
                    Linkedin
                  </a>
                  <a
                    href={user?.social_media_links?.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-600 hover:underline cursor-pointer"
                  >
                    Twitter
                  </a>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
