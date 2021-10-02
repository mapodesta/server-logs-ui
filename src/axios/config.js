import axios from 'axios';

export const API = axios.create({
  baseURL: 'https://server-log-api.herokuapp.com/api/users',
  // baseURL: 'http://localhost:8080/api/users',
});
