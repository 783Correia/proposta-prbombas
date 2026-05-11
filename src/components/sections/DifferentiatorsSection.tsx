import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { BarChart2, Key, Compass } from "lucide-react";

const bonuses = [
  {
    icon: BarChart2,
    tag: "Bônus 01",
    title: "Auditoria Digital + Estratégia na Minha Visão",
    description:
      "Um diagnóstico completo da presença digital atual da PR Bombas: o que está funcionando, o que está prejudicando, e qual seria o caminho ideal para crescer online. Entregue em documento estratégico com recomendações priorizadas.",
    items: [
      "Análise do site atual",
      "Benchmark de concorrentes",
      "Oportunidades identificadas",
      "Roadmap de prioridades",
    ],
  },
  {
    icon: Key,
    tag: "Bônus 02",
    title: "Mapa de Palavras-Chave + Campanhas",
    description:
      "Levantamento das principais palavras-chave que o público da PR Bombas está buscando no Google — bombas centrífugas, manutenção hidráulica, equipamentos industriais e muito mais. Serve como base para SEO e futuras campanhas.",
    items: [
      "Palavras-chave de intenção de compra",
      "Termos técnicos do segmento",
      "Volume de busca mensal",
      "Sugestão de conteúdos a criar",
    ],
  },
  {
    icon: Compass,
    tag: "Bônus 03",
    title: "Norte Digital — 2 Aulas Ao Vivo",
    description:
      "Duas aulas ao vivo com a equipe da PR Bombas, nas datas escolhidas pela empresa. Conteúdo sob medida: como usar IA para ganhar eficiência, quais ferramentas fazem sentido para o seu porte, e como construir uma presença digital escalável no médio prazo.",
    items: [
      "2 encontros ao vivo — datas à escolha da empresa",
      "Ferramentas de IA aplicadas ao negócio",
      "Como usar ChatGPT, Notion AI e similares",
      "Estratégia de conteúdo com menos esforço",
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
            Além do site,{" "}
            <span style={{ color: "hsl(36 95% 50%)" }}>três entregas</span>
            <br />
            que vão além da concorrência.
          </h2>
          <p className="mx-auto max-w-xl text-center text-muted-foreground mb-16 text-balance">
            Esses bônus não são padding — são o que diferencia um site novo de uma estratégia digital de verdade.
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

  return (
    <div
      ref={ref}
      className={`fade-up glass-card p-8 flex flex-col ${isVisible ? "visible" : ""}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div
        className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg"
        style={{ background: "hsl(36 95% 50% / 0.1)", color: "hsl(36 95% 50%)" }}
      >
        <Icon className="h-6 w-6" />
      </div>

      <span
        className="text-xs font-bold tracking-[0.25em] uppercase mb-2"
        style={{ color: "hsl(36 95% 50%)" }}
      >
        {bonus.tag}
      </span>

      <h3 className="heading-display text-lg font-bold text-foreground mb-3 leading-tight">
        {bonus.title}
      </h3>

      <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
        {bonus.description}
      </p>

      <ul className="space-y-2">
        {bonus.items.map((item) => (
          <li key={item} className="flex items-center gap-2 text-xs text-muted-foreground">
            <span
              className="w-1.5 h-1.5 rounded-full shrink-0"
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
