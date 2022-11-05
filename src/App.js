import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import People from './components/People/People';
import Register from './components/Register/Register';
import Tvshows from './components/Tvshows/Tvshows';
import Login from './components/Login/Login';
import Movies from './components/Movies/Movies';
import Home from './components/Home/Home';
import About from './components/About/About';
import Details from './components/Detials/Details';
import ProtectedRout from './components/ProtectedRouter/ProtectedRout'
import {Routes,Route, Navigate} from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import { useEffect, useState } from 'react';
 

function App() {

  let[loginData,setloginData]=useState(null);

  function setUserData(){

    let token=localStorage.getItem('token');//رحت جبت التوكن اللي حزنتو من اللوكل الستورج
    let decoded=jwtDecode(token);//فك الشيفرة 
    setloginData(decoded);
    console.log(loginData);
  }

  useEffect(()=>{  //هلأ لأنو كل ما بفوت على اابليكشن بصير ريفريش بدي اول ما افوت يشوف اللوكل الستورج ازا فيها داتا 
  if(localStorage.getItem('token')){
    setUserData();
  }
  
},[])


function logout(){
localStorage.removeItem('token');
setloginData(null);
Navigate('/login');


}
  return (
    <div >



      <Navbar  loginData={loginData}  logout={logout}/>
      <Routes>

      <Route element={<ProtectedRout  loginData={loginData}/>}>
        <Route  path='home' element={ <Home/>}></Route>
        <Route  path='about' element={<About/>}></Route>
        <Route  path='people' element={<People/>}></Route>
        <Route  path='movies' element={ <Movies/>}></Route>
        <Route  path='tvshows' element={ <Tvshows/>}></Route>
        <Route path='details' element={<Details/>}></Route>
      </Route>

      
      <Route  path='login' element={  <Login  setUserData={setUserData}  />  }></Route>
      <Route  path='register' element={<Register/>}></Route>

      </Routes>
    </div>
  );
}

export default App;
