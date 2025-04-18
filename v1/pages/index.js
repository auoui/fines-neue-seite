
import Head from 'next/head'
import Layout from '../components/Layout'
import styles from '@/styles/globals.css'

export default function Home() {
  return (
    <Layout>
      <Head><title>Mutige Schritte</title></Head>
      <h1>Fine Belger – Selbstfindung, Held*innenreise, Workshops, Gestalttherapie i.A.</h1>
      <p>Kontakt: <a href="mailto:fine.belger@posteo.de">fine.belger@posteo.de</a></p>
    </Layout>
  )
}
