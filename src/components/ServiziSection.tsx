import { PenLine, Hammer, Wrench, Award } from "lucide-react";

const ServiziSection = () => {
  const servizi = [
    {
      icon: PenLine,
      title: "Progettazione",
      description:
        "Sviluppiamo progetti personalizzati secondo le tue esigenze specifiche e lo stile che desideri per i tuoi spazi.",
    },
    {
      icon: Hammer,
      title: "Realizzazione",
      description:
        "Costruiamo i tuoi arredi con materiali di prima qualità e tecniche artigianali tradizionali per garantire durata e bellezza.",
    },
    {
      icon: Wrench,
      title: "Installazione e montaggio",
      description:
        "ci occuperemo con cura dell’installazione del vostro progetto per un funzionamento corretto e duratura",
    },
    {
      icon: Award,
      title: "Assistenza",
      description:
        "Offriamo un servizio di assistenza completo e manutenzione per preservare nel tempo la bellezza dei tuoi arredi.",
    },
  ];

  return (
    <section id="servizi" className="py-20 section-gradient">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-dark-brown mb-6">
            I Nostri Servizi
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Dalla progettazione all'assistenza post-vendita, ti accompagniamo in
            ogni fase del tuo progetto.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servizi.map((servizio, index) => {
            const Icon = servizio.icon;
            return (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-[#6B3D0E] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/90 transition-colors">
                  <Icon className="h-10 w-10 text-light-cream" />
                </div>
                <h3 className="text-xl font-bold text-dark-brown mb-4">
                  {servizio.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {servizio.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiziSection;
