import Head from 'next/head'
import Image from 'next/image'
import Login from '../components/Login/login'
import styles from "../styles/Home.module.css"

export default function Home() {
  return (
    <div className={styles.maincontainer}>
      <Head>
        <title>Pettik</title>
        <link rel="png" href="/logo.png" />
      </Head>
     
      <Login />
     
    </div>
  )
}
