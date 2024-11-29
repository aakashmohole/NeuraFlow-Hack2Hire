import { motion } from "framer-motion";

import {
  FaGlobe,
  FaClock,
  FaTools,
  FaBookmark,
  FaRegBookmark,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ProjectCard = ({
  project_id,
  title,
  price,
  description,
  level,
  project_deadline,
  skills,
  isSaved,
  toggleSave,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/project/${project_id}`);
  };

  return (
    <>
      <motion.div
        className="bg-gray-800 p-8 rounded-lg shadow-lg text-gray-200 hover:bg-gray-700 w-full max-w-sm  transition-transform duration-75"
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-sm text-gray-400 mb-4 line-clamp-3 truncate-multiline">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 my-4">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-semibold"
            >
              {skill}
            </span>
          ))}
        </div>
        <div className="text-sm text-gray-300 space-y-1">
          {/* <div className="flex items-center space-x-2 text-gray-400">
            <FaGlobe className="text-violet-200" />
            <span>Country: {country}</span>
          </div> */}
          <div className="flex items-center space-x-2 text-gray-400">
            <FaTools className="text-violet-200" />
            <span>Level: {level || "2"}</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-400">
            <FaClock className="text-violet-200" />
            <span>Estimated Time: {project_deadline}</span>
          </div>
        </div>
        <div className="flex justify-between items-center mt-4">
          <span className="text-blue-400 font-semibold">${price}</span>
          <div className="flex justify-between items-center gap-6">
            {isSaved ? (
              <FaBookmark className="cursor-pointer" onClick={toggleSave} />
            ) : (
              <FaRegBookmark className="cursor-pointer" onClick={toggleSave} />
            )}

            <button
              className="text-sm text-white bg-gradient-to-t from-violet-500 to-fuchsia-500 px-4 py-2 rounded-md hover:bg-gradient-to-b"
              onClick={handleClick}
            >
              Apply Now
            </button>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default ProjectCard;
