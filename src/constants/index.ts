import { ChainId, JSBI, Percent, Token, WETH } from '@pantherswap-libs/sdk'
import { BigNumber } from 'ethers'

// export const ROUTER_ADDRESS = '0x24f7C33ae5f77e2A9ECeed7EA858B4ca2fa1B7eC' // mainnet
export const ROUTER_ADDRESS = '0x8C2CaBc62Cd026f39B816C10134035D41E5878b6' // bsc testnet

export const POOL_ADDRESS = '0xfC14372E077be9020D2365F61B4Eb6569edA2349' // bsc testnet
export const CHAIN_LINK_PRICE_PROVIDER_ADDRESS = "0x9ACbd36d580074f2F828eAdb0038720c84214572" // bsc testnet
export const ASSET_DAI_ADDRESS = '0x490C9EEdE31e53928A789744Bc38b1DEb8B8851B' // bsc testnet
export const ASSET_USDC_ADDRESS = '0xb10A88790bc148c26E1aB122A3939dAc3B6c89b3' // bsc testnet
export const ASSET_USDT_ADDRESS = '0x70d3F050A5E817ef4BB5680246cFfe1E6505E2c5' // bsc testnet

export const PTP_ADDRESS = '0x718C5B6Da77DBF7D2DA072152111140E56311547'        // bsc testnet
export const VEPTP_ADDRESS = '0x02d20aC850942AB283D0C577826304E4F6e66B2b'      // bsc testnet
export const MASTER_PLATYPUS_ADDRESS = '0xF70D9bf41f027D49d12c081AfE14c8CD68152Afd'   // bsc testnet

export const USDT_LP_ID = 0
export const DAI_LP_ID = 2
export const USDC_LP_ID = 3

export const T_FEE = 0.0001 // 0.01%

// a list of tokens by chain
type ChainTokenList = {
  readonly [chainId in ChainId]: Token[]
}

export const PTP = new Token(ChainId.BSCTESTNET, PTP_ADDRESS, 18, 'PTP', 'Platypus')
export const VEPTP = new Token(ChainId.BSCTESTNET, VEPTP_ADDRESS, 18, 'VePTP', 'Platypus VePTP')

/*
export const USDC = new Token(ChainId.BSCTESTNET, '0x3861e9F29fcAFF738906c7a3a495583eE7Ca4C18', 6, 'USDC', 'USDC Token')
export const USDT = new Token(ChainId.BSCTESTNET, '0x0aCBd07e458F228d4869066b998a0F55F36537B2', 6, 'USDT', 'Tether USD')
export const DAI = new Token(ChainId.BSCTESTNET, '0x332C7aC34580dfEF553B7726549cEc7015C4B39b', 18, 'DAI', 'Dai Token')
*/


export const DAI = new Token(ChainId.MAINNET, '0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3', 18, 'DAI', 'Dai Stablecoin')
export const BUSD = new Token(ChainId.MAINNET, '0xe9e7cea3dedca5984780bafc599bd69add087d56', 18, 'BUSD', 'Binance USD')
export const USDT = new Token(ChainId.MAINNET, '0x55d398326f99059ff775485246999027b3197955', 18, 'USDT', 'Tether USD')
export const UST = new Token(ChainId.MAINNET, '0x23396cf899ca06c4472205fc903bdb4de249d6fc',  18, 'UST', 'Wrapped UST Token')


const WETH_ONLY: ChainTokenList = {
  [ChainId.MAINNET]: [WETH[ChainId.MAINNET]],
  [ChainId.BSCTESTNET]: [WETH[ChainId.BSCTESTNET]],
}

// used to construct intermediary pairs for trading
export const BASES_TO_CHECK_TRADES_AGAINST: ChainTokenList = {
  ...WETH_ONLY,
  [ChainId.MAINNET]: [...WETH_ONLY[ChainId.MAINNET], DAI, BUSD, USDT, UST],
}

/**
 * Some tokens can only be swapped via certain pairs, so we override the list of bases that are considered for these
 * tokens.
 */
export const CUSTOM_BASES: { [chainId in ChainId]?: { [tokenAddress: string]: Token[] } } = {
  [ChainId.MAINNET]: {},
}

// used for display in the default list when adding liquidity
export const SUGGESTED_BASES: ChainTokenList = {
  ...WETH_ONLY,
  [ChainId.MAINNET]: [...WETH_ONLY[ChainId.MAINNET], DAI, BUSD, USDT],
}

// used to construct the list of all pairs we consider by default in the frontend
export const BASES_TO_TRACK_LIQUIDITY_FOR: ChainTokenList = {
  ...WETH_ONLY,
  [ChainId.MAINNET]: [...WETH_ONLY[ChainId.MAINNET], DAI, BUSD, USDT],
}

export const PINNED_PAIRS: { readonly [chainId in ChainId]?: [Token, Token][] } = {
  [ChainId.MAINNET]: [
    [
      new Token(ChainId.MAINNET, '0x1f546ad641b56b86fd9dceac473d1c7a357276b7', 18, 'PANTHER', 'PantherSwap Token'),
      new Token(ChainId.MAINNET, '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c', 18, 'WBNB', 'Wrapped BNB'),
    ],
    [BUSD, USDT],
    [DAI, USDT],
  ],
}

export const NetworkContextName = 'NETWORK'

// default allowed slippage, in bips
export const INITIAL_ALLOWED_SLIPPAGE = 650
// 20 minutes, denominated in seconds
export const DEFAULT_DEADLINE_FROM_NOW = 60 * 20

// one basis point
export const ONE_BIPS = new Percent(JSBI.BigInt(1), JSBI.BigInt(10000))
export const BIPS_BASE = JSBI.BigInt(10000)
// used for warning states
export const ALLOWED_PRICE_IMPACT_LOW: Percent = new Percent(JSBI.BigInt(100), BIPS_BASE) // 1%
export const ALLOWED_PRICE_IMPACT_MEDIUM: Percent = new Percent(JSBI.BigInt(300), BIPS_BASE) // 3%
export const ALLOWED_PRICE_IMPACT_HIGH: Percent = new Percent(JSBI.BigInt(500), BIPS_BASE) // 5%
// if the price slippage exceeds this number, force the user to type 'confirm' to execute
export const PRICE_IMPACT_WITHOUT_FEE_CONFIRM_MIN: Percent = new Percent(JSBI.BigInt(1000), BIPS_BASE) // 10%
// for non expert mode disable swaps above this
export const BLOCKED_PRICE_IMPACT_NON_EXPERT: Percent = new Percent(JSBI.BigInt(1500), BIPS_BASE) // 15%

// used to ensure the user doesn't send so much ETH so they end up with <.01
export const MIN_ETH: JSBI = JSBI.exponentiate(JSBI.BigInt(10), JSBI.BigInt(16)) // .01 ETH
