import  { ReactComponentElement, useState } from 'react';
import { auth } from '../Firebase';
import { useRouter } from 'next/router'
//import './../css/Login.css'
import { Link } from 'react-router-dom';
import { getDatabase, onValue, ref, set } from "firebase/database";


export default function Register (): ReactComponentElement<any> {
    


    


  
      
    return (
      <div>
          <div id='container'>
            {(error ? <h6 className='error'>{error}</h6> : null)}
            <h1 className='login-text'>Sign Up</h1>
            
            <h1 className='login'>Email</h1>
            <input className='ui-bar' name="email" autoCorrect="off" autoCapitalize="off" type="email" value={email} onChange={e => setEmail(e.target.value)} />
            
            <h1 className='login'>Username</h1>
            <input className='ui-bar' name="username" autoCorrect="off" autoCapitalize="off" type="text" value={username} onChange={e => setUsername(e.target.value)} />

            <h1 className='login'>Password</h1>
            <input className='ui-bar' name="password" autoCorrect="off" autoCapitalize="off" type="password" value={password} onChange={e => setPassword(e.target.value)} />

            <h1 className='login'>Confirm Password</h1>
            <input className='ui-bar' name="confirmpassword" autoCorrect="off" autoCapitalize="off" type="password" value={confirm} onChange={e => setConfirm(e.target.value)} />
            
            <button className='ui-button' disabled={authenticating} onClick={signUpWithEmailAndPassword}>Sign Up</button>
            <h6 className='toOther'><Link to='/login'>Already have an account?</Link></h6>
            <h6 className='toOther'><Link to='/password-reset'>Forgot password?</Link></h6>

          </div>
      </div>
    );
  };