import React from 'react'

import { Navigate, Outlet } from 'react-router-dom'
const PrivateRoutes = () => {
  let auth = localStorage.getItem("authenticated")=="true";
return (
    auth ? <Outlet/> : <Navigate to='/login'/>
  )
}
export default PrivateRoutes;