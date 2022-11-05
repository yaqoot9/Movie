import React from 'react'
import axios from 'axios'
import { useEffect } from 'react';
import { useState } from 'react';
import style from './Home.module.css';
import {useNavigate} from 'react-router-dom';
function Home() {
let navegate=useNavigate();
function goToDetails (id){
navegate({
  pathname:'/details',
  search:`?id=${id}`
  
  })
}

  async function getTrendingItems(mediatype,callback){

  let{data}=await axios.get(`https://api.themoviedb.org/3/trending/${mediatype}/day?api_key=d96e28fc086320e77dd0ef3f431bd5a6`);
  console.log(data.results);
 callback(data.results);
  }

  let [movieTrending,setmovieTrending]=useState([]);
  let [tvTrending,settvTrending]=useState([]);
  let [personTrending,setpersonTrending]=useState([]);
  


  useEffect(()=>{
    getTrendingItems("movie", setmovieTrending);
    getTrendingItems("tv",settvTrending);
    getTrendingItems("person",setpersonTrending);
  
  },[])

let prefix="https://image.tmdb.org/t/p/w500";







  return (
   <>
   <div className='row text-center mt-5'>
    
    <div className=' col-md-4 d-flex align-items-center   '>
      <div>
    <div className={`w-100 ms-1 ${style.brdr}`}></div>
   <h2 className={`${style.h2font}`}>Trending Movies</h2>
   <p >This is trending movies</p>
   <div className={`w-100 ms-1 ${style.brdr}`}></div>
    </div>

    </div>
    {movieTrending.map((movie,index)=>
     <div className='col-md-4'  onClick={()=>goToDetails(movie.id)} key={index}>
      
     <h2>{movie.title}</h2>
     <img src={prefix+movie.poster_path} className="w-75 mb-5"/>



    </div>





    
    )};
</div>
   
<div className='row text-center mt-5'>
<div className=' col-md-4 d-flex align-items-center    '>
      <div>
    <div className={`w-100  ${style.brdr}`}></div>
   <h2 className={`${style.h2font}`}>Trending TV</h2>
   <p >This is trending TV</p>
   <div className={`w-100 ms-1 ${style.brdr}`}></div>
    </div>

    </div>
    {tvTrending.map((movie,index)=>
     <div className='col-md-4' key={index}>
      
     <h2>{movie.name}</h2>
     <img src={prefix+movie.poster_path} className="w-75 mb-5"/>



    </div>





    
    )};

</div>

<div className='row text-center mt-5'>
<div className=' col-md-4 d-flex align-items-center    '>
      <div>
    <div className={`w-100  ${style.brdr}`}></div>
   <h2 className={`${style.h2font}`}>Trending person</h2>
   <p >This is trending Person</p>
   <div className={`w-100 ms-1 ${style.brdr}`}></div>
    </div>

    </div>
    {personTrending.map((movie,index)=>
     <div className='col-md-4' key={index}>
      
     <h2>{movie.name}</h2>
     <img src={prefix+movie.profile_path} className="w-75 mb-5"/>



    </div>





    
    )};


   

  
   
   

   </div>
   


   
   
   </>
  )
}

export default Home