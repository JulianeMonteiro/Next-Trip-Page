// NAV

const nav = document.querySelector(".nav");
window.addEventListener("scroll", fixNav);

function fixNav() {
  if (window.scrollY > nav.offsetHeight + 150) {
    nav.classList.add("active");
  } else {
    nav.classList.remove("active");
  }
}

// PANELS

const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveClasses();
    panel.classList.add("active");
  });
});

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}

// DATE

function pad(valor) {
  return valor.toString().padStart(2, "0");
}

function formata(data) {
  return (
    data.getFullYear() +
    "-" +
    pad(data.getMonth() + 1) +
    "-" +
    pad(data.getDate()) +
    "T" +
    pad(data.getHours()) +
    ":" +
    pad(data.getMinutes())
  );
}

var campo = document.querySelectorAll(".agend");
var hoje = formata(new Date());

document.addEventListener("DOMContentLoaded", function () {
  campo.min = hoje;
});

campo.addEventListener("invalid", function (e) {
  e.target.setCustomValidity(`A data não pode ser anterior a ${hoje}`);
});
campo.addEventListener("input", function (e) {
  e.target.setCustomValidity("");
  e.target.checkValidity();
});
