import axios from 'axios';
import { config } from '../Constants.js';

export const getProduct = (id) => {
  return axios.get(`${config.url.API_URL}/products/${id}`)
  .then(res => res)
  .catch(err => { throw err.response.data });
}
