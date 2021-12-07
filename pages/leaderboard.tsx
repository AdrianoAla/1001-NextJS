import { getDatabase, ref, query, onValue, orderByChild, limitToLast } from "firebase/database";
import "firebase/database"
import { useEffect, useState } from "react";
import styles from '../css/leaderboard.module.css';
import Head from 'next/head';
import Link from 'next/link';


export default function Leaderboards(): JSX.Element {
    
    const [sortedTop10, setSortedTop10] = useState<any>({});
    const [top10Ids, setTop10Ids] = useState<any>([]);

    useEffect(() => {
        const db = getDatabase()
        const LeaderboardRef = query(ref (db, `Leaderboard`), orderByChild("score"), limitToLast(10))
        onValue(LeaderboardRef, (snapshot) => {
            setSortedTop10(Object.values(snapshot.val()).sort((a:any, b:any) => b.score - a.score));
            setTop10Ids(Object.keys(snapshot.val()).sort((a:any, b:any) => snapshot.val()[b].score - snapshot.val()[a].score));
        })
    }, [])


    return (
        <>
            <Head>
                <title>Leaderboards - 1001</title>
            </Head>
            <div id={styles.topDiv}>
                <div className={styles.container}>
                    <h4>Leaderboard</h4>
                    <h1>
                        {
                            Object.keys(sortedTop10).length === 0 ? <p>Loading...</p> : Object.keys(sortedTop10).map((key) => {
                                if (sortedTop10[key]["score"] == 0) return null;
                                return <p key={key}>{parseInt(key)+1}. <Link href={`user/${top10Ids[key]}`}><a className={styles.inline}>{sortedTop10[key]["name"]}</a></Link>: {sortedTop10[key]["score"]}</p>
                            })
                        }
                    </h1>
                </div>
                <div className={styles.container}>
                    <Link href={"/"}><a><h1 className={styles.inline}>1001</h1></a></Link><h3 className={styles.inline}>By Arpi</h3>
                </div>
            </div>
        </>
    )
}


