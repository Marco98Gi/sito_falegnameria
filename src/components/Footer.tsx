import { MessageCircle, Mail, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#6B3D0E] text-light-cream py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Colonna sinistra: Social cliccabili */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold mb-4">Contatti Rapidi</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <MessageCircle className="w-5 h-5" />
                <a
                  href="https://wa.me/391234567890"
                  className="hover:text-white"
                >
                  +39 3394133932
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                <a
                  href="mailto:info@gianniarredamenti.it"
                  className="hover:text-white"
                >
                  falegnameriagianni.snc@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Facebook className="w-5 h-5" />
                <a
                  href="https://www.facebook.com/FalegnameriaGianni?mibextid=wwXIfr&rdid=7PFKEBeubmUITgub&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1DP3WyR1b2%2F%3Fmibextid%3DwwXIfr#"
                  target="_blank"
                  className="hover:text-white"
                >
                  Falegnameria Gianni
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Instagram className="w-5 h-5" />
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  className="hover:text-white"
                >
                  Falegnameria Gianni
                </a>
              </li>
            </ul>
          </div>

          {/* Colonna centrale: vuota */}
          <div></div>

          {/* Colonna destra: dati ufficiali */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold mb-4">Dati Ufficiali</h4>
            <p>Falegnameria Gianni SNC</p>
            <p>Via delle Pierone, 776/B</p>
            <p>55100 Lucca, Toscana, Italia</p>
            <p>P.IVA: 00330520461</p>
            <p>Cod. Fisc: 00330520461</p>
          </div>
        </div>

        <div className="border-t border-cream/20 mt-8 pt-8 text-center space-y-2">
          <p className="text-cream/60">
            © 2024 Falegnameria Gianni SNC. Tutti i diritti riservati.
          </p>
          <p>
            <a
              href="#/privacy"
              className="text-cream/60 hover:text-white transition-colors text-sm"
            >
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
