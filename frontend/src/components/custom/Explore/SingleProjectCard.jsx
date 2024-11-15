import {
  FaGlobe,
  FaClock,
  FaTools,
  FaUser,
  FaCalendar,
  FaLink,
} from "react-icons/fa";

const SingleProjectCard = ({ project }) => {
  return (
    <div className="max-w-4xl mx-auto bg-gray-800 p-8 rounded-lg shadow-lg mt-10">
      <h1 className="text-4xl font-bold text-blue-400">{project.title}</h1>
      <p className="mt-4 text-gray-300">{project.description}</p>
      <div className="flex flex-wrap gap-4 my-6">
        {project.requiredSkills.map((skill, index) => (
          <span
            key={index}
            className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold"
          >
            {skill}
          </span>
        ))}
      </div>
      <div className="text-gray-300 space-y-4">
        <p>
          <FaUser className="inline-block mr-2 text-green-500" />
          <strong>Created By:</strong> {project.postedBy}
        </p>
        <p>
          <FaCalendar className="inline-block mr-2 text-yellow-500" />
          <strong>Created Date:</strong>{" "}
          {new Date(project.posetdAt).toLocaleDateString()}
        </p>
        <p>
          <FaGlobe className="inline-block mr-2 text-blue-500" />
          <strong>Country:</strong> {project.country}
        </p>
        <p>
          <FaClock className="inline-block mr-2 text-yellow-500" />
          <strong>Estimated Time:</strong> {project.estimatedTime}
        </p>
        <p>
          <FaTools className="inline-block mr-2 text-green-500" />
          <strong>Level:</strong> {project.level}
        </p>
        <p>
          <FaLink className="inline-block mr-2 text-red-500" />
          <strong>Connects Required:</strong> {project.connectsRequired}
        </p>
        <p>
          <strong>Budget:</strong> ${project.budget}
        </p>
        <p>
          <strong>Applied Freelancers:</strong> {project.appliedFreelancers}
        </p>
      </div>
    </div>
  );
};

export default SingleProjectCard;
