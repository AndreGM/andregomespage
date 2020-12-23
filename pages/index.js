import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Andre Gomes Dev</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to my page
        </h1>

        <p className={styles.description}>
          Sorry, but for now this page is under construction. <br/>
          You can find me clicking bellow
        </p>

        <div className={styles.grid}>
          <a href="https://www.linkedin.com/in/andredev/" target="_blank" className={styles.card}>
            <h3>Linked In <span>&rarr;</span> </h3>
          </a>

          <a href="https://www.instagram.com/andregomes.dev/" target="_blank" className={styles.card}>
            <h3>Instagram <span>&rarr;</span></h3>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
