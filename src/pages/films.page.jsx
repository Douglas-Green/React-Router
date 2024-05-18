/** @format */

import React, {useState, useEffect} from "react";
import {filterFilmsByDirector, getListOf} from "../helpers/film.helpers";

export function FilmsPage() {
  const [list, setList] = useState([]);
  const [searchDirector, setSearchDirector] = useState("");

  function getFilms() {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then(res => res.json())
      .then(films => setList(films))
      .catch(err => console.error(err));
  }

  useEffect(() => {
    getFilms();
  }, []);

  const filmsByDirector = filterFilmsByDirector(list, searchDirector);
  const directors = getListOf(list, "director");

  return (
    <div>
      <h1>Studio Ghibli Films</h1>
      <form>
        <div className="form-group">
          <label>Filter by Director:</label>
          <select
            value={searchDirector}
            onChange={e => setSearchDirector(e.target.value)}
          >
            <option value="">All</option>
            {directors.map(director => (
              <option value={director}>{director}</option>
            ))}
          </select>
        </div>
      </form>
      <ul>
        {filmsByDirector.map(film => (
          <li key={film.id}>{film.title}</li>
        ))}
      </ul>
    </div>
  );
}
