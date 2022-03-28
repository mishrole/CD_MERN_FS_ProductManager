import axios from 'axios';
import { config } from '../Constants.js';

export const postProduct = (data) => {
  return axios.post(`${config.url.API_URL}/products`, data)
  .then(res => res)
  .catch(err => { throw err.response.data });
}
