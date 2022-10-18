import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Box, Center, Spacer, Stack } from '@chakra-ui/react'
import NavBar from '../components/NavBar'
import Disconnected from '../components/Disconnected'
import Connected from '../components/Connected'
import { useWallet } from '@solana/wallet-adapter-react'


const twitterLink = "https://twitter.com/xentoshi"

const Home: NextPage = () => {

  const { connected } = useWallet()

  return (
    <div className={styles.container}>
      <Head>
        <title>Toys</title>
        <meta name="description" content="The NFT collection for inner kids" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <Box width="full" height="calc(100vh)" bgImage={ connected ? "" : "url(/home-background.svg)"} backgroundPosition="center">
    <Stack width="full" height="calc(100vh)" justify="center">
      <NavBar />
    
    <Spacer />

    <Center>
    {/* If Connected, the second view, otherview the first*/}
    { connected ? <Connected /> : <Disconnected />}
    </Center>

    <Spacer />


    <Center>
    <Box marginBottom={4} color="black">
      <a href={twitterLink} target="_blank" rel="noopener noreferrer">
      built by xentoshi
      </a>
    </Box>
    </Center>
    </Stack> 
    </Box>
   
    </div>
  )
}

export default Home
