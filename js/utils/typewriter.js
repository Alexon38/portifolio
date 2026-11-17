export function digitar(elemento, texto, velocidade = 35) {
  const reduzir = matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduzir) { elemento.textContent = texto; return; }

  elemento.classList.add("typing");
  let i = 0;
  const passo = () => {
    elemento.textContent = texto.slice(0, ++i);
    if (i < texto.length) setTimeout(passo, velocidade);
    else elemento.classList.remove("typing");
  };
  passo();
}