import Axios from "axios";

export const getToDo = Axios.get(
  "https://jsonplaceholder.typicode.com/todos/1"
).then(
  (response) => {
    console.log(response.status);
    console.log(response.data);
    return response;
  },
  (error) => {
    console.log(error);
    return error;
  }
);
