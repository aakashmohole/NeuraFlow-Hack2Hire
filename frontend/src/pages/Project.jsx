import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Header from "../components/custom/Header";
import ProjectCard from "../components/custom/Explore/Card";
import { getProjects, getRecommendedProjects } from "../api/userApi";
import LoadingSkeleton from "../components/custom/LoadingSkeleton";

export default function ExploreProjects() {
  const [selectedTab, setSelectedTab] = useState("Recent");
  const [search, setSearch] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [budget, setBudget] = useState("");
  const [rateType, setRateType] = useState("");
  const [projectData, setProjectData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [savedProjects, setSavedProjects] = useState([]);

  useEffect(() => {
    if (selectedTab === "Recent") {
      fetchProjects();
    } else if (selectedTab === "Saved") {
      const saved = projectData.filter((project) =>
        savedProjects.includes(project.project_id)
      );
      setProjectData(saved);
    } else if (selectedTab === "Recommended") {
      getRecommendProject();
    }
  }, [selectedTab, savedProjects]);

  const toggleSavedProject = (projectId) => {
    setSavedProjects((prevSaved) => {
      const updatedSaved = prevSaved.includes(projectId)
        ? prevSaved.filter((id) => id !== projectId)
        : [...prevSaved, projectId];
      console.log("Updated saved projects:", updatedSaved);
      return updatedSaved;
    });
  };

  const fetchProjects = async () => {
    try {
      const { data } = await getProjects(setLoading);
      if (data && data[0]) {
        setProjectData(data[0]);
      }
    } catch (error) {
      console.error("Failed to fetch projects:", error);
    }
  };

  const getRecommendProject = async () => {
    const { data, error } = await getRecommendedProjects(setLoading);

    if (data) {
      console.log(data.recommendations);
      // setProjectData(data.recommendations);
    }
  };

  // console.log(projectData);

  const filteredProjects = projectData
    ?.filter((project) => {
      if (
        selectedTab === "Saved" &&
        !savedProjects.includes(project.project_id)
      ) {
        return false;
      }
      return true;
    })
    .filter((project) => {
      if (search) {
        return (
          project.title.toLowerCase().includes(search.toLowerCase()) ||
          project.skills.some((skill) =>
            skill.toLowerCase().includes(search.toLowerCase())
          )
        );
      }
      return true;
    })
    .filter((project) => {
      if (budget === "Less than $500") return project?.price < 500;
      if (budget === "Between $100 to $500")
        return project?.price >= 100 && project?.price <= 500;
      if (budget === "$500+") return project?.price > 500;
      return true;
    })
    .filter((project) =>
      selectedLevel === "" ? true : project?.level === selectedLevel
    )
    .filter((project) =>
      rateType === "" ? true : project.work_type === rateType
    );

  if (loading) {
    return <LoadingSkeleton />;
  }

  console.log(projectData);

  return (
    <>
      <Header />
      <div className="w-full min-h-screen bg-gradient-to-b from-purple-950 to-slate-950 text-white py-12 px-6">
        <div className="text-center mb-12 mt-20">
          <motion.h1
            className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Discover Your Next Project
          </motion.h1>
          <p className="text-gray-300 mt-4 max-w-lg mx-auto">
            Browse curated projects and find the perfect match to elevate your
            freelancing journey.
          </p>
          <input
            type="text"
            className="bg-gray-800 my-4 rounded-md px-4 py-2 w-full max-w-md mx-auto"
            placeholder="Search for projects..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="flex justify-center space-x-8 mb-4">
          {["Recommended", "Recent", "Saved"].map((tab) => (
            <button
              key={tab}
              onClick={() => setSelectedTab(tab)}
              className={`px-4 py-2 rounded-lg font-semibold ${
                selectedTab === tab
                  ? "bg-blue-600 text-white"
                  : "bg-slate-700 text-gray-300"
              } hover:bg-blue-500 transition duration-150`}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="flex justify-center space-x-4 mb-8">
          <select
            className="bg-gray-800 text-gray-300 p-2 rounded-md"
            value={selectedLevel}
            onChange={(e) => setSelectedLevel(e.target.value)}
          >
            <option value="">All Levels</option>
            <option value="Begineer">Begineer</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>

          <select
            className="bg-gray-800 text-gray-300 p-2 rounded-md"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
          >
            <option value="All">All Budgets</option>
            <option value="Less than $500">Less than $100</option>
            <option value="Between $100 to $500">$100 to $500</option>
            <option value="$500+">$500+</option>
            {/* Add more countries as needed */}
          </select>
          <select
            className="bg-gray-800 text-gray-300 p-2 rounded-md"
            value={rateType}
            onChange={(e) => setRateType(e.target.value)}
          >
            <option value="">Both</option>
            <option value="Fixed Rate">Fixed Rate</option>
            <option value="Hourly Rate">Hourly Rate</option>
            {/* Add more countries as needed */}
          </select>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="w-full flex flex-col justify-center items-center">
            <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
              {filteredProjects.map((project) => (
                <ProjectCard
                  key={project.project_id}
                  {...project}
                  toggleSave={() => toggleSavedProject(project.project_id)}
                  isSaved={savedProjects.includes(project.project_id)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
