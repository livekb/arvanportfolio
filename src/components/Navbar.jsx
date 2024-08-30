"use client";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
const Navbar = () => {
  return (
    <motion.div
      className="bg-white p-3 md:p-7 m-2 md:m-5 rounded-lg sticky"
      initial={{ opacity: 0, y: -200 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
    >
      <nav className="flex justify-between items-center ">
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
        >
          <div className="flex items-center justify-between gap-2">
            <svg
              width="20px"
              height="20px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="md:hidden "
              onClick={() => {
                const dropdown_nav = document.querySelector("#dropdown_nav");
                dropdown_nav.classList.toggle("hidden");
                dropdown_nav.classList.toggle("flex");
              }}
            >
              <path
                d="M4 6H20M4 12H20M4 18H20"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <h1 className="font-extrabold md:text-[25px] text-[18px]">
              mrVikas
            </h1>
          </div>
        </motion.div>
        <ul className="hidden gap-5 items-center ml-auto md:flex">
          <Link href={"#"}>Home</Link>
          <Link href={"#"}>About Us</Link>
          <Link href={"#"}>Work</Link>
        </ul>
        <div>
          <Link
            className="bg-[#e56712] md:px-7 py-3 px-2  rounded-lg text-white font-medium md:ml-24 "
            href={"#"}
          >
            Contact
          </Link>
        </div>
      </nav>
      <ul
        id="dropdown_nav"
        className=" md:hidden gap-3 mt-2 hidden flex-col self-start"
      >
        <Link href={"#"}>Home</Link>
        <Link href={"#"}>About Us</Link>
        <Link href={"#"}>Work</Link>
      </ul>
    </motion.div>
  );
};

export default Navbar;
