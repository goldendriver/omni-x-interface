import React from 'react'
import Image from 'next/image'
import { FeedItem, IPropsFeed } from '../interface/interface'
import Refresh from '../public/images/refresh.png'
import Check from '../public/images/check.png'
import Love from '../public/images/love.png'
import View from '../public/images/view.png'
import Fork from '../public/images/fork.png'
import Report from '../public/images/report.png'
import Alert from '../public/images/alert.png'
const Feed = ({ feed }: IPropsFeed) => {
  return (
    <>
      <div className="w-full  mt-20">
        {feed.map((item: FeedItem, index: number) => {
          return (
            <div className="w-5/12 justify-self-center mx-auto" key={index}>
              <div className="p-4 bg-[#F8F9FA] text-slate-500 font-bold mb-3 flex content-center">
                <Image src={Refresh} alt="refresh" />
                <div className="ml-3">{item.postedby}</div>
              </div>
              {item.image}
              <div className="p-5 px-8 flex justify-between bg-[#F8F9FA]">
                <div>
                  <div className="flex mb-2">
                    <span className="text-slate-800 font-bold text-2xl mr-3">
                      {item.title}
                    </span>
                    <span className="text-slate-800 font-bold text-2xl">
                      {item.id}
                    </span>
                  </div>
                  <div className="flex mb-5">
                    <span className="text-slate-500 font-bold text-2xl mr-3">
                      {item.title}
                    </span>
                    <span className="text-slate-500 font-bold text-2xl">
                      ({item.chain})
                    </span>
                    <span className="ml-5">
                      <Image src={Check} alt="check" width={30} height={30} />
                    </span>
                  </div>
                  <div className="flex mb-2">
                    <span className="text-slate-400 font-bold text-xl mr-3">
                      owner:
                    </span>
                    <span className="text-[#B444F9] font-bold text-xl underline decoration-4 underline-offset-2">
                      {item.id}
                    </span>
                  </div>
                </div>
                <div>
                  <div className="flex items-center">
                    <span className="">
                      <Image src={Love} alt="love" width={40} height={40} />
                    </span>
                    <span className="text-slate-400 text-2xl mr-3">
                      {item.love >= 1000
                        ? (item.love / 1000).toString() + 'K'
                        : item.love + 'K'}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <span className="">
                      <Image src={View} alt="views" width={40} height={40} />
                    </span>
                    <span className="text-slate-400 text-2xl mr-3">
                      {item.view >= 1000
                        ? (item.view / 1000).toString() + 'K'
                        : item.view + 'K'}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="">
                      <Image src={Fork} alt="fork" width={40} height={40} />
                    </span>
                    <span className="">
                      <Image src={Report} alt="report" width={40} height={40} />
                    </span>
                  </div>
                </div>
              </div>
              {item.alert &&<div className="p-4 bg-[#F8F9FA] text-slate-500 font-bold mt-20 mb-20">
                <div className="flex">
                  <Image src={Alert} alt="alert" />
                  <div className="ml-3">{item.alert?.content}</div>
                </div>
                <div className="ml-8">{item.title}</div>
              </div>}
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Feed
