const API = "https://api.github.com";

export async function buscarRepositorios(usuario) {
  const repos = [];
  for (let pagina = 1; pagina <= 5; pagina++) {
    const url = `${API}/users/${usuario}/repos?per_page=100&sort=updated&page=${pagina}`;
    const resposta = await fetch(url, { headers: { Accept: "application/vnd.github+json" } });
    if (!resposta.ok) throw new Error(`GitHub respondeu ${resposta.status}`);
    const lote = await resposta.json();
    repos.push(...lote);
    if (lote.length < 100) break;
  }
  return repos;
}