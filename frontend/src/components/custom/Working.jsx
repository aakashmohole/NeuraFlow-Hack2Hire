import React from "react";
import { StickyScroll } from "../ui/StickyScroll";
import { TextRevealCard } from "../ui/TextReveal";
import { AnimatedText } from "../custom/AnimatedText";

const content = [
  {
    title: "Create a Profile",
    description:
      "Build a detailed profile to highlight your skills, experience, and past projects. An impressive profile helps you stand out, boosts your visibility on the platform, and provides clients with the information they need to determine if you’re the right fit for their project.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <img
          src="https://images.pexels.com/photos/16846884/pexels-photo-16846884/free-photo-of-woman-hands-on-laptop.jpeg?auto=compress&cs=tinysrgb&w=600"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Person creating an account on a platform"
        />
      </div>
    ),
  },
  {
    title: "Post a Project",
    description:
      "Describe your project goals, budget, and timeline to attract qualified freelancers. By detailing your specific requirements, our platform connects you with skilled professionals who can meet your needs, making it easier to kickstart your project with the right team.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <img
          src="https://images.pexels.com/photos/23496951/pexels-photo-23496951/free-photo-of-a-woman-in-glasses-is-working-on-her-laptop.jpeg?auto=compress&cs=tinysrgb&w=600"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="person posting something using laptop"
        />
      </div>
    ),
  },
  {
    title: "AI-Powered Matchmaking",
    description:
      "ExpeOur intelligent AI engine instantly matches clients with freelancers who meet project criteria. By analyzing your needs, it finds top talent for your project, streamlining the hiring process and saving you valuable time by delivering optimized matches.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        <img
          src="https://plus.unsplash.com/premium_photo-1683120966127-14162cdd0935?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="an ai image"
          width={300}
          height={300}
          className="h-full w-full object-cover"
        />
      </div>
    ),
  },
  {
    title: "Get Paid Easily",
    description:
      "Enjoy secure, simple payment processing with multiple options. Clients can pay with confidence, while freelancers can track and withdraw earnings easily, making transactions safe and efficient, ensuring both sides have peace of mind with every project completion.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <img
          src="https://plus.unsplash.com/premium_photo-1683288706157-9913483dffc8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RGVwaWN0cyUyMG1vYmlsZSUyMGFuZCUyMGRpZ2l0YWwlMjBwYXltZW50JTIwY29uY2VwdHxlbnwwfHwwfHx8MA%3D%3D"
          alt="An animated image of transaction"
          width={300}
          height={300}
          className="h-full w-full object-cover"
        />
      </div>
    ),
  },
];
export function Working() {
  return (
    <div className="w-full h-screen bg-slate-950 text-center font-semibold text-white p-8">
      <div className="flex justify-center mb-20">
        <AnimatedText text="How It Works" />
      </div>
      <StickyScroll className="w-full h-full" content={content} />
    </div>
  );
}
