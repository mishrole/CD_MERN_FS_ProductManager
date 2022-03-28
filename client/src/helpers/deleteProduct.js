import axios from 'axios';
import { config } from '../Constants.js';

export const deleteProduct = (id, data) => {
  return axios.delete(`${config.url.API_URL}/products/${id}`, data)
  .then(res => res)
  .catch(err => { throw err.response.data });
}
