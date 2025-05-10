"use client"
import React from "react";
import { motion } from "framer-motion";
import Button from "./Button";

const MiniNav = () => {
  return (
    <motion.div
      className="fixed top-6 right-6 z-50"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
    >
      <Button
        label="Get in touch"
        onClick={() => {
          const section = document.getElementById("contact");
          if (section) section.scrollIntoView({ behavior: "smooth" });
        }}
      />
    </motion.div>
  );
};

export default MiniNav;
