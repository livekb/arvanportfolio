"use client";
import React from "react";
import { motion } from "framer-motion";
import Lottie from "react-lottie";
import animationData from "../../public/Animation - 1724985759809.json";

const Solution = () => {
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
      id="solution"
      className="w-full flex flex-col md:flex-row items-centeritems-center justify-center relative mt-24"
    >
      <motion.div
        className="md:w-[40%] flex items-center justify-center"
        initial={{ opacity: 0, x: -200, rotateX: 0 }}
        whileInView={{ opacity: 1, x: 0, rotateY: 360 }}
        transition={{ duration: 1.5 }}
      >
        <Lottie options={defaultOptions} height={300} width={300} />
      </motion.div>
      <motion.div
        className="md:w-[60%] md:pl-16 mt-16"
        initial={{ opacity: 0, x: 200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="font-black text-[40px] text-[#242d4b] mb-5 ">
          Perfect Solution For yOur Business{" "}
        </h1>
        <p className="font-normal mb-10 text-[#63636b]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          voluptas totam perspiciatis repellat esse ducimus, quibusdam aut quae
          alias iure. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Et possimus eos aut magnam corrupti. Quae necessitatibus consectetur
          minus aliquid repellat, omnis in nisi similique facere? Ea atque minus
          dignissimos perferendis eius molestias modi rem, animi iusto ex eum
          delectus perspiciatis.
        </p>
        <button className="bg-[#e56712] px-7 py-3 rounded-lg text-white font-bold ">
          Details
        </button>
      </motion.div>
    </section>
  );
};

export default Solution;
