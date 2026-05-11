import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Smartphone, Search, MousePointerClick, AlertTriangle } from "lucide-react";

const cards = [
  {
    icon: Smartphone,
    title: "O site não funciona bem no celular.",
    description:
      "Mais de 70% das buscas industriais hoje acontecem pelo smartphone. Um site que quebra no mobile afasta clientes antes mesmo de eles lerem o que a empresa oferece. Primeira impressão ruim = lead perdido.",
  },
  {
    icon: Search,
    title: "Invisível no Google.",
    description:
      "Sem estrutura de SEO, a PR Bombas não aparece quando alguém busca 'bomba centrífuga Paraná' ou 'bomba de água industrial'. Concorrentes menores aparecem primeiro. O cliente vai para quem aparece.",
  },
  {
    icon: MousePointerClick,
    title: "Nenhum caminho claro para conversão.",
    description:
      "O visitante chega ao site, não encontra um CTA direto, não sabe como pedir orçamento, e vai embora. Um site sem estrutura de conversão é vitrine sem vendedor — bonito talvez, mas não vende.",
  },
  {
    icon: AlertTriangle,
    title: "Visual defasado passa insegurança.",
    description:
      "Design antigo comunica empresa parada no tempo. No segmento industrial, credibilidade é tudo. Um site que parece dos anos 2010 levanta dúvidas sobre a qualidade do produto — mesmo que o produto seja excelente.",
  },
];

const DiagnosisSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="oportunidade" className="relative py-24 sm:py-32">
      <div className="section-container">
        <div ref={ref} className={`fade-up ${isVisible ? "visible" : ""}`}>
          <p className="text-center text-sm font-medium tracking-[0.3em] uppercase text-primary mb-3">
            O Diagnóstico
          </p>
          <h2 className="heading-display text-center text-3xl font-bold sm:text-4xl md:text-5xl text-foreground mb-4">
            O site atual está custando clientes.
          </h2>
          <p className="mx-auto max-w-xl text-center text-muted-foreground mb-16 text-balance">
            Não é julgamento — é o que os dados mostram. Cada ponto abaixo é uma oportunidade perdida hoje que o novo site vai resolver.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {cards.map((card, i) => (
            <DiagnosisCard key={card.title} card={card} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface DiagnosisCardProps {
  card: (typeof cards)[number];
  index: number;
}

const DiagnosisCard = ({ card, index }: DiagnosisCardProps) => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const Icon = card.icon;

  return (
    <div
      ref={ref}
      className={`fade-up glass-card p-8 transition-all duration-500 ${isVisible ? "visible" : ""}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="heading-display text-lg font-bold text-foreground mb-3 leading-tight">
        {card.title}
      </h3>
      <p className="text-sm leading-relaxed text-muted-foreground">
        {card.description}
      </p>
    </div>
  );
};

export default DiagnosisSection;
