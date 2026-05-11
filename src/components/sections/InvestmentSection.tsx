import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Check, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const included = [
  "Design profissional com identidade visual da empresa",
  "Site 100% responsivo (mobile, tablet e desktop)",
  "5+ páginas: Home, Sobre, Produtos, Aplicações, Contato",
  "Formulário de orçamento integrado",
  "SEO on-page: meta tags, sitemap, schema markup",
  "Performance otimizada (Core Web Vitals)",
  "CMS para edição sem programador",
  "Publicação no domínio + SSL",
  "Suporte pós-entrega para a estrutura do site — 12 meses",
  "Auditoria digital + estratégia (bônus)",
  "Mapa de palavras-chave + campanhas (bônus)",
  "Norte Digital — 2 aulas ao vivo (bônus)",
];

const comparisons = [
  { label: "Agência grande (site simples, sem estratégia)", value: "R$8.000–20.000", included: false },
  { label: "Freelancer genérico (design básico, sem SEO)", value: "R$1.500–3.000", included: false },
  { label: "Construtores de site (Wix, Squarespace)", value: "R$100/mês para sempre", included: false },
  { label: "Site profissional + 3 bônus estratégicos", value: "R$4.500 único", included: true },
];

const InvestmentSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const { ref: compRef, isVisible: compVisible } = useScrollAnimation(0.1);

  return (
    <section id="investimento" className="relative py-24 sm:py-32">
      <div className="section-container">
        <div ref={ref} className={`fade-up ${isVisible ? "visible" : ""}`}>
          <p className="text-center text-sm font-medium tracking-[0.3em] uppercase text-primary mb-3">
            Investimento
          </p>
          <h2 className="heading-display text-center text-3xl font-bold sm:text-4xl md:text-5xl text-foreground mb-4">
            Valor único. Sem mensalidade.
          </h2>
          <p className="mx-auto max-w-xl text-center text-muted-foreground mb-16">
            Você paga uma vez e o site é seu para sempre. Sem assinatura, sem taxa mensal, sem surpresa.
          </p>
        </div>

        <div className="mx-auto max-w-4xl grid gap-8 lg:grid-cols-2">
          <div className={`fade-up ${isVisible ? "visible" : ""}`}>
            <div className="relative flex flex-col rounded-xl border border-primary/30 bg-primary/[0.04] shadow-[0_0_30px_hsl(209_80%_38%/0.08)] p-8 h-full">
              <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 text-xs font-bold tracking-wider uppercase whitespace-nowrap">
                Estrutura Completa + 3 Bônus
              </Badge>

              <div className="mb-6 mt-2">
                <h3 className="heading-display text-xl font-bold text-foreground">Site PR Bombas</h3>
                <p className="text-xs text-muted-foreground mt-1">Entrega em 7 dias</p>
              </div>

              <div className="mb-6 border-y border-border py-6">
                <p className="text-xs text-muted-foreground mb-1">Investimento total</p>
                <p className="heading-display text-5xl font-bold text-foreground">R$4.500</p>
                <p className="text-sm text-primary mt-1 font-medium">pagamento único · sem mensalidade</p>
              </div>

              <div className="mb-6 grid grid-cols-2 gap-3">
                <div className="p-4 rounded-lg bg-background border border-border">
                  <p className="text-xs text-muted-foreground mb-1">Em 2x</p>
                  <p className="heading-display text-xl font-bold text-foreground">2× R$2.250</p>
                  <p className="text-xs text-muted-foreground mt-0.5">entrada + entrega</p>
                </div>
                <div className="p-4 rounded-lg bg-primary/[0.06] border border-primary/20">
                  <p className="text-xs text-muted-foreground mb-1">À vista</p>
                  <p className="heading-display text-xl font-bold text-primary">R$4.500</p>
                  <p className="text-xs text-primary mt-0.5 font-medium">sem acréscimo</p>
                </div>
              </div>

              <ul className="flex-1 space-y-2.5">
                {included.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div ref={compRef} className={`fade-up ${compVisible ? "visible" : ""}`}>
            <div className="glass-card p-8 h-full flex flex-col">
              <p className="text-xs font-bold tracking-[0.25em] uppercase text-muted-foreground mb-6">
                Comparativo de mercado
              </p>
              <div className="space-y-3 flex-1">
                {comparisons.map((c) => (
                  <div
                    key={c.label}
                    className={`flex items-start gap-3 p-4 rounded-lg ${c.included ? "bg-primary/[0.06] border border-primary/20" : "bg-muted/40"}`}
                  >
                    {c.included ? (
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    ) : (
                      <X className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground/40" />
                    )}
                    <div>
                      <p className={`text-sm font-medium ${c.included ? "text-foreground" : "text-muted-foreground"}`}>
                        {c.label}
                      </p>
                      <p className={`text-xs mt-0.5 ${c.included ? "text-primary font-semibold" : "text-muted-foreground/60 line-through"}`}>
                        {c.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-xs text-muted-foreground leading-relaxed border-t border-border pt-4">
                Não é o mais barato. Não é o mais caro. É o que entrega resultado real para o tamanho e o momento da PR Bombas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentSection;
