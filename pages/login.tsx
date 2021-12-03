import  { ReactElement, useState } from 'react';
import { auth } from '../Firebase';
import styles from '../css/Login.module.css';
import { getDatabase, onValue, ref, set } from "firebase/database";
import router, { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';


export default function Login () :ReactElement {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [authenticating, setAuthenticating] = useState<boolean>(false);
    const [error, setError] = useState('');

    const router = useRouter();

    const signInWithEmailAndPassword = () => {
      if (error !== '') setError('');

      setAuthenticating(true);

      if (password === '' || email === '') {
        setError("Fill out all inputs")
        return
      }

      auth.signInWithEmailAndPassword(email, password)
      .then(result => {
          const db = getDatabase();
          const userRef = ref(db, `Usernames/${auth.currentUser?.displayName?.toLowerCase()}`);
          onValue(userRef, (snapshot) => {
            snapshot.val() === null && set(userRef, auth.currentUser?.uid);
          })
          
          router.push('/');
      })
      .catch(error => {
          console.log(error);
          setAuthenticating(false);
          console.log(error.code)

          if (error.code === "auth/wrong-password")
          {
              setError("Wrong password");
          }
          else if (error.code === "auth/user-not-found") {
              setError("User not found")
          }
          else if (error.code === "auth/invalid-email") {
              setError("Invalid email")
          }
          else {
              setError("Unknown error, please try again later")
          }
      });
    }
    return ( 
      <>
        <Head>
          <title>Login - 1001</title>
        </Head>
        <div id={styles.container}>
          {(error ? <h6 className={styles.error}>{error}</h6> : null)}
          <h1 className={styles.logintext}>Sign In</h1>
          
          <h1 className={styles.login}>Email</h1>
          <input className={styles.uibar} name="email" autoCorrect="off" autoCapitalize="off" type="email" value={email} onChange={e => setEmail(e.target.value)} />

          <h1 className={styles.login}>Password</h1>
          <input className={styles.uibar} name="password" autoCorrect="off" autoCapitalize="off" type="password" value={password} onChange={e => setPassword(e.target.value)} />
          
          <button className={styles.uibutton} disabled={authenticating} onClick={signInWithEmailAndPassword}>Sign In</button>
          <p><Link href="/register"> Don't have an account? </Link></p>
        </div>
      </>
    );
  };