const sortear = (lista) => lista[Math.floor(Math.random() * lista.length)];

export function criarCompanheiro(cfg) {
  const el = document.createElement("div");
  el.className = `companheiro ${cfg.lado}`;

  const balao = document.createElement("p");
  balao.className = "balao";
  balao.setAttribute("aria-hidden", "true");

  const botao = document.createElement("button");
  botao.type = "button";
  botao.setAttribute("aria-label", `Chamar ${cfg.nome}`);

  const img = new Image();
  img.alt = "";
  img.src = cfg.sprite;
  img.addEventListener("error", () => el.remove()); // sem sprite, some sem quebrar o site

  botao.append(img);
  el.append(balao, botao);

  let timer;
  const api = {
    el,
    nome: cfg.nome,
    falas: cfg.falas,
    pular() {
      el.classList.remove("pula");
      void el.offsetWidth; // reinicia a animação
      el.classList.add("pula");
    },
    falar(texto, ms = 2400) {
      balao.textContent = texto;
      el.classList.add("fala");
      clearTimeout(timer);
      timer = setTimeout(() => el.classList.remove("fala"), ms);
    },
    olharPara(x) {
      const caixa = el.getBoundingClientRect();
      img.classList.toggle("vira", x > caixa.left + caixa.width / 2);
    },
    dormir: () => el.classList.add("ocioso"),
    acordar: () => el.classList.remove("ocioso"),
  };

  botao.addEventListener("click", () => {
    api.acordar();
    api.pular();
    api.falar(sortear(cfg.falas.clique));
  });
  return api;
}