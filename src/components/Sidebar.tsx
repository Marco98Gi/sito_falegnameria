import { useState } from "react";
import { Menu, X, Instagram, Facebook } from "lucide-react";

interface SidebarProps {
  onNavigate: (section: string) => void;
}

const Sidebar = ({ onNavigate }: SidebarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { id: "home", label: "Home" },
    { id: "chi-siamo", label: "Chi Siamo" },
    { id: "galleria", label: "Galleria" },
    { id: "contatti", label: "Contatti" },
  ];

  const handleMenuClick = (sectionId: string) => {
    setIsOpen(false);
    onNavigate(sectionId);
  };

  return (
    <>
      {/* ------------------- */}
      {/* MOBILE: topbar chiusa */}
      {/* ------------------- */}
      {!isOpen && (
        <div className="md:hidden fixed top-0 left-0 right-0 bg-white h-16 z-50 flex items-center justify-between px-4 shadow-md">
          {/* Logo piccolo */}
          <img
            src="/img/logo_marco_small_dark.png"
            alt="Logo"
            style={{ height: "132px" }}
          />

          {/* Testo centrale BANANA */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <span className="text-1xl font-bold text-[#6B3D0E] tracking-wide rotate-270 whitespace-nowrap ">
              Falegnameria Gianni
            </span>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setIsOpen(true)}
            className="p-2 text-black hover:bg-primary/10 rounded-lg transition-colors"
            aria-label="Apri menu"
          >
            <Menu className="h-6 w-6 text-[#6B3D0E]" />
          </button>
        </div>
      )}

      {/* ------------------- */}
      {/* MOBILE: overlay aperta */}
      {/* ------------------- */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-50 flex flex-col transition-transform duration-300">
          {/* Top bar con logo e X */}
          <div className="flex items-center justify-between px-4 py-4 border-b border-gray-200">
            {/* Logo */}
            <img
              src="/img/logo_marco_dark.png"
              alt="Logo"
              style={{ height: "60px" }}
            />

            {/* Bottone chiusura */}
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 text-black hover:bg-primary/10 rounded-lg transition-colors"
              aria-label="Chiudi menu"
            >
              <X className="h-6 w-6 text-[#6B3D0E]" />
            </button>
          </div>

          {/* Menu centrale */}
          <nav className="flex-1 flex flex-col justify-center px-6 space-y-6">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleMenuClick(item.id)}
                className="w-full text-left text-4xl md:text-6xl font-bold text-black transition-colors hover:text-[#6B3D0E]"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Social footer opzionale */}
          <div className="flex justify-center space-x-6 py-4 border-t border-gray-200">
            <a href="#" aria-label="Instagram">
              <Instagram className="h-6 w-6 text-[#6B3D0E]" />
            </a>
            <a href="#" aria-label="Facebook">
              <Facebook className="h-6 w-6 text-[#6B3D0E]" />
            </a>
          </div>
        </div>
      )}

      {/* ------------------- */}
      {/* DESKTOP SIDEBAR */}
      {/* ------------------- */}
      <div
        className={`hidden md:flex fixed top-0 left-0 h-full bg-white z-50 flex-col transition-all duration-300 ${
          isOpen ? "w-1/4" : "w-16"
        }`}
      >
        {/* Logo desktop */}
        <div className="flex justify-center mt-0">
          {isOpen ? (
            <img
              src="/img/logo_marco_dark.png"
              alt="Logo grande"
              className="w-4/4 h-auto"
            />
          ) : (
            <img src="/img/logo_marco_small_dark.png" alt="Logo" />
          )}
        </div>

        {/* BANANA al centro (solo quando sidebar chiusa) */}
        {!isOpen && (
          <div className="flex-1 flex items-center justify-center">
            <span className="text-1xl font-bold text-[#6B3D0E] tracking-wide rotate-270 whitespace-nowrap ">
              Falegnameria Gianni
            </span>
          </div>
        )}

        {/* Menu desktop (solo aperta) */}
        {isOpen && (
          <nav className="mt-8 flex-1 flex flex-col items-center">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleMenuClick(item.id)}
                className="w-full flex items-center px-4 py-6 justify-center group"
              >
                <span
                  className="text-2xl md:text-4xl font-bold 
                         group-hover:text-[#6B3D0E] 
                         group-hover:translate-x-2 
                         transition-all duration-300 ease-in-out"
                >
                  {item.label}
                </span>
              </button>
            ))}
          </nav>
        )}

        {/* Pulsante hamburger / chiudi */}
        <div
          className={`flex items-center p-4 ${
            isOpen ? "justify-start mt-0" : "justify-start mt-auto"
          }`}
        >
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-black rounded-lg transition-colors hover:bg-primary/10"
            aria-label={isOpen ? "Chiudi menu" : "Apri menu"}
          >
            {isOpen ? (
              <X className="h-6 w-6 text-[#6B3D0E]" />
            ) : (
              <Menu className="h-6 w-6 text-[#6B3D0E]" />
            )}
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
