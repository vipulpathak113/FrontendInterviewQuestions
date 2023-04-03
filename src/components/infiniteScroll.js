import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { render } from 'react-dom';

function InfiniteScroll(props) {

    const [pokemon,setPokemon] = useState([]);
    var offset = 0;
    useEffect(()=>{
        fetchMoreData();

        window.addEventListener('scroll',handleScroll)

    },[])

    const handleScroll =(e)=>{

        if(e.target.documentElement.scrollTop+window.innerHeight+1>=e.target.documentElement.scrollHeight){
            fetchMoreData();
        }
    }

    const fetchMoreData=()=>{
       
        fetch(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${offset}`).then(res=>res.json()).then(json=>{
            setPokemon(poke=>[...poke,...json.results])
        })
        offset = offset+20;
    }


    return (
     
        <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
        <h2 style={{position:"sticky"}}>Infinite Scroll</h2>
           {pokemon && pokemon.map((poke,index)=>{
               return(
              <div style={{margin:"10px",padding:"10px"}} key={index}>{poke.name}</div>
               )
           })}
        </div>
    );
}

export default InfiniteScroll;