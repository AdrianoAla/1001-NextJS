import { getDatabase, ref, query, onValue, orderByChild, limitToLast } from "firebase/database";
import "firebase/database"
import { useEffect, useState } from "react";
import Head from 'next/head';


export default function Leaderboards(): JSX.Element {
    
    const [sortedTop10, setSortedTop10] = useState<any>({});

    useEffect(() => {
        const db = getDatabase()
        const LeaderboardRef = query(ref (db, `Leaderboard`), orderByChild("score"), limitToLast(10))
        onValue(LeaderboardRef, (snapshot) => {
            setSortedTop10(Object.values(snapshot.val()).sort((a:any, b:any) => b.score - a.score));
        })
    }, [])


    return (
        <>
            <Head>
                <title>Leaderboards - 1001</title>
            </Head>
            <div className="App">
                <h4>Leaderboard</h4>
                <ol>
                    <li><h5>
                        {
                            Object.keys(sortedTop10).length === 0 ? <p>Loading...</p> : Object.keys(sortedTop10).map((key) => {return <p>{parseInt(key)+1}. {sortedTop10[key]["name"]}: {sortedTop10[key]["score"]}</p>})
                        }
                    </h5></li>
                </ol>
            </div>
        </>
    )
}


