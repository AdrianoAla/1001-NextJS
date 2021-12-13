import {useRouter} from 'next/router'
import { getDatabase, ref, onValue } from "firebase/database";
import { auth } from "../../Firebase"
import { useState, useEffect } from 'react';
import styles from '../../css/user.module.css'
import Head from 'next/head'
import Link from 'next/link'

interface UserObject {
    res: number,
    name: string,
    rank: string,
    score: string,
    playcount: string,
}


const db = getDatabase();

export default function User({user}) {
    const [rank, setRank] = useState("Loading ...");
    const [score, setScore] = useState("Loading ...");
    const [name, setName] = useState("Loading ...");
    const [res, setRes] = useState(0);
    const [playcount, setPlaycount] = useState("Loading ...");
    const [title, setTitle] = useState("User Profile");
    const router = useRouter()
    let {id}: any = router.query;

    

    function getUserData(): Promise<UserObject> {
        return new Promise((resolve) => {
        onValue(ref(db, "Leaderboard"), (snapshot) => {
            const userObjects = snapshot.val();
            const users = Object.keys(snapshot.val()).sort((a, b) => userObjects[b].score - userObjects[a].score);
            const userIndex = users.indexOf(id);
            
            if (userIndex === -1) {
                resolve({
                    res: 404,
                    name: "",
                    rank: "-1",
                    score: "0",
                    playcount: "0",
                })
            }
            else {
                resolve({
                    res: 200,
                    name: snapshot.val()[id].name,
                    rank: snapshot.val()[id].score == 0 ? `Null` : `${(userIndex + 1).toString()}`,
                    score: snapshot.val()[id].score.toString(),
                    playcount: snapshot.val()[id].playcount.toString(),
                });
            }
        });
      });
    }
    useEffect(() => {
        getUserData().then(({res, rank, score, name, playcount}) => {
            setName(name);
            setRes(res)
            setRank(rank);
            setScore(score);
            setPlaycount(playcount);
        })

        if (res === 404) {
            setTitle("User Not Found - 1001");
        } else if (res === 200) {
            setTitle(`${name}'s Profile - 1001`);
        }
    }, []);

    if (res === 404) {
        return (
            <>
                <Head>
                    <title>{title}</title>
                </Head>
                <h1>User does not exist or has not submitted any scores!</h1>
            </>
        )
    }

    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <div id={styles.topDiv}>
                <div className={styles.container}>
                    <h1 className={styles.title}>{name}</h1> <h2 className={styles.rank}>(#{rank})</h2>
                </div>
                <div className={styles.container}>
                    <h3>Score: {score} points</h3>
                    <h3>Playcount: {playcount} plays</h3>
                </div>
                <div className={styles.container}>
                    <Link href={"/"}><a><h1 className={styles.nav}>1001</h1></a></Link><h3 className={styles.rank}>By Arpi</h3>
                </div>
            </div>
        </>
    )
}