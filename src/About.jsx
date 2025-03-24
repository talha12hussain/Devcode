import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      initial={{ y: "-100vh", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex items-center justify-center h-screen bg-black text-white text-center relative"
    >
      <div className="absolute inset-0 bg-[url('/path-to-your-background.jpg')] bg-cover bg-center opacity-10"></div>
      <div className="relative z-10 max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-bold">
          Hey There! Welcome to <span className="text-orange-500">Dev2Code Solutions!</span>
        </h1>
      </div>
    </motion.div>
  );
};

export default About;
