import React from 'react'
import axios from 'axios'
import { useEffect } from 'react';
import { useState } from 'react';
function People() {


  async function ListMovies(page,callback){
    let{data}=await axios.get(`https://api.themoviedb.org/3/person/popular?api_key=d96e28fc086320e77dd0ef3f431bd5a6&language=en-US&page=${page}`);
    console.log(data.results);
     callback(data.results);
   
     }
   let[Movies1,setMovies1]=useState([]);
   let[Movies2,setMovies2]=useState([]);
   let[Movies3,setMovies3]=useState([]);
   let prefix="https://image.tmdb.org/t/p/w500";
   useEffect(()=>{
     ListMovies(10,setMovies1);
     ListMovies(2,setMovies2);
     ListMovies(3,setMovies3);
     
   },[])
   
   
   






  return (
  <>
  


          
<div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
        
    <div className='row text-center mt-5'>
    <h1 className='text-center mt-5 mb-5'>- people List 1 -</h1>
  
    {Movies1.map((movie,index)=>
     <div className='col-md-4' key={index}>
      
     <h2>{movie.name}</h2>
     <img src={prefix+movie.profile_path} className="w-75 mb-5"/>

    </div>


    )};
</div>
   
    
    </div>
    <div class="carousel-item" data-bs-interval="2000">
     

    <div className='row text-center mt-5'>
    <h1 className='text-center mt-5 mb-5'>- people List 2 -</h1>
  
    {Movies2.map((movie,index)=>
     <div className='col-md-4' key={index}>
      
     <h2>{movie.name}</h2>
     <img src={prefix+movie.profile_path} className="w-75 mb-5"/>

    </div>


    )};
</div>
   





    
    </div>
    <div class="carousel-item">
    <div className='row text-center mt-5'>
    <h1 className='text-center mt-5 mb-5'>- people List 3 -</h1>
  
    {Movies3.map((movie,index)=>
     <div className='col-md-4' key={index}>
      
     <h2>{movie.name}</h2>
     <img src={prefix+movie.profile_path} className="w-75 mb-5"/>

    </div>


    )};
</div>
   
      
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span >Next</span>
  </button>
</div>




    
  
  
  </>
  )
}

export default People