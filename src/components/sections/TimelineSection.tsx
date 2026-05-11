import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const steps = [
  {
    week: "Semana 1",
    title: "Briefing + Estrutura",
    description: "Reunião de alinhamento, levantamento de conteúdo, definição das páginas e wireframes aprovados.",
  },
  {
    week: "Semana 2",
    title: "Design + Identidade",
    description: "Criação do layout completo com identidade visual da PR Bombas aplicada. Aprovação do design antes de codar.",
  },
  {
    week: "Semana 3",
    title: "Desenvolvimento",
    description: "Construção do site com todas as páginas, formulários, otimização mobile e integração de SEO on-page.",
  },
  {
    week: "Semana 4",
    title: "Revisão + Entrega",
    description: "Rodada de ajustes, testes em todos os dispositivos, publicação no domínio e handoff do painel de edição.",
  },
];

const TimelineSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="cronograma" className="relative py-24 sm:py-32">
      <div className="section-container">
        <div ref={ref} className={`fade-up ${isVisible ? "visible" : ""}`}>
          <p className="text-center text-sm font-medium tracking-[0.3em] uppercase text-primary mb-3">
            Cronograma
          </p>
          <h2 className="heading-display text-center text-3xl font-bold sm:text-4xl md:text-5xl text-foreground mb-4">
            4 semanas. Site no ar.
          </h2>
          <p className="mx-auto max-w-xl text-center text-muted-foreground mb-16">
            Processo claro, sem surpresas. Cada semana tem uma entrega definida e aprovação antes de avançar.
          </p>
        </div>

        <div className="relative mx-auto max-w-3xl">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-border sm:left-1/2 sm:-translate-x-px" />

          <div className="space-y-12">
            {steps.map((step, i) => (
              <TimelineStep key={step.week} step={step} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

interface TimelineStepProps {
  step: (typeof steps)[number];
  index: number;
}

const TimelineStep = ({ step, index }: TimelineStepProps) => {
  const { ref, isVisible } = useScrollAnimation(0.2);
  const isEven = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`fade-up relative flex gap-6 sm:gap-0 ${isEven ? "sm:flex-row" : "sm:flex-row-reverse"} ${isVisible ? "visible" : ""}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary border-2 border-background mt-1.5 sm:mt-4" />

      <div className={`pl-12 sm:pl-0 sm:w-1/2 ${isEven ? "sm:pr-12" : "sm:pl-12"}`}>
        <div className="glass-card p-6">
          <p className="text-xs font-bold tracking-[0.25em] uppercase text-primary mb-1">{step.week}</p>
          <h3 className="heading-display text-lg font-bold text-foreground mb-2">{step.title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
        </div>
      </div>
    </div>
  );
};

export default TimelineSection;
