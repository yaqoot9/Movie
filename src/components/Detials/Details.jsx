import React from 'react'
import axios from 'axios';
import {useSearchParams} from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import style from './Details.module.css';
function Details() {
    let prefix="https://image.tmdb.org/t/p/w500";
    let[usesearchparams,setusesearchparams]=useSearchParams();
    let currentId=usesearchparams.get('id'); //هوك بستخدمه مشان اطلع باراميتر من ال url
    let [details,setdetalis]=useState({});
 async function getDetails(){
  let {data}=await axios.get(`https://api.themoviedb.org/3/movie/${currentId}?api_key=d96e28fc086320e77dd0ef3f431bd5a6&language=en-US`)
setdetalis(data);

}
useEffect(()=>{getDetails()} ,[])

  return (
  <>
   <h2 className={` mb-3 ${style.h2effect}`}>{details.title}</h2>
  <div className='row container'>

  <div className='col-md-4 ms-5 mt-5'>
    <img  className='w-75 text-center'   src={prefix+details.poster_path}/>
    
  </div>

  <div className={`col-md-4 ${style.overview}`}>
    <p>{details.overview}</p>
  </div>





  </div>

  </>
  )
}

export default Details
