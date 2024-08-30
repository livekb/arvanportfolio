"use client";
import React from "react";
import { motion } from "framer-motion";
import Lottie from "react-lottie";
import animationData from "../../public/Animation - 1724948186923";
const Why = () => {
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
      id="why"
      className="w-full flex flex-col wtems-center justify-center relative mt-24"
    >
      <div className="flex flex-col-reverse md:flex-row items-center justify-center ">
        <motion.div
          className="max-w-[400px] w-[80vw] md:w-[40%] items-center justify-center flex flex-col md:pl-16  mt-16"
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
        >
          <h1 className="font-extrabold text-[18px] sm:text-[30px] md:text-[40px] text-[#242d4b] mb-5 ">
            Client's Always Get Exceptional Works From me{" "}
          </h1>
          <p className="font-normal mb-10 text-[#63636b]  ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            voluptas totam perspiciatis repellat esse ducimus, quibusdam aut
            quae alias iure.
          </p>
        </motion.div>
        <motion.div
          className="md:w-[60%] flex items-center justify-center"
          initial={{ opacity: 0, x: 200, rotateX: 0 }}
          whileInView={{ opacity: 1, x: 0, rotateY: 360 }}
          transition={{ duration: 1.5 }}
        >
          <Lottie
            options={defaultOptions}
            height={400}
            width={400}
            style={{ borderRadius: "50%" }}
          />
        </motion.div>
      </div>

      <div className="sm:w-[75%] md:w-[85%] mt-5 flex flex-col mx-auto gap-2 rounded-2xl px-6 py-10 bg-gradient-to-r from-orange-100 to-orange-200 w-full  ">
        <p className="font-black text-[15px] text-[#242d4b]">
          1.Top Quality Works
        </p>
        <p className="font-black text-[15px] text-[#242d4b]">2.Commitments</p>
        <p className="font-black text-[15px] text-[#242d4b]">
          3.24 hours Active
        </p>
      </div>
    </section>
  );
};

export default Why;
