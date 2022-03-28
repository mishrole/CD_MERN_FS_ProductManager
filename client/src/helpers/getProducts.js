import axios from 'axios';
import { config } from '../Constants.js';

export const getProducts = () => {
  return axios.get(`${config.url.API_URL}/products`)
  .then(res => res)
  .catch(err => { throw err.response.data });
}
