const OCIOSO_MS = 9000;
const DISTANCIA_PULO = 260;

export function ligarReacoes(grupo) {
  if (!grupo.length) return;
  let timerOcioso;

  const acordar = () => {
    grupo.forEach((c) => c.acordar());
    clearTimeout(timerOcioso);
    timerOcioso = setTimeout(() => grupo.forEach((c) => c.dormir()), OCIOSO_MS);
  };

  // olham para o cursor
  addEventListener("pointermove", (e) => {
    if (e.pointerType === "touch") return;
    grupo.forEach((c) => c.olharPara(e.clientX));
    acordar();
  }, { passive: true });

  // pulam quando a pessoa rola a página
  let ultimo = scrollY;
  addEventListener("scroll", () => {
    if (Math.abs(scrollY - ultimo) < DISTANCIA_PULO) return;
    ultimo = scrollY;
    acordar();
    grupo.forEach((c, i) => setTimeout(() => c.pular(), i * 140));
  }, { passive: true });

  // comentam cada seção nova e marcam o menu
  const links = [...document.querySelectorAll("#menu a")];
  let atual = "";
  let vez = 0;
  const observador = new IntersectionObserver((entradas) => {
    entradas.filter((e) => e.isIntersecting).forEach(({ target }) => {
      if (target.id === atual) return;
      atual = target.id;
      links.forEach((a) => a.setAttribute("aria-current", String(a.hash === `#${atual}`)));
      const quem = grupo[vez++ % grupo.length];
      const fala = quem.falas.secao[atual];
      if (fala) { quem.acordar(); quem.pular(); quem.falar(fala); }
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  document.querySelectorAll("main section").forEach((s) => observador.observe(s));

  acordar();
}