import { motion } from "framer-motion";
import { useState } from "react";
import Header from "../components/custom/Header";

const projectData = [
  {
    id: 1,
    title: "UI Design Project",
    category: "Recommended",
    budget: "$500",
    description: "Design a modern UI for an e-commerce app.",
  },
  {
    id: 2,
    title: "UI Design Project",
    category: "Recommended",
    budget: "$500",
    description: "Design a modern UI for an e-commerce app.",
  },
  {
    id: 2,
    title: "Full-Stack Development",
    category: "Recent",
    budget: "$1200",
    description: "Build a full-stack solution for a SaaS platform.",
  },
  {
    id: 3,
    title: "Logo Design",
    category: "Saved",
    budget: "$150",
    description: "Create a logo for a tech startup.",
  },
  // Add more projects as needed
];

const ProjectCard = ({ title, budget, description }) => (
  <motion.div
    className="bg-gray-800 p-6 rounded-lg shadow-lg text-gray-200 hover:bg-gray-700 transition duration-200"
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <h3 className="text-xl font-bold">{title}</h3>
    <p className="text-sm text-gray-400 my-2">{description}</p>
    <div className="flex justify-between items-center">
      <span className="text-blue-400 font-semibold">{budget}</span>
      <button className="text-sm text-white bg-blue-600 px-3 py-1 rounded-md hover:bg-blue-500">
        View Details
      </button>
    </div>
  </motion.div>
);

const ProjectSection = ({ title, projects }) => (
  <section>
    <motion.h2
      className="text-2xl font-bold text-blue-400 mb-4"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {title}
    </motion.h2>
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard key={project.id} {...project} />
      ))}
    </div>
  </section>
);

export default function ExploreProjects() {
  const [selectedTab, setSelectedTab] = useState("Recommended");

  const filteredProjects = projectData.filter(
    (project) => project.category === selectedTab
  );

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-slate-900 text-white py-12 px-6">
        {/* Page Header */}
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
          <div>
            <input
              type="text"
              className="bg-gray-800 my-4 rounded-md px-4 py-2"
              placeholder="Search for projects..."
            />
          </div>
        </div>

        {/* Tab Selection */}
        <div className="flex justify-center space-x-8 mb-8">
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

        {/* Project Sections */}
        <div className="max-w-7xl mx-auto">
          <ProjectSection title={selectedTab} projects={filteredProjects} />
        </div>
      </div>
    </>
  );
}
