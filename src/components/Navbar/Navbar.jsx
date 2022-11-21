import React from 'react'
import { Link } from 'react-router-dom'

function Navbar({loginData,logout}) {
  console.log("Navbar",loginData)
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">


    <div class="col-md-3">
        <button class="navbar-toggler bg-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          
          <span></span>
          <span></span>
          <span></span>
          
        </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">

    {loginData?<><li class="nav-item active">
      <Link className="nav-link"    to="about">About</Link>
      </li>
      
      <li className="nav-item">
      <Link className="nav-link"    to="home">Home</Link>
      </li>

      <li className="nav-item">
      <Link className="nav-link"    to="people">People</Link>
      </li>


      <li className="nav-item">
      <Link className="nav-link"    to="movies">Movies</Link>
      </li>


      <li className="nav-item">
      <Link className="nav-link"    to="tvshows">Tvshows</Link>
      </li> </>: ''}
      
      </ul>
     <ul  class="navbar-nav ms-auto">

     {!loginData? <><li class="nav-item">
      <Link class="nav-link"    to="register">Register</Link>
      </li>
     
      <li class="nav-item">
      <Link class="nav-link"     to="login">Login</Link>
      </li></>:<>
      <li class="nav-item">
      <Link class="nav-link"    to="logout">welcome {loginData.name}</Link>
      </li>
       <li class="nav-item">
      <Link class="nav-link"  onClick={logout}  to="logout">Logout</Link>
      </li></>}

      

     
      </ul>
   
    
  </div>
  </div>
</nav>
    
    
    
    </>
  )
}

export default Navbar