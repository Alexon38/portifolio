import { perfil } from "./data/profile.js";
import { buscarRepositorios } from "./utils/github.js";
import { digitar } from "./utils/typewriter.js";
import { renderTexto, renderLinhaDoTempo, renderTags } from "./components/sections.js";
import { renderRepos } from "./components/repos.js";

const slot = (nome) => document.querySelector(`[data-slot="${nome}"]`);

function montarSecoes() {
  renderTexto(slot("sobre"), perfil.sobre);
  renderLinhaDoTempo(slot("formacao"), perfil.formacao);
  renderLinhaDoTempo(slot("experiencia"), perfil.experiencia);
  renderTags(slot("habilidades"), perfil.habilidades);
  renderTags(slot("hobbies"), perfil.hobbies);
}

async function montarProjetos() {
  const status = document.getElementById("repos-status");
  try {
    const repos = await buscarRepositorios(perfil.usuarioGithub);
    if (!repos.length) {
      status.textContent = "Nenhum repositório público encontrado.";
      return;
    }
    status.textContent = `${repos.length} repositórios encontrados.`;
    renderRepos(document.getElementById("repos"), repos);
  } catch (erro) {
    status.classList.add("erro");
    status.textContent = "Não foi possível carregar os repositórios agora. Tente recarregar a página.";
  }
}

montarSecoes();
digitar(document.getElementById("intro"), perfil.intro);
montarProjetos();