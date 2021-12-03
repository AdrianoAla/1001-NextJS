import Link from 'next/link';
import { useState } from 'react';
import { getDatabase, ref, onValue } from "firebase/database";
import Head from 'next/head';


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

                    setResults(results => [...results, {"name":user, "id":snapshot.val()[user],}]);
                }
            })
        });
    }

  return (
    <>
        <Head>
            <title>User Search - 1001</title>
        </Head>
        <div>
        <h1>User Search</h1>
        <input autoCorrect="off" autoCapitalize="off" type="text" placeholder="Search for a user" value={search} onChange={e => {setSearch(e.target.value); findUsers(e.target.value)}} />
        <ul key={"List"}>
            {results.map(result => {
                return (
                    <p key={result.id} ><Link href={`user/${result.id}`}>{result.name}</Link></p>
                )
                //const link = `/user/${result.id}`;
                //<Link href={link}><a>{result.name}</a></Link>
            })}
        </ul>
        </div>
    </>
  );
}
