// pages/Privacy.tsx
import React from "react";

const Privacy: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FDF6F0] py-20 px-6 md:px-0 flex justify-center">
      <div className="max-w-3xl bg-white shadow-lg rounded-xl p-10">
        <h1 className="text-4xl font-bold text-[#6B3D0E] mb-6 text-center">
          Privacy Policy
        </h1>

        <p className="text-gray-700 mb-4 leading-relaxed">
          Questo sito è un sito vetrina e{" "}
          <span className="font-semibold text-[#6B3D0E]">
            non raccoglie dati personali
          </span>{" "}
          degli utenti. Non utilizziamo cookie di profilazione, pubblicità o
          strumenti di tracciamento.
        </p>

        <p className="text-gray-700 mb-4 leading-relaxed">
          Per qualsiasi domanda puoi contattarci via email a{" "}
          <a
            href="mailto:info@gianniarredamenti.it"
            className="text-[#6B3D0E] font-semibold hover:underline"
          >
            falegnameriagianni.snc@gmail.com
          </a>
          .
        </p>

        <div className="mt-8 text-center">
          <a
            href="/"
            className="text-white p-2 rounded-md transition-colors text-xl bg-dark-brown"
          >
            Torna alla home
          </a>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
