import Head from 'next/head';
import Link from 'next/link';
import {auth} from '../Firebase'
import {useState} from 'react'
import styles from '../css/forgot.module.css'

export default function Forgot() {
    const [email, setEmail] = useState('')

    return (
        <>
            <Head>
                <title>Forgot Password</title>
            </Head>
            <div id={styles.topDiv}>
                <div className={styles.container}>
                    <h1>Reset Password</h1>
                    <input className={styles.uibar} placeholder='Email' name="email" autoCorrect="off" autoCapitalize="off" type="email" value={email} onChange={e => setEmail(e.target.value)} /> 
                    <button className={styles.uibutton} onClick={() => auth.sendPasswordResetEmail(email)}>Send Email</button> 
                </div>
                <div className={styles.container}>
                    <Link href={"/"}><a><h1 className={styles.inline}>1001</h1></a></Link><h3 className={styles.inline}>By Arpi</h3>
                </div>
            </div>
        </>
    );
}