import { BackgroundLines } from "../ui/BackgroundLines";
import CurveImg from "../../assets/curve.png";
import GridImg from "../../assets/grid.png";
import Header from "./Header";
import { motion } from "framer-motion";

export function HeroSection() {
  const container = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <>
      <Header />
<<<<<<< HEAD
      <section className="w-full h-screen flex justify-center items-center">
=======
      <section className="w-full h-screen bg-slate-950 flex justify-center items-center">
>>>>>>> 224b4b7b1b26f33d81c01ca0c5b026cc43010329
        <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
          <img
            src={GridImg}
            alt="grid pattern image"
            className="z-0 absolute w-full h-full"
          />

          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="z-10 flex flex-col items-center"
          >
            <motion.h2
              variants={item}
              className="bg-clip-text text-transparent text-center bg-gradient-to-r from-indigo-300 via-purple-400 to-pink-300 text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight"
            >
              NeuraFlow Empowering Your <br /> Freelance Journey,
            </motion.h2>
            <motion.p
              variants={item}
              className="w-full text-center text-sm md:text-lg text-neutral-100  lg:text-nowrap"
            >
              A smarter way to connect clients and freelancers with{" "}
              <span className="text-blue-500">AI-powered recommendations</span>
            </motion.p>
            <motion.button
              variants={item}
              className=" bg-gradient-to-t from-violet-500 to-fuchsia-500 hover:bg-gradient-to-b px-4 py-2 mt-8 rounded-md text-white font-normal cursor-pointer z-10 hover:bg-blue-700 hero"
            >
              Get Started
            </motion.button>
          </motion.div>
        </BackgroundLines>
      </section>
    </>
  );
}
