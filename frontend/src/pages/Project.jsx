import { motion } from "framer-motion";
import { useState } from "react";
import Header from "../components/custom/Header";
import ProjectCard from "../components/custom/Explore/Card";

const projectData = [
  {
    id: 1,
    title: "UI Design Project",
    category: "Recommended",
    budget: 500,
    description:
      "This project involves designing a visually appealing and highly responsive user interface for an innovative e-commerce application. The goal is to create a seamless and engaging shopping experience for users with features such as personalized product recommendations, smooth navigation, and a modern, clean look that aligns with the latest design trends. Special attention should be paid to mobile responsiveness and intuitive layouts to enhance user retention and conversion rates.",
    country: "USA",
    level: "Intermediate",
    estimatedTime: "1 month",
    requiredSkills: ["UI Design", "Figma", "Adobe XD", "Responsive Design"],
  },
  {
    id: 2,
    title: "Full-Stack Development",
    category: "Recent",
    budget: 1200,
    description:
      "Develop a full-stack solution for a scalable SaaS platform designed to assist small businesses in automating their customer service operations. The project requires building a robust backend system for data storage, a secure user authentication flow, and a dynamic front-end interface. Key features include an integrated analytics dashboard, a role-based user management system, and API integrations for real-time data updates. This project emphasizes both backend efficiency and frontend responsiveness.",
    country: "India",
    level: "Advanced",
    estimatedTime: "2-3 months",
    requiredSkills: ["React", "Node.js", "MongoDB", "REST APIs"],
  },
  {
    id: 3,
    title: "Logo Design",
    category: "Saved",
    budget: 150,
    description:
      "Create a professional and memorable logo for a tech startup specializing in AI-driven solutions for environmental sustainability. The logo should embody innovation, trust, and eco-friendliness while maintaining a clean and modern aesthetic. Consider exploring geometric shapes, gradient shading, or nature-inspired motifs. The ideal outcome would be a scalable logo that can be used across digital platforms, including web, mobile, and print media.",
    country: "UK",
    level: "Beginner",
    estimatedTime: "2 weeks",
    requiredSkills: [
      "Graphic Design",
      "Adobe Illustrator",
      "Creativity",
      "Branding",
    ],
  },
  {
    id: 4,
    title: "Graphic design",
    category: "Recommended",
    budget: 3000,
    description:
      "This project involves designing a visually appealing and highly responsive user interface for an innovative e-commerce application. The goal is to create a seamless and engaging shopping experience for users with features such as personalized product recommendations, smooth navigation, and a modern, clean look that aligns with the latest design trends. Special attention should be paid to mobile responsiveness and intuitive layouts to enhance user retention and conversion rates.",
    country: "India",
    level: "Intermediate",
    estimatedTime: "1 month",
    requiredSkills: ["UI Design", "Figma", "Adobe XD", "Responsive Design"],
  },
  {
    id: 5,
    title: "Web page design",
    category: "Recommended",
    budget: 50,
    description:
      "This project involves designing a visually appealing and highly responsive user interface for an innovative e-commerce application. The goal is to create a seamless and engaging shopping experience for users with features such as personalized product recommendations, smooth navigation, and a modern, clean look that aligns with the latest design trends. Special attention should be paid to mobile responsiveness and intuitive layouts to enhance user retention and conversion rates.",
    country: "UK",
    level: "Intermediate",
    estimatedTime: "1 month",
    requiredSkills: ["Html", "css", "Javascript", "Responsive Design"],
  },
  // Add more projects as needed
];

const ProjectSection = ({ title, projects }) => (
  <div className="w-full flex flex-col justify-center items-center">
    <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard key={project.id} {...project} />
      ))}
    </div>
  </div>
);

export default function ExploreProjects() {
  const [selectedTab, setSelectedTab] = useState("Recommended");
  const [search, setSearch] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [budget, setBudget] = useState("");

  const filteredProjects = projectData
    .filter((project) => project.category === selectedTab)
    .filter((project) => {
      if (search) {
        return (
          project.title.toLowerCase().includes(search.toLowerCase()) ||
          project.requiredSkills.some((skill) =>
            skill.toLowerCase().includes(search.toLowerCase())
          )
        );
      }
      return true;
    })

    .filter((project) => {
      if (budget === "Less than $500") return project.budget < 500;
      if (budget === "Between $100 to $500")
        return project.budget >= 100 && project.budget <= 500;
      if (budget === "$500+") return project.budget > 500;
      return true;
    })
    .filter((project) =>
      selectedLevel === "" ? true : project.level === selectedLevel
    )
    .filter((project) =>
      selectedCountry === "" ? true : project.country === selectedCountry
    );

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
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>
          <select
            className="bg-gray-800 text-gray-300 p-2 rounded-md"
            value={selectedCountry}
            onChange={(e) => setSelectedCountry(e.target.value)}
          >
            <option value="">All Countries</option>
            <option value="USA">USA</option>
            <option value="India">India</option>
            <option value="UK">UK</option>
            {/* Add more countries as needed */}
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
        </div>

        <div className="max-w-7xl mx-auto">
          <ProjectSection title={selectedTab} projects={filteredProjects} />
        </div>
      </div>
    </>
  );
}
