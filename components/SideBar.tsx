import { useRef, useLayoutEffect, useState } from 'react'
import useWallet from '../hooks/useWallet'
import { useSelector } from 'react-redux'
import { selectUser } from '../redux/reducers/userReducer'
import Image from 'next/image'

interface RefObject {
  offsetHeight: number
}

const SideBar: React.FC = () => {
  const {
    connect: connectWallet,
    switchNetwork
  } = useWallet()

  const [showSidebar, setShowSidebar] = useState(false)
  const [onMenu, setOnMenu] = useState(false)
  const [expandedMenu, setExpandedMenu] = useState(0)

  const menu_profile = useRef<HTMLUListElement>(null)
  const menu_ethereum = useRef<HTMLUListElement>(null)
  const menu_wallets = useRef<HTMLDivElement>(null)
  const menu_watchlist = useRef<HTMLDivElement>(null)
  const menu_bridge = useRef<HTMLDivElement>(null)
  const menu_cart = useRef<HTMLDivElement>(null)
  const [offsetMenu, setOffsetMenu] = useState(0)
  
  const user = useSelector(selectUser)

  useLayoutEffect(() => {
    if ( menu_profile.current && expandedMenu == 1 ) {
      const current: RefObject = menu_profile.current
      setOffsetMenu(current.offsetHeight)
    }
    if ( menu_ethereum.current && expandedMenu == 2 ) {
      const current: RefObject = menu_ethereum.current
      setOffsetMenu(current.offsetHeight)
    }
    if ( menu_wallets.current && expandedMenu == 3 ) {
      const current: RefObject = menu_wallets.current
      setOffsetMenu(current.offsetHeight)
    }
    if ( menu_watchlist.current && expandedMenu == 4 ) {
      const current: RefObject = menu_watchlist.current
      setOffsetMenu(current.offsetHeight)
    }
    if ( menu_bridge.current && expandedMenu == 5 ) {
      const current: RefObject = menu_bridge.current
      setOffsetMenu(current.offsetHeight)
    }
    if ( menu_cart.current && expandedMenu == 6 ) {
      const current: RefObject = menu_cart.current
      setOffsetMenu(current.offsetHeight)
    }
  }, [expandedMenu])

  const hideSidebar = () => {
    if ( !onMenu ) {
      setExpandedMenu(0)
      setOffsetMenu(0)
      setShowSidebar(false)
      setOnMenu(false)
    }
  }

  const onLeaveMenu = () => {
    setExpandedMenu(0)
    setOffsetMenu(0)
    setShowSidebar(false)
    setOnMenu(false)
  }

  const toggleMenu = (menu: number) => {
    setExpandedMenu(menu == expandedMenu ? 0 : menu)
  }

  const onClickNetwork = async (networkIndex: number) => {
    await connectWallet()
    await switchNetwork(networkIndex)
  }

  return (
    <>
      { !onMenu && 
        <div 
          className='right-0 right-0 w-[70px] py-10 bg-white fixed h-full z-50'
          onMouseEnter={() => setShowSidebar(true)}
          onMouseLeave={() => hideSidebar()}
        >
          <div className="flex flex-col items-center space-y-4">
            <div className="w-full py-[8px]">
              <div className="sidebar-icon">
                <img src={user.avatar?process.env.API_URL + user.avatar:'/sidebar/ethereum.png'} className="m-auto w-[45px] h-[45px]" />
              </div>
            </div>
            <div className="w-full py-[8px]">
              <div className="sidebar-icon">
                <img src="/sidebar/ethereum.png" className="m-auto" />
              </div>
            </div>
            <div className="w-full py-[8px]">
              <div className="sidebar-icon">
                <img src="/sidebar/wallets.svg" className="m-auto" />
              </div>
            </div>
            <div className="w-full py-[8px]">
              <div className="sidebar-icon">
                <img src="/sidebar/watchlist.svg" className="m-auto" />
              </div>
            </div>
            <div className="w-full py-[8px]">
              <div className="sidebar-icon">
                <img src="/sidebar/bridge.svg" className="m-auto" />
              </div>
            </div>
            <div className="w-full py-[8px]">
              <div className="sidebar-icon">
                <img src="/sidebar/cart.svg" className="m-auto" />
              </div>
            </div>
          </div>
        </div>
      }
      <div 
        className={`right-0 right-0 w-[450px] bg-white px-[24px] py-10 fixed h-full z-40 ease-in-out duration-300 ${
          showSidebar || onMenu ? 'translate-x-0' : 'translate-x-full'
        }`}
        onMouseEnter={() => setOnMenu(true)}
        onMouseLeave={() => onLeaveMenu()}
      >
        <ul className='flex flex-col space-y-4 mr-[70px]'>
          <li className="w-full">
            <button
              className={`w-full text-left rounded-full px-[24px] py-[24px] text-g-600 hover:bg-p-700 hover:bg-opacity-20 font-semibold hover:shadow-xl sidebar ${expandedMenu==1?'active':''}`}
              onClick={() => toggleMenu(1)}
            >
              My Profile
              <span className="pull-right">
                <i className={`${expandedMenu == 1 ? 'fa fa-chevron-up' : 'fa fa-chevron-down'}`}></i>
              </span>
            </button>
            { expandedMenu == 1 &&
              <ul className='flex flex-col w-full space-y-4 p-6 pl-[100px] pt-8 pb-0 text-g-600' ref={menu_profile}>
                <li className="w-full">
                  <button>My Dashboard</button>
                </li>
                <li className="w-full">
                  <button>Account Settings</button>
                </li>
                <li className="w-full">
                  <button>Logout</button>
                </li>
              </ul>
            }
          </li>
          <li className="w-full">
            <button
              className={`w-full text-left rounded-full px-[24px] py-[24px] text-g-600 hover:bg-p-700 hover:bg-opacity-20 font-semibold hover:shadow-xl sidebar ${expandedMenu==2?'active':''}`}
              onClick={() => toggleMenu(2)}
            >
              Network
              <span className="pull-right">
                <i className={`${expandedMenu == 2 ? 'fa fa-chevron-up' : 'fa fa-chevron-down'}`}></i>
              </span>
            </button>
            { expandedMenu == 2 &&
              <ul className='flex flex-col w-full space-y-4 p-6 pl-[80px] pt-8 pb-0 text-g-600' ref={menu_ethereum}>
                <li className="w-full">
                  <button className="flex flex-row" onClick={() => onClickNetwork(0)}>
                    <div className="w-[36px] h-[36px] m-auto">
                      <img src="/svgs/ethereum.svg" width={24} height={28} />
                    </div>
                    <span className="ml-4">Ethereum</span>
                  </button>
                </li>
                <li className="w-full">
                  <button className="flex flex-row" onClick={() => onClickNetwork(1)}>
                    <div className="w-[36px] h-[36px] m-auto">
                      <img src="/svgs/arbitrum.svg" width={35} height={30} />
                    </div>
                    <span className="ml-4">Arbitrum</span>
                  </button>
                </li>
                <li className="w-full">
                  <button className="flex flex-row" onClick={() => onClickNetwork(2)}>
                    <div className="w-[36px] h-[36px] m-auto">
                      <img src="/svgs/avax.svg" width={23} height={35} />
                    </div>
                    <span className="ml-4">Avalanche</span>
                  </button>
                </li>
                <li className="w-full">
                  <button className="flex flex-row" onClick={() => onClickNetwork(3)}>
                    <div className="w-[36px] h-[36px] m-auto">
                      <img src="/svgs/binance.svg" width={29} height={30} />
                    </div>
                    <span className="ml-4">BNB Chain</span>
                  </button>
                </li>
                <li className="w-full">
                  <button className="flex flex-row" onClick={() => onClickNetwork(4)}>
                    <div className="w-[36px] h-[36px] m-auto">
                      <img src="/svgs/fantom.svg" width={25} height={25} />
                    </div>
                    <span className="ml-4">Fantom</span>
                  </button>
                </li>
                <li className="w-full">
                  <button className="flex flex-row" onClick={() => onClickNetwork(5)}>
                    <div className="w-[36px] h-[36px] m-auto">
                      <img src="/svgs/optimism.svg" width={25} height={25} />
                    </div>
                    <span className="ml-4">Optimism</span>
                  </button>
                </li>
                <li className="w-full">
                  <button className="flex flex-row" onClick={() => onClickNetwork(6)}>
                    <div className="w-[36px] h-[36px] m-auto">
                      <img src="/svgs/polygon.svg" width={34} height={30} />
                    </div>
                    <span className="ml-4">Polygon</span>
                  </button>
                </li>
              </ul>
            }
          </li>
          <li className="w-full">
            <button
              className={`w-full text-left rounded-full px-[24px] py-[24px] text-g-600 hover:bg-p-700 hover:bg-opacity-20 font-semibold hover:shadow-xl sidebar ${expandedMenu==3?'active':''}`}
              onClick={() => toggleMenu(3)}
            >
              Wallet
              <span className="pull-right">
                <i className={`${expandedMenu == 3 ? 'fa fa-chevron-up' : 'fa fa-chevron-down'}`}></i>
              </span>
            </button>
            { expandedMenu == 3 &&
              <div className='flex flex-col w-full space-y-4 p-6 pt-8 pb-0' ref={menu_wallets}>
                <span className="font-semibold w-auto text-[16px]">Staking:</span>
                <div className="w-full flex flex-row font-semibold text-[14px]">
                  <div className="bg-g-200 w-[88px] px-[11px] py-[9px]">
                    APR
                    <span className="pull-right">50%</span>
                  </div>
                  <div className="w-[60px] px-[11px] py-[9px]">
                    4652
                  </div>
                  <div className="px-[11px] py-[9px] text-g-600">
                    $OMNI staked
                  </div>
                </div>
                <div className="w-full flex flex-row font-semibold text-[14px]">
                  <div className="bg-g-200 w-[88px] px-[11px] py-[9px]">
                    Rewards
                  </div>
                  <div className="w-[60px] px-[11px] py-[9px]">
                    52.42
                  </div>
                  <div className="px-[11px] py-[9px] text-g-600">
                    $OMNI
                  </div>
                </div>
                <div className="w-full flex flex-row font-semibold text-[14px]">
                  <div className="w-[88px] px-[11px] py-[9px]">
                    
                  </div>
                  <div className="w-[60px] px-[11px] py-[9px]">
                    43.17
                  </div>
                  <div className="px-[11px] py-[9px] text-g-600">
                    $USDC
                  </div>
                </div>
                <span className="font-semibold w-auto text-[16px]">OMNI-USDC LP:</span>
                <div className="w-full flex flex-row font-semibold text-[14px]">
                  <div className="bg-g-200 w-[88px] px-[11px] py-[9px]">
                    APR
                    <span className="pull-right">75%</span>
                  </div>
                  <div className="w-[60px] px-[11px] py-[9px]">
                    17.652
                  </div>
                  <div className="px-[11px] py-[9px] text-g-600">
                    LP staked
                  </div>
                </div>
                <div className="w-full flex flex-row font-semibold text-[14px]">
                  <div className="bg-g-200 w-[88px] px-[11px] py-[9px]">
                    Rewards
                  </div>
                  <div className="w-[60px] px-[11px] py-[9px]">
                    52.42
                  </div>
                  <div className="px-[11px] py-[9px] text-g-600">
                    $OMNI
                  </div>
                </div>
                <div className="w-full flex flex-row font-semibold text-[14px]">
                  <div className="w-[88px] px-[11px] py-[9px]">
                    
                  </div>
                  <div className="w-[60px] px-[11px] py-[9px]">
                    43.17
                  </div>
                  <div className="px-[11px] py-[9px] text-g-600">
                    $USDC
                  </div>
                </div>
                <div className="flex flex-row">
                  <span className="text-[14px]">*add/remove positions on profile dashboard</span>
                  <button className="w-[30px] h-[30px] bg-wallet-output"></button>
                </div>
              </div>
            }
          </li>
          <li className="w-full">
            <button
              className={`w-full text-left rounded-full px-[24px] py-[24px] text-g-600 hover:bg-p-700 hover:bg-opacity-20 font-semibold hover:shadow-xl sidebar ${expandedMenu==4?'active':''}`}
              onClick={() => toggleMenu(4)}
            >
              Watchlist
              <span className="pull-right">
                <i className={`${expandedMenu == 4 ? 'fa fa-chevron-up' : 'fa fa-chevron-down'}`}></i>
              </span>
            </button>
            { expandedMenu == 4 &&
              <div className='flex flex-col w-full space-y-4 p-6 pt-8 pb-0' ref={menu_watchlist}>
                <div className="p-[51px] flex flex-col items-center border border-dashed border-g-300">
                  <span className="text-[14px] text-g-300">Drag & Drop</span>
                  <span className="text-[14px] text-g-300">an NFT or NFT Collection</span>
                  <span className="text-[14px] text-g-300">to add your watch list</span>
                </div>
              </div>
            }
          </li>
          <li className="w-full">
            <button
              className={`w-full text-left rounded-full p-6 text-g-600 hover:bg-p-700 hover:bg-opacity-20 font-semibold hover:shadow-xl sidebar ${expandedMenu==5?'active':''}`}
              onClick={() => toggleMenu(5)}
            >
              Send/Bridge
              <span className="pull-right">
                <i className={`${expandedMenu == 5 ? 'fa fa-chevron-up' : 'fa fa-chevron-down'}`}></i>
              </span>
            </button>
            { expandedMenu == 5 &&
              <div className='flex flex-col w-full space-y-4 p-6 pt-8 pb-0' ref={menu_bridge}>
                <div className="px-[113px] py-[43px] flex flex-col items-center border border-dashed border-g-300 bg-g-200">
                  <img src="/sidebar/attach.png" />
                </div>
                <span className="font-g-300">Select destination chain:</span>
                <div className="flex flex-row w-full space-x-[15px]">
                  <button>
                    <img src="/svgs/avax.svg" width={23} height={35} />
                  </button>
                  <button>
                    <img src="/svgs/arbitrum.svg" width={35} height={30} />
                  </button>
                  <button>
                    <img src="/svgs/binance.svg" width={29} height={30} />
                  </button>
                  <button>
                    <img src="/svgs/ethereum.svg" width={24} height={28} />
                  </button>
                  <button>
                    <img src="/svgs/fantom.svg" width={25} height={25} />
                  </button>
                  <button>
                    <img src="/svgs/optimism.svg" width={25} height={25} />
                  </button>
                  <button>
                    <img src="/svgs/polygon.svg" width={34} height={30} />
                  </button>
                </div>
                <button className="bg-g-400 text-white w-[172px] py-[10px] rounded-full m-auto">
                  Transfer
                </button>
              </div>
            }
          </li>
          <li className="w-full">
            <button
              className={`w-full text-left rounded-full px-[24px] py-[24px] text-g-600 hover:bg-p-700 hover:bg-opacity-20 font-semibold hover:shadow-xl sidebar ${expandedMenu==6?'active':''}`}
              onClick={() => toggleMenu(6)}
            >
              Cart
              <span className="pull-right">
                <i className={`${expandedMenu == 6 ? 'fa fa-chevron-up' : 'fa fa-chevron-down'}`}></i>
              </span>
            </button>
            { expandedMenu == 6 &&
              <div className='flex flex-col w-full space-y-4 p-6 pt-8 pb-0' ref={menu_cart}>
                <div className="px-[113px] py-[43px] flex flex-col items-center border border-dashed border-g-300 bg-g-200">
                  <img src="/sidebar/attach.png" />
                </div>
                <button className="bg-gr-100 text-white w-[172px] py-[10px] rounded-full m-auto">
                  Buy
                </button>
              </div>
            }
          </li>
        </ul>
        <div 
          className='top-0 right-0 w-[70px] py-10 bg-white fixed h-full z-50'
        >
          <div className="flex flex-col items-center space-y-4">
            <div className="w-full py-[8px]">
              <div className="sidebar-icon">
                <img src={user.avatar?process.env.API_URL + user.avatar:'/sidebar/ethereum.png'} className="m-auto w-[45px] h-[45px]" />
              </div>
              { expandedMenu == 1 &&
                <ul className='flex flex-col w-full space-y-4 p-6 pt-8' style={{height: offsetMenu + 'px'}}>
                </ul>
              }
            </div>
            <div className="w-full py-[8px]">
              <div className="sidebar-icon">
                <img src="/sidebar/ethereum.png" className="m-auto" />
              </div>
              { expandedMenu == 2 &&
                <ul className='flex flex-col w-full space-y-4 p-6 pt-8' style={{height: offsetMenu + 'px'}}>
                </ul>
              }
            </div>
            <div className="w-full py-[8px]">
              <div className="sidebar-icon">
                <img src="/sidebar/wallets.svg" className="m-auto" />
              </div>
              { expandedMenu == 3 &&
                <ul className='flex flex-col w-full space-y-4 p-6 pt-8' style={{height: offsetMenu + 'px'}}>
                </ul>
              }
            </div>
            <div className="w-full py-[8px]">
              <div className="sidebar-icon">
                <img src="/sidebar/watchlist.svg" className="m-auto" />
              </div>
              { expandedMenu == 4 &&
                <ul className='flex flex-col w-full space-y-4 p-6 pt-8' style={{height: offsetMenu + 'px'}}>
                </ul>
              }
            </div>
            <div className="w-full py-[8px]">
              <div className="sidebar-icon">
                <img src="/sidebar/bridge.svg" className="m-auto" />
              </div>
              { expandedMenu == 5 &&
                <ul className='flex flex-col w-full space-y-4 p-6 pt-8' style={{height: offsetMenu + 'px'}}>
                </ul>
              }
            </div>
            <div className="w-full py-[8px]">
              <div className="sidebar-icon">
                <img src="/sidebar/cart.svg" className="m-auto" />
              </div>
              { expandedMenu == 6 &&
                <ul className='flex flex-col w-full space-y-4 p-6 pt-8' style={{height: offsetMenu + 'px'}}>
                </ul>
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SideBar