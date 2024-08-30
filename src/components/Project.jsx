"use client";

import React from "react";
import Project_Card from "./Project_Card";
import { projects } from "@/constants";
import { motion } from "framer-motion";

const Project = () => {
  return (
    <section
      className="mt-24"
      
    >
      <motion.h1 className="font-black text-[40px] text-[#242d4b] mb-5 text-center " initial={{ opacity: 0, x: -200 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.5 }}>
        Recent Projects{" "}
      </motion.h1>
      <div className="flex flex-wrap gap-20 justify-center items-center" >
        {projects.map((project) => (
          <Project_Card image={project.image} key={project.id} />
        ))}
      </div>
    </section>
  );
};

export default Project;
