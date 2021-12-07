import Head from 'next/head';
import Link from 'next/link';
import styles from '../css/specialthanks.module.css'

export default function SpecialThanks() {
    return (
        <>
            <Head>
                <title>Special Thanks - 1001</title>
            </Head>
            <div className={styles.container}>
                <h1 className={styles.title}>Special Thanks</h1>
                <h4 id={styles.thanks}>
                    I want to thank everyone who helped me with the creation of this project. But especially Wam, Kabs, Prince, Khalen, Max, and everyone else in the 1001 discord server. Thank you for all your help and support. You are all very cool
                </h4>
            </div>
            <div className={styles.container}>
                <Link href={"/"}><a><h1 className={styles.nav}>1001</h1></a></Link><h3 className={styles.inline}>By Arpi</h3>
            </div>
        </>
    )
}
