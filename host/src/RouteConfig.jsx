import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import PrivateRoutes from './PrivateRoutes'
import LoginPage from './Pages/login/LoginPage'
import ShoppingList from './ShoppingList'
import Albums from './Albums'
import { CartList } from './CartList'

export default function Routeconfig(){
    return(<>
<Routes>
  <Route element={<PrivateRoutes/>}>
      <Route path='/' element={<ShoppingList/>} />
      <Route path='/products' element={<ShoppingList/>} />
      <Route path='/cart' element={<CartList/>} />
  </Route>
  <Route path='/login' element={<LoginPage/>}/>
</Routes>
</>)
}