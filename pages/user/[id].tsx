import {useRouter} from 'next/router'
import { getDatabase, ref, onValue } from "firebase/database";
import { auth } from "../../Firebase"
import { useState, useEffect } from 'react';
import Head from 'next/head'

interface UserObject {
    res: number,
    name: string,
    rank: string,
    score: string,
}


const db = getDatabase();

export default function User({user}) {
    const [rank, setRank] = useState("Loading ...");
    const [score, setScore] = useState("Loading ...");
    const [name, setName] = useState("Loading ...");
    const [res, setRes] = useState(0);
    const [title, setTitle] = useState("User Profile");
    const router = useRouter()
    let {id}: any = router.query;

    

    function getUserRank(): Promise<UserObject> {
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
                })
            }
            else {
                resolve({
                    res: 200,
                    name: snapshot.val()[id].name,
                    rank: `${(userIndex + 1).toString()}`,
                    score: snapshot.val()[id].score.toString(),
                });
            }
        });
      });
    }
    useEffect(() => {
        getUserRank().then(({res, rank, score, name}) => {
            setName(name);
            setRes(res)
            setRank(rank);
            setScore(score);
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
            <div>
                <h1>{name}</h1>
                <h3>Rank #{rank}<br/>Score: {score} points</h3>
            </div>
        </>
    )
}