import React from "react";
import { motion } from "framer-motion";

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 w-full py-4 shadow-lg">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-2xl text-white font-bold text-center">
          Color Palette Generator
        </h1>
      </motion.div>
    </header>
  );
};

export default Header;