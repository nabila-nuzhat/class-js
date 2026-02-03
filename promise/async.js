// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json()) // http request converted to json
//   .then(json => console.log(json))
//   .catch(error => console.log(error));

    
  async function callApi(){
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1")
        const data = await response.json()
        console.log(data);
        // these are syncronous, but does not block the main thread
    }
    catch(error){
        console.log(error);
    } finally{
        // if any loader
    }
    
  }

  callApi()