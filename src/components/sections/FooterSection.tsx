import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const FooterSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 gradient-radial" />
      <div className="section-container relative z-10">
        <div ref={ref} className={`fade-up text-center ${isVisible ? "visible" : ""}`}>
          <p className="text-sm font-medium tracking-[0.3em] uppercase text-primary mb-6">
            Próximo Passo
          </p>

          <h2 className="heading-display text-4xl font-bold sm:text-5xl md:text-6xl text-foreground mb-6 text-balance">
            Pronto para ter um site
            <br />
            <span className="neon-text">que trabalha por você?</span>
          </h2>

          <p className="mx-auto max-w-xl text-lg text-muted-foreground mb-10 text-balance">
            Essa proposta é exclusiva e tem prazo de validade. Me chama agora e a gente começa essa semana.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/5541999999999?text=Oi%20Yuri%2C%20vi%20a%20proposta%20da%20PR%20Bombas%20e%20quero%20conversar!"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full bg-primary px-8 py-4 text-sm font-semibold text-white transition-all hover:bg-primary/90 hover:shadow-[0_4px_20px_hsl(209_80%_38%/0.4)]"
            >
              Falar pelo WhatsApp
            </a>
            <a
              href="mailto:yuricorrea.ty@gmail.com"
              className="inline-flex items-center gap-3 rounded-full border border-border px-8 py-4 text-sm font-semibold text-foreground transition-all hover:border-primary/40 hover:bg-primary/[0.04]"
            >
              Enviar por e-mail
            </a>
          </div>

          <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
            <p>Proposta exclusiva para PR Bombas · Yuri Correia · 2026</p>
            <p>Válida por 24 horas a partir do recebimento</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterSection;
