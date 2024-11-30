import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../../components/custom/Header";
import SingleProjectCard from "../../components/custom/Explore/SingleProjectCard";
import { getProjectById } from "../../api/projectApi";
import PageLoader from "../../components/custom/PageLoader";

export default function SingleProject() {
  const userConnects = 200;
  const [project, setProject] = useState();

  const { id } = useParams();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getSingleProject = async () => {
      const { data, error } = await getProjectById(setLoading, id);

      if (data) {
        console.log(data.project_details[0]);
        setProject(data.project_details[0]);
      }

      if (error) {
        console.error(error);
      }
    };

    getSingleProject();
  }, []);

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

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-purple-950 to-slate-950 text-white py-12 px-6 flex flex-col justify-between items-center">
        <SingleProjectCard project={project} />
      </div>
    </>
  );
}
