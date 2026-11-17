const criar = (tag, texto) => {
  const el = document.createElement(tag);
  el.textContent = texto;
  return el;
};

export function renderTexto(slot, paragrafos) {
  slot.replaceChildren(...paragrafos.map((t) => criar("p", t)));
}

export function renderLinhaDoTempo(slot, itens) {
  slot.replaceChildren(
    ...itens.map((item) => {
      const li = document.createElement("li");
      li.append(criar("strong", item.titulo), criar("small", `${item.local} | ${item.periodo}`));
      if (item.texto) li.append(criar("p", item.texto));
      return li;
    })
  );
}

export function renderTags(slot, itens) {
  slot.replaceChildren(...itens.map((t) => criar("li", t)));
}