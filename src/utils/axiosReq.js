import axios from 'axios';

const urlSuperHeros = 'https://superheroapi.com/api/4311801705549578/';

export const searchByName = (name) => {
  return axios.get(urlSuperHeros + 'search/' + name);
};

export const addTeam = (id) => {
  return axios.get(urlSuperHeros + id)
  .then((response) => {
    return response.data;
  });
};
