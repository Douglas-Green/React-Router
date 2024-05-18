/** @format */

export function filterFilmsByDirector(list, director) {
  return list.filter(film => film.director === director);
}

export function getListOf(list, prop) {
  return [...new Set(list.map(item => item[prop]))];
}
