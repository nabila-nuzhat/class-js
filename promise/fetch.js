fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json()) // http request converted to json
  .then(json => console.log(json))
  .catch(error => console.log(error));