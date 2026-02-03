  
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

;(async()=> {
    console.log(callApi()); // bcz the async function above, returns "promise" for this promise has to "await"
    
    await callApi();
}) // 
  // iffee is used for solve error of await callApi()