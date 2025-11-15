import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const GalleriaSection = () => {
  const progetti = [
    {
      image: "/img/foto_falegnameria/IMG_3268.jpg",
      title: "Ufficio Direzionale",
      category: "Pietrasanta",
      description: "",
    },
    {
      image: "/img/foto_falegnameria/IMG_5038.jpg",
      title: "Studio Legale",
      category: "Pietrasanta",
      description: "",
    },
    {
      image: "/img/ponte/IMG_4139.jpg",
      title: "Arredamento Esterno",
      category: "Lucca",
      description: "",
    },
    {
      image: "/img/attrezzata/IMG_2857.jpg",
      title: "Boiserie Attrezzata",
      category: "Pietrasanta",
      description: "",
    },
    {
      image: "/img/vetrine/IMG_6347.jpg",
      title: "Vetrina su Misura",
      category: "Centro Storico - Lucca",
      description: "",
    },
    {
      image: "/img/portone/IMG_5561.jpg",
      title: "Restauro Portone",
      category: "Pietrasanta",
      description: "",
    },
    {
      image: "/img/lizzano/Lizzano2.jpg",
      title: "Soggiorno",
      category: "Lizzano",
      description: "",
    },
    {
      image: "/img/parapetto/IMG_4084_ottimizzata_resized.jpg",
      title: "Mobile Parapetto",
      category: "Lucca",
      description: "",
    },
    {
      image: "/img/foto_falegnameria/IMG_3474.jpg",
      title: "Studio Legale",
      category: "Pietrasanta",
      description: "",
    },
    {
      image: "/img/san_pancrazio_2/Pancrazio1.jpg",
      title: "Camera Ospiti",
      category: "Lucca",
      description: "",
    },
    {
      image: "/img/foto_falegnameria/IMG_0352_risultato.jpg",
      title: "Armadio stile Cina",
      category: "Lucca",
      description: "",
    },
    {
      image: "/img/foto_falegnameria/IMG_0038_risultato.jpg",
      title: "Veranda",
      category: "Lucca",
      description: "",
    },
  ];

  const itemsPerPage = 6; // quante immagini mostri per pagina
  const [currentPage, setCurrentPage] = useState(0);

  // Stato di caricamento per ogni immagine
  const [loadedImages, setLoadedImages] = useState<boolean[]>(
    Array(progetti.length).fill(false)
  );

  const totalPages = Math.ceil(progetti.length / itemsPerPage);

  const handlePrev = () =>
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  const handleNext = () =>
    setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));

  const startIndex = currentPage * itemsPerPage;
  const visibleProjects = progetti.slice(startIndex, startIndex + itemsPerPage);

  return (
    <section id="galleria" className="py-20 bg-background relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-dark-brown mb-6">
            Galleria
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Le nostre realizzazioni
          </p>
        </div>

        {/* Griglia immagini */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleProjects.map((progetto, index) => {
            const globalIndex = startIndex + index;
            const isLoaded = loadedImages[globalIndex];

            return (
              <div
                key={globalIndex}
                className="group cursor-pointer overflow-hidden rounded-xl shadow-soft hover:shadow-elegant transition-all duration-300"
              >
                <div className="relative overflow-hidden h-64">
                  {/* Skeleton */}
                  {!isLoaded && (
                    <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-xl" />
                  )}

                  {/* Immagine reale */}
                  <img
                    src={progetto.image}
                    alt={progetto.title}
                    className={`w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500 ${
                      isLoaded ? "opacity-100" : "opacity-0"
                    }`}
                    onLoad={() =>
                      setLoadedImages((prev) => {
                        const newState = [...prev];
                        newState[globalIndex] = true;
                        return newState;
                      })
                    }
                  />

                  {/* Overlay info */}
                  {isLoaded && (
                    <>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <p className="text-sm font-medium">
                          {progetto.category}
                        </p>
                        <h3 className="text-lg font-bold">{progetto.title}</h3>
                        <p className="text-sm">{progetto.description}</p>
                      </div>
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Frecce di navigazione */}
        <div className="flex justify-center items-center mt-10 space-x-6">
          <button
            onClick={handlePrev}
            className="p-3 rounded-full text-brown transition hover:bg-brown/10"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <span className="text-dark-brown font-medium">
            {currentPage + 1} / {totalPages}
          </span>
          <button
            onClick={handleNext}
            className="p-3 rounded-full text-brown transition hover:bg-brown/10"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default GalleriaSection;
