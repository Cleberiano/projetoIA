document.addEventListener("DOMContentLoaded", () => {
  // Lista de filmes prontos
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

  const userForm = document.getElementById("userForm");
  const userList = document.getElementById("userList");
  const movieGallery = document.getElementById("movieGallery");

  // Renderiza os filmes do catálogo
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

  // Carrega os usuários salvos no localStorage
  loadUsers();

  // Manipulação do cadastro de usuários
  userForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    const newUser = { name, email };

    saveUser(newUser);
    addUserToDOM(newUser);

    userForm.reset();
  });

  function saveUser(user) {
    const users = getUsersFromStorage();
    users.push(user);
    localStorage.setItem("aluraFlixUsers", JSON.stringify(users));
  }

  function getUsersFromStorage() {
    const users = localStorage.getItem("aluraFlixUsers");
    return users ? JSON.parse(users) : [];
  }

  function loadUsers() {
    const users = getUsersFromStorage();
    users.forEach(user => addUserToDOM(user));
  }

  function addUserToDOM(user) {
    const li = document.createElement("li");
    li.textContent = `${user.name} - (${user.email})`;
    userList.appendChild(li);
  }
});