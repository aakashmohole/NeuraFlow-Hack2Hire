const Service = () => {
  return (
    <>
      <section className="px-8 py-20 lg:px-32 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-center">
        <h1 class="text-5xl font-extrabold mb-4 animate-fade-in">
          Welcome to Your Services
        </h1>
        <p class="text-lg text-gray-200 mb-10 animate-fade-in">
          Showcase your skills, set your hourly rates, create unique packages,
          and attract clients!
        </p>
        <button class="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg text-lg font-semibold animate-fade-in">
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
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:animation-className-name">
            <h3 className="text-xl font-semibold mb-2">
              1. Set Your Hourly Rate
            </h3>
            <p className="text-gray-400">
              Define your hourly rate for transparency and consistency with
              clients.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:animation-className-name">
            <h3 className="text-xl font-semibold mb-2">
              2. Create Service Packages
            </h3>
            <p className="text-gray-400">
              Set up different service packages (basic, standard, premium) to
              give clients options.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:animation-className-name">
            <h3 className="text-xl font-semibold mb-2">
              3. Add Project Highlights
            </h3>
            <p className="text-gray-400">
              Showcase your previous work to demonstrate your skills and style.
            </p>
          </div>
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
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold">Attract New Clients</h3>
            <p className="text-gray-400 mt-2">
              Create a professional display that brings clients directly to you.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold">Boost Your Credibility</h3>
            <p className="text-gray-400 mt-2">
              Establish trust by offering transparent services and pricing.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold">Organize Your Offerings</h3>
            <p className="text-gray-400 mt-2">
              Keep your services, packages, and rates organized in one place.
            </p>
          </div>
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
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg animate-slide-up">
            <h3 className="text-xl font-semibold">Skill Showcase</h3>
            <p className="text-gray-400 mt-2">
              List your main skills and areas of expertise.
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-lg animate-slide-up">
            <h3 className="text-xl font-semibold">Project Portfolio</h3>
            <p className="text-gray-400 mt-2">
              Highlight your best projects with descriptions, images, and links.
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-lg animate-slide-up">
            <h3 className="text-xl font-semibold">Custom Packages</h3>
            <p className="text-gray-400 mt-2">
              Define different packages that cater to varying client needs.
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-lg animate-slide-up">
            <h3 className="text-xl font-semibold">Pricing Tiers</h3>
            <p className="text-gray-400 mt-2">
              Offer competitive rates to attract clients with various budgets.
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-lg animate-slide-up">
            <h3 className="text-xl font-semibold">Client Testimonials</h3>
            <p className="text-gray-400 mt-2">
              Showcase positive feedback from past clients to build credibility.
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-lg animate-slide-up">
            <h3 className="text-xl font-semibold">Client Testimonials</h3>
            <p className="text-gray-400 mt-2">
              Showcase positive feedback from past clients to build credibility.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 lg:px-32 bg-slate-950 text-white">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-fuchsia-500">
            Visualize Your Progress
          </h2>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            Track your services, earnings, and success metrics with interactive
            charts.
          </p>
        </div>
        <div className="flex justify-center space-x-8">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:animation-className-name">
            <h3 className="text-xl font-semibold">Monthly Earnings</h3>
            <img
              src="https://via.placeholder.com/300x200"
              alt="Chart Image"
              className="rounded-lg"
            />
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:animation-className-name">
            <h3 className="text-xl font-semibold">Client Engagement</h3>
            <img
              src="https://via.placeholder.com/300x200"
              alt="Chart Image"
              className="rounded-lg"
            />
          </div>
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
