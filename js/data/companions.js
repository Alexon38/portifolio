// Sprites animados 2D (geração 5) do repositório público PokeAPI/sprites.
// Para não depender de link externo, baixe os GIFs para /assets e troque o "sprite" por "assets/sceptile.gif".
const BASE = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated";

export const companheiros = [
  {
    nome: "Sceptile",
    lado: "esquerda",
    sprite: `${BASE}/254.gif`,
    falas: {
      clique: ["Scep!", "Sceptile!", "Folhas ao vento!"],
      secao: {
        sobre: "Vamos conhecer o Alexon.",
        formacao: "Muito estudo por aqui.",
        experiencia: "Olha só a estrada percorrida.",
        habilidades: "Esses atributos são fortes!",
        hobbies: "Hora do descanso.",
        projetos: "Agora vem a parte boa!",
      },
    },
  },
  {
    nome: "Scrafty",
    lado: "direita",
    sprite: `${BASE}/560.gif`,
    falas: {
      clique: ["Scraf!", "Scrafty!", "Cuidado com o chute!"],
      secao: {
        sobre: "Quem é esse treinador?",
        formacao: "Aprender nunca é demais.",
        experiencia: "Isso é experiência de verdade.",
        habilidades: "Quero ver esses golpes.",
        hobbies: "Também gosto de relaxar.",
        projetos: "Tem muito código ali!",
      },
    },
  },
];