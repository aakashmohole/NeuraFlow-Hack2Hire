import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../components/custom/Header";
import SingleProjectCard from "../components/custom/Explore/SingleProjectCard";

const projectData = [
  {
    id: 1,
    title: "Build a Freelancing Platform",
    description:
      "This project involves designing a visually appealing and highly responsive user interface for an innovative e-commerce application. The goal is to create a seamless and engaging shopping experience for users with features such as personalized product recommendations, smooth navigation, and a modern, clean look that aligns with the latest design trends. Special attention should be paid to mobile responsiveness and intuitive layouts to enhance user retention and conversion rates.",
    country: "USA",
    level: "Intermediate",
    estimatedTime: "2 months",
    requiredSkills: ["React", "Node.js", "Machine Learning"],
    budget: 3000,
    postedBy: "John Doe",
    posetdAt: "01-11-2024",
    appliedFreelancers: 15,
    connectsRequired: 15,
  },
  // Add more projects as needed
];

export default function SingleProject() {
  const userConnects = 10;
  const { id } = useParams();
  const project = projectData.find((proj) => proj.id === parseInt(id));

  const [formData, setFormData] = useState({
    coverLetter: "",
    estimatedTime: "",
  });

  const [submissionStatus, setSubmissionStatus] = useState(null);
  const [remainingConnect, setRemainingConnect] = useState(null);
  const [isSufficentConnect, setIsSufficientConnect] = useState(true);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Application Submitted:", formData);
    setSubmissionStatus("success");
    setFormData({ coverLetter: "", estimatedTime: "" });
  };

  useEffect(() => {
    const calculateConnect = (connect) => {
      if (!connect || !project) return;
      const con = connect - project.connectsRequired;
      if (con < 0) {
        setIsSufficientConnect(false);
        setRemainingConnect(0);
      } else {
        setIsSufficientConnect(true);
        setRemainingConnect(con);
      }
    };

    calculateConnect(userConnects);
  }, [project]);

  if (!project) {
    return (
      <div className="text-center text-white py-20">
        <h1 className="text-4xl font-bold">Project Not Found</h1>
        <p className="mt-4 text-gray-400">
          The project you are looking for does not exist.
        </p>
      </div>
    );
  }

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-purple-950 to-slate-950 text-white py-12 px-6 flex flex-col justify-between items-center">
        <SingleProjectCard project={project} />
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-10 w-full max-w-4xl mt-5">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">
            Connect Balance
          </h2>
          <p className="text-lg">
            <strong>Available Connects:</strong>{" "}
            <span className="text-green-400">{userConnects}</span>
          </p>

          <p className="mt-4 text-gray-500">
            When you submit this proposal, you'll have{" "}
            <strong className="text-white">{remainingConnect}</strong>{" "}
            remaining.
          </p>

          {!isSufficentConnect && (
            <p className="mt-4 text-red-500">
              Not enough connects to apply for this project!
            </p>
          )}
        </div>
        <div className="max-w-6xl w-full mx-auto mt-10 bg-gray-700 p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-blue-400 mb-6">
            Apply for this Project
          </h2>
          <form onSubmit={handleFormSubmit} className="space-y-6">
            {/* Cover Letter */}
            <div>
              <label
                className="block text-sm font-medium text-gray-300 mb-2"
                htmlFor="coverLetter"
              >
                Cover Letter
              </label>
              <textarea
                id="coverLetter"
                name="coverLetter"
                value={formData.coverLetter}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Write your cover letter"
                rows="5"
                required
              ></textarea>
              <p className="text-xs text-gray-400 mt-2">
                Highlight your skills and why you are the best fit for this
                project.
              </p>
            </div>

            {/* Estimated Time to Compl ete */}
            <div>
              <label
                className="block text-sm font-medium text-gray-300 mb-2"
                htmlFor="estimatedTime"
              >
                Estimated Time to Complete
              </label>
              <select
                id="estimatedTime"
                name="estimatedTime"
                value={formData.estimatedTime}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="" disabled>
                  Select time duration
                </option>
                <option value="1 day">1 day</option>
                <option value="2-3 days">2-3 days</option>
                <option value="1 week">1 week</option>
                <option value="2 weeks">2 weeks</option>
                <option value="1 month">1 month</option>
                <option value="More than 1 month">More than 1 month</option>
              </select>
              <p className="text-xs text-gray-400 mt-2">
                Choose the time you think you’ll need to complete the project.
              </p>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Submit Application
            </button>
          </form>
          {submissionStatus === "success" && (
            <p className="mt-6 text-center text-green-500">
              Your application has been submitted successfully!
            </p>
          )}
        </div>
      </div>
    </>
  );
}
