import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { TrendingUp, Phone, MousePointerClick, BarChart3, ExternalLink } from "lucide-react";

const caseStats = [
  {
    icon: TrendingUp,
    value: "12,68%",
    label: "Taxa de conversão Google Ads",
    note: "média do setor é 3–4%",
    positive: true,
  },
  {
    icon: Phone,
    value: "+28,57%",
    label: "Ligações mensais via GMB",
    note: "de 14 para 18 ligações/mês",
    positive: true,
  },
  {
    icon: MousePointerClick,
    value: "+41,67%",
    label: "Cliques no site via GMB",
    note: "de 12 para 17 cliques/mês",
    positive: true,
  },
  {
    icon: BarChart3,
    value: "102",
    label: "Ações mensais no Google",
    note: "buscas, rotas e ligações combinadas",
    positive: true,
  },
];

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const { ref: caseRef, isVisible: caseVisible } = useScrollAnimation(0.1);

  return (
    <section id="sobre" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 gradient-radial" />
      <div className="section-container relative z-10">

        <div ref={ref} className={`fade-up ${isVisible ? "visible" : ""}`}>
          <p className="text-center text-sm font-medium tracking-[0.3em] uppercase text-primary mb-3">
            Quem está propondo
          </p>
          <h2 className="heading-display text-center text-3xl font-bold sm:text-4xl md:text-5xl text-foreground mb-4">
            Yuri Correia.
            <br />
            <span className="neon-text">Estruturas digitais que geram resultado.</span>
          </h2>
          <p className="mx-auto max-w-2xl text-center text-muted-foreground mb-6 text-balance">
            Trabalho com empresas que querem presença digital séria — site, posicionamento e estratégia integrados.
            Não entrego só layout. Entrego estrutura que trabalha por você quando ninguém está olhando.
          </p>
          <div className="flex justify-center mb-16">
            <a
              href="https://ocorreia.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
            >
              ocorreia.com.br
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>

        <div ref={caseRef} className={`fade-up ${caseVisible ? "visible" : ""}`}>
          <div className="rounded-2xl border border-primary/20 bg-primary/[0.03] p-8 sm:p-10">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
              <div>
                <p className="text-xs font-bold tracking-[0.25em] uppercase text-muted-foreground mb-1">Case ativo</p>
                <h3 className="heading-display text-2xl font-bold text-foreground">Jaco Locadora</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Locação de plataformas elevatórias · SC · Gestão Google Ads + GMB + SEO
                </p>
              </div>
              <span className="self-start sm:self-auto inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full bg-green-50 text-green-700 border border-green-200">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />
                Relatório Abril 2026
              </span>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-8">
              {caseStats.map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={stat.label}
                    className="glass-card p-5"
                    style={{ transitionDelay: `${i * 100}ms` }}
                  >
                    <div className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary mb-3">
                      <Icon className="h-4 w-4" />
                    </div>
                    <p className="heading-display text-2xl font-bold text-foreground">{stat.value}</p>
                    <p className="text-xs font-semibold text-foreground mt-1">{stat.label}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{stat.note}</p>
                  </div>
                );
              })}
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed border-t border-border pt-6">
              <span className="font-semibold text-foreground">O que isso significa na prática:</span>{" "}
              enquanto a média do Google Ads converte 3 em cada 100 cliques, as campanhas da Jaco convertem quase 13.
              Isso é resultado de estrutura — site, campanha e Google Meu Negócio trabalhando juntos.
              O mesmo raciocínio se aplica à PR Bombas.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
