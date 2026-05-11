const FloatingStrategyButton = () => {
  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 sm:left-auto sm:right-6 sm:w-auto">
      <button
        onClick={() => document.getElementById("investimento")?.scrollIntoView({ behavior: "smooth" })}
        className="block w-full sm:w-auto rounded-2xl border border-primary/20 bg-white/90 backdrop-blur-xl px-6 py-4 text-center text-sm font-bold tracking-wide text-primary transition-all duration-300 hover:bg-primary hover:text-white hover:border-primary hover:shadow-[0_4px_20px_hsl(209_80%_38%/0.3)] shadow-[0_2px_12px_hsl(209_80%_38%/0.15)]"
      >
        Ver Investimento
      </button>
    </div>
  );
};

export default FloatingStrategyButton;
