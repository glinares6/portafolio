// para que reconozca el css
import "./styles.scss";
const getPosts= async () =>{
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com");
        const data = await response.json();
        console.log(data);
    } catch(error){
        console.log(error);
    }
}

getPosts();