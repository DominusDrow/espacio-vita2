"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "./Button";
import useDrawerStore from '../store/contactStore';

const MiniNav = () => {
  const [showMiniNav, setShowMiniNav] = useState(false);
  const { setIsOpen } = useDrawerStore();

  useEffect(() => {
    const handleScroll = () => {
      setShowMiniNav(window.scrollY > 150);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {showMiniNav && (
        <motion.div
          className="fixed top-10 right-10 z-50"
          initial={{ opacity: 0, y: 100 }} // desde fuera de la pantalla abajo
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ type: "spring", stiffness: 70, damping: 12 }}
        >
          <Button
            label="Get in touch"
            onClick={() => setIsOpen(true)}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MiniNav;
