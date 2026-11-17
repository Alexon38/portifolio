function cartao(repo) {
  const li = document.createElement("li");

  const nome = document.createElement("a");
  nome.className = "nome";
  nome.href = repo.html_url;
  nome.rel = "noopener";
  nome.textContent = repo.name;

  const descricao = document.createElement("p");
  descricao.textContent = repo.description || "Sem descrição.";

  const meta = document.createElement("div");
  meta.className = "meta";
  const partes = [repo.language, `★ ${repo.stargazers_count}`];
  if (repo.fork) partes.push("fork");
  meta.append(...partes.filter(Boolean).map((t) => {
    const s = document.createElement("span");
    s.textContent = t;
    if (t === "fork") s.className = "fork";
    return s;
  }));

  li.append(nome, descricao, meta);
  if (repo.homepage) {
    const demo = document.createElement("a");
    demo.href = repo.homepage;
    demo.rel = "noopener";
    demo.textContent = "Ver demo";
    li.append(demo);
  }
  return li;
}

export function renderRepos(lista, repos) {
  lista.replaceChildren(...repos.map(cartao));
}