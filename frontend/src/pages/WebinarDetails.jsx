import { useParams } from "react-router-dom";
import SessionInfoCard from "../components/custom/Webinar/SessionInfoCard";

const WebinarDetails = () => {
  const { id } = useParams();

  const dummyData = [
    {
      id: 1,
      title: "Building Your Freelance Brand",
      description:
        "Learn how to establish a unique brand identity in the freelancing world and attract more clients with expert-led discussions and practical tips.",
      date: " March 8, 2024",
      videoUrl: "https://youtube.com/embed/YBXcQrMpMt8?si=TYLxXKXOIW7nneaU",
    },
    {
      id: 2,
      title: "Freelancing 101",
      description:
        "A beginner's guide to freelancing, covering essential skills, client management, and tips for a successful start in freelancing.",
      date: "February 14, 2024",
      videoUrl: "https://youtube.com/embed/S-kQqCPUc3Y?si=ZZPHy6IcML9k2x3Q",
    },
    {
      id: 3,
      title: "Managing Client Expectations",
      description:
        "Discover strategies for clear communication, handling feedback, and keeping clients satisfied throughout your projects",
      date: "April 5, 2024",
      videoUrl: "https://youtube.com/embed/FdRxcltJWDo?si=qIfsFh3Pq55UBfnb",
    },
    {
      id: 4,
      title: "Networking for Freelancers",
      description:
        "Best practices for building professional networks, leveraging social media, and connecting with clients and collaborators.",
      date: "December 18, 2023",
      videoUrl: "https://youtube.com/embed/QQzD95tKsu8?si=J4WcsMlTfdINks7x",
    },
    {
      id: 5,
      title: "Pricing Your Services",
      description:
        "A detailed session on pricing strategies, setting fair rates, and negotiating with clients to maximize your freelance income.",
      date: "November 10, 2024",
      videoUrl: "https://youtube.com/embed/Ut1vMfgfS_4?si=z89zZdlIv0FQhDl7",
    },
    {
      id: 6,
      title: "Contracts & Agreements",
      description:
        "Understand how to draft, negotiate, and secure effective freelance contracts to protect your work and business.",
      date: "October 7, 2024",
      videoUrl: "https://youtube.com/embed/QTeokgrR--o?si=9E05lGav8Eei_qYQ",
    },
  ];

  return (
    <div class="container mx-auto p-6 bg-slate-950 text-white">
      <h1 class="text-4xl font-bold text-center text-gray-200 mb-6">
        {dummyData[id - 1].title}
      </h1>
      <p class="text-center text-gray-400 mb-4">
        Recorded on {dummyData[id - 1].date}
      </p>

      <div class="w-full px-40 py-10">
        <iframe
          width="100%"
          height="480"
          src={dummyData[id - 1].videoUrl}
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <SessionInfoCard description={dummyData[id - 1].description} />
    </div>
  );
};

export default WebinarDetails;
