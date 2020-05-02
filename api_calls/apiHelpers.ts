/* eslint-disable no-console */
import axios from 'axios';

export const getToDo = axios.get(
  'https://jsonplaceholder.typicode.com/todos/1'
).then(
  response => {
    console.log(response.status);
    console.log(response.data);
    return response;
  },
  error => {
    console.log(error);
    return error;
  }
);