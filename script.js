document.addEventListener("DOMContentLoaded", () => {
  // Catálogo completo com 9 filmes e capas estilizadas por código (garantido que aparecem!)
  const readyMovies = [
    {
      title: "Spider-Man: Into the Spider-Verse",
      poster: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='500' height='750' viewBox='0 0 500 750'><rect width='500' height='750' fill='%237c3aed'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='%23ffffff' font-family='sans-serif' font-size='28' font-weight='bold'>Spider-Man</text></svg>",
      trailer: "https://www.youtube.com/embed/g4Hbz2jLxvQ"
    },
    {
      title: "Interstellar",
      poster: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='500' height='750' viewBox='0 0 500 750'><rect width='500' height='750' fill='%231e293b'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='%2338bdf8' font-family='sans-serif' font-size='28' font-weight='bold'>Interstellar</text></svg>",
      trailer: "https://www.youtube.com/embed/zSWdZVtXT7E"
    },
    {
      title: "The Matrix",
      poster: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='500' height='750' viewBox='0 0 500 750'><rect width='500' height='750' fill='%23022c22'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='%234ade80' font-family='sans-serif' font-size='28' font-weight='bold'>The Matrix</text></svg>",
      trailer: "https://www.youtube.com/embed/vKQi3bBA1y8"
    },
    {
      title: "Inception",
      poster: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='500' height='750' viewBox='0 0 500 750'><rect width='500' height='750' fill='%23311042'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='%23c084fc' font-family='sans-serif' font-size='28' font-weight='bold'>Inception</text></svg>",
      trailer: "https://www.youtube.com/embed/YoHD9XEInc0"
    },
    {
      title: "Avengers: Endgame",
      poster: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='500' height='750' viewBox='0 0 500 750'><rect width='500' height='750' fill='%23450a0a'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='%23f87171' font-family='sans-serif' font-size='28' font-weight='bold'>Avengers</text></svg>",
      trailer: "https://www.youtube.com/embed/TcMBFSGVi1c"
    },
    {
      title: "Batman: The Dark Knight",
      poster: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='500' height='750' viewBox='0 0 500 750'><rect width='500' height='750' fill='%230f172a'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='%2394a3b8' font-family='sans-serif' font-size='28' font-weight='bold'>The Dark Knight</text></svg>",
      trailer: "https://www.youtube.com/embed/EXeTwQWrcwY"
    },
    {
      title: "Avatar: The Way of Water",
      poster: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='500' height='750' viewBox='0 0 500 750'><rect width='500' height='750' fill='%23082f49'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='%2338bdf8' font-family='sans-serif' font-size='28' font-weight='bold'>Avatar 2</text></svg>",
      trailer: "https://www.youtube.com/embed/d9MyW72ELq0"
    },
    {
      title: "Oppenheimer",
      poster: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='500' height='750' viewBox='0 0 500 750'><rect width='500' height='750' fill='%23451a03'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='%23fbbf24' font-family='sans-serif' font-size='28' font-weight='bold'>Oppenheimer</text></svg>",
      trailer: "https://www.youtube.com/embed/uYPbbksJxIg"
    },
    {
      title: "Dune: Part Two",
      poster: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='500' height='750' viewBox='0 0 500 750'><rect width='500' height='750' fill='%23291703'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='%23f59e0b' font-family='sans-serif' font-size='28' font-weight='bold'>Dune 2</text></svg>",
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
