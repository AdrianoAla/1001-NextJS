import Link from 'next/link';
import { useState } from 'react';
import { getDatabase, ref, onValue } from "firebase/database";
import Head from 'next/head';
import styles from '../css/user.module.css';


export default function User() {
    
    const [results, setResults] = useState([]);
    const [search, setSearch] = useState('');
    
    function findUsers(id) {
        setResults([]);
        if (id.length === 0) {
            return;
        }
        const db = getDatabase();
        const r = ref(db, 'Usernames')
        onValue(r, (snapshot) => {
            const users = Object.keys(snapshot.val());

            users.map(user => {
                // for the user, see if it starts with the search term
                if (user.toLowerCase().startsWith(id.toLowerCase())) {
                    if (results.length < 5) setResults(results => [...results, {"name":user, "id":snapshot.val()[user],}]);

                }
            })
        });
    }

  return (
    <>
        <Head>
            <title>User Search - 1001</title>
        </Head>
        <div id={styles.topDiv}>
            <div className={styles.container}>
                <h1 id={styles.topText}>User Search</h1>
                <input id={styles.searchBar} autoCorrect="off" autoCapitalize="off" autoComplete='off' type="search" placeholder="Search for a user" value={search} onChange={e => {setSearch(e.target.value); findUsers(e.target.value)}} />
            </div>
            {results.length > 0 ? (
            <div className={styles.container}>
                <ul key={"List"}>
                    {results.map(result => {
                        return (
                            <p className={styles.result} key={result.id} ><Link href={`user/${result.id}`}>{result.name}</Link></p>
                        )
                    })}
                </ul>
            </div>
            ) : (<></>)}
            <div className={styles.container}>
                <Link href={"/"}><a><h1 className={styles.nav}>1001</h1></a></Link><h3 className={styles.rank}>By Arpi</h3>
            </div>
        </div>
    </>
  );
}
