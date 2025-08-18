import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from './pages/Auth/login';
import SignUp from './pages/Auth/SignUp';
import Home from './pages/DashBoard/Home';
import Income from './pages/DashBoard/Income';
import Expense from './pages/DashBoard/Expense';
function App() {
  return (
    <>
        <Router>
          <Routes>
            <Route path="/" element={<Root />} />
            <Route path="/login" exact element={<Login />} />
            <Route path="/signUp" exact element={<SignUp />} />
            <Route path="/dashboard" exact element={<Home />} />
            <Route path="/income" exact element={<Income />} />
            <Route path="/expense" exact element={<Expense />} />

          </Routes>
        </Router>
    </>
  )
}


export default App;

const Root = () => {
  const isAuthenticated = !!localStorage.getItem("token");

  return isAuthenticated ? (<Navigate to="/dashboard" />) : (<Navigate to="/login" />)
}
