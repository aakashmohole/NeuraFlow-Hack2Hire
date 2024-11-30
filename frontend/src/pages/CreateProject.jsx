import React, { useState } from "react";
import { IoIosClose } from "react-icons/io";
import { createProject } from "../api/userApi";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CreateProject = () => {
  const initialFormData = {
    domain: "",
    title: "",
    description: "",
    skills: [],
    project_deadline: "",
    work_type: "",
    price: 5,
    connects: "",
    level: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const [errors, setErrors] = useState({});

  const [skill, setSkill] = useState([]);

  const [loading, setLoading] = useState(false);

  const validate = () => {
    const newErros = {};

    if (!formData.domain) {
      newErros.domain = "Domain is required";
    } else if (!formData.connects) {
      newErros.connects = "Connects required";
    } else if (formData.connects < 5) {
      newErros.connects = "Connects should be greater than 5";
    } else if (!formData.title) {
      newErros.title = "Title is required";
    } else if (!formData.description) {
      newErros.description = "Description is required";
    } else if (formData.skills.length < 3) {
      newErros.skills = "Minimum 3 skills are required";
    } else if (!formData.project_deadline) {
      newErros.project_deadline = "Deadline is required";
    } else if (!formData.work_type) {
      newErros.work_type = "work type required";
    } else if (!formData.price) {
      newErros.price = "Price is required";
    } else if (!formData.level) {
      newErros.level = "Level is required";
    } else if (
      formData.level !== "Begineer" ||
      formData.level !== "Intermediate" ||
      formData.level !== "Advanced"
    ) {
      newErros.level = "Data is not in proper format";
    }

    return newErros;
  };

  const handleClick = async () => {
    console.log(formData);

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    }

    const { data, error } = await createProject(formData, setLoading);

    if (data) {
      console.log(data);
      toast.success("Project created successfully 👌");
    }
    setFormData(initialFormData);
    if (error) {
      toast.error(error);
      console.error(error);
    }
  };

  const toPascalCase = (str) =>
    (str.match(/[a-zA-Z0-9]+/g) || [])
      .map((w) => `${w.charAt(0).toUpperCase()}${w.slice(1)}`)
      .join("");

  const addSkill = () => {
    if (skill.trim()) {
      const formatSkillText = toPascalCase(skill);

      setFormData((prevData) => ({
        ...prevData,
        skills: [...prevData.skills, formatSkillText],
      }));
    }

    setSkill("");
  };

  const removeSkill = (id) => {
    const filteredSkills = formData.skills.filter((_, index) => index !== id);

    setFormData((prevData) => ({
      ...prevData,
      skills: filteredSkills,
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const SkillTag = ({ skill, index }) => {
    return (
      <div className="flex items-center gap-1">
        <p className="h-8 px-2 py-1 rounded bg-gray-200 text-black text-center">
          {skill}{" "}
        </p>
        <IoIosClose
          className="bg-gray-300 h-8 rounded text-black cursor-pointer"
          onClick={() => removeSkill(index)}
        />
      </div>
    );
  };

  return (
    <>
      <section className="bg-[#030712] flex items-center justify-center min-h-screen text-gray-200">
        <div className="container mx-auto p-8 flex flex-col lg:flex-row gap-6 lg:gap-12">
          <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
            <h2 className="text-2xl lg:text-3xl font-semibold">
              Let's Start With A Strong TITLE.
            </h2>
            <p className="text-gray-400 mt-2">
              This helps your job post stand out to the right candidates. It's
              the first thing they'll see, so make it count!
            </p>

            <ul className="space-y-4">
              <li className="flex items-center justify-center lg:justify-start gap-4">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path />
                </svg>
                <span>Answer a few questions and Post Your Project.</span>
              </li>
              <hr className="my-4 border-gray-600 opacity-35" />
              <li className="flex items-center justify-center lg:justify-start gap-4">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path />
                </svg>
                <span>Provide Clear Details.</span>
              </li>
              <hr className="my-4 border-gray-600 opacity-35" />
              <li className="flex items-center justify-center lg:justify-start gap-4">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path />
                </svg>
                <span>Set a Realistic Budget and Timeline.</span>
              </li>
              <hr className="my-4 border-gray-600 opacity-30" />
            </ul>
          </div>

          <div className="w-full lg:w-1/2 relative">
            <div className="relative max-w-md mx-auto">
              <div className="mt-6">
                <label
                  htmlFor="job-title"
                  className="block text-lg font-medium"
                >
                  Set a Domain for your PROJECT post
                </label>
                <br />
                <input
                  type="text"
                  name="domain"
                  value={formData.domain}
                  onChange={handleChange}
                  placeholder="Ex. Data Analyst"
                  className="block w-full lg:w-2/3 p-2 text-sm text-White bg-black rounded-lg border-2 border-gray-600 focus:ring-blue-500 focus:border-blue-500 hover:bg-gray-800 transition-all duration-300"
                />
                {errors.domain && (
                  <p className="text-red-500 text-sm mt-2">{errors.domain}</p>
                )}
              </div>

              <div className="mt-6">
                <h2 className="text-lg font-semibold">Example titles</h2>
                <ul className="list-disc list-inside mt-2 text-gray-300">
                  <li>Data analyst/ Data Scientist</li>
                  <li>Software Developer / Software Engineer</li>
                  <li>Graphic Designer / Digital Marketer</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr />

      <section className="bg-[#030712] flex items-center justify-center min-h-screen text-gray-200">
        <div className="container mx-auto p-8 flex flex-col lg:flex-row gap-6 lg:gap-12">
          <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
            <h1 className="text-2xl lg:text-3xl font-semibold text-gray-600 opacity-60">
              2/3
            </h1>

            <h2 className="text-2xl lg:text-3xl font-semibold">
              Let's Start, Upload Project Information..!!
            </h2>

            <div className="mt-6">
              <label htmlFor="job-title" className="block text-lg font-medium">
                Set a Title for your PROJECT post
              </label>
              <br />
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Ex. Recommendation System For Freelancers"
                className={`block w-full lg:w-2/3 p-2 text-sm text-White bg-black rounded-lg border-2 ${
                  errors.title && "border-red-400"
                }
                 "border-gray-600"
                 focus:ring-blue-500 focus:border-blue-500 hover:bg-gray-800 transition-all duration-300`}
              />
            </div>

            <div className="w-full lg:w-3/4 mt-6">
              <label
                htmlFor="message"
                className="block mb-2 text-lg font-medium"
              >
                Description
              </label>
              <textarea
                id="message"
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows="4"
                className={`block w-full lg:w-2/3 p-2 text-sm text-White bg-black rounded-lg border-2 ${
                  errors.description && "border-red-400"
                } "border-gray-600"  focus:ring-blue-500 focus:border-blue-500 hover:bg-gray-800 transition-all duration-300`}
                placeholder="Describe Your Problem Statement Within 250 words only...!!"
              ></textarea>
            </div>
          </div>

          <hr className="my-6 border border-gray-500" />

          <div className="w-full lg:w-1/2 space-y-6">
            <div className="">
              <h2 className="text-lg font-semibold">
                Skills and Expertise Required
              </h2>
              <h2 className="text-lg font-bold mt-4 mb-2">Add Your Skills</h2>
              <div className="flex items-center gap-4">
                <input
                  type="text"
                  placeholder="Add skill"
                  value={skill}
                  onChange={(e) => setSkill(e.target.value)}
                  className="mt-2 p-2 w-full lg:w-3/4 border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-black hover:bg-gray-800 transition-all duration-300"
                />
                <button
                  className="bg-blue-400 px-2 py-1 rounded text-white"
                  onClick={addSkill}
                >
                  Add
                </button>
              </div>
              <div className="flex items-center gap-4 mt-4 relative">
                {formData.skills.map((skill, index) => (
                  <SkillTag skill={skill} key={index} index={index} />
                ))}
              </div>
              {errors.skills && (
                <p className="text-red-500 text-sm">{errors.skills}</p>
              )}
            </div>
          </div>
        </div>
      </section>

      <hr />

      <section className="w-full bg-[#030712] flex flex-col items-center justify-center min-h-screen text-gray-200 ">
        <div className="w-full p-8">
          <div className="w-full space-y-6">
            <h1 className="text-2xl lg:text-3xl font-semibold text-gray-600 opacity-60 text-center">
              3/3
            </h1>
            <div className="mt-6">
              <label htmlFor="job-title" className="block text-lg font-medium">
                Project Deadline
              </label>
              <input
                type="text"
                name="project_deadline"
                value={formData.project_deadline}
                className="block w-full lg:w-2/3 p-2 text-sm text-White bg-black rounded-lg border-2 border-gray-600 focus:ring-blue-500 focus:border-blue-500 hover:bg-gray-800 transition-all duration-300"
                placeholder="Ex : 7 days"
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-col items-start space-y-4 mt-10">
              <label htmlFor="job-title" className="block text-lg font-medium">
                Budget and Payment Terms
              </label>

              <div className="mb-4">
                <label className="block font-medium mb-2">Work Type</label>
                <div>
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      value="Fixed Rate"
                      name="work_type"
                      className="mr-2"
                      checked={formData.work_type === "Fixed Rate"}
                      onChange={handleChange}
                    />
                    <span>Fixed Rate</span>
                  </label>
                  <label className="flex items-center space-x-2 mt-2">
                    <input
                      type="radio"
                      name="work_type"
                      value="Hourly Rate"
                      className="mr-2"
                      checked={formData.work_type === "Hourly Rate"}
                      onChange={handleChange}
                    />
                    <span>Hourly Rate</span>
                  </label>
                </div>
              </div>
            </div>

            <div>
              <label
                htmlFor="job-title"
                className="block text-lg font-medium mt-4"
              >
                Price
              </label>
              <input
                type="number"
                name="price"
                min="5"
                value={formData.price}
                className="block w-full lg:w-2/3 p-2 text-sm text-White bg-black rounded-lg border-2 border-gray-600 focus:ring-blue-500 focus:border-blue-500 hover:bg-gray-800 transition-all duration-300"
                placeholder="Ex : 1500"
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label
                htmlFor="job-title"
                className="block text-lg font-medium mt-4"
              >
                Level
              </label>
              <input
                type="text"
                name="level"
                value={formData.level}
                onChange={handleChange}
                className="block w-full lg:w-2/3 p-2 text-sm text-White bg-black rounded-lg border-2 border-gray-600 focus:ring-blue-500 focus:border-blue-500 hover:bg-gray-800 transition-all duration-300"
                placeholder="Ex : Begineer | Intermediate | Advanced"
                required
              />
            </div>

            <div>
              <label
                htmlFor="job-title"
                className="block text-lg font-medium mt-4"
              >
                Connects Required
              </label>
              <input
                type="text"
                name="connects"
                value={formData.connects}
                min="5"
                max="30"
                className="block w-full lg:w-2/3 p-2 text-sm text-White bg-black rounded-lg border-2 border-gray-600 focus:ring-blue-500 focus:border-blue-500 hover:bg-gray-800 transition-all duration-300"
                placeholder="Ex : 15"
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="w-full flex flex-col justify-center items-center space-y-6 text-center mt-10">
            <h2 className="text-2xl lg:text-3xl font-semibold">
              Let's Finish With Next and Post Your Project.
            </h2>
            <br />
            <p className="text-white mt-6 opacity-50">
              To Find the best Freelancer Use Recommendation System
            </p>
            <ul className="space-y-4 lg:text-center">
              <li className="flex justify-center lg:justify-end items-center gap-4">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path />
                </svg>
                <span className="text-gray-400 hover:text-white">
                  Explore Best Freelancers.
                </span>
              </li>
              <hr className="my-4 border-gray-600 opacity-35" />
              <li className="flex justify-center lg:justify-end items-center gap-4">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path />
                </svg>
                <span className="text-gray-400 hover:text-white">
                  Build Strong & Clear Communication.
                </span>
              </li>
              <hr className="my-4 border-gray-600 opacity-35" />
              <li className="">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path />
                </svg>
                <span className="text-gray-400 hover:text-white">
                  Set realistic expectations to avoid confusion.
                </span>
              </li>
            </ul>

            <div className="mt-4 flex justify-center lg:justify-end">
              <button
                onClick={handleClick}
                className="w-full lg:w-1/4 py-3 px-6 border-2 border-blue-600 text-blue-600 font-semibold rounded-full hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                {loading ? (
                  <div className="w-7 h-7 rounded-full mx-auto loader"></div>
                ) : (
                  "Post →"
                )}
              </button>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer />
    </>
  );
};

export default CreateProject;

// [
//   {
//     domain: "Web Development",
//     title: "E-commerce Website Development",
//     description:
//       "Develop a fully functional e-commerce platform with a sleek UI/UX design. The website should include features like user authentication, product catalog, shopping cart, payment gateway integration, and an admin dashboard for managing inventory and orders. The solution must be responsive and optimized for performance.",
//     skills: ["React", "Node.js", "JavaScript", "CSS"],
//     project_deadline: "3 weeks",
//     work_type: "Remote",
//     price: "$1200",
//     connects: "15",
//     level: "Intermediate",
//   },
//   {
//     domain: "Graphic Design",
//     title: "Logo Design for Startup",
//     description:
//       "Design a unique, modern, and professional logo for a tech startup that specializes in AI-driven solutions. The logo should reflect innovation, technology, and trust. Multiple design iterations and revisions may be required to finalize the concept.",
//     skills: ["Photoshop", "Illustrator", "Logo Design"],
//     project_deadline: "1 week",
//     work_type: "Remote",
//     price: "$300",
//     connects: "5",
//     level: "Beginner",
//   },
//   {
//     domain: "SEO Optimization",
//     title: "SEO Optimization for Blog",
//     description:
//       "Optimize a blog for search engines to improve visibility and ranking on Google. Tasks include keyword research, meta tag optimization, backlink building, and writing SEO-friendly content. The goal is to increase organic traffic and improve user engagement.",
//     skills: ["SEO", "Google Analytics", "Content Marketing"],
//     project_deadline: "2 weeks",
//     work_type: "Remote",
//     price: "$500",
//     connects: "8",
//     level: "Advanced",
//   },
//   {
//     domain: "Content Writing",
//     title: "Technical Blog Writing",
//     description:
//       "Write detailed and engaging technical blog posts for a cloud computing platform. The topics will cover cloud infrastructure, deployment strategies, and the benefits of serverless architectures. The writing must be accurate, informative, and appeal to tech-savvy readers.",
//     skills: ["Content Writing", "Cloud Computing", "Technical Writing"],
//     project_deadline: "10 days",
//     work_type: "Remote",
//     price: "$200",
//     connects: "3",
//     level: "Intermediate",
//   },
//   {
//     domain: "Mobile App Development",
//     title: "Cross-Platform App Development",
//     description:
//       "Build a user-friendly cross-platform mobile application using Flutter for a food delivery startup. Key features include real-time order tracking, push notifications, an intuitive UI, and secure payment integration. The app must be scalable and well-documented for future enhancements.",
//     skills: ["Flutter", "Dart", "Firebase"],
//     project_deadline: "1 month",
//     work_type: "Hybrid",
//     price: "$1500",
//     connects: "20",
//     level: "Advanced",
//   },
//   {
//     domain: "Video Editing",
//     title: "Promotional Video Editing",
//     description:
//       "Edit a high-quality 2-minute promotional video for a product launch. This includes adding transitions, animations, background music, and color grading to create an engaging final product. The video should effectively communicate the product's value and features.",
//     skills: ["Adobe Premiere Pro", "After Effects", "Video Editing"],
//     project_deadline: "5 days",
//     work_type: "Remote",
//     price: "$350",
//     connects: "6",
//     level: "Beginner",
//   },
// ];
