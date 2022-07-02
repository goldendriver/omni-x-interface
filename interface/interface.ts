import React from 'react'

export interface IPropsSlider {
  title?: string
  images: Array<React.ReactNode>
}

export interface IPropsImage {
  nfts: Array<NFTItem>
}

export interface IPropsFeed {
  feed: Array<FeedItem>
}

export interface NFTItem {
  image: React.ReactNode
  title: string
  id: string
  chain: string
}

export interface FeedItem {
  image: React.ReactNode
  love: number
  view: number
  chain: string
  title: string
  id: string
  owner: string
  postedby: string
  alert?: {
    content: string
    percent: number
  }
}
