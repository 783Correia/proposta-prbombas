import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Layout, Smartphone, Zap, FileText, Search, Settings } from "lucide-react";

const deliverables = [
  {
    icon: Layout,
    label: "Design profissional",
    desc: "Identidade visual aplicada",
    detail: "Layout moderno, hierarquia visual clara, cores e tipografia da marca",
  },
  {
    icon: Smartphone,
    label: "100% responsivo",
    desc: "Funciona em qualquer tela",
    detail: "Desktop, tablet e mobile — experiência perfeita em todos os dispositivos",
  },
  {
    icon: Zap,
    label: "Performance",
    desc: "Rápido do jeito certo",
    detail: "Tempo de carregamento otimizado, imagens comprimidas, Core Web Vitals positivos",
  },
  {
    icon: Search,
    label: "SEO On-page",
    desc: "Pronto para o Google",
    detail: "Meta tags, títulos estruturados, sitemap, robots.txt e schema markup básico",
  },
  {
    icon: FileText,
    label: "Páginas completas",
    desc: "Tudo que a empresa precisa",
    detail: "Home, Sobre, Produtos/Serviços, Aplicações, Contato + formulário de orçamento",
  },
  {
    icon: Settings,
    label: "CMS simples",
    desc: "Edição sem programador",
    detail: "Painel para atualizar textos, imagens e produtos sem depender de dev",
  },
];

const StrategySection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const { ref: featRef, isVisible: featVisible } = useScrollAnimation(0.1);

  return (
    <section id="escopo" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 gradient-radial" />

      <div className="section-container relative z-10">
        <div ref={ref} className={`fade-up ${isVisible ? "visible" : ""}`}>
          <p className="text-center text-sm font-medium tracking-[0.3em] uppercase text-primary mb-3">
            O Que Está Incluído
          </p>
          <h2 className="heading-display mx-auto max-w-3xl text-center text-3xl font-bold sm:text-4xl md:text-5xl text-foreground mb-6 text-balance">
            Estrutura completa.
            <br />
            <span className="neon-text">Pronto para trabalhar por você.</span>
          </h2>
          <p className="mx-auto max-w-2xl text-center text-lg leading-relaxed text-muted-foreground mb-16">
            Tudo que a PR Bombas precisa para ter uma presença digital sólida, profissional e funcional — entregue em até 4 semanas.
          </p>
        </div>

        <div
          ref={featRef}
          className={`fade-up grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-16 ${featVisible ? "visible" : ""}`}
        >
          {deliverables.map((d, i) => {
            const Icon = d.icon;
            return (
              <div
                key={d.label}
                className="glass-card p-6 flex flex-col gap-4"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-bold tracking-[0.2em] uppercase text-primary mb-1">{d.label}</p>
                  <p className="text-sm font-semibold text-foreground mb-1">{d.desc}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{d.detail}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="rounded-2xl border border-primary/20 bg-primary/[0.03] p-8 sm:p-10">
          <div className="grid gap-8 sm:grid-cols-2 items-center">
            <div>
              <p className="text-sm font-medium tracking-[0.3em] uppercase text-primary mb-3">Foco total em conversão</p>
              <h3 className="heading-display text-2xl font-bold text-foreground mb-3">
                CTAs claros. Formulário de orçamento. Contato direto.
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                O objetivo do site não é ser bonito — é gerar contato. Cada página vai ter um caminho claro para o visitante pedir orçamento, ligar ou mandar mensagem. Simples. Direto. Eficiente.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "5+", label: "páginas entregues" },
                { value: "4sem", label: "prazo de entrega" },
                { value: "SEO", label: "on-page incluído" },
                { value: "CMS", label: "painel de edição" },
              ].map((stat) => (
                <div key={stat.label} className="text-center p-4 rounded-lg bg-background">
                  <p className="heading-display text-2xl font-bold neon-text">{stat.value}</p>
                  <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StrategySection;
