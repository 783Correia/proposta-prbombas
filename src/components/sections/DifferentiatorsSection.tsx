import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { BarChart2, Key, Compass, Check, ChevronDown, ChevronUp, X, AlertTriangle } from "lucide-react";

const auditFindings = [
  { status: "error", label: "H1 ausente em todas as páginas", detail: "12 páginas usando <h2> onde deveria ter <h1>" },
  { status: "error", label: "Performance mobile: 59/100", detail: "LCP de 30,9s — meta do Google é < 2,5s" },
  { status: "error", label: "Typo na meta description", detail: '"fale como nossos especilistas" → erro de português visível no Google' },
  { status: "error", label: "Open Graph ausente", detail: "Links compartilhados no WhatsApp não geram preview" },
  { status: "warn", label: "Telefone inconsistente", detail: "3 números diferentes no site, rodapé e Google Meu Negócio" },
  { status: "warn", label: "Copyright 2024 desatualizado", detail: "Rodapé mostrando ano errado — passa descuido" },
  { status: "warn", label: "Contadores zerados nos produtos", detail: "+0 clientes satisfeitos em todas as páginas de produto" },
  { status: "warn", label: "Carrossel triplicando imagens", detail: "Cada produto aparece 3x no HTML — aumenta lentidão" },
];

const keywords = [
  { slug: "qual-bomba-submersa-para-poco-artesiano", title: "Qual Bomba Submersa Escolher para Poço Artesiano?", kw: "bomba submersa para poço artesiano" },
  { slug: "como-instalar-bomba-submersa", title: "Como Instalar Bomba Submersa: Passo a Passo", kw: "como instalar bomba submersa" },
  { slug: "pr-500-vs-pr-650", title: "PR 500 ou PR 650: Qual a Diferença e Qual Comprar?", kw: "bomba submersa pr 500 pr 650" },
  { slug: "bomba-submersa-para-irrigacao-rural", title: "Bomba Submersa para Irrigação Rural: Como Dimensionar?", kw: "bomba submersa irrigação rural" },
  { slug: "por-que-bomba-submersa-para-de-funcionar", title: "Por Que Minha Bomba Submersa Para de Funcionar?", kw: "bomba submersa não funciona" },
  { slug: "manutencao-bomba-submersa", title: "Manutenção de Bomba Submersa: Dicas para Durar Mais", kw: "manutenção bomba submersa" },
  { slug: "bomba-vibratoria-vs-centrifuga", title: "Bomba Vibratória vs Centrífuga: Qual é Melhor?", kw: "bomba vibratória ou centrífuga" },
];

const DifferentiatorsSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [openBonus, setOpenBonus] = useState<number | null>(null);

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
            <span style={{ color: "hsl(36 95% 50%)" }}>Veja o que foi feito.</span>
          </h2>
          <p className="mx-auto max-w-xl text-center text-muted-foreground mb-16 text-balance">
            Clique nos cards para ver o trabalho real. Antes de você decidir qualquer coisa, eu já comecei.
          </p>
        </div>

        <div className="space-y-6">
          {/* Bonus 01 */}
          <BonusCard
            index={0}
            tag="Bônus 01"
            isReady
            title="Auditoria Digital Completa"
            icon={BarChart2}
            description="Auditei o prbombas.com.br antes de mandar essa proposta. Abaixo estão os achados reais — cada problema com a causa identificada."
            isOpen={openBonus === 0}
            onToggle={() => setOpenBonus(openBonus === 0 ? null : 0)}
          >
            <div className="mt-4 space-y-2">
              {auditFindings.map((f) => (
                <div
                  key={f.label}
                  className={`flex items-start gap-3 p-3 rounded-lg text-sm ${
                    f.status === "error" ? "bg-red-50 border border-red-100" : "bg-amber-50 border border-amber-100"
                  }`}
                >
                  {f.status === "error"
                    ? <X className="h-4 w-4 text-red-500 shrink-0 mt-0.5" />
                    : <AlertTriangle className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" />
                  }
                  <div>
                    <p className={`font-semibold ${f.status === "error" ? "text-red-700" : "text-amber-700"}`}>{f.label}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{f.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </BonusCard>

          {/* Bonus 02 */}
          <BonusCard
            index={1}
            tag="Bônus 02"
            isReady
            title="Mapa de Palavras-Chave + Pauta do Blog"
            icon={Key}
            description="7 artigos com intenção de compra real, slug, título e palavra-chave principal definidos. Prontos para publicar."
            isOpen={openBonus === 1}
            onToggle={() => setOpenBonus(openBonus === 1 ? null : 1)}
          >
            <div className="mt-4 overflow-x-auto">
              <table className="w-full text-xs">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-2 pr-4 text-muted-foreground font-semibold">#</th>
                    <th className="text-left py-2 pr-4 text-muted-foreground font-semibold">Título do artigo</th>
                    <th className="text-left py-2 text-muted-foreground font-semibold">Palavra-chave principal</th>
                  </tr>
                </thead>
                <tbody>
                  {keywords.map((k, i) => (
                    <tr key={k.slug} className="border-b border-border/50">
                      <td className="py-2.5 pr-4 text-muted-foreground">{i + 1}</td>
                      <td className="py-2.5 pr-4 text-foreground font-medium leading-snug">{k.title}</td>
                      <td className="py-2.5 text-primary font-mono">{k.kw}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="text-xs text-muted-foreground mt-3">
                + slugs de URL otimizados para SEO: <span className="font-mono text-primary">/blog/{keywords[0].slug}/</span> etc.
              </p>
            </div>
          </BonusCard>

          {/* Bonus 03 */}
          <BonusCard
            index={2}
            tag="Bônus 03"
            isReady={false}
            title="Norte Digital — 2 Aulas Ao Vivo"
            icon={Compass}
            description="Duas aulas ao vivo com a equipe da PR Bombas, nas datas escolhidas pela empresa. Claude, Manus, ChatGPT e as IAs que realmente fazem diferença no dia a dia do negócio."
            isOpen={openBonus === 2}
            onToggle={() => setOpenBonus(openBonus === 2 ? null : 2)}
          >
            <div className="mt-4 space-y-2">
              {[
                { aula: "Aula 1", tema: "IA no dia a dia da empresa", items: ["Claude, Manus, ChatGPT — diferenças e quando usar cada um", "Como produzir conteúdo, propostas e respostas técnicas com IA", "Automações práticas para o time comercial e de suporte"] },
                { aula: "Aula 2", tema: "Estratégia digital para o médio prazo", items: ["Como o ChatGPT e o Claude já indicam fornecedores nas buscas", "O que fazer para a PR Bombas aparecer nessas indicações", "Visão de crescimento digital escalável para os próximos 12 meses"] },
              ].map((a) => (
                <div key={a.aula} className="p-4 rounded-lg bg-background border border-border">
                  <p className="text-xs font-bold tracking-widest uppercase mb-1" style={{ color: "hsl(36 95% 50%)" }}>{a.aula} — {a.tema}</p>
                  <ul className="space-y-1 mt-2">
                    {a.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-xs text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full shrink-0 mt-1" style={{ background: "hsl(36 95% 50%)" }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              <p className="text-xs text-muted-foreground pt-1">Datas definidas pela empresa após o início do projeto.</p>
            </div>
          </BonusCard>
        </div>
      </div>
    </section>
  );
};

interface BonusCardProps {
  index: number;
  tag: string;
  isReady: boolean;
  title: string;
  icon: React.ElementType;
  description: string;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}

const BonusCard = ({ tag, isReady, title, icon: Icon, description, isOpen, onToggle, children }: BonusCardProps) => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <div ref={ref} className={`fade-up glass-card overflow-hidden ${isVisible ? "visible" : ""}`}>
      <button
        onClick={onToggle}
        className="w-full p-8 text-left flex items-start gap-5 hover:bg-black/[0.01] transition-colors"
      >
        <div
          className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-lg"
          style={{ background: "hsl(36 95% 50% / 0.1)", color: "hsl(36 95% 50%)" }}
        >
          <Icon className="h-6 w-6" />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3 mb-1 flex-wrap">
            <span className="text-xs font-bold tracking-[0.2em] uppercase" style={{ color: "hsl(36 95% 50%)" }}>
              {tag}
            </span>
            {isReady && (
              <span className="flex items-center gap-1 text-xs font-bold px-2.5 py-0.5 rounded-full bg-green-50 text-green-700 border border-green-200">
                <Check className="h-3 w-3" />
                Já feito — clique para ver
              </span>
            )}
          </div>
          <h3 className="heading-display text-lg font-bold text-foreground leading-tight mb-1">{title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
        </div>

        <div className="shrink-0 text-muted-foreground mt-1">
          {isOpen ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
        </div>
      </button>

      {isOpen && (
        <div className="px-8 pb-8 border-t border-border">
          {children}
        </div>
      )}
    </div>
  );
};

export default DifferentiatorsSection;
