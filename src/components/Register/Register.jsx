import React, { useState } from 'react'
import axios from 'axios';
import joi from 'joi';
import { useNavigate } from 'react-router-dom'; //Hook

function Register() {
  let navegate=useNavigate();
  function  goToLogin(){
    let path='/login';//This path from APP.js, very important to add / at the start of path
    navegate(path);
  }
    let SubmitFormData= async(e)=>{

       e.preventDefault();
       
      let{data}=await axios.post("https://knowledge-saraha.herokuapp.com/users/signUp",user);
     console.log(data);
    if(data.message=='success'){
      goToLogin();
     }
     //let validateform=ValidateForm();
     //setError(validateform.error.details);
     //console.log(validateform);

     setloading(true);//مشام لما نكبس على الريجيستر يصير يعمل لودنغ
    }
let[Error,setError]=useState([]);
let[loading,setloading]=useState(false);//loading 
let[user,setUser]=useState({
name:"",
password:"",
age:"",
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
  name:joi.string().required(),
  age:joi.number().max(20).required(),
  email:joi.string().required().email({minDomainSegments:2 , tlds:{allow:['com','net']}}),
  password:joi.string().required(),
   });

   return schema.validate(user); // return true or false

    }

  return (
    <>
  <div className='container my-5'>

  {Error.map((error,index)=>
  <div className='alert alert-danger' key={index}>{error.message}</div>
  
  )}

   <form onSubmit={SubmitFormData}>
  <div className="my-3">
    <label htmlFor="name" > Name</label>
    <input type="text" className="form-control" name='name'  onChange={getFormData} />
   
  </div>

  

  <div className="my-3">
    <label htmlFor="age" className="form-label">Age</label>
    <input type="number" className="form-control" name='age'  onChange={getFormData} />
   
  </div>
  <div className="my-3">
    <label htmlFor="email" className="form-label">Email</label>
    <input type="text" className="form-control" name='email' onChange={getFormData} />
   
  </div>


  <div className="my-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" className="form-control" name="password"   onChange={getFormData}/>
  </div>
 
  <button type="submit" className="btn btn-primary">{loading?<i class="fa-solid fa-spinner fa-spin"></i>:'Register'}</button>
</form>

    
</div> 
    
    </>
  )
}

export default Register