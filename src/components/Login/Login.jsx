import React, { useState } from 'react'
import axios from 'axios';
import joi from 'joi';
import { Navigate, useNavigate } from 'react-router-dom'; //Hook

function Login( {setUserData} ) {
  let navegate=useNavigate();
  function  goToHome(){
    let path='/home';//This path from APP.js, very important to add / at the start of path
    navegate(path);
  }
    let SubmitFormData= async(e)=>{

       e.preventDefault();
      // let validateform=ValidateForm();
      //setError(validateform.error.details);
      // console.log(validateform);
      let{data}=await axios.post("https://knowledge-saraha.herokuapp.com/users/signIn",user);
     console.log(data);
     if(data.message=='login'){
      localStorage.setItem('token',data.token); //اول اشي نزلت jwt decode npn//بعدها بدنا نخزن بلوكل ستورج اعطيناها اسم توكن وخزنا فيها اتوكن
      setUserData();
     goToHome();
    // console.log(data);
     }
     else{
      setError(data.message);
     }

     setloading(true);//مشام لما نكبس على الريجيستر يصير يعمل لودنغ
    }

let[Error,setError]=useState();
let[loading,setloading]=useState(false);//loading 
let[user,setUser]=useState({
password:"",
email:"",

});
    let getFormData= (e)=>{
     let Myuser={...user};
     Myuser[e.target.name]=e.target.value;
     setUser(Myuser);
     
     console.log(Myuser);
    
       
    }

  //function to make validate using joi

    function ValidateForm(){

   const schema=joi.object({
  email:joi.string().required().email({minDomainSegments:2 , tlds:{allow:['com','net']}}),
  password:joi.string().min(9).max(15).required(),
   });

   return schema.validate(user); // return true or false

    }

  return (
    <>
  <div className='container my-5'>

{Error? <div className='alert alert-danger'>{Error}</div>: ' '}


   <form onSubmit={SubmitFormData}>
  <div className="my-3">
    <label htmlFor="email" className="form-label">Email</label>
    <input type="text" className="form-control" name='email' onChange={getFormData} />
   
  </div>


  <div className="my-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" className="form-control" name="password"   onChange={getFormData}/>
  </div>
 
  <button type="submit" className="btn btn-primary">{loading?<i class="fa-solid fa-spinner fa-spin"></i>:'Login'}</button>
</form>

    
</div> 
    
    </>
  )
}

export default Login