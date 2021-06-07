import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Andre Gomes Dev</title>
        <meta name="description" content="Personal Page - Developer Andre Gomes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to my Site
        </h1>

        <p className={styles.description}>
          This site is under construction
        </p>

      </main>

      </div>
  )
}
