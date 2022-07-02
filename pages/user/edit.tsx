import React, { useEffect, useRef, useState } from 'react'
import type { NextPage } from 'next'
import Image from 'next/image'
import Close from '../../public/images/close.png'
import Default from '../../public/images/banner-1.png'
import Twitter from '../../public/images/twitter.png'
import Web from '../../public/images/web.png'
import Photo from '../../public/images/photo.png'
import useWallet from '../../hooks/useWallet'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { updateUser, getUser, selectUser } from '../../redux/reducers/userReducer'

const UserEdit: NextPage = () => {
  const updateProfileFormRef = useRef<HTMLFormElement>(null)
  const [avatar, setAvatar] = useState(process.env.API_URL + 'uploads\\default_avatar.png')
  const [banner_1, setBanner_1] = useState(process.env.API_URL + 'uploads\\default_banner.png')
  const [banner_2, setBanner_2] = useState(process.env.API_URL + 'uploads\\default_banner.png')
  const [banner_3, setBanner_3] = useState(process.env.API_URL + 'uploads\\default_banner.png')
  const [username, setUserName] = useState('')
  const [bio, setBio] = useState('')
  const [twitter, setTwitter] = useState('')
  const [website, setWebsite] = useState('')

  const dispatch = useDispatch()
  const user = useSelector(selectUser)
  const router = useRouter()

  const context = useWallet()

  useEffect(() => {
    if ( context.address != undefined ) {
      dispatch(getUser(context.address) as any)
    }
  }, [context.address])

  useEffect(() => {
    if ( user.address != undefined ) {
      setAvatar(process.env.API_URL + user.avatar)
      setBanner_1(process.env.API_URL + user.banners[0])
      setBanner_2(process.env.API_URL + user.banners[1])
      setBanner_3(process.env.API_URL + user.banners[2])
      setUserName(user.username)
      setBio(user.bio)
      setTwitter(user.twitter)
      setWebsite(user.website)
    }
  }, [user.address])

  // This function will be triggered when the file field change
  const onChangeAvatar = (e: any) => {
    if (e.target.files && e.target.files.length > 0) {
      setAvatar(e.target.files[0])
    }
  }
  const onChangeBanner_1 = (e: any) => {
    if (e.target.files && e.target.files.length > 0) {
      setBanner_1(e.target.files[0])
    }
  }
  const onChangeBanner_2 = (e: any) => {
    if (e.target.files && e.target.files.length > 0) {
      setBanner_2(e.target.files[0])
    }
  }
  const onChangeBanner_3 = (e: any) => {
    if (e.target.files && e.target.files.length > 0) {
      setBanner_3(e.target.files[0])
    }
  }
  const onClickAvatar = () => {
    document.getElementById('image_avatar')?.click()
  }
  const onClickBanner_1 = () => {
    document.getElementById('image_banner_1')?.click()
  }
  const onClickBanner_2 = () => {
    document.getElementById('image_banner_2')?.click()
  }
  const onClickBanner_3 = () => {
    document.getElementById('image_banner_3')?.click()
  }

  const updateProfile = async (e: React.SyntheticEvent) => {
    e.preventDefault()
    e.stopPropagation()

    if ( updateProfileFormRef.current !== null ) {
      const formData = new FormData(updateProfileFormRef.current)
      const address = context.address?context.address:''
      formData.append('address', address)
      dispatch(updateUser(formData) as any)
      router.push('/')
    }
  }

  return (
    <>
      <div className="mt-44 px-32 w-full">
        <form 
          ref={updateProfileFormRef}
          onSubmit={updateProfile}
        >
          <input
            id="image_banner_1"
            accept="image/*"
            type="file"
            onChange={onChangeBanner_1}
            className="hidden"
            name="banner_1"
          />
          <input
            id="image_banner_2"
            accept="image/*"
            type="file"
            onChange={onChangeBanner_2}
            className="hidden"
            name="banner_2"
          />
          <input
            id="image_banner_3"
            accept="image/*"
            type="file"
            onChange={onChangeBanner_3}
            className="hidden"
            name="banner_3"
          />
          <div className="border-gray-300 bg-[#E9ECEF] border-2 p-5 px-10">
            <div className="grid grid-cols-3 gap-4 w-full">
              <div>
                <div className="border-[#B444F9] mb-5 relative cursor-pointer" onClick={onClickBanner_1}>
                  <div className="absolute -right-2 -top-2 z-10 ">
                    <Image src={Close} alt="close" width={15} height={15} />
                  </div>
                  <div
                    className="absolute z-10 top-[50%] mt-[-20px] left-[50%] ml-[-20px] bg-[#E9ECEF99] rounded-full w-[40px] h-[40px] p-2"
                  >
                    <Image src={Photo} alt="photo" />
                  </div>
                  <div className="border-image">
                    <Image
                      src={(typeof banner_1 == 'string')?banner_1:URL.createObjectURL(banner_1)}
                      alt="first image"
                      layout="responsive"
                      width={200}
                      height={100}
                    />
                  </div>
                </div>
                <div className="rounded-full mx-auto bg-[#B444F9] text-white center w-[47px] h-[47px] text-2xl text-center p-2">
                  1
                </div>
              </div>
              <div>
                <div className="border-[#B444F9] mb-5 relative cursor-pointer" onClick={onClickBanner_2}>
                  <div className="absolute -right-2 -top-2 z-10 ">
                    <Image src={Close} alt="close" width={15} height={15} />
                  </div>
                  <div
                    className="absolute z-10 top-[50%] mt-[-20px] left-[50%] ml-[-20px] bg-[#E9ECEF99] rounded-full w-[40px] h-[40px] p-2"
                  >
                    <Image src={Photo} alt="photo" />
                  </div>
                  <div className="border-image">
                    <Image
                      src={(typeof banner_2 == 'string')?banner_2:URL.createObjectURL(banner_2)}
                      alt="first image"
                      layout="responsive"
                      width={200}
                      height={100}
                    />
                  </div>
                </div>
                <div className="rounded-full mx-auto bg-[#B444F9] text-white center w-[47px] h-[47px] text-2xl text-center p-2">
                  2
                </div>
              </div>
              <div>
                <div className="border-[#B444F9] mb-5 relative cursor-pointer" onClick={onClickBanner_3}>
                  <div className="absolute -right-2 -top-2 z-10 ">
                    <Image src={Close} alt="close" width={15} height={15} />
                  </div>
                  <div
                    className="absolute z-10 top-[50%] mt-[-20px] left-[50%] ml-[-20px] bg-[#E9ECEF99] rounded-full w-[40px] h-[40px] p-2"
                  >
                    <Image src={Photo} alt="photo" />
                  </div>
                  <div className="border-image">
                    <Image
                      src={(typeof banner_3 == 'string')?banner_3:URL.createObjectURL(banner_3)}
                      alt="first image"
                      layout="responsive"
                      width={200}
                      height={100}
                    />
                  </div>
                </div>
                <div className="rounded-full mx-auto bg-[#B444F9] text-white center w-[47px] h-[47px] text-2xl text-center p-2">
                  3
                </div>
              </div>
            </div>
          </div>
          <div className="flex mt-5 w-full">
            <div>
              <div 
                className="relative cursor-pointer"
                onClick={onClickAvatar}
              >
                <div
                  className="absolute z-10 top-[50%] mt-[-20px] left-[50%] ml-[-20px] bg-[#E9ECEF99] rounded-full w-[40px] h-[40px] p-2"
                >
                  <Image src={Photo} alt="photo" />
                </div>
                <Image
                  src={(typeof avatar == 'string')?avatar:URL.createObjectURL(avatar)}
                  alt="avatar"
                  width={250}
                  height={250}
                  className="rounded-xl"
                />
              </div>
            </div>
            <input
              id="image_avatar"
              accept="image/*"
              type="file"
              onChange={onChangeAvatar}
              className="hidden"
              name="avatar"
            />
            <div className="ml-7 w-full">
              <div className="w-full mb-3">
                <div className="text-[#6C757D]">username:</div>
                <input
                  type="text"
                  name='username'
                  className="user-input"
                  value={username}
                  onChange={(e) => setUserName(e.target.value)}
                />
              </div>
              <div className="text-[#6C757D]">
                <div>bio:</div>
                <textarea
                  className="user-textarea w-full"
                  placeholder="(200 characters max)"
                  name='bio'
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                />
              </div>
              <div className="w-full mb-3 mt-3 flex items-center">
                <div className="text-[#6C757D] mr-2">
                  <Image src={Twitter} alt="tiwitter" />
                </div>
                <input
                  type="text"
                  className="user-input"
                  name='twitter'
                  placeholder="https://"
                  value={twitter}
                  onChange={(e) => setTwitter(e.target.value)}
                />
              </div>
              <div className="w-full mb-5 flex items-center">
                <div className="text-[#6C757D] mr-2">
                  <Image src={Web} alt="web" />
                </div>
                <input
                  type="text"
                  name="website"
                  className="user-input"
                  placeholder="https://"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                />
              </div>
              <div className="flex space-x-2 justify-end mb-5">
                <button
                  type="submit"
                  className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default UserEdit
