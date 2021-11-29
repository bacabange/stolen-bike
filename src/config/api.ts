import axios from 'axios';

export default axios.create({
  baseURL: `https://bikeindex.org/api/v3/`,
});
