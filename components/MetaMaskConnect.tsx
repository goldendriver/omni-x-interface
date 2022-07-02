import React from 'react'
import Fail from '../public/images/fail.png'
import Image from 'next/image'
import ConnectButton from './ConnectButton'
import { WalletContextType } from '../contexts/wallet'

type ConnectButtonProps = {
  onConnect: () => Promise<void>
  context:WalletContextType
}
const MetaMaskConnect = ({onConnect, context}:ConnectButtonProps): JSX.Element => {
  const [show, setShow] = React.useState<boolean>(true)

  React.useEffect(()=>{
    if(context.address) setShow(false)
    else setShow(true)
  },[context.address])
  
  return (
    <>
      {show && <div className="flex justify-center items-center w-screen h-screen bg-[#ffffff90] fixed z-[1]">
        <div className="flex flex-col justify-center border-4 border-[#1E1C21] p-20 rounded-[10px] bg-[#ffffff] text-[32px] font-bold">
          <div className='flex justify-center mb-10'><Image src={Fail} alt="fail" /></div>
          <div>Please sign-in by connecting your wallet</div>
          <div className='flex justify-center mt-20'><ConnectButton onConnect={onConnect} /></div>
        </div>
      </div>}
    </>
  )
}

export default MetaMaskConnect