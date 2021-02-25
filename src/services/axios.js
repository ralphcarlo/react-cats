import axios from 'axios';

const headers = {
  'x-api-key': '1fd74b15-c933-42b0-a17c-d0baba1dfbc6'
};

const instance = axios.create({
  headers: headers,
  baseURL: 'https://api.thecatapi.com/v1/'
});

export default instance;