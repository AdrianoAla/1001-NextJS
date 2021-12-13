import  { useState } from 'react';
import { useRouter } from 'next/router'
import { getDatabase, onValue, ref, set } from "firebase/database";
import { auth } from '../Firebase';
import styles from '../css/login.module.css';
import Head from 'next/head'
import Link from 'next/link';


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

                    set (ref(db, `Leaderboards/${username}`), {
                      name: username,
                      score: 0,
                      playcount: 0,
                    })

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
        <>
          <Head>
              <title>Register - 1001</title>
          </Head>
        <div id={styles.topDiv}>

          <div className={styles.container}>
            {(error ? <h6 className={styles.error}>{error}</h6> : null)}
            <h1 className={styles.logintext}>Sign Up</h1>
            
            <input className={styles.uibar} placeholder='Email' name="email" autoCorrect="off" autoCapitalize="off" type="email" value={email} onChange={e => setEmail(e.target.value)} />
            <input className={styles.uibar} placeholder='Username' name="username" autoCorrect="off" autoCapitalize="off" type="text" value={username} onChange={e => setUsername(e.target.value)} />
            <input className={styles.uibar} placeholder='Password' name="password" autoCorrect="off" autoCapitalize="off" type="password" value={password} onChange={e => setPassword(e.target.value)} />
            <input className={styles.uibar} placeholder='Confirm' name="confirmpassword" autoCorrect="off" autoCapitalize="off" type="password" value={confirm} onChange={e => setConfirm(e.target.value)} />
            
            <br />
            <button className={styles.uibutton} disabled={authenticating} onClick={signUpWithEmailAndPassword}>Sign Up</button>
            
            <p className={styles.toOther}><Link href="/login"> Already have an account? </Link></p>
            <p className={styles.toOther}><Link href="/forgot"> Forgot your password? </Link></p>


          </div>
          <div className={styles.container}>
                    <Link href={"/"}><a><h1 className={styles.inline}>1001</h1></a></Link><h3 className={styles.inline}>By Arpi</h3>
          </div>
          
      </div>
      </>

    );
  };