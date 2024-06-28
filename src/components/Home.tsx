"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Toaster, toast } from "react-hot-toast";

import ImageUploader from "./ImageUploader";
import ColorPalette from "./ColorPalette";
import { extractColors } from "../utils/colorExtractor";
import Header from "./Header";
import Footer from "./Footer";
import Loader from "./Loader";
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import { Github } from "lucide-react";

const Home: React.FC = () => {
  const [colors, setColors] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [image, setImage] = useState<string | null>(null);

  const handleImageUpload = async (image: string) => {
    setLoading(true);
    setImage(image);
    try {
      const extractedColors = await extractColors(image);
      setColors(extractedColors);
      toast.success("Colors extracted successfully!");
    } catch (error) {
      toast.error("Failed to extract colors. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 text-white">
      <Toaster position="top-right" />
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h2 className="text-4xl font-bold text-center mb-4">
            Generate Your Color Palette
          </h2>
          <p className="text-center text-xl text-gray-300">
            Upload an image and discover its unique color palette
          </p>
        </motion.div>

        <ImageUploader onImageUpload={handleImageUpload} />

        <AnimatePresence>
          {image && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="mt-8"
            >
              <CardContainer className="inter-var">
                <CardBody className="bg-gray-800 relative group/card border-white/[0.2] w-full sm:w-[30rem] h-auto rounded-xl p-6 border">
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-300 text-sm max-w-sm mt-2"
                  >
                    Hover to interact
                  </CardItem>
                  <CardItem
                    translateZ="100"
                    rotateX={20}
                    rotateZ={-10}
                    className="w-full mt-4"
                  >
                    <Image
                      src={image}
                      height={1000}
                      width={1000}
                      className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                      alt="Uploaded image"
                    />
                  </CardItem>
                </CardBody>
              </CardContainer>
            </motion.div>
          )}
        </AnimatePresence>

        {loading ? (
          <div className="mt-8">
            <Loader />
          </div>
        ) : (
          colors.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-8"
            >
              <ColorPalette colors={colors} />
            </motion.div>
          )
        )}
      </main>
      <Footer />
      <a
        href="https://github.com/ishaangupta-yb/color-palette-generator"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed top-4 right-4 bg-white text-gray-900 p-2 rounded-full shadow-lg hover:bg-gray-200 transition-colors duration-200"
      >
        <Github size={24} />
      </a>
    </div>
  );
};

export default Home;
