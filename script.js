document.addEventListener("DOMContentLoaded", () => {
  // Catálogo de filmes prontos com imagens de servidores abertos (TMDB)
  const readyMovies = [
    {
      title: "Spider-Man: Into the Spider-Verse",
      poster: "https://image.tmdb.org/t/p/w500/uJQdJ46mK08X6tTqT5eHlqYp0f7.jpg",
      trailer: "https://www.youtube.com/embed/g4Hbz2jLxvQ"
    },
    {
      title: "Interstellar",
      poster: "https://image.tmdb.org/t/p/w500/gEU2QpI6EItY52nUoB2M0mOaC5H.jpg",
      trailer: "https://www.youtube.com/embed/zSWdZVtXT7E"
    },
    {
      title: "The Matrix",
      poster: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
      trailer: "https://www.youtube.com/embed/vKQi3bBA1y8"
    },
    {
      title: "Inception",
      poster: "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkYSBsmkZWTpsTaO.jpg",
      trailer: "https://www.youtube.com/embed/YoHD9XEInc0"
    }
  ];

  const authScreen = document.getElementById("authScreen");
  const appScreen = document.getElementById("appScreen");
  const userForm = document.getElementById("userForm");
  const userNameDisplay = document.getElementById("userNameDisplay");
  const logoutBtn = document.getElementById("logoutBtn");
  const movieGallery = document.getElementById("movieGallery");
  
  const videoModal = document.getElementById("videoModal");
  const videoPlayer = document.getElementById("videoPlayer");
  const closeModal = document.getElementById("closeModal");

  // Carrega os filmes na tela
  readyMovies.forEach(movie => {
    const card = document.createElement("div");
    card.classList.add("movie-card");
    
    card.innerHTML = `
      <img src="${movie.poster}" alt="${movie.title}">
      <div class="movie-info">
        <h3>${movie.title}</h3>
        <button class="watch-btn">Assistir Trailer</button>
      </div>
    `;

    // Evento para abrir o trailer dentro do app (Modal)
    card.querySelector(".watch-btn").addEventListener("click", () => {
      videoPlayer.src = movie.trailer;
      videoModal.classList.remove("hidden");
    });

    movieGallery.appendChild(card);
  });

  // Fechar o modal do vídeo
  closeModal.addEventListener("click", () => {
    videoPlayer.src = ""; // Para o vídeo ao fechar
    videoModal.classList.add("hidden");
  });

  // Gerenciamento de Sessão (Login/Cadastro Inicial)
  checkUserSession();

  userForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    const user = { name, email };
    localStorage.setItem("activeUser", JSON.stringify(user));

    showAppScreen(user.name);
    userForm.reset();
  });

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
    userNameDisplay.textContent = `Olá, ${userName}`;
    authScreen.classList.add("hidden");
    appScreen.classList.remove("hidden");
  }

  function showAuthScreen() {
    authScreen.classList.remove("hidden");
    appScreen.classList.add("hidden");
  }
});