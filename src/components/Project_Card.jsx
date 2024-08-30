import Image from "next/image";
import React from "react";
import { projects } from "@/constants";
import { motion } from "framer-motion";

const Project_Card = ({ image }) => {
  return (
    <motion.div className="rounded-xl hover:shadow-2xl shadow-xl" initial={{ y: 0 }}
    whileHover={{ y: -20 }}
    transition={{ duration: 0.25 }}>
      <Image src={image} width={300} height={300} alt={"project"} className="rounded-xl"/>
    </motion.div>
  );
};

export default Project_Card;
