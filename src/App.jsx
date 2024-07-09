// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { Outlet, Route, Routes } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import Home from "./Components/Home"
import Register from "./Components/Register"
import Login from "./Components/Login"
import AdminDashboard from "./Components/AdminDashboard"
import Dashboard from "./Components/Dashboard"
import ViewUsers from "./Components/ViewUsers"
import AddProduct from "./Components/AddProduct"
import ViewProduct from "./Components/ViewProduct"
import Navbar from "./Components/Navbar"

function App() {

  return (
    <>
      <ToastContainer autoClose={500}/>
        <Navbar/>
      <Outlet/>
    </>
  )
}

export default App

