import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://be-the-hero-testing.herokuapp.com'
});
