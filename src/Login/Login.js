import React, { useState } from 'react'
import './Login.css'
import Wallpaper from "../Login/wallpaper.jpg"
import Logo from '../images/logo.jpg'
function Login() {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const loginAccount = (e) => {
    e.prevent.Default()

  }
  const createAccount = (e) => {

  }

  return (
    <>
      <div className="login" style={{
        backgroundImage: `url(${Wallpaper})`, width: '100vw' ,
        height: '100vw',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'

      }} >
        <div className='login'>
          
            <img
              className="login__logo"
              src={Logo}
              alt=""
            />
          


        </div>



      </div>



    </>
  )
}

export default Login
