const btn = document.querySelector("button");
const div = document.querySelector("div");

const names = [
  "Dominika",
  "Małgorzata",
  "Daria",
  "Asia",
  "Kunegunda",
  "Marysia",
  "Anastazja",
  "Kasia",
];

const prefixs = [
  "Wydaje mi się",
  "Mam wrażenie",
  "Szczerze powiedziawszy, myślę",
  "Szczerze uważam",
  "Na 100% twierdzę",
  "Jestem pewien",
];

const showRandomName = () => {
  let randomNamesIndex = Math.floor(Math.random() * names.length);
  let randomPrefixsIndex = Math.floor(Math.random() * prefixs.length);

  div.textContent = `${prefixs[randomPrefixsIndex]}, że ${names[randomNamesIndex]}`;
};

btn.addEventListener("click", showRandomName);
