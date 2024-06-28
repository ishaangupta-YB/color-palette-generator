"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaCopy, FaCheck } from "react-icons/fa";
import { toast } from "react-hot-toast";

interface ColorPaletteProps {
  colors: string[];
}

const ColorPalette: React.FC<ColorPaletteProps> = ({ colors }) => {
  const [copiedColor, setCopiedColor] = useState<string | null>(null);

  const handleColorClick = (color: string) => {
    navigator.clipboard.writeText(color);
    setCopiedColor(color);
    toast.success(`Copied ${color} to clipboard!`);
    setTimeout(() => setCopiedColor(null), 2000);
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
      {colors.map((color, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          className="relative group"
        >
          <div
            className="w-full aspect-square rounded-lg shadow-lg flex items-center justify-center cursor-pointer overflow-hidden"
            style={{ backgroundColor: color }}
            onClick={() => handleColorClick(color)}
          >
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
              {copiedColor === color ? (
                <FaCheck className="text-white text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              ) : (
                <FaCopy className="text-white text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              )}
            </div>
          </div>
          <p className="text-center mt-2 font-mono">{color}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default ColorPalette;