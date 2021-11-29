import  { useState } from 'react';
import { useRouter } from 'next/router'
import { getDatabase, onValue, ref, set } from "firebase/database";
import { auth } from '../Firebase';
import styles from '../css/Login.module.css';
import head from 'next/head'
import { Link } from 'react-router-dom';


export default function Register () {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');
    const [authenticating, setAuthenticating] = useState(false);
    const [error, setError] = useState('');

    const router = useRouter();


    const signUpWithEmailAndPassword = () => {
        const invalid = /[.#$[]]/
  
        if (invalid.test(username)) {
          setError('Username cannot contain spaces, periods, or special characters.')
          return
        }
  
        if (password !== confirm)
        {
            setError('Please make sure your passwords match.');
            return;
        }
  
        if (password === '' || confirm === '' || email === '') {
          setError("Fill out all inputs")
        }
  
        (error !== '') && setError('');
  
        setAuthenticating(true);
  
        const db = getDatabase();
  
  
        console.log(username)
        const userRef = ref(db, 'Usernames/' + username.toLowerCase());
          onValue(userRef, (snapshot) => {
            const data = snapshot.val();
            
  
            if (data !== null)
            {
              setError('Username already taken.');
              setAuthenticating(false);
              return
            }
  
            else {
              auth.createUserWithEmailAndPassword(email, password)
              .then(result => {
  
                auth.onAuthStateChanged(user => {
                  set(userRef, user?.uid);
                  user?.updateProfile({
                    displayName: username,
                  })
                  .then(() => {
                    router.push('/');
                    return
                  })
              })})
  
              .catch(error => {
                console.error(error);
  
                if (error.code.includes('auth/weak-password'))              setError('Please enter a stronger password.');
                else if (error.code.includes('auth/email-already-in-use'))  setError('Email already in use.');
                else                                                        setError('Unknown Error. Try again later.')
              
                setAuthenticating(false);
              });
              }
        });
    }

    return (
      
        <div>
          <div id={styles.container}>
            {(error ? <h6 className={styles.error}>{error}</h6> : null)}
            <h1 className={styles.logintext}>Sign Up</h1>
            
            <h1 className={styles.login}>Email</h1>
            <input className={styles.uibar} name="email" autoCorrect="off" autoCapitalize="off" type="email" value={email} onChange={e => setEmail(e.target.value)} />
            
            <h1 className={styles.login}>Username</h1>
            <input className={styles.uibar} name="username" autoCorrect="off" autoCapitalize="off" type="text" value={username} onChange={e => setUsername(e.target.value)} />

            <h1 className={styles.login}>Password</h1>
            <input className={styles.uibar} name="password" autoCorrect="off" autoCapitalize="off" type="password" value={password} onChange={e => setPassword(e.target.value)} />

            <h1 className={styles.login}>Confirm Password</h1>
            <input className={styles.uibar} name="confirmpassword" autoCorrect="off" autoCapitalize="off" type="password" value={confirm} onChange={e => setConfirm(e.target.value)} />
            
            <button className={styles.uibutton} disabled={authenticating} onClick={signUpWithEmailAndPassword}>Sign Up</button>
            

          </div>
          <head>
            <title>Register</title>
          </head>
      </div>


    );
  };