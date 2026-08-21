document.addEventListener("DOMContentLoaded", () => {
  // Catálogo completo com 9 filmes (os 4 anteriores + 5 novos) e imagens garantidas
  const readyMovies = [
    {
      title: "Spider-Man: Into the Spider-Verse",
      poster: "https://via.placeholder.com/500x750/7c3aed/ffffff?text=Spider-Man",
      trailer: "https://www.youtube.com/embed/g4Hbz2jLxvQ"
    },
    {
      title: "Interstellar",
      poster: "https://via.placeholder.com/500x750/3b82f6/ffffff?text=Interstellar",
      trailer: "https://www.youtube.com/embed/zSWdZVtXT7E"
    },
    {
      title: "The Matrix",
      poster: "https://via.placeholder.com/500x750/10b981/000000?text=The+Matrix",
      trailer: "https://www.youtube.com/embed/vKQi3bBA1y8"
    },
    {
      title: "Inception",
      poster: "https://via.placeholder.com/500x750/6366f1/ffffff?text=Inception",
      trailer: "https://www.youtube.com/embed/YoHD9XEInc0"
    },
    {
      title: "Avengers: Endgame",
      poster: "https://via.placeholder.com/500x750/ef4444/ffffff?text=Avengers",
      trailer: "https://www.youtube.com/embed/TcMBFSGVi1c"
    },
    {
      title: "Batman: The Dark Knight",
      poster: "https://via.placeholder.com/500x750/475569/ffffff?text=The+Dark+Knight",
      trailer: "https://www.youtube.com/embed/EXeTwQWrcwY"
    },
    {
      title: "Avatar: The Way of Water",
      poster: "https://via.placeholder.com/500x750/0284c7/ffffff?text=Avatar+2",
      trailer: "https://www.youtube.com/embed/d9MyW72ELq0"
    },
    {
      title: "Oppenheimer",
      poster: "https://via.placeholder.com/500x750/d97706/ffffff?text=Oppenheimer",
      trailer: "https://www.youtube.com/embed/uYPbbksJxIg"
    },
    {
      title: "Dune: Part Two",
      poster: "https://via.placeholder.com/500x750/b45309/ffffff?text=Dune+2",
      trailer: "https://www.youtube.com/embed/Way9Dexny3w"
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

  // Carrega os 9 filmes na tela
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