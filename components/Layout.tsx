import { useState, useEffect, useRef } from 'react'
import Head from 'next/head'
import Header from './Header'
import { useRouter } from 'next/router'
import Banner from './Banner'
import { useDispatch, useSelector } from 'react-redux'
import { getUser, selectUpdatingUser } from '../redux/reducers/userReducer'
import SideBar from './SideBar'
import banner_1 from '../public/images/banner-1.png'
import banner_2 from '../public/images/banner-2.png'
import banner_3 from '../public/images/banner-3.png'
import banner_4 from '../public/images/banner-4.png'
import banner_5 from '../public/images/banner-5.png'
import banner_6 from '../public/images/banner-6.png'
import Image from 'next/image'
import useWallet  from '../hooks/useWallet'
import SnackbarComponent from './SnackBar'
type LayoutProps = {
  children?: React.ReactNode
}

const firstSlides:Array<React.ReactNode> = []
firstSlides.push(<Image src={banner_1} alt="banner - 1" />)
firstSlides.push(<Image src={banner_2} alt="banner - 2" />)
firstSlides.push(<Image src={banner_3} alt="banner - 3" />)

const secondSlides:Array<React.ReactNode> = []
secondSlides.push(<Image src={banner_4} alt="banner - 4" />)
secondSlides.push(<Image src={banner_5} alt="banner - 5" />)
secondSlides.push(<Image src={banner_6} alt="banner - 6" />)

const Layout: React.FC = ({ children }: LayoutProps) => {
  const router = useRouter()
  const {
    address,
  } = useWallet()
  
  const [ menu, setMenu ] = useState('home')
  const updatingUser = useSelector(selectUpdatingUser)

  const [isBlur, setIsBlur] = useState<boolean>(false)
  
  const dispatch = useDispatch()

  useEffect(() => {
    if ( address != undefined && !updatingUser ) {
      dispatch(getUser(address) as any)
    }
  }, [address, updatingUser, dispatch])

  useEffect(() => {
    if ( router.pathname === '/market' ) {
      setMenu('market')
    } else if ( router.pathname === '/analytics' ) {
      setMenu('analytics')
    } else if ( router.pathname === '/' ) {
      setMenu('home')
    } else{
      setMenu('others')
    }
  }, [router.pathname])

  useEffect(()=>{
    setIsBlur(address?false:true)
  }, [address])


  return (
    <>
      <Head>
        <title>Omni-X Marketplace</title>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, maximum-scale=1'
        />
      </Head>
      <SnackbarComponent />
      <main className='w-full flex flex-col'>
        <SideBar />
        <Header menu={menu} />
        <Banner hidden={menu==='home' || menu==='market'?false:true} slides={menu==='home'?firstSlides:secondSlides} blur={isBlur?true:false} menu={menu} />
        {children}
      </main>
    </>
  )
}

export default Layout