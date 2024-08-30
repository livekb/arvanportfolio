"use client";
import React from "react";
import { motion } from "framer-motion";
import Lottie from "react-lottie";
import animationData from "../../public/Animation - 1724922008020.json";

const Hero = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <section
      id="hero"
      className="w-full flex flex-col-reverse md:flex-row items-center justify-center "
    >
      <motion.div
        className="max-w-[400px] w-[80vw] md:w-[40%] md:pl-12 mt-16"
        initial={{ opacity: 0, x: -200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5 }}
      >
        <h1 className="font-black text-[20px] sm:text-[30px] md:text-[40px] text-[#242d4b] mb-5 ">
          Hy! I Am Vikas Dev{" "}
        </h1>
        <p className="font-normal mb-10 text-[#63636b]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          voluptas totam perspiciatis repellat esse ducimus, quibusdam aut quae
          alias iure.
        </p>
        <button className="bg-[#e56712] px-7 py-3 rounded-lg text-white font-bold ">
          Hire me
        </button>
      </motion.div>
      <motion.div
        className="md:w-[60%] flex items-center justify-center"
        initial={{ opacity: 0, x: 200, rotateX: 0 }}
        whileInView={{ opacity: 1, x: 0, rotateY: 360 }}
        transition={{ duration: 1.5 }}
      >
        <div className="md:hidden">
          <Lottie options={defaultOptions} height={300} width={300} />
        </div>
        <div className="hidden md:block">
          <Lottie options={defaultOptions} height={400} width={400} />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
