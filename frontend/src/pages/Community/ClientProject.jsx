import { useState } from "react";
import { motion } from "framer-motion";

const gigData = [
  {
    id: 1,
    image: "https://via.placeholder.com/150",
    title: "Logo Design",
    category: "Graphic Design",
    level: "Beginner",
    price: 50,
    description: "Create a professional logo for your brand.",
  },
  {
    id: 2,
    image: "https://via.placeholder.com/150",
    title: "Website Development",
    category: "Web Development",
    level: "Intermediate",
    price: 300,
    description: "Build a responsive and modern website.",
  },
  {
    id: 3,
    image: "https://via.placeholder.com/150",
    title: "SEO Optimization",
    category: "Digital Marketing",
    level: "Advanced",
    price: 500,
    description: "Optimize your website for better search rankings.",
  },
  // Add more gigs here
];

const GigCard = ({ image, title, category, level, price, description }) => (
  <motion.div
    className="bg-gray-800 p-6 rounded-lg shadow-lg text-gray-200 hover:bg-gray-700 transition-transform duration-75 cursor-pointer"
    whileHover={{ scale: 1.02 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <img
      src={image}
      alt={title}
      className="rounded-md mb-4 w-full h-40 object-cover"
    />
    <h3 className="text-lg font-bold mb-2">{title}</h3>
    <p className="text-sm text-gray-400 mb-4">{description}</p>
    <div className="text-sm text-gray-300 space-y-1">
      <p>
        <strong>Category:</strong> {category}
      </p>
      <p>
        <strong>Level:</strong> {level}
      </p>
      <p>
        <strong>Price:</strong> ${price}
      </p>
    </div>
    <button className="text-sm text-white bg-gradient-to-t from-violet-500 to-fuchsia-500 px-4 py-2 rounded-md hover:bg-gradient-to-b mt-4">
      View Details
    </button>
  </motion.div>
);

export default function FreelancerServices() {
  const [selectedLevel, setSelectedLevel] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [priceRange, setPriceRange] = useState("");

  const filteredGigs = gigData
    .filter((gig) =>
      selectedLevel === "" ? true : gig.level === selectedLevel
    )
    .filter((gig) =>
      selectedCategory === "" ? true : gig.category === selectedCategory
    )
    .filter((gig) => {
      if (priceRange === "Less than $100") return gig.price < 100;
      if (priceRange === "$100 - $500")
        return gig.price >= 100 && gig.price <= 500;
      if (priceRange === "$500+") return gig.price > 500;
      return true;
    });

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-gray-900 to-gray-700 text-white py-12 px-6">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
          Explore Freelancer Services
        </h1>
        <p className="text-gray-300 mt-4 max-w-lg mx-auto">
          Discover the perfect service for your business needs from our talented
          freelancers.
        </p>
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
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          <option value="Graphic Design">Graphic Design</option>
          <option value="Web Development">Web Development</option>
          <option value="Digital Marketing">Digital Marketing</option>
        </select>
        <select
          className="bg-gray-800 text-gray-300 p-2 rounded-md"
          value={priceRange}
          onChange={(e) => setPriceRange(e.target.value)}
        >
          <option value="">All Prices</option>
          <option value="Less than $100">Less than $100</option>
          <option value="$100 - $500">$100 - $500</option>
          <option value="$500+">$500+</option>
        </select>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {filteredGigs.map((gig) => (
          <GigCard key={gig.id} {...gig} />
        ))}
      </div>
    </div>
  );
}
