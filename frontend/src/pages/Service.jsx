import ServiceCard from "../components/custom/Services/ServiceCard";

const Service = () => {
  const serviceData1 = [
    {
      id: 1,
      title: " 1. Set Your Hourly Rate",
      description:
        "Define your hourly rate for transparency and consistency with clients.",
    },
    {
      id: 2,
      title: " 2. Create Service Packages",
      description:
        "Set up different service packages (basic, standard, premium) to give clients options.",
    },
    {
      id: 3,
      title: "3. Add Project Highlights",
      description:
        "Showcase your previous work to demonstrate your skills and style.",
    },
  ];

  const serviceData2 = [
    {
      title: "Attract New Clients",
      description:
        "Create a professional display that brings clients directly to you.",
    },
    {
      title: "Boost Your Credibility",
      description:
        "Establish trust by offering transparent services and pricing.",
    },
    {
      title: "Organize Your Offerings",
      description:
        "Keep your services, packages, and rates organized in one place.",
    },
  ];

  const serviceData3 = [
    {
      title: "Skill Showcase",
      description: "List your main skills and areas of expertise.",
    },
    {
      title: "Project Portfolio",
      description:
        "Highlight your best projects with descriptions, images, and links.",
    },
    {
      title: "Custom Packages",
      description:
        " Define different packages that cater to varying client needs.",
    },
    {
      title: "Pricing Tiers",
      description:
        " Offer competitive rates to attract clients with various budgets.",
    },
    {
      title: "Client Testimonials",
      description:
        "Showcase positive feedback from past clients to build credibility.",
    },
    {
      title: "Client Testimonials",
      description:
        "Showcase positive feedback from past clients to build credibility.",
    },
  ];

  return (
    <>
      <section className="px-8 py-20 lg:px-32 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-center">
        <h1 class="text-5xl font-extrabold mb-4 animate-fade-in">
          Welcome to Your Services
        </h1>
        <p className="text-lg text-gray-200 mb-10 animate-fade-in">
          Showcase your skills, set your hourly rates, create unique packages,
          and attract clients!
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg text-lg font-semibold animate-fade-in">
          Let’s Get Started
        </button>
      </section>

      <section className="px-8 py-16 lg:px-32 bg-slate-950 text-white">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-fuchsia-500">
            How It Works
          </h2>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            Our Services module lets you create a comprehensive portfolio to
            showcase your expertise.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {serviceData1.map((data) => (
            <ServiceCard
              key={data.id}
              title={data.title}
              description={data.description}
            />
          ))}
        </div>
      </section>
      <section className="px-8 py-16 lg:px-32 bg-slate-950 text-white">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-fuchsia-500">
            Learn How to Use the Services Module
          </h2>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            Watch a step-by-step tutorial to get started quickly.
          </p>
        </div>
        <div className="flex justify-center">
          <video
            className="rounded-lg shadow-lg w-full md:w-3/4 lg:w-1/2"
            controls
          >
            <source src="path/to/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>
      <section className="px-8 py-16 lg:px-32 bg-slate-950 text-white  ">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-fuchsia-500">
            Why Use the Services Module?
          </h2>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            The Services module is designed to help freelancers showcase their
            offerings effectively. Here’s how it can help you stand out.
          </p>
        </div>
        <div className="flex flex-col md:flex-row md:space-x-8 space-y-6 md:space-y-0">
          {serviceData2.map((data, index) => (
            <ServiceCard
              title={data.title}
              description={data.description}
              key={index}
              className="bg-black"
            />
          ))}
        </div>
      </section>

      <section className="px-8 py-16 lg:px-32 bg-slate-950 text-white">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-fuchsia-500">
            What You Can Add
          </h2>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            Use these options to make your Services profile as detailed as
            possible.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceData3.map((data, index) => (
            <ServiceCard
              title={data.title}
              description={data.description}
              key={index}
            />
          ))}
        </div>
      </section>

      <section className="px-8 py-16 lg:px-32 bg-slate-950 text-white">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-fuchsia-500">
            Examples of Professional Profiles
          </h2>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            Explore profiles of freelancers showcasing their expertise and
            unique offerings.
          </p>
        </div>

        <div className="overflow-hidden">
          <div className="scrolling-container">
            <div className="profile-card bg-gray-800 p-6 rounded-lg shadow-lg">
              <img
                src="https://via.placeholder.com/100"
                alt="Freelancer 1"
                className="rounded-full w-24 h-24 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-center">
                Freelancer 1
              </h3>
              <p className="text-gray-400 text-center">
                Expert in Graphic Design
              </p>
            </div>

            <div className="profile-card bg-gray-800 p-6 rounded-lg shadow-lg">
              <img
                src="https://via.placeholder.com/100"
                alt="Freelancer 2"
                className="rounded-full w-24 h-24 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-center">
                Freelancer 2
              </h3>
              <p className="text-gray-400 text-center">Full-Stack Developer</p>
            </div>

            <div className="profile-card bg-gray-800 p-6 rounded-lg shadow-lg">
              <img
                src="https://via.placeholder.com/100"
                alt="Freelancer 3"
                className="rounded-full w-24 h-24 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-center">
                Freelancer 3
              </h3>
              <p className="text-gray-400 text-center">SEO Specialist</p>
            </div>

            <div className="profile-card bg-gray-800 p-6 rounded-lg shadow-lg">
              <img
                src="https://via.placeholder.com/100"
                alt="Freelancer 4"
                className="rounded-full w-24 h-24 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-center">
                Freelancer 4
              </h3>
              <p className="text-gray-400 text-center">Content Writer</p>
            </div>

            <div className="profile-card bg-gray-800 p-6 rounded-lg shadow-lg">
              <img
                src="https://via.placeholder.com/100"
                alt="Freelancer 1"
                className="rounded-full w-24 h-24 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-center">
                Freelancer 1
              </h3>
              <p className="text-gray-400 text-center">
                Expert in Graphic Design
              </p>
            </div>
            <div className="profile-card bg-gray-800 p-6 rounded-lg shadow-lg">
              <img
                src="https://via.placeholder.com/100"
                alt="Freelancer 2"
                className="rounded-full w-24 h-24 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-center">
                Freelancer 2
              </h3>
              <p className="text-gray-400 text-center">Full-Stack Developer</p>
            </div>
            <div className="profile-card bg-gray-800 p-6 rounded-lg shadow-lg">
              <img
                src="https://via.placeholder.com/100"
                alt="Freelancer 3"
                className="rounded-full w-24 h-24 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-center">
                Freelancer 3
              </h3>
              <p className="text-gray-400 text-center">SEO Specialist</p>
            </div>
            <div className="profile-card bg-gray-800 p-6 rounded-lg shadow-lg">
              <img
                src="https://via.placeholder.com/100"
                alt="Freelancer 4"
                className="rounded-full w-24 h-24 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-center">
                Freelancer 4
              </h3>
              <p className="text-gray-400 text-center">Content Writer</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
