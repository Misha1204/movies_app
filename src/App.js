import { useState } from "react";
import axios from "axios";
import Header from "./components/Header";
import Movies from "./components/Movies";
import Pagination from "./components/Pagination";
import "./App.css";

const APIKEY = `11a94f25c05bb1527d862447eaa20041`;

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState("");
  const [currentMovie, setCurrentMovie] = useState(null);
  const [totalPages, setTotalPages] = useState(0);

  //GET MOVIES DATA WHEN INPUT FIELD IS SUBMITED
  const handleSubmit = (e) => {
    e.preventDefault();
    document.getElementById("search_input").value = "";

    const moviesAPI = `https://api.themoviedb.org/3/search/movie?api_key=${APIKEY}&query=${searchTerm}`;

    axios.get(moviesAPI).then((response) => {
      setMovies(response.data.results);
      setTotalPages(response.data.total_pages);
    });
  };

  const nextPage = (pageNum) => {
    const moviesAPI = `https://api.themoviedb.org/3/search/movie?api_key=${APIKEY}&query=${searchTerm}&page=${currentPage}`;

    axios.get(moviesAPI).then((response) => {
      setMovies(response.data.results);
    });

    setCurrentPage(pageNum);
  };

  //UPDATE SEARCHTERM WHILE INPUT FIELD VALUE CHANGES
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <Header handleSubmit={handleSubmit} handleChange={handleChange} />
      <Movies movies={movies} />
      {totalPages > 1 ? (
        <Pagination
          pages={totalPages}
          nextPage={nextPage}
          currentPage={currentPage}
        />
      ) : (
        ""
      )}
    </>
  );
}

export default App;
