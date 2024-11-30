import { useNavigate } from "react-router-dom";

const CommunityCard = ({ community }) => {
  const navigate = useNavigate();
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <img
        src={community.channel_photo}
        alt={community.channel_name}
        className="w-full h-40 object-cover rounded-md mb-4"
      />
      <h3 className="text-xl font-bold">{community.channel_name}</h3>
      <p className="text-gray-400 text-sm mt-2">{community.description}</p>
      <p className="text-gray-300 text-xs mt-2">
        Category: {community.channel_category}
      </p>
      <p>Members Count : {community.members_count}</p>
      <button
        onClick={() => navigate(`/channel/${community.channel_id}`)}
        className="mt-4 bg-blue-600 hover:bg-blue-500 text-white py-2 px-4 rounded"
      >
        View More
      </button>
    </div>
  );
};

export default CommunityCard;
