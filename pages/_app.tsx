import type { AppProps } from 'next/app'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import WalletContextProvider from '../components/WalletContextProvider'
import { Wallet } from '@project-serum/anchor'

const colors = {
  background: "#1f1f1f",
  accent: "#833bbe",
  bodyText: "rgba(255, 255, 255, 0.75)"
}

const theme = extendTheme({ colors })

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <ChakraProvider theme={theme}>
      <WalletContextProvider>
      <Component {...pageProps} />
      </WalletContextProvider>
    </ChakraProvider>
  )
}

export default MyApp
