import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Instagram, Facebook } from "lucide-react";
import emailjs from "@emailjs/browser";

const ContattiSection = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefono: "",
    oggetto: "",
    messaggio: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .send(
        "service_2t5zm8g",
        "template_0xjplsz",
        formData,
        "OYNspbVVoIFXedYAQ"
      )
      .then(
        () => setIsSubmitted(true),
        (err) => alert("Errore nell'invio: " + err.text)
      );
  };

  const closeOverlay = () => setIsSubmitted(false);

  return (
    <section id="contatti" className="py-20 bg-background relative">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-dark-brown mb-12 text-center">
          Contatti
        </h2>

        {/* Griglia mailbox + mappa */}
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Colonna sinistra: Form */}
          <div className="flex-1 max-w-lg">
            <div className="bg-card p-8 rounded-xl shadow-soft mb-8">
              <h3 className="text-2xl font-semibold text-dark-brown mb-4">
                Scrivici una mail
              </h3>
              <p className="text-muted-foreground mb-6">
                Compila il modulo qui sotto e ti risponderemo al più presto.
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  name="nome"
                  placeholder="Nome"
                  required
                  value={formData.nome}
                  onChange={handleChange}
                />
                <Input
                  name="email"
                  type="email"
                  placeholder="Email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
                <Input
                  name="telefono"
                  placeholder="Telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                />
                <Input
                  name="oggetto"
                  placeholder="Oggetto"
                  required
                  value={formData.oggetto}
                  onChange={handleChange}
                />
                <Textarea
                  name="messaggio"
                  placeholder="Messaggio..."
                  required
                  className="min-h-[120px]"
                  value={formData.messaggio}
                  onChange={handleChange}
                />
                <Button
                  type="submit"
                  className="w-full bg-[#6B3D0E] text-light-cream hover:bg-primary/90"
                >
                  Invia Messaggio
                </Button>
              </form>
            </div>
          </div>

          {/* Colonna destra: Mappa */}
          <div className="flex-1 space-y-4">
            <div className="bg-card p-6 rounded-xl shadow-soft text-center">
              <h3 className="text-2xl font-semibold text-dark-brown mb-4">
                Dove siamo
              </h3>
              <p className="text-muted-foreground">
                Via delle Pierone, 776, 55100 Lucca LU
              </p>
            </div>
            <div className="h-[400px] rounded-xl overflow-hidden shadow-soft">
              <iframe
                title="Mappa Lucca - Via delle Pierone"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2860.838826631675!2d10.503725615563973!3d43.84195797911614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132ad50e1c5f5c3f%3A0x1c9a3a64fa48c0b8!2sVia%20delle%20Pierone%2C%20776%2C%2055100%20Lucca%20LU%2C%20Italia!5e0!3m2!1sit!2sit!4v1695209999999!5m2!1sit!2sit"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Seguici sui social sotto le colonne */}
        <div className="mt-12 flex justify-center">
          <div className="bg-card p-6 rounded-xl shadow-soft text-center max-w-md w-full">
            <h3 className="text-2xl font-semibold text-dark-brown mb-4">
              Seguici sui social
            </h3>
            <p className="text-muted-foreground mb-6">
              Resta aggiornato su novità e progetti.
            </p>
            <div className="flex justify-center gap-10">
              <a
                href="https://www.instagram.com/tuoprofilo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center text-dark-brown hover:text-[#6B3D0E] transition-colors"
              >
                <Instagram className="w-8 h-8 mb-1" />
                <span className="text-sm">Instagram</span>
              </a>
              <a
                href="https://www.facebook.com/tuoprofilo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center text-dark-brown hover:text-[#6B3D0E] transition-colors"
              >
                <Facebook className="w-8 h-8 mb-1" />
                <span className="text-sm">Facebook</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay email inviata */}
      {isSubmitted && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
          <div className="bg-white rounded-xl p-8 text-center max-w-sm mx-4">
            <h3 className="text-2xl font-bold text-dark-brown mb-4">
              Email Inviata!
            </h3>
            <p className="text-muted-foreground mb-6">
              Grazie per averci contattato. Ti risponderemo il prima possibile.
            </p>
            <Button
              onClick={closeOverlay}
              className="bg-dark-brown text-light-cream hover:bg-primary/90"
            >
              Chiudi
            </Button>
          </div>
        </div>
      )}
    </section>
  );
};

export default ContattiSection;
