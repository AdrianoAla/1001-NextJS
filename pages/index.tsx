import { ReactElement, useEffect, useState } from 'react';
import { auth } from '../Firebase';
import { getDatabase, ref, update, onValue, get } from "firebase/database";
import { generateSequence, leadingZeroes, validateNumber, setWinStateFromSequence } from '../SetupFunctions';
import { handlepress } from '../Input'
import styles from '../css/app.module.css'
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';


let initialValue: string;
let currentGoal = "";
let moves = 0;
let time = 0;

const db = getDatabase();

function addScore(s:number): Promise<Object> {
  return new Promise ((resolve) => {
    const updates: any = {};
    onValue(ref(db, `/Leaderboard/${auth.currentUser?.uid}/`), (snapshot) => {

      updates[`/Leaderboard/${auth.currentUser?.uid}/score`] = snapshot.val().score + s;
      updates[`/Leaderboard/${auth.currentUser?.uid}/name`] = auth.currentUser?.displayName;
      updates[`/Leaderboard/${auth.currentUser?.uid}/playcount`] = snapshot.val().playcount || 0 + 1;
      resolve(updates)
    })
    update(ref(db), updates)
  })
}



function calculateTh(): Promise<number> {
  return new Promise((resolve) => {
    if (auth.currentUser?.uid !== undefined) {
      onValue(ref(db, `Leaderboard/${auth.currentUser?.uid}/`), (snapshot) => {
          resolve (snapshot.val().score/200)
      })
    }
  })
}

function calculateScore(): Promise<number>  {
  return new Promise((resolve) => {
    calculateTh().then((threshold: number) => {
      resolve( Math.round( (1/((time/100)+moves*10)*100000)-threshold )) 
    }) 
  })
}
function addPlaycount() : Promise<any> {
  return new Promise((resolve) => {
    const updates: any = {};
    get(ref(db, `Leaderboard/${auth.currentUser?.uid}`)).then((snapshot) => {
      if (snapshot.val()) {
        if (snapshot.val().playcount === undefined) {
          updates[`/Leaderboard/${auth.currentUser?.uid}/playcount`] = 1;
          } else {
            updates[`/Leaderboard/${auth.currentUser?.uid}/playcount`] = snapshot.val().playcount + 1;
        }     
        resolve (updates)
      }
    });
})}

function getUserRank(): Promise<number> {
    return new Promise((resolve) => {
    onValue(ref(db, "Leaderboard"), (snapshot) => {
        const userObjects = snapshot.val();
        const users = Object.keys(snapshot.val()).sort((a, b) => userObjects[b].score - userObjects[a].score);
        const userIndex = users.indexOf(auth.currentUser?.uid!);

        resolve(userIndex + 1);
    });
  });
}



export default function Home() {
  

  useEffect(() => {
    initialize() 
  }, []) 

    const [currentValue, setCurrentValue] = useState<string>("999999");
    const [winState, setWinState] = useState<string>("000000");
    const [userRank, setRank] = useState<number>(-1);
    
    const router = useRouter();
    function setCurrentGoal (arg:string) {currentGoal = arg;}
    function getCurrentGoal () {return currentGoal;}
    


    const resetVariables = () => {
      const start = validateNumber(String(Math.floor( Math.random()*1000000)));
      setCurrentValue  (start);
      initialValue =   (start);
      setCurrentGoal   (start);

      time = 0;
      setInterval(() => {    
        time+=5;
      }, 1);
    }

    function initialize(): void { 
      resetVariables()
      addPlaycount().then((u) => { update(ref(db), u)})
      const seq: string[] = generateSequence(5);
      setWinStateFromSequence(seq, makeMove, getCurrentGoal, setCurrentGoal)
      setWinState(currentGoal );
      moves = 0;
      getUserRank().then((r) => { setRank(r);})
    }
    
   
  
    function checkWin(state: string): void {
      if (state === winState) {
        calculateScore().then((score:number) => {
            if (score < 0) score = 0;
            alert (`You won with a movecount of ${moves} and a time of ${time} ms for a weighted score of ${(score)}`);

            auth.currentUser?.emailVerified && addScore(score);
            initialize();
        })
      }
    }

    function makeMove(value:string, callback:Function, move:string) {
      moves += 1;
      let returnValue: string = ""; 

      switch (move) {
        case "Rot":
          returnValue = leadingZeroes (value[value.length - 1] + value.slice(0,5));
          break;
        case "Add":
          returnValue = validateNumber(String(parseInt(value) + 1001));
          break;
        case "Sub":
          returnValue = validateNumber(String(parseInt(value) - 1001));
          break;
      }
      callback (returnValue === "-1" ? value : returnValue);
      checkWin(returnValue);
    }
    
    if (!auth.currentUser) {
      router.push('/login');
      return <div></div>
    }
    else {
    return (
    <>
      <Head>
        <title>1001</title>
      </Head>
      <div onKeyUp={(e) => {if (e.key == "r") setCurrentValue(initialValue); else handlepress(e, currentValue, setCurrentValue, makeMove)}} tabIndex={0} className="App">
        <div id={styles.navbarDiv}>
          <h6 id={styles.goalText}>Goal: {winState}</h6>
          <button id={styles.resetButton} onClick={() => {setCurrentValue(initialValue); moves +=1}}><img alt='Reset' src="https://api.serversmp.xyz/upload/1001/back.png" width='70%'></img></button>
        </div>
        <h1 id={styles.stateText}>{currentValue}</h1>
            
        <button className={styles.control} onClick={() => makeMove(currentValue, setCurrentValue, "Sub")}> - </button>
        <button className={styles.control} onClick={() => makeMove(currentValue, setCurrentValue, "Add")}> + </button>
        <button className={styles.control} onClick={() => makeMove(currentValue, setCurrentValue, "Rot")}><img alt='R' src="https://api.serversmp.xyz/upload/1001/reset.png" width='39%'></img></button>

        <h6 id={styles.specialThanks}>Special thanks to Wam, Kabs, Khalen, Max and Prince. You guys are very cool :D</h6>          
        <h6 id={styles.rankText}><Link href={`user/${auth.currentUser.uid}`} ><a>Rank #{userRank}</a></Link> | <Link href="leaderboard">Leaderboard</Link> | <Link href="search">Search</Link></h6>
        <h6 id={styles.logOut}><Link href="specialthanks"><a>Special Thanks</a></Link> | <Link href="settings"><a>Settings</a></Link> </h6>
      </div>
    </>
    );
    }
  }