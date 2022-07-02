import CHAINS from './chains.json'

const environments: any = {
  mainnet: ['Ethereum Mainnet', 'Arbitrum One', 'Avalanche C-Chain', 'Binance Smart Chain Mainnet', 'Fantom Opera', 'Optimism', 'Polygon Mainnet'],
  testnet: ['Rinkeby', 'Arbitrum Rinkeby', 'Avalanche Fuji Testnet', 'Binance Smart Chain Testnet', 'Fantom Testnet', 'Optimism Kovan', 'Mumbai']
}
  
export const getChainInfo = (chainIndex: number) => {
  const env = process.env.NEXT_PUBLICE_ENVIRONMENT || 'testnet'
  const chainName = environments[env][chainIndex]
  const filter = CHAINS.filter((item) => item.name.toLowerCase() === chainName.toLowerCase())
  if (filter.length > 0) {
    return filter[0]
  }
  return null
}
