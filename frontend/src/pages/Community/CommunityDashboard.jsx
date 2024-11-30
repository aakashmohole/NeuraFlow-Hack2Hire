import CommunityCard from "../../components/custom/community/CommunityCard";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getChannels } from "../../api/commnityApi";
import { logout } from "../../redux/features/authSlice";
import { useDispatch } from "react-redux";

const SkeletonLoader = () => {
  return (
    <div className="w-full p-4 bg-gray-800 rounded-lg animate-pulse">
      <div className="h-40 bg-gray-700 rounded-lg mb-4"></div>
      <div className="h-4 bg-gray-700 rounded mb-2"></div>
      <div className="h-4 bg-gray-700 rounded mb-2"></div>
      <div className="h-4 bg-gray-700 rounded mb-2 w-3/4"></div>
    </div>
  );
};

const Loader = () => {
  return (
    <div className="w-full min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-6">Your Communities</h1>
      <div className="flex overflow-x-auto space-x-6 pb-4">
        {Array.from({ length: 3 }).map((_, index) => (
          <SkeletonLoader key={index} />
        ))}
      </div>
    </div>
  );
};

const CommunityDashboard = () => {
  const [loading, setLoading] = useState(false);
  const [userCommunities, setUserCommunities] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    const getCreatedChannel = async () => {
      const { data, error } = await getChannels(setLoading);
      if (data) {
        setUserCommunities(data);
      }

      if (error) {
        if (
          error === "An error occurred: Authorization header or token missing"
        ) {
          dispatch(logout());
        }
      }
    };
    getCreatedChannel();
  }, []);

  console.log(userCommunities);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="w-full min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-6">Your Communities</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {userCommunities && userCommunities.length > 0 ? (
          userCommunities.map((community) => (
            <CommunityCard key={community.channel_id} community={community} />
          ))
        ) : (
          <div>
            <h2>You dont have any community</h2>
            <Link
              to="/create-channel"
              className="text-blue-300 hover:text-blue-400"
            >
              Create One{" "}
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default CommunityDashboard;
