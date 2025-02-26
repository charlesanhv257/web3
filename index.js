import { MetamaskIcon, WalletConnectIcon } from "assets/icons";

export const DATE_FORMAT = "DD/MM/YYYY";
export const DATE_FORMAT_FOR_BACKEND = "YYYY-MM-DD hh:mm:ss";
export const WALLET_CONNECT_PROJECT_ID = "";
export const EMPTY_VALUE = "--";

export const REDUX_ACTION = {
  SET_CLIENT_INFO: "SET_CLIENT_INFO",
  SET_LOADING_STATE: "SET_LOADING_STATE",
  SET_WEB3_INFO: "SET_WEB3_INFO",
  SET_STABLE_CRYPTO_PRICE: "SET_STABLE_CRYPTO_PRICE",
  SET_OPEN_CONNECT_WALLET_DRAWER: "SET_OPEN_CONNECT_WALLET_DRAWER",
};

export const LOCAL_STORAGE = {
  DEFAULT_ENCRYPT_KEY: "fartracker_default_key",
  WALLET_CONNECT_SESSION: "WALLET_CONNECT_SESSION",
  WEB3_INFO: "WEB3_INFO",
};

export const WEB3_CONNECT_TYPE = {
  IN_BROWSER: "IN_BROWSER",
  WALLET_CONNECT: "WALLET_CONNECT",
};
export const WEB3_CHAIN_SUPPORT = {
  ETHEREUM_MAINNET: {
    chainId: "0x1",
    rpcUrls: ["https://eth.llamarpc.com"], // Replace with the RPC URL of the network you want to add
    chainName: "Ethereum Mainnet", // Replace with the name of the network
    nativeCurrency: {
      name: "Ether",
      symbol: "ETH",
      decimals: 18,
    },
    blockExplorerUrls: ["https://etherscan.io"],
  },
  BSC_MAINNET: {
    chainId: "0x38",
    rpcUrls: ["https://bsc-dataseed.bnbchain.org"], // Replace with the RPC URL of the network you want to add
    chainName: "BNB Smart Chain Mainnet", // Replace with the name of the network
    nativeCurrency: {
      name: "BNB",
      symbol: "BNB",
      decimals: 18,
    },
    blockExplorerUrls: ["https://bscscan.com"],
  },
  BASE_MAINNET: {
    chainId: "0x2105",
    rpcUrls: ["https://mainnet.base.org"], // Replace with the RPC URL of the network you want to add
    chainName: "Base Mainnet", // Replace with the name of the network
    nativeCurrency: {
      name: "Ether",
      symbol: "ETH",
      decimals: 18,
    },
    blockExplorerUrls: ["https://basescan.org/"],
  },
};
export const BASE_TOKEN = {
  BASE_MAINNET: {
    WETH: "0x4200000000000000000000000000000000000006",
    USDbC: "",
    USDC: "",
  },
};
export const SWAP_ROUTE_PATH = {
  BASE_MAINNET: [
    [BASE_TOKEN.BASE_MAINNET.WETH],
    [BASE_TOKEN.BASE_MAINNET.USDC],
    [BASE_TOKEN.BASE_MAINNET.USDbC],
    [BASE_TOKEN.BASE_MAINNET.WETH, BASE_TOKEN.BASE_MAINNET.USDC],
    [BASE_TOKEN.BASE_MAINNET.WETH, BASE_TOKEN.BASE_MAINNET.USDbC],
    [BASE_TOKEN.BASE_MAINNET.USDC, BASE_TOKEN.BASE_MAINNET.WETH],
    [BASE_TOKEN.BASE_MAINNET.USDC, BASE_TOKEN.BASE_MAINNET.USDbC],
    [BASE_TOKEN.BASE_MAINNET.USDbC, BASE_TOKEN.BASE_MAINNET.WETH],
    [BASE_TOKEN.BASE_MAINNET.USDbC, BASE_TOKEN.BASE_MAINNET.USDC],
  ],
};
export const BASE_FEE_V3 = 3000;
export const FARTRACKER_SWAP_FEE = 25;
export const BASE_FEE = {
  L1: 100,
  L2: 500,
  L3: 3000,
  L4: 10000,
};
export const WEB3_ZERO_ADDRESS = "0x0000000000000000000000000000000000000000";

export const LIST_CHAIN = {
  ETHEREUM_MAINNET: {
    name: "Ethereum",
    chainName: "ETHEREUM_MAINNET",
    value: "ETHEREUM_MAINNET",
    logo: "/assets/images/logo_ethereum.png",
  },
  BSC_MAINNET: {
    name: "BNB Chain",
    chainName: "BNB Smart Chain Mainnet",
    value: "BSC_MAINNET",
    logo: "/assets/images/logo_bsc.png",
  },
  BASE_MAINNET: {
    name: "Base",
    chainName: "Base Mainnet",
    value: "BASE_MAINNET",
    logo: "/assets/images/logo_base.png",
  },
};

export const API = {
  STATUS: {
    NOT_FOUND: 404,
    SUCCESS: 200,
    UNAUTHORIZED: 401,
  },
  ROOT_LINK: "",
  ROOT_API_LINK: "",
  ENDPOINT: {},
};
export const ROUTE = {
  TYPE: {
    PUBLIC: "ROUTE_PUBLIC",
    PRIVATE: "ROUTE_PRIVATE",
  },
  NAVIGATE: {
    LOGIN: "login",
    ROOT: "/",
    MINT: "/mint",
    // HOME: '/home',
    DASHBOARD: "dashboard",
    USER: "user",
    USER_PROFILE: "profile",
    USER_SETTINGS: "settings",
  },
  RANK: {
    ENTERPRISE: 4,
    PRO: 3,
    LITE: 2,
    MEMBER: 1,
    REGISTER: 0,
  },
};

export const FILTER_ACTION = {
  TYPE: {
    NORMAL: "normal",
    VIP: "vip",
    WHALE: "whale",
    MINT: "mint",
    USER: "user",
    CHANEL: "chanel",
    TOKEN: "token",
    DATE: "date",
  },
};

export const TYPE_NOTI = {
  SUCCESS: "success",
  ERROR: "error",
  WARNING: "warning",
};

export const NOTI_MESSAGE_DEFAULT = {
  success: "Order Successful ",
  error: "Order Fail",
  warning: "Please enter number amount",
};

export const LIST_WALLET_CONNECT = {
  METAMASK: {
    name: "MetaMask",
    value: "METAMASK",
    icon: <MetamaskIcon />,
    walletConnect: "injected",
    recent: true,
  },
  WALLET_CONNECT: {
    name: "WalletConnect",
    value: "WALLET_CONNECT",
    icon: <WalletConnectIcon />,
    walletConnect: "walletConnectV1",
    recent: false,
  },
};

