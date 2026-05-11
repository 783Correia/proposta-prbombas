import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { BarChart2, Key, Compass, Check } from "lucide-react";

const bonuses = [
  {
    icon: BarChart2,
    tag: "Bônus 01 — Já feito",
    title: "Auditoria Digital Completa",
    description:
      "Auditei o prbombas.com.br antes de mandar essa proposta. O relatório já está pronto e será entregue no dia 1 — sem espera. Inclui cada problema identificado, a causa raiz e a correção exata a aplicar.",
    items: [
      "Score mobile: 59/100 → meta: 85+",
      "LCP atual 30,9s → meta < 2,5s",
      "H1 ausente em todas as 12 páginas",
      "3 bugs de UX documentados com correção",
      "Title tags e meta descriptions reescritas por página",
      "Open Graph e Schema Markup mapeados",
    ],
  },
  {
    icon: Key,
    tag: "Bônus 02 — Já feito",
    title: "Mapa de Palavras-Chave + Pauta do Blog",
    description:
      "Pesquisei as buscas reais do público da PR Bombas. Palavras com intenção de compra, termos técnicos do segmento e oportunidades de conteúdo que nenhum concorrente está explorando direito.",
    items: [
      "bomba submersa para poço artesiano",
      "como instalar bomba submersa",
      "bomba submersa para irrigação rural",
      "PR 500 vs PR 650 — qual comprar?",
      "bomba vibratória vs centrífuga submersa",
      "7 artigos com slug, título e palavra-chave principal prontos",
    ],
  },
  {
    icon: Compass,
    tag: "Bônus 03",
    title: "Norte Digital — 2 Aulas Ao Vivo",
    description:
      "Duas aulas ao vivo com a equipe da PR Bombas, nas datas escolhidas pela empresa. Conteúdo sob medida: como usar IA para ganhar eficiência, quais ferramentas fazem sentido para o porte da empresa, e como construir presença digital escalável.",
    items: [
      "2 encontros ao vivo — datas à escolha da empresa",
      "Ferramentas de IA aplicadas ao negócio",
      "Como produzir conteúdo com menos esforço",
      "Visão de médio prazo para o digital da PR Bombas",
    ],
  },
];

const DifferentiatorsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="bonus" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 gradient-radial" />
      <div className="section-container relative z-10">
        <div ref={ref} className={`fade-up ${isVisible ? "visible" : ""}`}>
          <p className="text-center text-sm font-medium tracking-[0.3em] uppercase mb-3" style={{ color: "hsl(36 95% 50%)" }}>
            Bônus Exclusivos
          </p>
          <h2 className="heading-display text-center text-3xl font-bold sm:text-4xl md:text-5xl text-foreground mb-4">
            Dois já estão prontos.{" "}
            <br />
            <span style={{ color: "hsl(36 95% 50%)" }}>Você recebe no dia 1.</span>
          </h2>
          <p className="mx-auto max-w-xl text-center text-muted-foreground mb-16 text-balance">
            Antes de enviar essa proposta, já fiz a auditoria e o mapa de palavras-chave. O trabalho não começa quando você assina — já começou.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {bonuses.map((bonus, i) => (
            <BonusCard key={bonus.tag} bonus={bonus} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface BonusCardProps {
  bonus: (typeof bonuses)[number];
  index: number;
}

const BonusCard = ({ bonus, index }: BonusCardProps) => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const Icon = bonus.icon;
  const isReady = bonus.tag.includes("Já feito");

  return (
    <div
      ref={ref}
      className={`fade-up glass-card p-8 flex flex-col ${isVisible ? "visible" : ""}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="flex items-start justify-between mb-4">
        <div
          className="inline-flex h-12 w-12 items-center justify-center rounded-lg"
          style={{ background: "hsl(36 95% 50% / 0.1)", color: "hsl(36 95% 50%)" }}
        >
          <Icon className="h-6 w-6" />
        </div>
        {isReady && (
          <span className="flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-full bg-green-50 text-green-700 border border-green-200">
            <Check className="h-3 w-3" />
            Já feito
          </span>
        )}
      </div>

      <span
        className="text-xs font-bold tracking-[0.2em] uppercase mb-2"
        style={{ color: "hsl(36 95% 50%)" }}
      >
        {bonus.tag.replace(" — Já feito", "")}
      </span>

      <h3 className="heading-display text-lg font-bold text-foreground mb-3 leading-tight">
        {bonus.title}
      </h3>

      <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
        {bonus.description}
      </p>

      <ul className="space-y-2">
        {bonus.items.map((item) => (
          <li key={item} className="flex items-start gap-2 text-xs text-muted-foreground">
            <span
              className="w-1.5 h-1.5 rounded-full shrink-0 mt-1"
              style={{ background: "hsl(36 95% 50%)" }}
            />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DifferentiatorsSection;
