import React from 'react'
type ImageProps = {
  title: string
  images: Array<React.ReactNode>
}

const ImageList = ({ title, images }: ImageProps): JSX.Element => {
  return (
    <>
      <div className="w-full mt-20 px-32">
        <div className="px-12">
          <div
            className={`text-2xl font-bold underline mb-5 ${
              title === '' ? 'mt-10' : ''
            }`}
          >
            {title}
          </div>
          <div className="grid grid-cols-5 gap-10">
            {images.map((item: React.ReactNode, index: number) => {
              <div key={index}>{item}</div>
              return item
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default ImageList
