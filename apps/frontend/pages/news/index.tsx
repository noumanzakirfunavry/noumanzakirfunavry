import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../../components/Layout/Header'
import MenuBar from '../../components/MenuBar/MenuBar'
import TopBar from '../../components/TopBar/TopBar'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>CNBC</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main >
        <TopBar></TopBar>
        <Header></Header>
        <MenuBar></MenuBar>
      </main>

      <footer>
       
      </footer>
    </div>
  )
}

export default Home
