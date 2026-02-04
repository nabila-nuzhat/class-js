async function getPosts() {
    const response = await fetch('https://dummyjson.com/posts');
    console.log(response);
    const data = await response.json()
    console.log(data);
    
}

getPosts();