
import React, { useEffect, useState } from "react";
import "./index.css";
import Navbar from './components/Navbar';
import CharacterList from './components/CharacterList';
import Pagination from "./components/Pagination";



function App(){
     const [characters, setCharacters] = useState([]);
     const [info, setInfo] = useState([]);
     const initialUrl = "https://rickandmortyapi.com/api/character";
    
     const fetchCharters = (url) => {
        fetch(url) 
        .then(response => response.json())
        .then((data) =>{
             setCharacters(data.results)
             setInfo(data.info)     
            } 
          )
       .catch(error => console.log(error))
    }

     const onPrevious=()=>{
        fetchCharters(info.prev);
     } 

     const onNext =()=>{
         fetchCharters(info.next)
     }


     useEffect(() => {
        fetchCharters(initialUrl)
      }, []);

     return(
        <>
      <Navbar brand="Rick and Morty"/>        
      <div className="container">
          <Pagination prev={info.prev} 
                      next={info.next} 
                      onPrevious={onPrevious}
                      onNext={onNext}
            />
          <CharacterList characters={characters}/>
          <Pagination/>
      </div>
      </>
      )
}

export default App;