export const TYPE_SWAP = {
  TOKEN: "TOKEN",
  WALLET: "WALLET",
};

export const TYPE_BUY_SELL = {
  BUY: "Buy",
  SELL: "Sell",
};
export const LIST_TOKEN_IN = [
  "USDT",
  "USDC",
  "USDbC",
  "ETH",
  "WETH",
  "BTC",
  "DAI",
];

export const IS_EMPTY_DATA = "--";
export const BASE_TOKEN_ADDRESS = {
  BASE_MAINNET: {
    WETH: "0x4200000000000000000000000000000000000006".toLowerCase(),
    USDC: "".toLowerCase(),
    DAI: "".toLowerCase(),
    USDbC: "".toLowerCase(),
  },
};
export const ROUTER_ADDRESS = {
  BASE_MAINNET: {
    SWAP_V3: {
      QUOTER2: "",
      FACTORY: "",
    },
    SWAP_V2: {
      FACTORY: "",
    },
    PERMIT2: "0x000000000022D473030F116dDEE9F6B43aC78BA3",
    ROUTER_UNIVERSAL: "",
    ROUTER_KYBERSWAP: "",
    TOKEN_IN_IS_ETH_KYBERSWAP: "",
  },
};

export const UNIVERSAL_ABI = [
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "permit2",
            type: "address",
          },
          {
            internalType: "address",
            name: "weth9",
            type: "address",
          },
          {
            internalType: "address",
            name: "seaportV1_5",
            type: "address",
          },
          {
            internalType: "address",
            name: "seaportV1_4",
            type: "address",
          },
          {
            internalType: "address",
            name: "openseaConduit",
            type: "address",
          },
          {
            internalType: "address",
            name: "nftxZap",
            type: "address",
          },
          {
            internalType: "address",
            name: "x2y2",
            type: "address",
          },
          {
            internalType: "address",
            name: "foundation",
            type: "address",
          },
          {
            internalType: "address",
            name: "sudoswap",
            type: "address",
          },
          {
            internalType: "address",
            name: "elementMarket",
            type: "address",
          },
          {
            internalType: "address",
            name: "nft20Zap",
            type: "address",
          },
          {
            internalType: "address",
            name: "cryptopunks",
            type: "address",
          },
          {
            internalType: "address",
            name: "looksRareV2",
            type: "address",
          },
          {
            internalType: "address",
            name: "routerRewardsDistributor",
            type: "address",
          },
          {
            internalType: "address",
            name: "looksRareRewardsDistributor",
            type: "address",
          },
          {
            internalType: "address",
            name: "looksRareToken",
            type: "address",
          },
          {
            internalType: "address",
            name: "v2Factory",
            type: "address",
          },
          {
            internalType: "address",
            name: "v3Factory",
            type: "address",
          },
          {
            internalType: "bytes32",
            name: "pairInitCodeHash",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "poolInitCodeHash",
            type: "bytes32",
          },
        ],
        internalType: "struct RouterParameters",
        name: "params",
        type: "tuple",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "BalanceTooLow",
    type: "error",
  },
  {
    inputs: [],
    name: "BuyPunkFailed",
    type: "error",
  },
  {
    inputs: [],
    name: "ContractLocked",
    type: "error",
  },
  {
    inputs: [],
    name: "ETHNotAccepted",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "commandIndex",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "message",
        type: "bytes",
      },
    ],
    name: "ExecutionFailed",
    type: "error",
  },
  {
    inputs: [],
    name: "FromAddressIsNotOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "InsufficientETH",
    type: "error",
  },
  {
    inputs: [],
    name: "InsufficientToken",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidBips",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "commandType",
        type: "uint256",
      },
    ],
    name: "InvalidCommandType",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidOwnerERC1155",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidOwnerERC721",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidPath",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidReserves",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidSpender",
    type: "error",
  },
  {
    inputs: [],
    name: "LengthMismatch",
    type: "error",
  },
  {
    inputs: [],
    name: "SliceOutOfBounds",
    type: "error",
  },
  {
    inputs: [],
    name: "TransactionDeadlinePassed",
    type: "error",
  },
  {
    inputs: [],
    name: "UnableToClaim",
    type: "error",
  },
  {
    inputs: [],
    name: "UnsafeCast",
    type: "error",
  },
  {
    inputs: [],
    name: "V2InvalidPath",
    type: "error",
  },
  {
    inputs: [],
    name: "V2TooLittleReceived",
    type: "error",
  },
  {
    inputs: [],
    name: "V2TooMuchRequested",
    type: "error",
  },
  {
    inputs: [],
    name: "V3InvalidAmountOut",
    type: "error",
  },
  {
    inputs: [],
    name: "V3InvalidCaller",
    type: "error",
  },
  {
    inputs: [],
    name: "V3InvalidSwap",
    type: "error",
  },
  {
    inputs: [],
    name: "V3TooLittleReceived",
    type: "error",
  },
  {
    inputs: [],
    name: "V3TooMuchRequested",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "RewardsSent",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "looksRareClaim",
        type: "bytes",
      },
    ],
    name: "collectRewards",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "commands",
        type: "bytes",
      },
      {
        internalType: "bytes[]",
        name: "inputs",
        type: "bytes[]",
      },
    ],
    name: "execute",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "commands",
        type: "bytes",
      },
      {
        internalType: "bytes[]",
        name: "inputs",
        type: "bytes[]",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
    ],
    name: "execute",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC1155BatchReceived",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC1155Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC721Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "int256",
        name: "amount0Delta",
        type: "int256",
      },
      {
        internalType: "int256",
        name: "amount1Delta",
        type: "int256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "uniswapV3SwapCallback",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];
export const ERC20_ABI = [
  {
    constant: true,
    inputs: [],
    name: "name",
    outputs: [
      {
        name: "",
        type: "string",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_spender",
        type: "address",
      },
      {
        name: "_value",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_from",
        type: "address",
      },
      {
        name: "_to",
        type: "address",
      },
      {
        name: "_value",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "decimals",
    outputs: [
      {
        name: "",
        type: "uint8",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "_owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        name: "balance",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "symbol",
    outputs: [
      {
        name: "",
        type: "string",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_to",
        type: "address",
      },
      {
        name: "_value",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "_owner",
        type: "address",
      },
      {
        name: "_spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    payable: true,
    stateMutability: "payable",
    type: "fallback",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
];

export const WEB3_ABI = {
  SWAP_V3: {
    FACTORY: [
      {
        inputs: [
          { internalType: "address", name: "", type: "address" },
          { internalType: "address", name: "", type: "address" },
          { internalType: "uint24", name: "", type: "uint24" },
        ],
        name: "getPool",
        outputs: [{ internalType: "address", name: "", type: "address" }],
        stateMutability: "view",
        type: "function",
      },
    ],
    QUOTER2: [
      {
        inputs: [
          {
            components: [
              { internalType: "address", name: "tokenIn", type: "address" },
              { internalType: "address", name: "tokenOut", type: "address" },
              { internalType: "uint256", name: "amountIn", type: "uint256" },
              { internalType: "uint24", name: "fee", type: "uint24" },
              {
                internalType: "uint160",
                name: "sqrtPriceLimitX96",
                type: "uint160",
              },
            ],
            internalType: "struct IQuoterV2.QuoteExactInputSingleParams",
            name: "params",
            type: "tuple",
          },
        ],
        name: "quoteExactInputSingle",
        outputs: [
          { internalType: "uint256", name: "amountOut", type: "uint256" },
          {
            internalType: "uint160",
            name: "sqrtPriceX96After",
            type: "uint160",
          },
          {
            internalType: "uint32",
            name: "initializedTicksCrossed",
            type: "uint32",
          },
          { internalType: "uint256", name: "gasEstimate", type: "uint256" },
        ],
        stateMutability: "nonpayable",
        type: "function",
      },
    ],
    POOL: [
      {
        inputs: [],
        name: "slot0",
        outputs: [
          { internalType: "uint160", name: "sqrtPriceX96", type: "uint160" },
          { internalType: "int24", name: "tick", type: "int24" },
          { internalType: "uint16", name: "observationIndex", type: "uint16" },
          {
            internalType: "uint16",
            name: "observationCardinality",
            type: "uint16",
          },
          {
            internalType: "uint16",
            name: "observationCardinalityNext",
            type: "uint16",
          },
          { internalType: "uint8", name: "feeProtocol", type: "uint8" },
          { internalType: "bool", name: "unlocked", type: "bool" },
        ],
        stateMutability: "view",
        type: "function",
      },
    ],
  },
  SWAP_V2: {
    FACTORY: [
      {
        constant: true,
        inputs: [
          { internalType: "address", name: "", type: "address" },
          { internalType: "address", name: "", type: "address" },
        ],
        name: "getPair",
        outputs: [{ internalType: "address", name: "", type: "address" }],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
    ],
    POOL: [
      {
        constant: true,
        inputs: [],
        name: "getReserves",
        outputs: [
          { internalType: "uint112", name: "_reserve0", type: "uint112" },
          { internalType: "uint112", name: "_reserve1", type: "uint112" },
          {
            internalType: "uint32",
            name: "_blockTimestampLast",
            type: "uint32",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "token0",
        outputs: [{ internalType: "address", name: "", type: "address" }],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "token1",
        outputs: [{ internalType: "address", name: "", type: "address" }],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
    ],
  },
  UNIVERSAL_ABI: UNIVERSAL_ABI,
  ERC20_ABI: ERC20_ABI,
};
export const LIST_FIDS_VIP_USER = [
  1389, 1648, 451779, 415684, 420201, 292783, 332571, 296583, 5303, 14911,
  366213, 336162, 443172, 383028, 338953, 293719, 14567, 481434, 483462, 2514,
  295704, 296241, 3164, 471907, 235163, 3609, 3750, 3708, 8744, 4483, 310710,
  10143, 398355, 382891, 4910, 14767, 301385, 330083, 472, 398678, 10259, 358,
  207, 342737, 345467, 347860, 348420, 349675, 280, 4945, 4271, 5483, 6821,
  6546, 7978, 15776, 17892, 18325, 4951, 4801, 355566, 456, 6023, 6791, 227886,
  535021, 7878, 243139, 245241, 14199, 245035, 245306, 11238, 11961, 11599,
  11548, 12168, 19493, 211541, 262572, 19717, 264222, 5515, 240835, 378856,
  300986, 305234, 6473, 307899, 285462, 318473, 195091, 332174, 325459, 13590,
  288204, 213545, 296207, 191212, 18203, 233043, 201043, 390598, 326390, 336022,
  248032, 440475, 357551, 13077, 373258, 8035, 313172, 374408, 378039, 385766,
  6137, 8438, 242015, 268233, 11183, 193853, 410039, 278104, 419738, 400821,
  422910, 396484, 9587, 15211, 302022, 362884, 218793, 460565, 403020, 469501,
  397467, 397911, 312633, 245237, 399485, 246713, 389808, 238370, 522554,
  268977, 289702, 295767, 269385, 274563, 599368, 9218, 195643, 279394, 273576,
  279980, 278513, 281211, 281494, 11780, 310480, 381093, 350901, 350662, 350729,
  4724, 314724, 314532, 4370, 110, 3317, 353123, 353665, 716, 356732, 358173,
  3372, 4316, 5620, 274526, 318087, 469659, 4163, 13030, 13267, 321424, 13563,
  13626, 14464, 15428, 16915, 17114, 194233, 210436, 323673, 448502, 218710,
  196166, 3854, 232704, 235215, 240247, 238251, 245308, 238425, 240275, 249586,
  9186, 700534, 419852, 362664, 366041, 12944, 369441, 369892, 198674, 374441,
  204221, 374498, 422946, 361798, 423310, 379089, 601131, 427386, 385899,
  386723, 415950, 389309, 390219, 248101, 247898, 431880, 270168, 502778, 18445,
  469678, 18152, 3863, 8106, 231749, 312790, 3135, 365209, 435843, 238564,
  348814, 234457, 4612, 535886, 2653, 4179, 7438, 15053, 253659, 585995, 590111,
  380789, 12031, 597941, 11155, 387472, 19685, 348611, 346080, 415337, 17672,
  439718, 417757, 417850, 451952, 20931, 642133, 5991, 267078, 453989, 456555,
  461587, 381665, 17065, 652993, 532052, 345535, 10530, 309764, 492830, 358634,
  10428, 379631, 6886, 426065, 389349, 9410, 321551, 316147, 317037, 376177,
  317528, 404001, 405348, 337489, 410803, 231371, 322662, 10682, 324876, 324820,
  326433, 326567, 327398, 327165, 326920, 247143, 428931, 233221, 291511,
  377646, 15417, 419741, 466688, 6636, 2745, 239081, 2252, 15724, 4805, 16191,
  307224, 1911, 355351, 355271, 562300, 18241, 318589, 354795, 20542, 375053,
  273147, 20431, 10496, 416401, 342684, 191326, 191832, 335741, 192539, 384546,
  260256, 356297, 304818, 13086, 197061, 197591, 197256, 381737, 205077, 205891,
  447817, 198522, 235302, 11517, 13426, 12482, 467347, 4923, 12161, 12756,
  12708, 12925, 225851, 476882, 19627, 19613, 20721, 21146, 24077, 9618, 4407,
  190968, 193623, 669191, 196378, 381293, 382808, 264001, 263750, 263821,
  315697, 386754, 317009, 388453, 319054, 263648, 270714, 270678, 265506,
  415745, 267836, 270504, 410926, 326271, 414257, 417374, 270138, 276562,
  366534, 430449, 431085, 434822, 4564, 367639, 277952, 5431, 236454, 281290,
  335383, 280002, 306175, 281228, 282672, 282560, 245439, 18931, 402806, 388393,
  411409, 402978, 407112, 429107, 12256, 308337, 193942, 14135, 251, 333732,
  17979, 330738, 10636, 248297, 319464, 19129, 872, 706, 899, 1520, 2248,
  297066, 310801, 3636, 4019, 4134, 261245, 5164, 5632, 391861, 6968, 7951,
  8637, 1972, 1401, 1246, 2739, 3095, 3236, 219631, 300880, 5091, 11188, 6276,
  237290, 8079, 10602, 8147, 10391, 10148, 10799, 239933, 11778, 296594, 383144,
  12725, 13229, 262357, 13201, 13797, 15643, 398364, 17592, 338787, 16544,
  20258, 17551, 323070, 243906, 18685, 20067, 22337, 194203, 362883, 211535,
  4325, 10807, 196199, 226045, 227242, 247572, 235128, 265409, 13659, 337090,
  269091, 270608, 343622, 189312, 11161, 12048, 1689, 3295, 3449, 354760, 9309,
  5127, 230991, 4978, 15983, 3198, 13893, 417341, 3362, 416087, 217834, 7933,
  534, 1237, 462759, 462989, 253890, 245124, 651, 733, 466693, 416898, 9166,
  339302, 472352, 371154, 281836, 2902, 244479, 4327, 15441, 56, 239, 417416,
  124, 378, 347, 1992, 420304, 211301, 375727, 13874, 5037, 268971, 340305,
  6112, 346320, 196198, 578265, 488178, 262876, 3792, 1970, 5818, 469729,
  234334, 3368, 350625, 409931, 239748, 353321, 364927, 351803, 352664, 4905,
  13796, 280302, 4952, 11244, 1407, 236581, 356537, 357745, 15516, 340560,
  423985, 466312, 4353, 5183, 309638, 436781, 438085, 466926, 15431, 405380,
  446004, 9307, 449654, 330807, 368013, 380136, 193930, 239694, 10705, 7657,
  6381, 382205, 2687, 1136, 1145, 8052, 10178, 14364, 18723, 16884, 382890,
  405590, 385469, 629, 1556, 3114, 3993, 1584, 386213, 246221, 10570, 544047,
  5870, 199989, 260207, 308220, 13946, 247372, 11528, 388401, 9019, 11550,
  263664, 456784, 331067, 403090, 264940, 266421, 409561, 337511, 305455,
  238993, 340599, 306341, 420229, 306416, 421000, 423827, 342023, 409781,
  309242, 342222, 410789, 413213, 343855, 2588, 343971, 415368, 700810, 416761,
  420657, 10426, 423457, 344203, 413010, 430265, 311845, 387258, 348569, 17186,
  431629, 20578, 129, 435850, 348431, 437357, 436728, 349545, 349621, 439799,
  343483, 440238, 385571, 406908, 540093, 1214, 540939, 283144, 271142, 542753,
  271697, 17, 341, 646, 548, 1485, 1431, 2480, 4368, 4479, 4253, 725, 5551,
  8971, 8949, 10952, 5624, 452515, 11510, 12847, 19954, 19768, 13219, 14396,
  15997, 15224, 16877, 18489, 17364, 17256, 20265, 24128, 6730, 189781, 212722,
  225826, 223862, 11882, 224429, 12090, 227912, 657052, 16512, 189629, 352633,
  356039, 469089, 18529, 5181, 431, 212556, 266626, 381100, 389456, 389671,
  465491, 431113, 222540, 222896, 11781, 245579, 475654, 11760, 262901, 299082,
  374116, 280715, 7749, 972, 11782, 477997, 106, 1841, 1385, 267965, 4199, 4908,
  8446, 8154, 9369, 11866, 12569, 16066, 15799, 16636, 18975, 18586, 20413,
  481970, 306792, 206570, 210745, 211333, 373125, 742, 373714, 434908, 18517,
  3860, 315944, 2433, 7535, 470886, 716977, 437686, 284063, 373242, 435716,
  335954, 5492, 420765, 8730, 247466, 14217, 4275, 8726, 18085, 24, 343358,
  397668, 410523, 211710, 211635, 3642, 406022, 1669, 410492, 409857, 409644,
  410943, 412060, 946, 414955, 415225, 989, 142, 1610, 1668, 1744, 1436, 418762,
  2777, 3087, 3193, 12, 409, 5694, 370077, 420540, 2255, 420554, 6083, 3519,
  6292, 3781, 7960, 3100, 3430, 3112, 8939, 6558, 407655, 8515, 4268, 4040,
  4294, 4865, 4716, 4991, 9677, 4731, 214740, 9917, 10990, 10655, 10686, 11448,
  913, 20945, 13387, 240932, 14447, 493739, 214569, 198629, 4167, 363197,
  363560, 364615, 706433, 159, 364940, 771, 290, 1551, 206967, 2602, 2618,
  211365, 4513, 5448, 6581, 8685, 8594, 8451, 9140, 11124, 222071, 212085,
  13121, 14608, 14330, 16148, 16152, 16207, 17354, 234512, 196149, 215322,
  365930, 205525, 245024, 230147, 233147, 20090, 235192, 240865, 241041, 243663,
  234286, 234692, 2559, 252251, 239308, 338997, 285171, 291942, 490435, 293760,
  387202, 236727, 294300, 442122, 296767, 296315, 502568, 225, 400028, 3819,
  3347, 414258, 266053, 15388, 269405, 386444, 8145, 14176, 9052, 457, 16842,
  10715, 246848, 11286, 11984, 11998, 11149, 11489, 11552, 422333, 410781,
  21168, 12580, 13536, 16098, 12949, 359, 13094, 446697, 13453, 15071, 15646,
  7131, 2170, 11299, 15713, 16353, 19832, 195523, 17454, 189740, 17510, 18560,
  405941, 347453, 20259, 21941, 11215, 191503, 2923, 194479, 696012, 241334,
  1575, 246448, 249122, 8050, 252572, 336026, 4888, 262938, 263333, 195917,
  263339, 11512, 264841, 266767, 3967, 268455, 274364, 276506, 263740, 375536,
  221519, 283056, 6591, 6554, 380266, 15821, 331730, 373025, 1356, 9816, 4904,
  18989, 380660, 12573, 21431, 17793, 7318, 7097, 516, 4378, 1236, 195255,
  294226, 2163, 4373, 8447, 12156, 279454, 18910, 332502, 295589, 394027,
  297799, 397815, 3761, 298730, 398480, 20442, 15633, 133, 392396, 303035,
  406257, 405751, 408268, 409032, 262563, 309710, 411330, 3115, 412185, 413828,
  414526, 12912, 1886, 6731, 2455, 230392, 14489, 13870, 362962, 309857, 188963,
  396902, 191213, 191637, 15069, 392444, 364953, 246823, 191593, 391793, 412843,
  1918, 9595, 701, 245213, 2689, 234611, 284324, 18224, 3828, 378765, 234552,
  377666, 7154, 242785, 376748, 241763, 283597, 238522, 380185, 4549, 212259,
  365925, 260770, 249958, 326062, 247018, 292653, 210698, 318213, 12309, 308045,
  385387, 364883, 385627, 383054, 302081, 386520, 307705, 388458, 265298,
  387246, 193423, 7637, 301340, 390829, 420930, 139, 7258, 15275, 24235, 12493,
  20402, 385126, 242661, 297319, 11037, 17226, 507309, 9856, 427349, 20907,
  366713, 330802, 248172, 12102, 14515, 349541, 15357, 15255, 15681, 249078,
  16522, 18213, 188975, 254128, 399658, 16041, 463783, 204173, 10334, 24178,
  12342, 13022, 13846, 14174, 264538, 11770, 17498, 9436, 14601, 12370, 19777,
  20970, 23282, 23563, 188206, 415872, 189905, 191864, 193488, 195929, 210045,
  1238, 16405, 248345, 233242, 282728, 235437, 237845, 922, 190218, 16099,
  283347, 382802, 296752, 297095, 326677, 394023, 326765, 328293, 211227,
  396536, 301144, 5066, 401859, 301676, 271878, 302400, 406308, 378915, 675,
  333772, 262675, 248300, 246962, 248389, 248111, 248713, 191, 252500, 253268,
  456884, 374660, 374873, 347930, 284679, 268131, 269775, 269636, 377557,
  250008, 734, 266782, 380950, 340, 893, 288821, 1082, 4823, 473065, 417123,
  358126, 417178, 273394, 410419, 410846, 499191, 264069, 3632, 5046, 435601,
  499880, 415359, 4280, 430312, 479192, 233880, 419617, 422412, 296687, 16567,
  364533, 228117, 238307, 238829, 202360, 445760, 240799, 309, 244367, 371368,
  246871, 375245, 14299, 390940, 403517, 243294, 3966, 412192, 13817, 423995,
  410577, 191042, 12637, 414383, 414845, 7556, 409379, 667130, 435964, 375028,
  16975, 215351, 407487, 222389, 6669, 350, 246523, 248226, 13505, 14988,
  249927, 308291, 3497, 1355, 302556, 310544, 193699, 233254, 17356, 309043,
  326040, 367850, 368021, 14455, 12626, 339017, 369619, 1430, 338373, 1655,
  2112, 2586, 2201, 3726, 7055, 3511, 380455, 4415, 4760, 4461, 5361, 6751,
  9138, 9702, 339174, 9817, 9507, 8942, 11990, 11835, 11491, 9926, 13696, 13418,
  9940, 9829, 15351, 10626, 340986, 342667, 21291, 343593, 343261, 11632,
  238260, 237973, 343266, 343324, 347050, 346798, 246905, 348539, 536281, 12431,
  12778, 369, 417119, 13283, 13434, 350129, 270919, 242171, 234327, 269321,
  269522, 272706, 13443, 14356, 14131, 799, 5470, 6015, 5406, 5491, 1593, 6162,
  6946, 12732, 2194, 13901, 7589, 7692, 14539, 3580, 10051, 8587, 17054, 9227,
  7559, 10123, 10597, 10250, 10906, 9847, 11913, 11533, 361635, 14472, 499783,
  18428, 232054, 17064, 248448, 16819, 16826, 503116, 18057, 18079, 17474,
  17671, 18726, 240969, 239419, 263450, 263602, 241620, 273430, 248817, 20458,
  285998, 248151, 4132, 249193, 302642, 307128, 309567, 251769, 254536, 256931,
  226690, 345272, 264690, 348643, 351103, 350911, 351897, 354669, 312305,
  311933, 312593, 314176, 11279, 299853, 768, 1380, 363545, 3049, 3459, 4196,
  304304, 231754, 3842, 5260, 5403, 384860, 417769, 238463, 391387, 10779,
  242542, 395346, 283, 350139, 417851, 1287, 262539, 2270, 11040, 283222, 9548,
  66, 3017, 13833, 18295, 8004, 476033, 235323, 527313, 6143, 618148, 18408,
  234616, 424863, 375140, 426045, 4925, 299135, 408777, 281129, 16831, 422233,
  11923, 271526, 1766, 211124, 489165, 20270, 4542, 19530, 222464, 224604,
  223778, 4282, 375177, 385955, 134059, 243818, 228109, 18883, 4293, 231788,
  231761, 232653, 232646, 6962, 322391, 11761, 364580, 535389, 369863, 528025,
  4240, 1317, 279587, 557899, 297256, 380882, 298503, 20539, 6268, 281676,
  717360, 367061, 4807, 37, 99, 6806, 451, 317896, 263444, 320063, 264194,
  384868, 224525, 306404, 308286, 21071, 308032, 309157, 308536, 9222, 308405,
  421994, 422315, 19815, 13610, 422367, 6852, 309808, 2235, 10677, 311254,
  20390, 226372, 432880, 433408, 9789, 12715, 234568, 328124, 265153, 427838,
  236971, 262134, 7746, 11287, 322839, 246557, 225024, 188416, 330133, 308527,
  408979, 446971, 323251, 323011, 196196, 9050, 1864, 10420, 897, 6373, 289295,
  4534, 326306, 452884, 456675, 250455, 245388, 9135, 1097, 3206, 13089, 457716,
  1325, 7548, 210538, 444773, 411955, 374165, 394930, 3801, 5049, 490475, 10215,
  248559, 14831, 211769, 422633, 333327, 325886, 188169, 4166, 708707, 483365,
  494279, 13442, 20919, 372323, 3895, 325, 3306, 4036, 709797, 433488, 392965,
  253127, 262222, 21348, 333868, 200375, 415689, 6841, 11816, 335503, 309072,
  321969, 3635, 269694, 342717, 227645, 262970, 403619, 301193, 5781, 602,
  244819, 6187, 5283, 1321, 316268, 341438, 510364, 297980, 310928, 473, 303,
  7620, 761, 576, 134, 1513, 386971, 388996, 243719, 4482, 3621, 269506, 318702,
  10335, 387329, 392597, 396891, 352787, 404299, 229603, 407760, 12577, 12144,
  9143, 5650, 7234, 27, 825, 243803, 1587, 2268, 6839, 7781, 11500, 473001,
  270207, 301611, 304106, 304097, 14469, 324395, 325364, 80, 324916, 324915,
  306610, 326500, 346870, 17087, 403500, 418671, 414147, 414203, 414259, 421198,
  443198, 336580, 445793, 298111, 436491, 437886, 2489, 263587, 541292, 217341,
  211242, 3180, 403573, 390685, 282278, 3307, 282520, 284408, 3681, 395720,
  266845, 15049, 262527, 262475, 506540, 218957, 211205, 408988, 315256, 236391,
  409997, 461236, 244416, 216983, 230238, 249232, 364017, 409573, 296478,
  399712, 310364, 307568, 221475, 444929, 361548, 237855, 408746, 262450,
  263303, 1595, 2073, 2723, 2242, 2982, 2025, 2859, 2558, 2042, 2783, 2802,
  2508, 2215, 2271, 2755, 2813, 5197, 2570, 2883, 2785, 2757, 2417, 2383, 2950,
  2443, 2834, 2364, 2759, 2095, 2099, 2126, 2139, 248872, 2282, 2211, 2736,
  2236, 2566, 2600, 2502, 2329, 2210, 2233, 2928, 2530, 2341, 2728, 2441, 2826,
  3897, 3593, 3612, 3413, 3429, 3237, 3882, 3797, 3872, 3036, 3457, 3353,
  213552, 3046, 3881, 3329, 3974, 3506, 3647, 3417, 3435, 3346, 3300, 3174,
  3864, 3831, 3189, 3414, 3924, 3700, 3804, 3702, 3629, 3304, 3263, 3682, 3253,
  3896, 3734, 3526, 3406, 3827, 3741, 3710, 3850, 5745, 5653, 5450, 5328, 5948,
  4215, 4528, 4463, 4642, 4487, 4795, 4649, 4879, 4995, 4044, 4289, 4109, 4065,
  4409, 4606, 4743, 4375, 4123, 4085, 4665, 4886, 4547, 4627, 4698, 4973, 4433,
  4484, 4256, 4895, 4996, 4413, 4926, 4632, 4243, 4567, 4877, 4207, 4383, 4715,
  4205, 4790, 4787, 4753, 4914, 5964, 5713, 4901, 5758, 5309, 6394, 6823, 6208,
  6142, 7012, 6236, 6111, 6741, 6196, 6122, 6087, 6147, 6084, 6596, 6357, 6567,
  6337, 6090, 6097, 6801, 6945, 6227, 6164, 6622, 6714, 6377, 6906, 6376, 7581,
  7348, 7038, 7863, 7759, 7588, 7049, 7835, 7872, 7048, 7790, 7464, 7996, 7061,
  7963, 7948, 7418, 7952, 7910, 7409, 7626, 7811, 7085, 7787, 7255, 7988, 7325,
  7123, 7143, 7521, 7157, 7715, 197007, 196957, 8627, 8459, 8706, 8046, 8969,
  8998, 8379, 8070, 8439, 8413, 8263, 8558, 8432, 2779, 8332, 8168, 8232, 8794,
  8208, 196810, 8531, 8220, 8476, 8481, 8810, 8677, 197340, 196842, 9456, 9933,
  9710, 247895, 9055, 9082, 9391, 9270, 9528, 9192, 9265, 191010, 191135,
  191780, 191774, 192137, 193158, 192300, 192336, 192561, 192373, 192490,
  192702, 193785, 344753, 195117, 193826, 193928, 193998, 194514, 194372,
  194274, 196300, 195806, 196387, 196388, 196648, 196339, 195847, 196215,
  196041, 12888, 208481, 3558, 6788, 210648, 209951, 210871, 2240, 211186,
  211254, 349340, 213263, 213144, 212516, 212342, 212661, 212581, 212992,
  213070, 212348, 212364, 214841, 214445, 214447, 5289, 1056, 1069, 366218,
  5820, 19796, 13043, 11965, 20590, 18940, 20133, 5947, 709602, 18197, 13088,
  1786, 350970, 2770, 189874, 8048, 193089, 364977, 7814, 4208, 12590, 1244,
  587509, 324029, 9148, 7474, 15000, 1581, 239632, 10351, 395131, 200530,
  417063, 221578, 71, 6902, 373904, 452094, 10095, 2494, 398596, 196950, 375583,
  362447, 455975, 383153, 242052, 303249, 718251, 499969, 355110, 309715, 16863,
  252180, 293726, 7237, 416672, 2134, 310124, 12142, 228390, 762, 13640, 281289,
  408681, 767, 961, 12351, 1795, 1068, 18262, 2391, 2549, 4013, 3484, 4408,
  4684, 5016, 4661, 5172, 6245, 6506, 6437, 6408, 6348, 7206, 7479, 8039, 8890,
  8405, 9111, 360601, 11788, 12443, 8152, 13368, 15434, 15549, 7261, 17005,
  16214, 16340, 187961, 18286, 188665, 1134, 193, 8, 636, 1258, 539, 1095, 1574,
  1301, 3583, 2461, 2109, 2788, 2458, 3004, 2727, 3391, 3222, 3751, 5643, 4027,
  4423, 4473, 4864, 5460, 5787, 5833, 701565, 6500, 6815, 8151, 8173, 8831,
  9198, 9818, 9474, 10694, 10174, 12480, 12111, 12418, 14124, 14035, 13474,
  17425, 16218, 17940, 17690, 18509, 20323, 20281, 20806, 188955, 214605,
  224371, 227531, 228272, 234186, 235153, 237532, 238466, 239622, 240586,
  242191, 242577, 244832, 244908, 262762, 8433, 617, 251053, 20929, 251143,
  307457, 253407, 237884, 704642, 262292, 265749, 557, 417299, 4181, 20698,
  6351, 162, 1996, 45, 604, 436436, 347364, 301375, 248954, 7674, 248344,
  242870, 243361, 343396, 244869, 249237, 249332, 238758, 278653, 282223,
  393467, 415248, 415333, 397077, 384100, 402932, 388111, 390438, 417554,
  401399, 414984, 497045, 474817, 302380, 177, 298650, 189, 407121, 306661,
  20917, 20010, 320215, 5644, 5604, 273379, 7774, 211693, 5847, 8248, 210628,
  312, 5494, 2074, 5064, 5072, 5126, 394357, 5062, 5423, 5543, 5395, 11158,
  3887, 5584, 5623, 536359, 1776, 348410, 5305, 5511, 5708, 206, 75, 258, 647,
  794, 166, 545, 2, 3, 13933, 999, 339, 299, 9, 343, 633, 902, 974, 488, 52, 73,
  54, 437, 790, 224, 951, 679, 306, 28, 453, 127, 834, 18, 160, 611, 643, 60,
  412, 533, 58, 828, 169, 528, 59, 363, 368, 39, 880, 143, 569, 426, 43, 754,
  714, 886, 48, 838, 276, 168, 70, 101, 158, 155, 229, 639, 68, 377, 932, 964,
  181, 490, 702, 623, 212, 354, 83, 194, 732, 871, 465, 114, 616, 442, 738, 366,
  521, 859, 518, 847, 5179, 125, 297, 443, 851, 680, 260, 291, 468, 577, 375,
  479, 546, 238, 656, 315, 630, 976, 941, 589, 782, 323, 966, 383, 5844, 399,
  803, 674, 429, 2904, 1350, 1471, 1020, 1711, 1139, 1349, 1460, 1024, 1279,
  1626, 5972, 1941, 1189, 1534, 1114, 1629, 1079, 1338, 5254, 1735, 1482, 1062,
  5173, 1580, 1048, 1240, 1676, 2007, 1067, 1894, 1887, 5365, 1315, 1171, 1725,
  1110, 1493, 1733, 1277, 1544, 1137, 1285, 1606, 1480, 1855, 1265, 1488, 1303,
  1198, 1298, 1184, 1180, 1898, 1979, 1720, 5774, 1657, 1890, 1504, 1734, 5186,
  2266, 3002, 2070, 17822, 18559, 19105, 18655, 18506, 18145, 18151, 18513,
  18661, 18183, 18413, 18908, 19036, 18763, 18272, 18384, 18922, 18344, 18570,
  18751, 18766, 18407, 19146, 19716, 19412, 20118, 20147, 19583, 20081, 19637,
  20146, 19463, 19858, 20005, 20013, 19846, 20080, 7212, 20228, 21360, 20198,
  21039, 20429, 20913, 20394, 20398, 20565, 20594, 20965, 20384, 20559, 20771,
  20591, 20730, 20633, 23426, 21695, 23192, 23091, 187825, 189636, 189237,
  188352, 189052, 190081, 190075, 188892, 190108, 196916, 262524, 192590, 5953,
  321754, 2735, 6536, 7985, 248739, 235517, 3255, 301830, 585, 15744, 1715,
  13124, 4871, 226538, 234014, 349722, 390406, 324, 19058, 343393, 693641, 7066,
  205754, 319055, 287051, 302478, 189896, 188164, 196020, 5006, 223277, 226476,
  283315, 341738, 16141, 709834, 283346, 379972, 10512, 416094, 17316, 211303,
  240987, 336012, 13071, 241573, 467256, 191775, 4312, 5925, 16823, 12329,
  21308, 5253, 5376, 193551, 5951, 323645, 368835, 4979, 262944, 11392, 15761,
  196763, 5587, 6048, 198811, 2842, 19468, 3696, 214318, 5804, 3791, 11747,
  1399, 1129, 321147, 409792, 226244, 5092, 234743, 234940, 384793, 17675, 4322,
  460502, 288257, 238657, 10900, 10976, 21417, 18581, 229150, 211832, 11646,
  7659, 1602, 11708, 211158, 5486, 215506, 319497, 374020, 310577, 329070, 3249,
  383485, 1220, 214212, 5952, 11555, 2824, 15263, 634033, 8555, 381283, 15576,
  14063, 17324, 13948, 11213, 263371, 321055, 418777, 247522, 399465, 407937,
  210731, 324420, 213115, 273708, 216, 288605, 312747, 421681, 702906, 5779,
  8421, 5025, 5106, 896, 3027, 274, 10810, 289345, 4140, 5165, 5124, 6670, 6726,
  8059, 8268, 284616, 293150, 188752, 319612, 336612, 295570, 228795, 422559,
  390276, 4525, 3520, 8674, 882, 21173, 19661, 189976, 5860, 30, 307834, 308410,
  308516, 313283, 9700, 10032, 328068, 214298, 240554, 333932, 9451, 442664,
  479807, 552171, 2313, 9290, 463, 167, 375699, 288, 196351, 20596, 396644, 164,
  18564, 381068, 286812, 8082, 262791, 2608, 343341, 264975, 266418, 396234,
  20168, 42, 355572, 665511, 718178, 8109, 212585, 389595, 700835, 2217, 9248,
  10498, 11123, 16467, 19776, 243288, 17935, 406905, 9459, 430479, 261355,
  240456, 347833, 17129, 298330, 119, 262206, 7501, 3175, 312666, 1185, 1631,
  2946, 2606, 4727, 9154, 2766, 14243, 193861, 849, 234228, 12312, 211159,
  238319, 1087, 5840, 211250, 211231, 21166, 343580, 12335, 9051, 1297, 212859,
  18166, 263314, 15667, 281660, 235303, 617632, 309103, 295862, 235510, 6589,
  15400, 4048, 3608, 13437, 3973, 6957, 366387, 225363, 473073, 13895, 375799,
  228441, 402307, 292692, 665771, 25, 6597, 276695, 410383, 621, 263265, 1656,
  1768, 3492, 3711, 265108, 278533, 665102, 264612, 20312, 268290, 10258,
  267383, 330301, 268922, 272717, 3447, 9412, 366795, 265581, 406157, 7799,
  270517, 213310, 353819, 267915, 479263, 278406, 4283, 543528, 17649, 21773,
  8760, 282317, 23328, 4031, 5198, 18066, 708565, 290654, 14532, 14158, 230572,
  21191, 20388, 294100, 15466, 281495, 294090, 296737, 403249, 7236, 346769,
  14225, 6804, 34, 468606, 8080, 272522, 236822, 439559, 17041, 310252, 17295,
  20977, 1010, 234434, 397036, 1642, 3264, 4182, 263373, 419388, 5170, 414239,
  346110, 485865, 2864, 4583, 11115, 20082, 218814, 248150, 310953, 350551,
  23039, 20358, 410818, 5516, 11684, 13203, 18048, 631, 3305, 20701, 20286,
  4262, 188259, 191359, 53, 373, 712130, 311, 308588, 211246, 12923, 398028,
  466111, 415070, 261625, 245468, 5034, 330839, 266490, 273442, 278203, 277808,
  278239, 291845, 301792, 292506, 306668, 308284, 307736, 307820, 308409,
  308426, 309165, 312601, 312924, 316167, 314898, 317794, 318447, 318613,
  506169, 323433, 323501, 323746, 402888, 302083, 7408, 211644, 228880, 230941,
  209586, 210629, 211946, 211756, 212111, 214172, 234030, 234796, 236171,
  239099, 313038, 368096, 367710, 318911, 211697, 368056, 347067, 323144,
  323213, 349331, 349775, 368278, 351970, 369904, 352694, 372028, 440747,
  451420, 264487, 391262, 191281, 467312, 474565, 477292, 533916, 423378,
  328041, 8445, 238853, 19590, 279477, 252911, 626, 4291, 227062, 420163,
  352723, 424937, 221477, 243792, 270005, 397392, 248446, 278655, 441956,
  226915, 6986, 335872, 438981, 248216, 305843, 243300, 436577, 263574, 250874,
  12163, 429188, 20, 5498, 10018, 9581, 9176, 9848, 9326, 9318, 9280, 9386,
  9667, 10862, 10548, 10856, 10097, 10066, 10144, 10685, 10080, 10766, 10971,
  10946, 10983, 10575, 10542, 10220, 10710, 10947, 10920, 10857, 10703, 10822,
  10956, 10610, 10875, 11360, 12021, 11818, 11681, 11642, 13006, 12567, 12921,
  12502, 12990, 12095, 12938, 12470, 12457, 12738, 12425, 12152, 12777, 12977,
  12299, 12224, 12915, 12518, 12871, 12388, 13596, 13314, 14069, 13560, 14009,
  13323, 13875, 13150, 13304, 13803, 13861, 13475, 13950, 13495, 13432, 13970,
  17355, 14982, 14150, 14209, 14466, 14127, 1194, 14937, 14885, 14537, 14191,
  14932, 14507, 14340, 14976, 14369, 14260, 14351, 14236, 14241, 14870, 15732,
  15117, 15126, 15789, 15838, 15590, 15593, 15513, 15696, 15850, 16081, 16355,
  16795, 16085, 16276, 16176, 16871, 16189, 16237, 16284, 16987, 16719, 16617,
  203751, 203666, 17195, 17584, 17838, 17582, 17507, 17571, 214570, 216023,
  218816, 217248, 217780, 218369, 221216, 332457, 235170, 5701, 387731, 7941,
  2420, 247605, 241781, 20745, 191694, 425, 342996, 372057, 431203, 212309,
  231047, 20511, 4989, 318094, 618823, 318162, 7341, 19450, 8749, 10452, 347960,
  387665, 2460, 13029, 2034, 400771, 539003, 4301, 788, 4155, 1357, 326688,
  2022, 7110, 236715, 2228, 13, 3713, 234363, 16914, 8684, 710451, 287750,
  303121, 5802, 1628, 2590, 369999, 5451, 435536, 307235, 436680, 4071, 11951,
  13707, 4959, 280486, 918, 210657, 2526, 453709, 4128, 11245, 554, 3607, 746,
  9178, 368444, 338827, 382072, 189733, 402914, 14491, 404990, 227918, 93,
  195466, 2029, 14940, 278605, 2798, 189394, 10093, 245097, 304875, 7992,
  296127, 322525, 1149, 198538, 376505, 210975, 280660, 240339, 240172, 9653,
  17223, 2987, 214123, 15671, 252934, 253764, 81621, 272629, 498, 369869, 17885,
  352172, 1432, 14848, 878, 2868, 422250, 315653, 193866, 261305, 3597, 249258,
  20299, 232393, 7732, 17761, 270684, 270415, 260367, 379777, 248890, 3789,
  210744, 14197, 14473, 13465, 465063, 328983, 491461, 13066, 290574, 218952,
  97, 370822, 394597, 247238, 330642, 11508, 296882, 265099, 276109, 11129,
  1033, 115, 1958, 10895, 5288, 292002, 297024, 292310, 292436, 4728, 13049,
  300898, 6116, 315455, 16707, 3928, 11948, 191294, 26, 20558, 312380, 405529,
  332881, 17106, 502572, 299247, 711331, 446308, 800, 6400, 20953, 329429,
  349228, 193137, 287066, 15899, 302, 108, 218753, 360623, 476994, 5851, 7452,
  337018, 8346, 212849, 1706, 1781, 544555, 248284, 20368, 7251, 240921, 253410,
  9134, 9039, 11202, 88, 238988, 326147, 18409, 9531, 19148, 342199, 503732,
  4449, 24005, 193884, 247496, 283441, 6631, 309819,
];

export const GAS_SWAP_TOKEN_SUPPORTED = [
  {
    name: "Ethererum",
    symbol: "ETH",
    decimals: 18,
    address: ROUTER_ADDRESS.BASE_MAINNET.TOKEN_IN_IS_ETH_KYBERSWAP,
    icon: "/assets/images/swap_supported_token_eth.svg",
  },
  {
    name: "Wrapped Ether",
    symbol: "WETH",
    decimals: 18,
    address: "0x4200000000000000000000000000000000000006",
    icon: "/assets/images/swap_supported_token_weth.png",
  },
  {
    name: "USD Coin",
    symbol: "USDC",
    decimals: 6,
    address: "",
    icon: "/assets/images/swap_supported_token_usdc.png",
  },
  {
    name: "USD Base Coin",
    symbol: "USDbC",
    decimals: 6,
    address: "",
    icon: "/assets/images/swap_supported_token_usdbc.png",
  },
];

export const PROVIDER_GET_DATA = {
  BASE_MAINNET: "https://base-rpc.publicnode.com",
};

export const STRING_VALIDATION = {
  VALID: "Date range is valid.",
  INVALID: "Both dates must be valid and selected.",
  INVALID_DATE: `The 'From' date cannot be later than the 'To' date.`,
};

export const TYPE_TABLE = {
  TABLE_PAGINATION: "TABLE_PAGINATION",
  TABLE_SCROLL: "TABLE_SCROLL",
}
