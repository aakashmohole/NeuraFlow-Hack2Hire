import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Header from "../../components/custom/Header";
import ClientProjectCard from "../../components/custom/Client/Card";
import { getClientProject } from "../../api/projectApi";
import LoadingSkeleton from "../../components/custom/LoadingSkeleton";

export default function ClientDashboard() {
  const [search, setSearch] = useState("");

  const [projectData, setProjectData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const { data } = await getClientProject(setLoading);
      if (data && data[0]) {
        setProjectData(data[0]);
      }
    } catch (error) {
      console.error("Failed to fetch projects:", error);
    }
  };

  const filteredProjects = projectData?.filter((project) => {
    if (search) {
      return (
        project.title.toLowerCase().includes(search.toLowerCase()) ||
        project.skills.some((skill) =>
          skill.toLowerCase().includes(search.toLowerCase())
        )
      );
    }
    return true;
  });

  if (loading) {
    return <LoadingSkeleton />;
  }

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
            Explore You Projects
          </motion.h1>
          <p className="text-gray-300 mt-4 max-w-lg mx-auto">
            Browse the projects you have created
          </p>
          <input
            type="text"
            className="bg-gray-800 my-4 rounded-md px-4 py-2 w-full max-w-md mx-auto"
            placeholder="Search for projects..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="w-full flex flex-col justify-center items-center">
            <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
              {filteredProjects.map((project) => (
                <ClientProjectCard key={project.project_id} {...project} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
