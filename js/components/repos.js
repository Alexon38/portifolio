const CORES = {
  JavaScript: "#f0db4f", TypeScript: "#5aa9e6", Python: "#6fb1e8", HTML: "#ff8a5c",
  CSS: "#b48ef0", Java: "#e8a05a", "C#": "#8fd18f", C: "#a0b0c0", "C++": "#e58fb3", PHP: "#9aa7e6",
};

const criar = (tag, texto, classe) => {
  const el = document.createElement(tag);
  el.textContent = texto;
  if (classe) el.className = classe;
  return el;
};

function cartao(repo, indice) {
  const li = document.createElement("li");
  li.classList.add("corte");

  const nome = criar("a", repo.name, "nome");
  nome.href = repo.html_url;
  nome.rel = "noopener";

  const meta = document.createElement("div");
  meta.className = "meta";
  if (repo.language) {
    const tipo = criar("span", repo.language, "tipo");
    tipo.style.setProperty("--c", CORES[repo.language] || "");
    meta.append(tipo);
  }
  meta.append(criar("span", `★ ${repo.stargazers_count}`));
  if (repo.fork) meta.append(criar("span", "fork", "fork"));

  li.append(criar("span", `Nº ${String(indice + 1).padStart(3, "0")}`, "no"), nome,
    criar("p", repo.description || "Sem descrição."), meta);

  if (repo.homepage) {
    const demo = criar("a", "Ver demo");
    demo.href = repo.homepage;
    demo.rel = "noopener";
    li.append(demo);
  }
  return li;
}

export function renderRepos(lista, repos) {
  lista.replaceChildren(...repos.map(cartao));
}