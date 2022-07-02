import type { NextPage } from 'next'
import Image from 'next/image'
import image_25 from '../public/images/image 25.png'
import image_26 from '../public/images/image 26.png'
import image_27 from '../public/images/image 27.png'
import image_28 from '../public/images/image 28.png'
import image_29 from '../public/images/image 29.png'
import pfp from '../public/images/pfp.png'
import photography from '../public/images/photography.png'
import gaming from '../public/images/gaming.png'
import metaverse from '../public/images/metaverse.png'
import sports from '../public/images/sports.png'
import generative from '../public/images/generative.png'
import utility from '../public/images/utility.png'
import domains from '../public/images/domains.png'
import fashion from '../public/images/fashion.png'


import ImageList from '../components/ImageList'
import Slider from '../components/Slider'
import React from 'react'

const omniverseSlides: Array<React.ReactNode> = []
omniverseSlides.push(<Image src={image_25} alt="image - 25" layout='responsive' width={200} height={200} />)
omniverseSlides.push(<Image src={image_26} alt="image - 26" layout='responsive' width={200} height={200} />)
omniverseSlides.push(<Image src={image_27} alt="image - 27" layout='responsive' width={200} height={200} />)
omniverseSlides.push(<Image src={image_28} alt="image - 28" layout='responsive' width={200} height={200} />)
omniverseSlides.push(<Image src={image_29} alt="image - 29" layout='responsive' width={200} height={200} />)
omniverseSlides.push(<Image src={image_25} alt="image - 25" layout='responsive' width={200} height={200} />)
omniverseSlides.push(<Image src={image_26} alt="image - 26" layout='responsive' width={200} height={200} />)
omniverseSlides.push(<Image src={image_27} alt="image - 27" layout='responsive' width={200} height={200} />)
omniverseSlides.push(<Image src={image_28} alt="image - 28" layout='responsive' width={200} height={200} />)
omniverseSlides.push(<Image src={image_29} alt="image - 29" layout='responsive' width={200} height={200} />)

const trendingSlides: Array<React.ReactNode> = []
trendingSlides.push(<Image src={image_25} alt="image - 25" layout='responsive' width={200} height={200} />)
trendingSlides.push(<Image src={image_26} alt="image - 26" layout='responsive' width={200} height={200} />)
trendingSlides.push(<Image src={image_27} alt="image - 27" layout='responsive' width={200} height={200} />)
trendingSlides.push(<Image src={image_28} alt="image - 28" layout='responsive' width={200} height={200}/>)
trendingSlides.push(<Image src={image_29} alt="image - 29" layout='responsive' width={200} height={200} />)
trendingSlides.push(<Image src={image_25} alt="image - 25" layout='responsive' width={200} height={200} />)
trendingSlides.push(<Image src={image_26} alt="image - 26" layout='responsive' width={200} height={200} />)
trendingSlides.push(<Image src={image_27} alt="image - 27" layout='responsive' width={200} height={200} />)
trendingSlides.push(<Image src={image_28} alt="image - 28" layout='responsive' width={200} height={200}/>)
trendingSlides.push(<Image src={image_29} alt="image - 29" layout='responsive' width={200} height={200} />)


const serviceSlides: Array<React.ReactNode> = []
serviceSlides.push(<Image src={pfp} alt="image - 25" layout='responsive' width={230} height={263} />)
serviceSlides.push(<Image src={photography} alt="image - 26" layout='responsive' width={230} height={263} />)
serviceSlides.push(<Image src={metaverse} alt="image - 27" layout='responsive' width={230} height={263} />)
serviceSlides.push(<Image src={gaming} alt="image - 28" layout='responsive' width={230} height={263}/>)
serviceSlides.push(<Image src={sports} alt="image - 29" layout='responsive' width={230} height={263} />)
serviceSlides.push(<Image src={generative} alt="image - 26" layout='responsive' width={230} height={263} />)
serviceSlides.push(<Image src={utility} alt="image - 27" layout='responsive' width={230} height={263} />)
serviceSlides.push(<Image src={domains} alt="image - 28" layout='responsive' width={230} height={263}/>)
serviceSlides.push(<Image src={fashion} alt="image - 29" layout='responsive' width={230} height={263} />)

const Market: NextPage = () => {
  return (
    <>
      <div>
        <Slider title="Omniverse Certified" images={omniverseSlides} />
        <Slider title="Trending Collection" images={trendingSlides} />
        <ImageList title="" images={serviceSlides} />
      </div>
    </>
  )
}

export default Market
