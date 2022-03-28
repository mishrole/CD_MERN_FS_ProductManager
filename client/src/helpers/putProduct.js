import axios from 'axios';
import { config } from '../Constants.js';

export const putProduct = (id, data) => {
  return axios.put(`${config.url.API_URL}/products/${id}`, data)
  .then(res => res)
  .catch(err => { throw err.response.data });
}
