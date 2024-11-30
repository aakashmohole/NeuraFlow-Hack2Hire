import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { getAllServices } from "../../api/projectApi";
import Header from "../../components/custom/Header";
import { useNavigate } from "react-router-dom";
import LoadingSkeleton from "../../components/custom/LoadingSkeleton";

const GigCard = ({ photo, title, category, description, service_id }) => {
  const navigate = useNavigate();
  const handleClick = (service_id) => {
    navigate(`/client/${service_id}`);
  };

  return (
    <motion.div
      className="bg-gray-800 p-6 rounded-lg shadow-lg text-gray-200 hover:bg-gray-700 transition-transform duration-75 cursor-pointer"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <img
        src={photo}
        alt={title}
        className="rounded-md mb-4 w-full h-40 object-cover"
      />
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-sm text-gray-400 mb-4">{description}</p>
      <div className="text-sm text-gray-300 space-y-1">
        <p>
          <strong>Category:</strong> {category}
        </p>
      </div>
      <button
        className="text-sm text-white bg-gradient-to-t from-violet-500 to-fuchsia-500 px-4 py-2 rounded-md hover:bg-gradient-to-b mt-4"
        onClick={() => handleClick(service_id)}
      >
        View Details
      </button>
    </motion.div>
  );
};

export default function FreelancerServices() {
  const [loading, setLoading] = useState(false);
  const [service, setService] = useState([]);
  const [search, setSearch] = useState();

  useEffect(() => {
    const getServices = async () => {
      const { data, error } = await getAllServices(setLoading);

      if (data) {
        setService(data);
      }

      if (error) {
        console.error(error);
      }
    };

    getServices();
  }, []);

  const filteredGigs = service.filter((project) => {
    if (search) {
      return project.title.toLowerCase().includes(search.toLowerCase());
    }
    return true;
  });

  if (loading) {
    return <LoadingSkeleton />;
  }

  return (
    <>
      <Header />
      <div className="w-full min-h-screen bg-gradient-to-b from-blue-950 to-gray-900 text-white py-12 px-6">
        <div className="text-center mb-12 mt-20">
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
            Explore Freelancer Services
          </h1>
          <p className="text-gray-300 mt-4 max-w-lg mx-auto">
            Discover the perfect service for your business needs from our
            talented freelancers.
          </p>
          <input
            type="text"
            className="bg-gray-800 my-4 rounded-md px-4 py-2 w-full max-w-md mx-auto"
            placeholder="Search for services..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {filteredGigs.map((service) => (
            <GigCard key={service.service_id} {...service} />
          ))}
        </div>
      </div>
    </>
  );
}

//  <div className="flex justify-center space-x-4 mb-8">
//     <select
//           className="bg-gray-800 text-gray-300 p-2 rounded-md"
//           value={selectedLevel}
//           onChange={(e) => setSelectedLevel(e.target.value)}
//         >
//           <option value="">All Levels</option>
//           <option value="Beginner">Beginner</option>
//           <option value="Intermediate">Intermediate</option>
//           <option value="Advanced">Advanced</option>
//         </select>
//    <select
//      className="bg-gray-800 text-gray-300 p-2 rounded-md"
//      value={selectedCategory}
//      onChange={(e) => setSelectedCategory(e.target.value)}
//    >
//      <option value="">All Categories</option>
//      <option value="Graphic Design">Graphic Design</option>
//      <option value="Web Development">Web Development</option>
//      <option value="Digital Marketing">Digital Marketing</option>
//    </select>
//     <select
//           className="bg-gray-800 text-gray-300 p-2 rounded-md"
//           value={priceRange}
//           onChange={(e) => setPriceRange(e.target.value)}
//         >
//           <option value="">All Prices</option>
//           <option value="Less than $100">Less than $100</option>
//           <option value="$100 - $500">$100 - $500</option>
//           <option value="$500+">$500+</option>
//         </select>
//  </div>;
