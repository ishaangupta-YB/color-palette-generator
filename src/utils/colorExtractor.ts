import ColorThief from "colorthief";

export const extractColors = (imageSrc: string): Promise<string[]> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "Anonymous";
    img.src = imageSrc;
    img.onload = () => {
      const colorThief = new ColorThief();
      try {
        const palette = colorThief.getPalette(img, 5);
        const hexPalette = palette.map((color) => {
          return `#${color
            .map((c) => c.toString(16).padStart(2, "0"))
            .join("")}`;
        });
        resolve(hexPalette);
      } catch (error) {
        reject(error);
      }
    };
    img.onerror = (error) => reject(error);
  });
};
