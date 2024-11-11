import React from "react";
import { motion } from "framer-motion";

const Stars = () => {
  const randomMove = () => Math.random() * 4 - 2;
  const randomOpacity = () => Math.random();
  const random = () => Math.random();
  return (
    <div className="absolute inset-0">
      {[...Array(80)].map((_, i) => (
        <motion.span
          key={`star-${i}`}
          animate={{
            top: `calc(${random() * 100}% + ${randomMove()}px)`,
            left: `calc(${random() * 100}% + ${randomMove()}px)`,
            opacity: randomOpacity(),
            scale: [1, 1.2, 0],
          }}
          transition={{
            duration: random() * 10 + 20,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            position: "absolute",
            top: `${random() * 100}%`,
            left: `${random() * 100}%`,
            width: `2px`,
            height: `2px`,
            backgroundColor: "white",
            borderRadius: "50%",
            zIndex: 1,
          }}
          className="inline-block"
        ></motion.span>
      ))}
    </div>
  );
};

export const AnimatedText = ({ text }) => {
  const textArray = text.split("");

  return (
    <motion.div
      className="text-2xl md:text-4xl lg:text-5xl font-bold text-center text-indigo-500"
      style={{ display: "inline-block" }}
    >
      {textArray.map((char, index) => (
        <motion.span
          key={index}
          custom={index}
          initial={{ opacity: 0.8, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          // exit={{ opacity: 0.8, y: 20 }}
          transition={{
            delay: index * 0.1,
            duration: 0.4,
            // repeatType: "reverse",
            ease: "easeInOut",
          }}
          className="inline-block bg-blue-500 text-white mx-1 p-2 rounded-md"
        >
          {char}
        </motion.span>
      ))}
    </motion.div>
  );
};
