import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

function ProtectedRout({loginData}) {
  return (
  <>
  
  {loginData ? <Outlet />: <Navigate to='login'/>  //ازا عامل تايوزر لوج ان خلي يروح وين ما بدو ازا مش عامل رجعو على اللوج ان
  
  
}
 
  </>


)
}

export default ProtectedRout