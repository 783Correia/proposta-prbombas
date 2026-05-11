import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Smartphone, Search, MousePointerClick, Zap } from "lucide-react";

const cards = [
  {
    icon: Zap,
    title: "Performance crítica no celular.",
    badge: "Score 59/100",
    description:
      "O site atual leva 30,9 segundos para carregar o conteúdo principal no mobile. A meta do Google é 2,5s. Isso significa que a maioria dos visitantes abandona antes de ver qualquer produto — e o algoritmo penaliza o posicionamento.",
  },
  {
    icon: Search,
    title: "Estrutura que prejudica o Google.",
    badge: "H1 ausente em todas as páginas",
    description:
      "Nenhuma página do site tem H1 — o elemento mais importante para o Google entender do que se trata cada página. Todas usam H2 no lugar. Isso, combinado com title tags sem localização, deixa a PR Bombas invisível para quem busca 'bomba submersa Pouso Redondo' ou 'bomba submersa SC'.",
  },
  {
    icon: MousePointerClick,
    title: "Bugs que afastam clientes.",
    badge: "3 erros identificados",
    description:
      "Contadores zerados nas páginas de produto (+0 clientes satisfeitos), carrossel que triplica as imagens no HTML causando lentidão, e número de telefone diferente no site, no rodapé e no Google Meu Negócio. Cada detalhe assim passa insegurança para quem está avaliando comprar.",
  },
  {
    icon: Smartphone,
    title: "Invisível onde o cliente pesquisa.",
    badge: "OG tags ausentes",
    description:
      "O site não tem Open Graph configurado — quando alguém compartilha um link no WhatsApp, não aparece imagem nem descrição. E há um ponto crítico: o ChatGPT, o Claude e outros assistentes de IA já indicam fornecedores nas respostas. Sites lentos feitos em plataformas antigas praticamente não aparecem nessas indicações. Você perde o cliente antes de ele chegar ao site.",
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
            Já auditei o site atual.
            <br />
            <span className="neon-text">Os problemas são concretos.</span>
          </h2>
          <p className="mx-auto max-w-xl text-center text-muted-foreground mb-16 text-balance">
            Antes de montar essa proposta, analisei o prbombas.com.br com ferramentas reais. Isso é o que encontrei.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {cards.map((card, i) => (
            <DiagnosisCard key={card.title} card={card} index={i} />
          ))}
        </div>

        <div className={`fade-up mt-8 rounded-2xl border border-destructive/20 bg-destructive/[0.03] p-6 ${isVisible ? "visible" : ""}`}>
          <div className="grid gap-6 sm:grid-cols-4 text-center">
            {[
              { value: "59/100", label: "Performance mobile", color: "text-red-500" },
              { value: "30,9s", label: "LCP atual (meta: 2,5s)", color: "text-red-500" },
              { value: "0 / 12", label: "Páginas com H1", color: "text-red-500" },
              { value: "3", label: "Bugs de UX ativos", color: "text-amber-500" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className={`heading-display text-3xl font-bold ${stat.color}`}>{stat.value}</p>
                <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
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
      <div className="flex items-start justify-between mb-6">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
          <Icon className="h-6 w-6" />
        </div>
        <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-red-50 text-red-600 border border-red-100">
          {card.badge}
        </span>
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
