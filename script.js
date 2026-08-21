document.addEventListener("DOMContentLoaded", () => {
  const filmForm = document.getElementById("filmForm");
  const movieGallery = document.getElementById("movieGallery");

  // Carrega os filmes salvos ao abrir a página
  loadMovies();

  filmForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const title = document.getElementById("title").value;
    const poster = document.getElementById("poster").value;
    const trailer = document.getElementById("trailer").value;

    const newMovie = { title, poster, trailer };

    saveMovie(newMovie);
    addMovieToDOM(newMovie);

    filmForm.reset();
  });

  function saveMovie(movie) {
    const movies = getMoviesFromStorage();
    movies.push(movie);
    localStorage.setItem("aluraFlixMovies", JSON.stringify(movies));
  }

  function getMoviesFromStorage() {
    const movies = localStorage.getItem("aluraFlixMovies");
    return movies ? JSON.parse(movies) : [];
  }

  function loadMovies() {
    const movies = getMoviesFromStorage();
    movies.forEach((movie) => addMovieToDOM(movie));
  }

  function addMovieToDOM(movie) {
    const card = document.createElement("div");
    card.classList.add("movie-card");

    card.innerHTML = `
      <img src="${movie.poster}" alt="${movie.title}">
      <h3>${movie.title}</h3>
      <a href="${movie.trailer}" target="_blank" rel="noopener noreferrer">Assistir Trailer</a>
    `;

    movieGallery.appendChild(card);
  }
});