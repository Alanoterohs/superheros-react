import axios from 'axios';

const urlSuperHeros = 'https://superheroapi.com/api/4311801705549578/search/';

export const searchByName = (name) => {
  return axios.get(urlSuperHeros + name);
}
