  
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

  await callApi(); // Uncaught SyntaxError: await is only valid in async functions and the top level bodies of modules
  // iffee is used for solve this error