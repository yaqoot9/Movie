import React from 'react'
import { Link } from 'react-router-dom'

function Navbar({loginData,logout}) {
  console.log("Navbar",loginData)
  return (
    <>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">



  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">

    {loginData?<><li class="nav-item active">
      <Link class="navbar-brand"    to="about">About</Link>
      </li>
      
      <li class="nav-item">
      <Link class="navbar-brand"    to="home">Home</Link>
      </li>

      <li class="nav-item">
      <Link class="navbar-brand"    to="people">People</Link>
      </li>


      <li class="nav-item">
      <Link class="navbar-brand"    to="movies">Movies</Link>
      </li>


      <li class="nav-item">
      <Link class="navbar-brand"    to="tvshows">Tvshows</Link>
      </li> </>: ''}
      
      </ul>
     <ul  class="navbar-nav ms-auto">

     {!loginData? <><li class="nav-item">
      <Link class="navbar-brand"    to="register">Register</Link>
      </li>
     
      <li class="nav-item">
      <Link class="navbar-brand"     to="login">Login</Link>
      </li></>:<>
      <li class="nav-item">
      <Link class="navbar-brand"    to="logout">welcome {loginData.name}</Link>
      </li>
       <li class="nav-item">
      <Link class="navbar-brand"  onClick={logout}  to="logout">Logout</Link>
      </li></>}

      

     
      </ul>
   
    
  </div>
</nav>
    
    
    
    </>
  )
}

export default Navbar