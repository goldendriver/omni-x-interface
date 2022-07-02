import { Carousel } from '3d-react-carousal'
import React, { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import classNames from '../helpers/classNames'
import Twitter from '../public/images/twitter.png'
import Web from '../public/images/web.png'
import { useSelector } from 'react-redux'
import { selectUser } from '../redux/reducers/userReducer'

import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import UserEdit from './user/UserEdit'
import Setting from '../public/images/setting.png'

type BannerProps = {
  hidden: boolean
  slides: Array<React.ReactNode>
  blur: boolean
  menu: string
}

const Banner = ({ hidden, slides, blur, menu }: BannerProps): JSX.Element => {
  const [bOpenModal, setOpenModal] = React.useState(false);
  const [bShowSettingIcon, setShowSettingIcon] = React.useState(false);
  const user = useSelector(selectUser)
  const updateModal = (name: string):void => {
    setOpenModal(false);
  }

  return (
    <>
      <div
        className={classNames(
          'w-full',
          'mt-40',
          hidden ? 'hidden' : '',
          blur && menu ==='home'? 'blur-sm' : ''
        )}
      >
        <div onMouseEnter={() => setShowSettingIcon(true)} onMouseLeave={() => setShowSettingIcon(false)}>
          <Carousel slides={slides} autoplay={true} interval={3000} />
        </div>
        
        {menu === 'home' && (
          <div className="flex justify-center w-full ">
            <div className="flex justify-between justify-center fw-60 mt-5 relative">
              {
                bShowSettingIcon &&
                <div className="-top-[7rem] left-[1rem] absolute" onMouseEnter={() => setShowSettingIcon(true)} onMouseLeave={() => setShowSettingIcon(false)}>
                  <a className="cursor-pointer" onClick={() => setOpenModal(true)}>
                    <div className="p-2 rounded-full bg-[#adb5bd]/[.5] w-[50px] h-[50px]">
                      <Image src={Setting} alt="avatar"/>
                    </div>
                  </a>
                </div>
              }
              <div className="-top-[10rem] left-[6rem] absolute" onMouseEnter={() => setShowSettingIcon(true)} onMouseLeave={() => setShowSettingIcon(false)}>
                <Image src={process.env.API_URL + user.avatar} width={200} height={200} alt="avatar" />
              </div>
              <div className="flex flex-col ml-[20rem]">
                <div className="text-[26px] text-slate-800">{user.username}</div>
                <div className="text-[#6C757D] text-[16px] ml-3 mt-3">
                  {user.bio}
                </div>
              </div>
              <div className="flex ml-[]">
                <Link href={user.twitter?user.twitter:''}>
                  <a>
                    <div className="mr-6">
                  <Image src={Twitter} alt='twitter' />
                    </div>
                  </a>
                </Link>
                <Link href={user.website?user.website:''}>
                  <a>
                    <div className="mr-6">
                  <Image src={Web} alt='website' />
                    </div>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>      
      <div className="w-full md:w-auto">
        <Modal styles={{modal: {width: "90%", maxWidth: "100%"} as React.CSSProperties  }} open={bOpenModal} onClose={() => setOpenModal(false)} showCloseIcon={false} center>
          <UserEdit updateModal={updateModal}/>
        </Modal>
      </div>
    </>
  )
}

export default Banner
