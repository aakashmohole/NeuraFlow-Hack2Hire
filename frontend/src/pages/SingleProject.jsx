import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../components/custom/Header";
import SingleProjectCard from "../components/custom/Explore/SingleProjectCard";
import { getProjectById } from "../api/projectApi";
import PageLoader from "../components/custom/PageLoader";
import { applyToProject } from "../api/projectApi";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function SingleProject() {
  const [project, setProject] = useState();

  const { id } = useParams();

  const [formData, setFormData] = useState({
    cover_letter: "",
    time_to_complete: "",
  });
  const [loading, setLoading] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(null);
  const [remainingConnect, setRemainingConnect] = useState(null);
  const [isSufficentConnect, setIsSufficientConnect] = useState(true);
  const [formSubmissionLoading, setFormSubmissionLoading] = useState(false);
  const [userDetails, setUserDetails] = useState();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const { data, error } = await applyToProject(
      setFormSubmissionLoading,
      formData,
      id
    );

    if (data) {
      setSubmissionStatus("success");
      console.log(data);
    }

    if (error) {
      toast.error(error);
    }

    setFormData({ cover_letter: "", time_to_complete: "" });
  };

  useEffect(() => {
    const getSingleProject = async () => {
      const { data, error } = await getProjectById(setLoading, id);

      if (data) {
        setProject(data.project_details[0]);
        setUserDetails(data.user_details[0]);
      }

      if (error) {
        toast.error(error);
        console.error(error);
      }
    };

    getSingleProject();
  }, []);

  useEffect(() => {
    const calculateConnect = (connect) => {
      if (!connect || !project) return;
      const con = connect - project.connects;
      if (con < 0) {
        setIsSufficientConnect(false);
        setRemainingConnect(0);
      } else {
        setIsSufficientConnect(true);
        setRemainingConnect(con);
      }
    };

    calculateConnect(userDetails?.connects);
  }, [project]);

  if (loading) {
    return <PageLoader />;
  }

  if (!project) {
    return (
      <div className="h-screen text-center text-white py-20 bg-slate-950">
        <h1 className="text-4xl font-bold">Project Not Found</h1>
        <p className="mt-4 text-gray-400">
          The project you are looking for does not exist.
        </p>
      </div>
    );
  }

  // console.log(project);
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-purple-950 to-slate-950 text-white py-12 px-6 flex flex-col justify-between items-center">
        <SingleProjectCard project={project} user={userDetails} />
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-10 w-full max-w-4xl mt-5">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">
            Connect Balance
          </h2>
          <p className="text-lg">
            <strong>Available Connects:</strong>{" "}
            <span className="text-green-400">{userDetails?.connects}</span>
          </p>

          {isSufficentConnect && (
            <p className="mt-4 text-gray-500">
              When you submit this proposal, you'll have{" "}
              <strong className="text-white">{remainingConnect}</strong>{" "}
              remaining.
            </p>
          )}

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
                htmlFor="cover_letter"
              >
                Cover Letter
              </label>
              <textarea
                id="cover_letter"
                name="cover_letter"
                value={formData.cover_letter}
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
                id="time_to_complete"
                name="time_to_complete"
                value={formData.time_to_complete}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="" disabled>
                  Select time duration
                </option>
                <option value="1 day">1 day</option>
                <option value="2-3 days">2-3 days</option>
                <option value="Less than a week">Less than a week</option>
                <option value="2-4 weeks">2-4 weeks</option>
                <option value="1-2 month">1-2 months</option>
                <option value="2-4 months">2-4 months</option>
                <option value="More than 4 months">More than 4 months</option>
              </select>

              <p className="text-xs text-gray-400 mt-2">
                Choose the time you think you’ll need to complete the project.
              </p>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 disabled:bg-gray-800 disabled:cursor-not-allowed"
              disabled={!isSufficentConnect}
            >
              {formSubmissionLoading ? (
                <div className="w-7 h-7 rounded-full mx-auto loader"></div>
              ) : (
                "Submit Application"
              )}
            </button>
          </form>
          {submissionStatus === "success" && (
            <p className="mt-6 text-center text-green-500">
              Your application has been submitted successfully!
            </p>
          )}
        </div>
      </div>
      <ToastContainer />
    </>
  );
}
