import React from 'react'
import Home from './Home'
import Register from './Register'
import Login from './Login'
import AdminDashboard from './AdminDashboard'
import ViewUsers from './ViewUsers'
import AddProduct from './AddProduct'
import ViewProduct from './ViewProduct'
import Dashboard from './Dashboard'
import { Route, Routes } from 'react-router-dom'
import App from '../App'
import ProductCard from './ProductCard'
import DataProvider from './Context'
import Cart from './Cart'

const Routning = () => {
  return (
    <div>
        <DataProvider>
            <Routes>
                <Route path="/" element={<App/>}>
                    <Route path="" element={<Home/>}/>
                    <Route path="home" element={<Home/>}/>
                    <Route path="/register" element={<Register/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/productcard" element={<ProductCard/>}/>
                </Route>

                <Route path="/admindash" element={<AdminDashboard/>}>
                    <Route path="users" element={<ViewUsers/>}/>
                    <Route path="addproduct" element={<AddProduct/>}/>
                    <Route path="viewproduct" element={<ViewProduct/>}/>
                </Route>

                <Route path="/dash" element={<Dashboard/>}>
                    <Route path='' element={<ProductCard/>}/>
                    <Route path='cart' element={<Cart/>}/>
                </Route>
            </Routes>
        </DataProvider>
    </div>
  )
}

export default Routning
