import { Award, Leaf, Axe, Lightbulb, Handshake } from "lucide-react";
import { describe } from "node:test";

const ValoriSection = () => {
  const valori = [
    {
      icon: Award,
      title: "Qualità",
      description:
        "utilizziamo solo i migliori materiali lavorati con le migliori tecniche artigianali e cura di ogni minimo dettaglio per garantir prodotti di eccellenza",
      color: "from-amber-100 to-orange-100",
    },
    {
      icon: Leaf,
      title: "Sostenibilità",
      description:
        " attenzione totale all’ambiente con materiali certificati e processi di lavorazione ecocompatibili",
      color: "from-blue-100 to-cyan-100",
    },
    {
      icon: Axe,
      title: "Tradizione",
      description:
        "mettiamo a disposizione del cliente i nostri, oltre sessant’anni di esperienza nel settore dell’arredamento e del design interno",
      color: "from-green-100 to-emerald-100",
    },
    {
      icon: Lightbulb,
      title: "Innovazione",
      description:
        "utilizziamo tecnologie moderne per risultati Perfetti e lavoro duraturi.",
      color: "from-purple-100 to-pink-100",
    },
    {
      icon: Handshake,
      title: "Assistenza",
      description:
        "offriamo supporto completo dal progetto alla realizzazione finale, seguendovi anche nel post vendita",
    },
  ];

  return (
    <section id="valori" className="py-20 section-gradient">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-dark-brown mb-6">
            I Nostri Valori
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            questi principi guidano il nostro lavoro quotidiano e ci permettono
            di offrire sempre il meglio ai nostri clienti
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {valori.map((valore, index) => {
            const Icon = valore.icon;
            return (
              <div
                key={index}
                className="flex-1 min-w-[200px] max-w-[250px] bg-card p-8 rounded-xl shadow-soft hover:shadow-elegant transition-all duration-300 hover:-translate-y-2"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br bg-[#6B3D0E] rounded-full flex items-center justify-center mb-6`}
                >
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-dark-brown mb-4">
                  {valore.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {valore.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ValoriSection;
