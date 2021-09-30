import axios from 'axios';

export const API = axios.create({
  baseURL: 'https://server-log-api.herokuapp.com/api/users',
});
