import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ShieldCheck, TrendingUp, Clock, Users } from "lucide-react";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Credibilidade que fecha negócio.",
    description:
      "No segmento industrial B2B, a decisão de compra envolve pesquisa. O comprador vai ao site antes de ligar. Um site profissional valida a empresa e dá segurança para o contato — sem ele, o lead desaparece silenciosamente.",
  },
  {
    icon: TrendingUp,
    title: "Primeira impressão conta mais do que nunca.",
    description:
      "Você tem menos de 5 segundos para convencer um visitante a ficar. Um site lento, desorganizado ou com visual antigo comunica negligência. O novo site vai comunicar: 'essa empresa é séria e sabe o que faz'.",
  },
  {
    icon: Clock,
    title: "Disponível 24 horas, sem custo adicional.",
    description:
      "O site trabalha enquanto a equipe descansa. Catálogo de produtos, especificações técnicas, formulário de orçamento — tudo acessível a qualquer hora para clientes em qualquer região do país.",
  },
  {
    icon: Users,
    title: "Alcança quem você ainda não conhece.",
    description:
      "Clientes que nunca ouviram falar da PR Bombas mas estão buscando soluções hidráulicas no Google. Um site bem estruturado com SEO básico já posiciona a empresa na frente desse público de forma orgânica.",
  },
];

const CasesSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="por-que" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 gradient-radial" />
      <div className="section-container relative z-10">
        <div ref={ref} className={`fade-up ${isVisible ? "visible" : ""}`}>
          <p className="text-center text-sm font-medium tracking-[0.3em] uppercase text-primary mb-3">
            Por Que Investir
          </p>
          <h2 className="heading-display text-center text-3xl font-bold sm:text-4xl md:text-5xl text-foreground mb-4">
            Um site melhor não é gasto.
            <br />
            <span className="neon-text">É estrutura de vendas.</span>
          </h2>
          <p className="mx-auto max-w-xl text-center text-muted-foreground mb-16 text-balance">
            O site é o único vendedor que não tira folga, não pede comissão e atende o cliente antes de qualquer ligação acontecer.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((r, i) => (
            <ReasonCard key={r.title} reason={r} index={i} />
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-primary/20 bg-primary/[0.03] p-8 sm:p-10">
          <div className="grid gap-8 sm:grid-cols-3 items-center text-center">
            {[
              { value: "70%+", label: "das buscas industriais são no celular" },
              { value: "5s", label: "para convencer o visitante a ficar" },
              { value: "1ª", label: "impressão define se haverá contato" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="heading-display text-4xl font-bold neon-text mb-2">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

interface ReasonCardProps {
  reason: (typeof reasons)[number];
  index: number;
}

const ReasonCard = ({ reason, index }: ReasonCardProps) => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const Icon = reason.icon;

  return (
    <div
      ref={ref}
      className={`fade-up glass-card p-6 flex flex-col gap-4 ${isVisible ? "visible" : ""}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <p className="text-sm font-semibold text-foreground mb-1 leading-tight">{reason.title}</p>
        <p className="text-xs text-muted-foreground leading-relaxed">{reason.description}</p>
      </div>
    </div>
  );
};

export default CasesSection;
