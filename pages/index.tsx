import Head from 'next/head'
import styles from '../styles/home.module.scss'
import Navigation from '../components/navigation'
import AboutUs from '../components/aboutUs'
import Features from '../components/ourFeatures'
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>My Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation/>
      <AboutUs/>
      <Features/>
    </div>
  )
}
