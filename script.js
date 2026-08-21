document.addEventListener("DOMContentLoaded", () => {
  // Lista de filmes cadastrados
  const readyMovies = [
    {
      title: "Spider-Man: Into the Spider-Verse",
      poster: "https://m.media-amazon.com/images/M/MVBMTg5NzEwODg5Ml5BMl5BanBnXkFtZTgwMDEwNjg3NjM@._V1_.jpg",
      trailer: "https://www.youtube.com/watch?v=g4Hbz2jLxvQ"
    },
    {
      title: "Interstellar",
      poster: "https://m.media-amazon.com/images/M/MVBMTExMzU2ODEwMV5BMl5BanBnXkFtZTgwMDkxOTE2MjE@._V1_.jpg",
      trailer: "https://www.youtube.com/watch?v=zSWdZVtXT7E"
    },
    {
      title: "The Matrix",
      poster: "https://m.media-amazon.com/images/M/MVBMTkxNDY3NTM3NV5BMl5BanBnXkFtZTcwMDg0Mzg3NA@@._V1_.jpg",
      trailer: "https://www.youtube.com/watch?v=vKQi3bBA1y8"
    },
    {
      title: "Inception",
      poster: "https://m.media-amazon.com/images/M/MVBMjAxMzU3NjMyNF5BMl5BanBnXkFtZTcwMzg0MzUyMw@@._V1_.jpg",
      trailer: "https://www.youtube.com/watch?v=YoHD9XEInc0"
    }
  ];

  const authScreen = document.getElementById("authScreen");
  const appScreen = document.getElementById("appScreen");
  const userForm = document.getElementById("userForm");
  const userNameDisplay = document.getElementById("userNameDisplay");
  const logoutBtn = document.getElementById("logoutBtn");
  const movieGallery = document.getElementById("movieGallery");

  // Carrega os filmes no catálogo
  readyMovies.forEach(movie => {
    const card = document.createElement("div");
    card.classList.add("movie-card");
    card.innerHTML = `
      <img src="${movie.poster}" alt="${movie.title}">
      <h3>${movie.title}</h3>
      <a href="${movie.trailer}" target="_blank" rel="noopener noreferrer">Assistir Trailer</a>
    `;
    movieGallery.appendChild(card);
  });

  // Verifica se o usuário já está cadastrado/logado
  checkUserSession();

  // Evento de cadastro
  userForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    const user = { name, email };

    // Salva o usuário ativo
    localStorage.setItem("activeUser", JSON.stringify(user));

    showAppScreen(user.name);
    userForm.reset();
  });

  // Evento de sair
  logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("activeUser");
    showAuthScreen();
  });

  function checkUserSession() {
    const activeUser = localStorage.getItem("activeUser");
    if (activeUser) {
      const user = JSON.parse(activeUser);
      showAppScreen(user.name);
    } else {
      showAuthScreen();
    }
  }

  function showAppScreen(userName) {
    userNameDisplay.textContent = `Olá, ${userName}!`;
    authScreen.classList.add("hidden");
    appScreen.classList.remove("hidden");
  }

  function showAuthScreen() {
    authScreen.classList.remove("hidden");
    appScreen.classList.add("hidden");
  }
});