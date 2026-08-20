const form = document.getElementById("form-contato");
const padraoEmail = /\S+@\S+\.\S+/;

if (form) {
  form.addEventListener("submit", function(evento) {
    evento.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("mensagem").value;

    document.getElementById("mensagem-status").textContent = "";

    if (nome.trim() === "" || email.trim() === "" || mensagem.trim() === "") {
      document.getElementById("mensagem-status").textContent = "Por favor, preencha todos os campos.";
      return;
    }

    if (!padraoEmail.test(email)) {
      document.getElementById("mensagem-status").textContent = "Por favor, insira um e-mail válido.";
      return;
    }

    document.getElementById("mensagem-status").textContent = "Mensagem enviada com sucesso!";
    form.reset();
  });
}

// Menu mobile: alterna a classe "aberto" no nav quando o botão hamburguer é clicado
const botaoMenu = document.getElementById("botao-menu");
const nav = document.querySelector(".site-nav");

if (botaoMenu && nav) {
  botaoMenu.addEventListener("click", function() {
    nav.classList.toggle("aberto");
  });
}

// Tema claro/escuro: alterna classe no body e salva a escolha
const botaoTema = document.getElementById("botao-tema");

if (botaoTema) {
  botaoTema.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
      localStorage.setItem("tema", "escuro");
    } else {
      localStorage.setItem("tema", "claro");
    }
  });
}

// Ao carregar a página, aplica o tema salvo anteriormente
if (localStorage.getItem("tema") === "escuro") {
  document.body.classList.add("dark-mode");
}