import React, { useContext } from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/home/Home'
import Single from './pages/single/Single'
import Write from './pages/write/Write'
import Setting from './pages/settings/Setting'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import { Route, Routes } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import { Context } from './context/Context'
import IsRegistered from './components/IsUserRegister/IsRegistered'
import IsLogged from './components/IsLoggedin/isLogged'

const App = () => {
  // const user = true;

  return (
    <>
      <Navbar />
      <Routes>
        {/* <Route path='/' element={<Home />} /> */}
        <Route path='/' element={<IsRegistered />} />
        {/* {
          <Route path="/" element={user ? <Home /> : <Register />} />
        } */}
        <Route path='/login' element={<Login />} />
        <Route path='/write' element={<Write />} />
        <Route path='/settings' element={<Setting />} />
        <Route path='/post/:postId' element={<Single />} />

        <Route path='/*' element={<Navigate to={'/'} />} />

      </Routes>
    </>
  )
}

export default App