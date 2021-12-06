import { useRouter } from 'next/router';
import { auth } from '../Firebase'
import styles from '../css/settings.module.css'
import Link from 'next/link';
import Head from 'next/head';
import {updatePassword } from 'firebase/auth'
import { useState } from 'react';
import { getDatabase, onValue, ref, set, remove, get, update } from "firebase/database";



export default function Settings() {
    const [passwordForCU, setPasswordForCU] = useState('')
    const [newUsername, setNewUsername] = useState('')
    const [password, setPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [confirmNewPassword, setConfirmNewPassword] = useState('')

    const router = useRouter();

    const changePassword = (pw, npw, cnpw) => {
        if (npw !== cnpw) return alert('Passwords do not match')
        auth.signInWithEmailAndPassword(auth.currentUser.email, pw).then(() => {
            updatePassword(auth.currentUser, npw).then(() => {
                alert('Password updated successfully')
            }).catch((error) => {
                alert("An error has occured. Please try again later.")
                console.log(error)
            });
        }).catch((error) => {
            alert("Incorrect password")
            console.log(error)
        });
    }

    const changeUsername = (username, pw) => {
        console.log(auth.currentUser.displayName)

        auth.signInWithEmailAndPassword(auth.currentUser.email, pw).then(() => {
            const db = getDatabase()
            const userRef = ref(db, 'Usernames')
            const u = username.toLowerCase()
            const curUsername = auth.currentUser.displayName.toLowerCase()

            get(userRef).then((snapshot) => {
                console.log(`Username: ${snapshot.val()[u]}`)

                if (snapshot.val()[u]) {
                    alert('Username already taken')
                    return
                }

                else {
                    remove(ref(db, `Usernames/${curUsername}`))
                    set(ref(db, `Usernames/${u}`), auth.currentUser.uid)
                    
                    auth.currentUser.updateProfile({
                        displayName: u
                    }).then(() => {
                        const lbRef = ref(db, `Leaderboards/${auth.currentUser.uid}/`)

                        update(lbRef, {"name":username})
                        

                        alert('Username updated successfully')
                        return
                    }).catch((error) => {
                        alert("An error has occured. Please try again later.")
                        console.log(error)
                        return
                    });
                    return
                }
            })
            return
        })
    }

    const Logout = () => {
        auth.signOut()
        .then(() => router.push('/login'))
        .catch(error => console.error(error));
    }

    if (!auth.currentUser) {
        router.push('/login');
        return <div></div>
    }

    else { return (
        <>
            <Head>
                <title>Settings - 1001</title>
            </Head>
            <div id={styles.topDiv}>
                <div className={styles.container}>
                    <h1 id={styles.title}>Settings</h1>
                    
                    <div className={styles.settingsSection}>                    
                        <h2 className={styles.sectionTitle}>Change Username</h2>
                            <input className={styles.uibar} name="Password" type="password" autoCorrect="off" autoCapitalize="off" placeholder="Current password" value={passwordForCU} onChange={(e) => setPasswordForCU(e.target.value)} />
                            <input className={styles.uibar} name="Change Username" type="text" autoCorrect="off" autoCapitalize="off" placeholder="New username" value={newUsername} onChange={(e) => setNewUsername(e.target.value)} />
                            <br/>
                            <button className={styles.uibutton} onClick={() => changeUsername(newUsername, passwordForCU)}>Change</button>
                    </div>

                    <div className={styles.settingsSection}>                    
                        <h2 className={styles.sectionTitle}>Chage Password</h2>
                            <input className={styles.uibar} name="Password" type="password" autoCorrect="off" autoCapitalize="off" placeholder="Current password" value={password} onChange={(e) => setPassword(e.target.value)} />
                            <input className={styles.uibar} name="Change Password" type="password" autoCorrect="off" autoCapitalize="off" placeholder="New password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
                            <input className={styles.uibar} name="Confirm Change Password" type="password" autoCorrect="off" autoCapitalize="off" placeholder="Confirm password" value={confirmNewPassword} onChange={(e) => setConfirmNewPassword(e.target.value)} />
                            <br />
                            <button className={styles.uibutton} onClick={() => changePassword(password, newPassword, confirmNewPassword)}>Update Password</button>
                    </div>

                    <button className={styles.uibutton} onClick={Logout}>Log out</button>
                </div>
            </div>
        </>
    )}

}
