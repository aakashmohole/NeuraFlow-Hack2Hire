import { Link } from "react-router-dom";

const WebinarCard = ({ id, image, altText, title, description, date }) => {
  return (
    <div>
      <div class="bg-[#0f1726] p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow transform hover:-translate-y-1 animate__animated animate__fadeInUp">
        <img
          src={image}
          alt={altText}
          class="w-full h-48 rounded-t-lg object-cover mb-4"
        />
        <h2 class="text-2xl font-semibold text-white">{title}</h2>
        <p class="text-gray-100 mt-2">Recorded on: {date}</p>
        <p class="text-gray-200 mt-4">{description}</p>
        <Link
          to={`/webinar/${id}`}
          class="mt-4 inline-block bg-[#6264EB] text-white font-semibold py-2 px-4 rounded hover:bg-green-600 transition"
        >
          Watch Now
        </Link>
      </div>
    </div>
  );
};

export default WebinarCard;

//https://plus.unsplash.com/premium_photo-1661931917056-b85ea18f44e0?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
//Building Your Freelance Brand

//Learn how to establish a unique brand identity in the freelancing world and attract more clients with expert-led discussions and practical tips.
