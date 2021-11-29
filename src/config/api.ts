import axios from 'axios';

export default axios.create({
  baseURL: `https://bikeindex.org:443/api/v3/`,
  headers: {
    'Content-Type': 'application/json',
  },
});
