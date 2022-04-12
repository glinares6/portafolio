const getPosts= async () =>{
    try{
        const response = await fetch("https://jsonplaceholder.typ");
        const data = await response.json();
        console.log(data);
    } catch(error){
        console.log(error);
    }
}

getPosts();