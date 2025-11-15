import { useEffect, useState } from "react";

const HeroSection = () => {
  const allImages = [
    { src: "/img/lizzano/Lizzano2.jpg", alt: "Design contemporaneo" },
    { src: "/img/lizzano/Lizzano1.jpg", alt: "Poltrona moderna di design" },
    { src: "/img/attrezzata/IMG_2857.jpg", alt: "Arredo contemporaneo" },
    { src: "/img/mansarda/IMG_2868.jpg", alt: "Soluzione di design" },
    { src: "/img/ponte/IMG_4139.jpg", alt: "Artigianato italiano" },
    { src: "/img/ponte/IMG_4075.jpg", alt: "Artigianato italiano" },
    { src: "/img/foto_falegnameria/IMG_5043.jpg", alt: "Artigianato italiano" },
    { src: "/img/foto_falegnameria/IMG_5039.jpg", alt: "Artigianato italiano" },
  ];

  const [visibleImages, setVisibleImages] = useState(allImages.slice(0, 4));
  const [nextIndex, setNextIndex] = useState(4);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomSlot = Math.floor(Math.random() * 4);
      const newImages = [...visibleImages];
      const newImage = allImages[nextIndex % allImages.length];

      newImages[randomSlot] = newImage;
      setVisibleImages(newImages);
      setNextIndex((prev) => (prev + 1) % allImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [visibleImages, nextIndex]);

  return (
    <section
      id="home"
      className="relative flex items-center justify-center bg-gradient-to-br from-light-cream to-warm-beige px-6 min-h-[70vh] lg:min-h-screen py-10 lg:py-0 overflow-hidden"
    >
      {/* 🔹 Logo centrato visibile solo su desktop */}
      <div className="hidden lg:flex absolute top-10 left-1/2 -translate-x-1/2 z-20">
        <img
          src="/img/logo_marco_dark.png"
          alt="Logo aziendale"
          className="w-60 xl:w-80 object-contain drop-shadow-md"
        />
      </div>

      {/* Contenuto principale */}
      <div
        className="
          flex flex-col-reverse lg:flex-row
          items-center justify-center
          w-full max-w-[1200px] gap-12
          mt-16 lg:mt-32
        "
      >
        {/* 🔸 Colonna immagini (sinistra su desktop, sotto su mobile) */}
        <div className="flex-1 grid grid-cols-2 grid-rows-2 gap-4 w-full lg:max-w-[600px]">
          {visibleImages.map((image, index) => (
            <FadeImage
              key={`${image.src}-${index}`}
              src={image.src}
              alt={image.alt}
            />
          ))}
        </div>

        {/* 🔸 Colonna testo (destra su desktop, sopra su mobile) */}
        <div className="flex-1 max-w-[500px] text-center lg:text-left">
          <h1 className="text-4xl md:text-6xl font-bold text-dark-brown leading-tight mb-6">
            Tradizione artigianale e design contemporaneo
          </h1>
          <p className="text-xl text-gray-500 mb-8 leading-relaxed">
            Da oltre sessant'anni, realizziamo soluzioni di arredo uniche,
            unendo alla maestria artigianale le più moderne tendenze del design
            contemporaneo.
          </p>
        </div>
      </div>
    </section>
  );
};

// 🔹 Componente immagine con effetto dissolvenza
const FadeImage = ({ src, alt }: { src: string; alt: string }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(false);
    const timeout = setTimeout(() => setLoaded(true), 50);
    return () => clearTimeout(timeout);
  }, [src]);

  return (
    <div className="relative w-full h-[200px] md:h-[260px] overflow-hidden rounded-2xl shadow-lg">
      <img
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        className={`w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
};

export default HeroSection;
