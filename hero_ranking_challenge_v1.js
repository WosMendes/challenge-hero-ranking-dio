// Desafio: Ranking de Herói

let keep = 0;
do {
  let heroName = prompt("Insira o nome do seu herói: ");
  let heroXp = prompt("Quanto de experiência (XP) seu herói já acumulou?");
  let heroLevel = "Sem nível";

  switch (true) {
    case (heroXp <= 1000):
      heroLevel = "Ferro";
      break;
    case (heroXp >= 1001 && heroXp <= 2000):
      heroLevel = "Bronze";
      break;
    case (heroXp >= 2001 && heroXp <= 5000):
      heroLevel = "Prata";
      break;
    case (heroXp >= 5001 && heroXp <= 7000):
      heroLevel = "Ouro";
      break;
    case (heroXp >= 7001 && heroXp <= 8000):
      heroLevel = "Platina";
      break;
    case (heroXp >= 8001 && heroXp <= 9000):
      heroLevel = "Ascendente";
      break;
    case (heroXp >= 9001 && heroXp <= 10000):
      heroLevel = "Imortal";
      break;
    case (heroXp >= 10001):
      heroLevel = "Radiante";
      break;
    default:
      heroLevel = "Ranking inválido";
  }

  alert("O Herói de nome " + heroName + " está no nível de " + heroLevel + "!");
  keep = prompt("Digite '1' para inserir outro herói ou '0' para sair: ")
} while (keep > 0);
