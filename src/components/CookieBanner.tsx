// CookieBanner.tsx
import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";

const CookieBanner: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = Cookies.get("cookiesAccepted");
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    Cookies.set("cookiesAccepted", "true", { expires: 365 }); // dura 1 anno
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        width: "100%",
        background: "#333",
        color: "#fff",
        padding: "15px",
        textAlign: "center",
        zIndex: 1000,
      }}
    >
      Questo sito utilizza cookie per migliorare l'esperienza utente.{" "}
      <a
        href="/privacy"
        style={{ color: "#4caf50", textDecoration: "underline" }}
      >
        Privacy Policy
      </a>
      <button
        onClick={acceptCookies}
        style={{
          marginLeft: "15px",
          padding: "5px 15px",
          background: "#4caf50",
          border: "none",
          color: "#fff",
          cursor: "pointer",
          borderRadius: "4px",
        }}
      >
        Accetta
      </button>
    </div>
  );
};

export default CookieBanner;
