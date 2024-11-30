import WebinarCard from "../components/custom/Webinar/WebinarCard";

const Webinar = () => {
  const dummyData = [
    {
      id: 1,
      title: "Building Your Freelance Brand",
      description:
        "Learn how to establish a unique brand identity in the freelancing world and attract more clients with expert-led discussions and practical tips.",
      date: " March 8, 2024",
      image:
        "https://plus.unsplash.com/premium_photo-1661931917056-b85ea18f44e0?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      title: "Freelancing 101",
      description:
        "A beginner's guide to freelancing, covering essential skills, client management, and tips for a successful start in freelancing.",
      date: "February 14, 2024",
      image:
        "https://plus.unsplash.com/premium_photo-1663933534195-78b92aac2fa9?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      title: "Managing Client Expectations",
      description:
        "Discover strategies for clear communication, handling feedback, and keeping clients satisfied throughout your projects",
      date: "April 5, 2024",
      image:
        "https://plus.unsplash.com/premium_photo-1663933534712-fc5cffc627f4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      title: "MNetworking for Freelancers",
      description:
        "Best practices for building professional networks, leveraging social media, and connecting with clients and collaborators.",
      date: "December 18, 2023",
      image:
        "https://plus.unsplash.com/premium_photo-1661483130874-527d2f9e5746?q=80&w=1835&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 5,
      title: "Pricing Your Services",
      description:
        "A detailed session on pricing strategies, setting fair rates, and negotiating with clients to maximize your freelance income.",
      date: "November 10, 2024",
      image:
        "https://images.unsplash.com/photo-1637580681839-6e3ed197ca93?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 6,
      title: "Contracts & Agreements",
      description:
        "Understand how to draft, negotiate, and secure effective freelance contracts to protect your work and business.",
      date: "October 7, 2024",
      image:
        "https://images.unsplash.com/photo-1621763540919-1a0477861102?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <div className="bg-slate-950">
      <div class="container mx-auto p-6 bg-slate-950">
        <h1 class="text-4xl font-bold text-cente text-white mb-6 animate__animated animate__fadeInDown text-center">
          Webinar Recordings & Recaps
        </h1>
        <p class="text-center text-gray-400 mb-8 animate__animated animate__fadeInUp">
          Explore our library of past webinars, packed with insights and
          valuable takeaways for freelancers and professionals alike.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dummyData.map((data) => (
            <WebinarCard
              id={data.id}
              image={data.image}
              title={data.title}
              description={data.description}
              date={data.date}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Webinar;
