import React from 'react'
import type { NextPage } from 'next'
import MetaMaskConnect from '../components/MetaMaskConnect'
import Tabs from '../components/Tabs'
import useWallet from '../hooks/useWallet'

const Home: NextPage = () => {
  const context = useWallet()
  const [isBlur, setIsBlur] = React.useState<boolean>(false)

  React.useEffect(() => {
    setIsBlur(context.address ? false : true)
  }, [context.address])
  
  return (
    <>
      {isBlur &&
        <MetaMaskConnect
          onConnect={async () => {
            context.connect()
          }}
          context={context}
        />
      }
      <Tabs blur={isBlur} />
    </>
  )
}

export default Home
