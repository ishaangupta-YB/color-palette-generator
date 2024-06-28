/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { motion } from "framer-motion";
import { FaUpload } from "react-icons/fa";

interface ImageUploaderProps {
  onImageUpload: (image: string) => void;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ onImageUpload }) => {
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const file = acceptedFiles[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          const base64Image = reader.result as string;
          onImageUpload(base64Image);
        };
        reader.readAsDataURL(file);
      }
    },
    [onImageUpload]
  );

  const { getRootProps, getInputProps, isDragActive, acceptedFiles, fileRejections } = useDropzone({
    onDrop,
    accept: "image/jpeg, image/png, image/heic",
    maxSize: 5242880,
  });

  const renderFileError = () => {
    if (fileRejections.length > 0) {
      return <p className="text-red-500 mt-2">File size must be under 5 MB.</p>;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div
        {...getRootProps()}
        className={`p-8 border-2 border-dashed rounded-lg text-center cursor-pointer mb-8 transition-colors duration-200 ${
          isDragActive ? "border-blue-500 bg-blue-100 bg-opacity-10" : "border-gray-600 bg-gray-800"
        }`}
      >
        <input {...getInputProps()} />
        <FaUpload className="mx-auto mb-4 text-4xl text-gray-400" />
        {isDragActive ? (
          <p className="text-xl">Drop the image here ...</p>
        ) : (
          <p className="text-xl">Drag 'n' drop an image here, or click to select one</p>
        )}
        {renderFileError()}
        {acceptedFiles.length > 0 && (
          <p className="text-green-500 mt-2">Image uploaded successfully!</p>
        )}
      </div>
    </motion.div>
  );
};

export default ImageUploader;