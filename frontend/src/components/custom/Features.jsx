import { HoverEffect } from "../ui/HoverEffect";
import { BackgroundBeamsWithCollision } from "../ui/BackgroundBeam";

export function Features() {
  return (
    <>
<<<<<<< HEAD
      <BackgroundBeamsWithCollision>
        <div className="w-full h-screen flex flex-col justify-center items-center bg-transparent z-10">
          <h2 className="text-white my-16 font-bold text-5xl bg-blue-500 p-2 rounded-md -mb-2">
=======
      <BackgroundBeamsWithCollision className="h-full">
        <div className="w-full h-auto md:h-screen flex flex-col justify-between md:justify-center items-center bg-transparent">
          <h2 className="text-white font-bold text-5xl bg-blue-500 p-2 rounded-md -mb-2">
>>>>>>> 224b4b7b1b26f33d81c01ca0c5b026cc43010329
            Features
          </h2>
          <HoverEffect items={projects} className="max-w-5xl mx-auto" />
        </div>
      </BackgroundBeamsWithCollision>
    </>
  );
}
export const projects = [
  {
    title: "Smart AI Matching",
    description:
      "Advanced machine learning algorithms that accurately match clients with freelancers based on skills, experience, and project needs.",
  },
  {
    title: "Customizable Project Listings",
    description:
      "Clients can define specific project requirements, helping them connect with freelancers who are the best fit for their unique needs.",
  },
  {
    title: "Community & Forum",
    description: "Interactive community and forum sections for discussions",
  },
  {
    title: "Flexible Hiring Options",
    description:
      "Clients can choose between hourly rates, fixed-price contracts, or milestone-based payments, offering flexibility to fit different project scopes and budgets.",
  },
  {
    title: "Insightful Performance Analytics",
    description:
      "Data-driven insights for freelancers, helping them improve their services and track their growth, and for clients to monitor project progress effectively.",
  },
  {
    title: "Portfolio Showcases",
    description:
      "Verified credentials and comprehensive portfolios to give clients confidence in the expertise of freelancers they hire.",
  },
];
