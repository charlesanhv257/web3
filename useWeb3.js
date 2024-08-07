import { useSelector, useDispatch, Provider } from "react-redux";
import {
  REDUX_ACTION,
  WEB3_CONNECT_TYPE,
  WALLET_CONNECT_PROJECT_ID,
  UNIVERSAL_ABI,
  ROUTER_ADDRESS,
  ERC20_ABI,
  BASE_TOKEN_ADDRESS,
  WEB3_ABI,
  BASE_FEE,
  FARTRACKER_SWAP_FEE,
  WEB3_ZERO_ADDRESS,
  PROVIDER_GET_DATA
} from "../constants";
import { EthereumProvider } from "@walletconnect/ethereum-provider";
import { ethers, parseEther } from "ethers";
import { useState, useEffect } from "react";
import { BlockchainAPI } from "actions";
import {
  AllowanceProvider,
  MaxAllowanceTransferAmount,
  AllowanceTransfer,
} from "@uniswap/permit2-sdk";
import { signTypedData } from "@uniswap/conedison/provider/index";

const useWeb3 = () => {
  const [walletConnectCore, setWalletConnectCore] = useState(null);
  const [web3Provider, setWeb3Provider] = useState(null);
  const [web3Signer, setWeb3Signer] = useState(null);
  const [providerGetData, setProviderGetData] = useState(new ethers.providers.JsonRpcProvider(PROVIDER_GET_DATA.BASE_MAINNET));
  const dispatch = useDispatch();
  const [web3Lib, setWeb3Lib] = useState(null);

  const setReduxWeb3Info = (web3_info) => {
    dispatch({
      type: REDUX_ACTION.SET_WEB3_INFO,
      payload: JSON.stringify(web3_info),
    });
  };
  const web3Info = useSelector((state) => state.reducer.client_web3_info);
  const stableCryptoPrice = useSelector(
    (state) => state.reducer.stable_crypto_price
  );
  const loadingWeb3 = async () => {
    try {
      const initWalletConnectCore = await EthereumProvider.init({
        projectId: WALLET_CONNECT_PROJECT_ID,
        chains: [1],
        methods: [
          "personal_sign",
          "eth_sendTransaction",
          "wallet_addEthereumChain",
          "wallet_switchEthereumChain",
        ],
        showQrModal: true,
        qrModalOptions: {
          themeMode: "dark",
        },
      });

      setWalletConnectCore(initWalletConnectCore);
      if (web3Info.status == 1) {
        // console.log(web3Info.type);
        let tempProvider = null;
        if (web3Info.type == WEB3_CONNECT_TYPE.IN_BROWSER) {
          tempProvider =
            window.ethereum == null
              ? ethers.getDefaultProvider()
              : new ethers.providers.Web3Provider(window.ethereum);
        } /* if (web3Info.type == WEB3_CONNECT_TYPE.WALLET_CONNECT)*/ else {
          tempProvider = new ethers.providers.Web3Provider(
            initWalletConnectCore
          );
        }
        setWeb3Provider(tempProvider);
        setWeb3Signer(await tempProvider.getSigner());
      } else if(web3Info.status == 0){
        setWeb3Provider(null);
        setWeb3Signer(null);
      }
    } catch (error) {
      console.log("Error loadingWeb3: " + error);
    }
  };
  //Init loading
  useEffect(() => {
    loadingWeb3();
  }, [web3Info]);

  const connectWeb3InBrowser = async () => {
    if (web3Info.status) {
      return false;
    }
    try {
      let signer = false;
      if (window.ethereum == null) {
        console.log("MetaMask not installed; using read-only defaults");
        setWeb3Provider(ethers.getDefaultProvider());
      } else {
        const tempProvider = new ethers.providers.Web3Provider(window.ethereum);
        await tempProvider.send("eth_requestAccounts", []);
        setWeb3Provider(tempProvider);
        signer = tempProvider.getSigner();
        const tempUserAddress = await signer.getAddress();
        console.log(tempUserAddress, signer, tempProvider);
        setWeb3Signer(signer);
        setReduxWeb3Info({
          address: tempUserAddress,
          status: 1,
          type: WEB3_CONNECT_TYPE.IN_BROWSER,
        });
        console.log(signer);
      }
      return signer;
    } catch (error) {
      console.log(error);
      return false;
    }
  };
  const connectWeb3WithWalletConnect = async () => {
    if (web3Info.status) {
      return false;
    }
    try {
      if (
        !(walletConnectCore.connected && walletConnectCore.accounts.length > 0)
      ) {
        await walletConnectCore.connect();
        console.log(walletConnectCore);
      }
      if (walletConnectCore.connected && walletConnectCore.accounts.length) {
        const tempProvider = new ethers.providers.Web3Provider(
          walletConnectCore
        );
        setWeb3Provider(tempProvider);
        let signer = tempProvider.getSigner();
        setWeb3Signer(signer);
        setReduxWeb3Info({
          address: await signer.getAddress(),
          status: 1,
          type: WEB3_CONNECT_TYPE.WALLET_CONNECT,
          session: walletConnectCore.session.pairingTopic,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  const disconnectWeb3 = async () => {
    walletConnectCore.disconnect();
    setWeb3Provider(null);
    setWeb3Signer(null);
    setReduxWeb3Info({
      address: "0x",
      type: WEB3_CONNECT_TYPE.IN_BROWSER,
      status: 0,
      session: null,
    });
  };
  const getClientBalance = async () => {
    debugger;
    if (web3Info.status && web3Signer != null) {
      return await web3Provider.getBalance(await web3Signer.getAddress());
    }
    return 0;
  };
  const signMessage = async (message) => {
    if (web3Provider == null || web3Signer == null) {
      return false;
    }
    try {
      const rawSig = await web3Signer.signMessage(message);
      console.log("rawSig : ", rawSig);
      return rawSig;
    } catch (error) {
      console.log(error);
      return false;
    }
  };
  const switchChain = async (newChainNetwork) => {
    if (web3Provider == null || web3Signer == null) {
      return false;
    }
    try {
      await web3Provider.send("wallet_switchEthereumChain", [
        { chainId: newChainNetwork.chainId },
      ]);
      console.log(
        `Switched to network with chainId: ${newChainNetwork.chainId}`
      );
      return newChainNetwork;
    } catch (switchError) {
      if (switchError.code === 4902 || true) {
        try {
          await web3Provider.send("wallet_addEthereumChain", [newChainNetwork]);
          console.log(
            `Added and switched to network with chainId: ${newChainNetwork.chainId}`
          );
        } catch (addError) {
          console.error("Failed to add the network:", addError);
          return false;
        }
      } else {
        console.log(switchError);
        return false;
      }
    }
  };

  const getSwapTokenPrice = (swap_action) => {
    const tokenGetPrice =
      swap_action.swap.tokenGetPrice?.address?.length > 0
        ? {
          address: swap_action.swap.tokenGetPrice.address ?? "0x",
          // value: bigIntFromParts(swap_action.swap.tokenIn.value),
          value: swap_action.swap.tokenGetPrice.value,
          name: "GET PRICE",
          symbol: "PRICE",
          decimals:
            swap_action.swap.tokenGetPrice.address.toLowerCase() ==
              BASE_TOKEN_ADDRESS.BASE_MAINNET.USDC ||
              swap_action.swap.tokenGetPrice.address.toLowerCase() ==
              BASE_TOKEN_ADDRESS.BASE_MAINNET.USDbC
              ? 6
              : 18,
        }
        : {};
    const tokenIn = {
      address: swap_action.swap.tokenIn.address ?? "0x",
      // value: bigIntFromParts(swap_action.swap.tokenIn.value),
      value: swap_action.swap.tokenIn.value,
      name: swap_action.tokenInInfo.name,
      symbol: swap_action.tokenInInfo.symbol,
      decimals: swap_action.tokenInInfo.decimals,
    };
    const tokenOut = {
      address: swap_action.swap.tokenOut.address ?? "0x",
      // value: bigIntFromParts(swap_action.swap.tokenOut.value),
      value: swap_action.swap.tokenOut.value,
      name: swap_action.tokenOutInfo.name,
      symbol: swap_action.tokenOutInfo.symbol,
      decimals: swap_action.tokenOutInfo.decimals,
    };
    tokenIn.amount = Number(tokenIn.value) / 10 ** tokenIn.decimals;
    tokenOut.amount = Number(tokenOut.value) / 10 ** tokenOut.decimals;
    tokenGetPrice.amount =
      swap_action.swap.tokenGetPrice?.address?.length > 0
        ? Number(tokenGetPrice.value) / 10 ** Number(tokenGetPrice.decimals)
        : null;

    if (tokenIn.address.toLowerCase() == BASE_TOKEN_ADDRESS.BASE_MAINNET.WETH) {
      tokenIn.price = stableCryptoPrice.eth;
    } else if (
      tokenIn.address.toLowerCase() == BASE_TOKEN_ADDRESS.BASE_MAINNET.DAI
    ) {
      tokenIn.price = stableCryptoPrice.dai;
    } else if (
      tokenIn.address.toLowerCase() == BASE_TOKEN_ADDRESS.BASE_MAINNET.USDC ||
      tokenIn.address.toLowerCase() == BASE_TOKEN_ADDRESS.BASE_MAINNET.USDbC
    ) {
      tokenIn.price = stableCryptoPrice.usd;
    }
    if (tokenIn.price > 0) {
      tokenOut.price = (tokenIn.amount * tokenIn.price) / tokenOut.amount;
    } else {
      if (
        tokenOut.address.toLowerCase() == BASE_TOKEN_ADDRESS.BASE_MAINNET.WETH
      ) {
        tokenOut.price = stableCryptoPrice.eth;
      } else if (
        tokenOut.address.toLowerCase() == BASE_TOKEN_ADDRESS.BASE_MAINNET.DAI
      ) {
        tokenOut.price = stableCryptoPrice.dai;
      } else if (
        tokenOut.address.toLowerCase() ==
        BASE_TOKEN_ADDRESS.BASE_MAINNET.USDC ||
        tokenOut.address.toLowerCase() == BASE_TOKEN_ADDRESS.BASE_MAINNET.USDbC
      ) {
        tokenOut.price = stableCryptoPrice.usd;
      }
      if (tokenOut.price > 0) {
        tokenIn.price = (tokenOut.amount * tokenOut.price) / tokenIn.amount;
      }
    }
    if (tokenIn.price > 0 && tokenOut.price > 0) {
      return { tokenIn, tokenOut };
    } else if (swap_action.swap.tokenGetPrice?.address?.length > 0) {
      if (
        tokenGetPrice.address.toLowerCase() ==
        BASE_TOKEN_ADDRESS.BASE_MAINNET.WETH
      ) {
        tokenGetPrice.price = stableCryptoPrice.eth;
      } else if (
        tokenGetPrice.address.toLowerCase() ==
        BASE_TOKEN_ADDRESS.BASE_MAINNET.DAI
      ) {
        tokenGetPrice.price = stableCryptoPrice.dai;
      } else if (
        tokenGetPrice.address.toLowerCase() ==
        BASE_TOKEN_ADDRESS.BASE_MAINNET.USDC ||
        tokenGetPrice.address.toLowerCase() ==
        BASE_TOKEN_ADDRESS.BASE_MAINNET.USDbC
      ) {
        tokenGetPrice.price = stableCryptoPrice.usd;
      }
      if (tokenGetPrice.price > 0) {
        tokenIn.price =
          (tokenGetPrice.amount * tokenGetPrice.price) / tokenIn.amount;
        tokenOut.price =
          (tokenGetPrice.amount * tokenGetPrice.price) / tokenOut.amount;
      }
      return { tokenIn, tokenOut };
    } else {
      return { tokenIn, tokenOut };
    }
  };
  function sqrtToPrice(sqrt, decimals0, decimals1, token0IsInput = true) {
    const numerator = sqrt ** 2;
    const denominator = 2 ** 192;
    var ratio = numerator / denominator;
    const shiftDecimals = Math.pow(10, decimals0 - decimals1);
    if (!token0IsInput) {
      ratio = 1 / ratio;
    }
    return ratio;
  }
  function toDeadline(expiration) {
    return Math.floor((Date.now() + expiration) / 1000);
  }
  const uniswapFunction = {
    getBestSinglePathSwap: async function (tokenIn, tokenOut) {
      try {
        const response = {
          swap_version: 2,
          fee: 0,
          amountTokenInPair: 0,
          poolAddress: WEB3_ZERO_ADDRESS,
        };
        const tokenInContract = new ethers.Contract(
          tokenIn.address,
          WEB3_ABI.ERC20_ABI,
          web3Provider
        );
        const factory = new ethers.Contract(
          ROUTER_ADDRESS.BASE_MAINNET.SWAP_V3.FACTORY,
          WEB3_ABI.SWAP_V3.FACTORY,
          web3Provider
        );
        const factoryV2 = new ethers.Contract(
          ROUTER_ADDRESS.BASE_MAINNET.SWAP_V2.FACTORY,
          WEB3_ABI.SWAP_V2.FACTORY,
          web3Provider
        );
        const poolv2 = await factoryV2.getPair(
          tokenIn.address,
          tokenOut.address
        );
        if (poolv2 != WEB3_ZERO_ADDRESS) {
          var amountTokenInPair = await tokenInContract.balanceOf(poolv2);
          if (amountTokenInPair > 0) {
            response.amountTokenInPair = amountTokenInPair;
            response.poolAddress = poolv2;
          }
        }
        for (let index = 0; index < Object.keys(BASE_FEE).length; index++) {
          const fee = BASE_FEE[Object.keys(BASE_FEE)[index]];
          const poolAddress = await factory.getPool(
            tokenIn.address,
            tokenOut.address,
            fee
          );
          if (poolAddress == WEB3_ZERO_ADDRESS) {
            continue;
          }
          amountTokenInPair = await tokenInContract.balanceOf(poolAddress);
          console.log(fee, poolAddress);
          if (amountTokenInPair > response.amountTokenInPair) {
            response.swap_version = 3;
            response.fee = fee;
            response.amountTokenInPair = amountTokenInPair;
            response.poolAddress = poolAddress;
          }
        }
        response.amountTokenInPair = response.amountTokenInPair.toString();
        return response.poolAddress != WEB3_ZERO_ADDRESS ? response : false;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
    estimateOutputValue: async function (
      tokenIn,
      tokenOut,
      amountIn,
      swap_version,
      pool_address,
      pool_fee
    ) {
      if (swap_version == 2) {
        const bestPathV2 = {
          swap_version: 2,
          price: 0,
          percentChange: 0,
          out_value: 0,
        };
        try {
          // const factoryV2 = new ethers.Contract(ROUTER_ADDRESS.BASE_MAINNET.SWAP_V2.FACTORY, WEB3_ABI.SWAP_V2.FACTORY, web3Provider);
          // const poolv2 = await factoryV2.getPair(tokenIn.address, tokenOut.address);
          const poolv2 = pool_address;
          console.log("poolv2 ", poolv2);
          const poolv2Contract = new ethers.Contract(
            poolv2,
            WEB3_ABI.SWAP_V2.POOL,
            web3Provider
          );
          var [v2Reserves0, v2Reserves1, _] =
            await poolv2Contract.getReserves();
          const v2Token0FromSc = await poolv2Contract.token0();
          console.log(v2Reserves0.toString(), v2Reserves1.toString());

          if (tokenIn.address.toLowerCase() != v2Token0FromSc.toLowerCase()) {
            var tempReserves = v2Reserves0;
            v2Reserves0 = v2Reserves1;
            v2Reserves1 = tempReserves;
          }
          v2Reserves0 = Number(v2Reserves0);
          v2Reserves1 = Number(v2Reserves1);
          const price_v2 = v2Reserves1 / v2Reserves0;
          const out_value_v2 =
            v2Reserves1 -
            (v2Reserves0 * v2Reserves1) /
            (v2Reserves0 + Number(amountIn) * (1 - 0.3 / 100));
          const new_price_v2 =
            (v2Reserves1 - out_value_v2) / (v2Reserves0 + Number(amountIn));
          const percentChange_v2 = (price_v2 - new_price_v2) / price_v2;
          // console.log((v2Reserves0 * v2Reserves1) == (v2Reserves0 + Number(amountIn)) * (v2Reserves1 - out_value_v2))
          // console.log(price_v2, out_value_v2, new_price_v2, percentChange_v2);
          bestPathV2.price = price_v2;
          bestPathV2.out_value = out_value_v2;
          bestPathV2.percentChange = percentChange_v2;
          return bestPathV2;
        } catch (error) {
          return false;
        }
      } else if (swap_version == 3) {
        try {
          // const factory = new ethers.Contract(ROUTER_ADDRESS.BASE_MAINNET.SWAP_V3.FACTORY, WEB3_ABI.SWAP_V3.FACTORY, web3Provider);
          const quoter = new ethers.Contract(
            ROUTER_ADDRESS.BASE_MAINNET.SWAP_V3.QUOTER2,
            WEB3_ABI.SWAP_V3.QUOTER2,
            web3Provider
          );

          const bestPath = {
            swap_version: 3,
            fee: 0,
            price: 0,
            percentChange: 0,
            out_value: 0,
          };
          // for (let index = 0; index < Object.keys(BASE_FEE).length; index++) {
          const fee = pool_fee;
          // const poolAddress = await factory.getPool(tokenIn.address, tokenOut.address, fee);
          const poolAddress = pool_address;
          const poolContract = new ethers.Contract(
            poolAddress,
            WEB3_ABI.SWAP_V3.POOL,
            web3Provider
          );
          const slot0 = await poolContract.slot0();
          const sqrtPriceX96 = slot0.sqrtPriceX96;
          const params = {
            tokenIn: tokenIn.address,
            tokenOut: tokenOut.address,
            fee: fee,
            amountIn: amountIn,
            sqrtPriceLimitX96: "0",
          };
          const quote = await quoter.callStatic.quoteExactInputSingle(params);
          const sqrtPriceX96After = quote.sqrtPriceX96After;

          const price = sqrtToPrice(
            sqrtPriceX96,
            tokenIn.decimals,
            tokenOut.decimals
          );
          const priceAfter = sqrtToPrice(
            sqrtPriceX96After,
            tokenIn.decimals,
            tokenOut.decimals
          );
          const absoluteChange = price - priceAfter;
          const percentChange = absoluteChange / price;
          const out_value =
            (amountIn *
              ((10000 - FARTRACKER_SWAP_FEE) / 10000) *
              (price + priceAfter)) /
            2;

          if (
            bestPath.fee == 0 &&
            bestPath.price == 0 &&
            bestPath.percentChange == 0
          ) {
            bestPath.fee = fee;
            bestPath.price = price;
            bestPath.percentChange = percentChange;
            bestPath.out_value = out_value;
          } else {
            if (out_value > bestPath.out_value) {
              bestPath.fee = fee;
              bestPath.price = price;
              bestPath.percentChange = percentChange;
              bestPath.out_value = out_value;
            }
          }
          console.log("percent Change, ", (percentChange * 100).toFixed(2));
          // }
          return bestPath;
        } catch (error) {
          return false;
        }
      }

      return false;
    },
    estimateGas: async function (token1_address, valueIn, token2_address) {
      var possiblePathList = BlockchainAPI.uniswap.createPossiblePath(
        token1_address,
        token2_address
      );
      console.log(possiblePathList);
      var possiblePathV3List =
        BlockchainAPI.uniswap.createPossiblePathV3(possiblePathList);
      console.log(possiblePathV3List);
      var multiRouter_contract = new ethers.Contract(
        ROUTER_ADDRESS.BASE_MAINNET.ROUTER_UNIVERSAL,
        UNIVERSAL_ABI,
        web3Signer
      );
      // var signature = null;
      // if(token1_address.toLowerCase() != BASE_TOKEN_ADDRESS.BASE_MAINNET.WETH){
      //   signature = await permit2(token1_address, web3Info.address);
      // }
      // console.log(signature, signature.signature);
      for (let index = 0; index < possiblePathV3List.length; index++) {
        const data = multiRouter_contract.interface.encodeFunctionData(
          "execute(bytes,bytes[],uint256)",
          [
            "0x00",
            [
              // ethers.utils.defaultAbiCoder.encode(
              //   [
              //     'tuple(tuple(address token,uint160 amount,uint48 expiration,uint48 nonce) details, address spender,uint256 sigDeadline)',
              //     'bytes'
              //   ],
              //   [
              //     signature.permitSingle,
              //     signature.signature
              //   ]),
              ethers.utils.defaultAbiCoder.encode(
                ["address", "uint256", "uint256", "bytes", "bool"],
                [
                  "0x0000000000000000000000000000000000000002",
                  // '0xa991DB83ec0946c12937c0eEC70d4A38e9A49F59',
                  valueIn,
                  "0",
                  possiblePathV3List[index],
                  true,
                ]
              ),
            ],
            (Math.floor(Date.now() / 1000) + 60 * 60 * 24).toString(),
          ]
        );
        console.log(data);
        // const decodeData = multiRouter_contract.interface.decodeFunctionData('execute(bytes,bytes[],uint256)', '0x3593564c000000000000000000000000000000000000000000000000000000000000006000000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000668b822900000000000000000000000000000000000000000000000000000000000000040b000604000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000008000000000000000000000000000000000000000000000000000000000000000e0000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000002800000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000038d7ea4c680000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000038d7ea4c6800000000000000000000000000000000000000000000000000000000000002c21b800000000000000000000000000000000000000000000000000000000000000a00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002b42000000000000000000000000000000000000060001f4833589fcd6edb6e08f4c7c32d4f71b54bda029130000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000060000000000000000000000000833589fcd6edb6e08f4c7c32d4f71b54bda029130000000000000000000000007ffc3dbf3b2b50ff3a1d5523bc24bb5043837b1400000000000000000000000000000000000000000000000000000000000000190000000000000000000000000000000000000000000000000000000000000060000000000000000000000000833589fcd6edb6e08f4c7c32d4f71b54bda02913000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000002c21b8');
        // console.log(decodeData);

        // console.log(ethers.utils.defaultAbiCoder.decode(['address', 'uint256'], '0x000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000038d7ea4c68000'));
        console.log(
          ethers.utils.defaultAbiCoder.decode(
            ["address", "uint256", "uint256", "bytes", "bool"],
            "0x000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000002c6b53000000000000000000000000000000000000000000000000000358c7f4b229fc00000000000000000000000000000000000000000000000000000000000000a00000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000002b833589fcd6edb6e08f4c7c32d4f71b54bda029130001f44200000000000000000000000000000000000006000000000000000000000000000000000000000000"
          )
        );
        // console.log(ethers.utils.defaultAbiCoder.decode(['address', 'address', 'uint256'], '0x000000000000000000000000833589fcd6edb6e08f4c7c32d4f71b54bda029130000000000000000000000007ffc3dbf3b2b50ff3a1d5523bc24bb5043837b140000000000000000000000000000000000000000000000000000000000000019'));
        // console.log(ethers.utils.defaultAbiCoder.decode(['address', 'address', 'uint256'], '0x000000000000000000000000833589fcd6edb6e08f4c7c32d4f71b54bda02913000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000002c21b8'));
        // var tempGas = await web3Provider.estimateGas({
        var tempGas = await providerGetData.estimateGas({
          from: "0xa991DB83ec0946c12937c0eEC70d4A38e9A49F59",
          to: ROUTER_ADDRESS.BASE_MAINNET.ROUTER_UNIVERSAL,
          data: data,
          // value: '1000000000000000'
        });
        console.log(tempGas);
      }
    },
    permit2: async function (token_address) {
      console.log(web3Provider);
      const allowanceProvider = new AllowanceProvider(
        web3Provider,
        ROUTER_ADDRESS.BASE_MAINNET.PERMIT2
      );
      const {
        // amount: permitAmount,
        // expiration,
        nonce,
      } = await allowanceProvider.getAllowanceData(
        token_address,
        await web3Signer.getAddress(),
        ROUTER_ADDRESS.BASE_MAINNET.ROUTER_UNIVERSAL
      );
      const permitSingle = {
        details: {
          token: token_address,
          amount: MaxAllowanceTransferAmount,
          expiration: toDeadline(/* 30 days= */ 1000 * 60 * 60 * 24 * 30),
          nonce,
        },
        spender: ROUTER_ADDRESS.BASE_MAINNET.ROUTER_UNIVERSAL,
        sigDeadline: toDeadline(/* 30 mins= */ 1000 * 60 * 60 * 30),
      };
      const { domain, types, values } = AllowanceTransfer.getPermitData(
        permitSingle,
        ROUTER_ADDRESS.BASE_MAINNET.PERMIT2,
        web3Provider.network.chainId
      );
      const signature = await signTypedData(web3Signer, domain, types, values);
      console.log(signature);
      return {
        permitSingle: permitSingle,
        signature: signature,
      };
    },
  };
  const kyberswapFunction = {
    querySwapRoute: async function (
      tokenInAddress,
      tokenOutAddress,
      amountIn,
      feeProxy
    ) {
      var url = `https://aggregator-api.kyberswap.com/base/api/v1/routes?tokenIn=${tokenInAddress}&tokenOut=${tokenOutAddress}&amountIn=${amountIn}`;
      if (Number(feeProxy) > 0) {
        url += `&feeAmount=${feeProxy}&chargeFeeBy=currency_in&isInBps=1&feeReceiver=0x433eEA2f2A68638Bfb5Ed5413b037317cd8B9751`;
      }
      const options = {
        method: "GET",
        headers: {
          "x-client-id": "fartracker",
        },
      };
      const response = await fetch(url, options);
      if (response.ok) {
        return await response.json();
      }
      return false;
    },
    encodedSwapData: async function (
      routeSummary,
      sender,
      recipient,
      slippageTolerance
    ) {
      const response = await fetch(
        "https://aggregator-api.kyberswap.com/base/api/v1/route/build",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-client-id": "fartracker",
          },
          body: JSON.stringify({
            routeSummary: routeSummary,
            sender: sender,
            recipient: recipient,
            slippageTolerance: slippageTolerance,
          }),
        }
      );
      if (response.ok) {
        return await response.json();
      } else {
        return false;
      }
    },
    swapToken: async function (tokenIn, tokenOut, amountIn, decimalsIn) {
      try {
        // ROUTER_ADDRESS.BASE_MAINNET.TOKEN_IN_IS_ETH_KYBERSWAP
        // const data = await this.querySwapRoute(tokenIn, tokenOut, ethers.utils.parseUnits(amountIn, Number(decimalsIn)));
        const data = await this.querySwapRoute(
          tokenIn,
          tokenOut,
          ethers.utils.parseUnits(amountIn, Number(decimalsIn)),
          25
        ); // 0.25%
        console.log(data);
        if (data == false) {
          return false;
        }
        const user_address = await web3Signer.getAddress();
        const swapData = await this.encodedSwapData(
          data.data.routeSummary,
          user_address,
          user_address,
          500
        ); // 5%
        console.log(swapData);
        const gas = await estimateGas(
          user_address,
          ROUTER_ADDRESS.BASE_MAINNET.ROUTER_KYBERSWAP,
          swapData.data.data,
          tokenIn == ROUTER_ADDRESS.BASE_MAINNET.TOKEN_IN_IS_ETH_KYBERSWAP
            ? ethers.utils.parseUnits(amountIn, Number(decimalsIn))
            : 0
        );
        if (gas > 0) {
          const tx = await web3Signer.sendTransaction({
            data: swapData.data.data,
            from: user_address,
            to: ROUTER_ADDRESS.BASE_MAINNET.ROUTER_KYBERSWAP,
            value:
              tokenIn == ROUTER_ADDRESS.BASE_MAINNET.TOKEN_IN_IS_ETH_KYBERSWAP
                ? ethers.utils.parseUnits(amountIn, Number(decimalsIn))
                : 0,
          });
          return tx;
        }
        console.log(gas);
      } catch (error) {
        console.log(error);
        return false;
      }
    },
  };
  const estimateGas = async (fromAddress, toAddress, data, value) => {
    // var tempGas = await web3Provider.estimateGas({
    //   from: fromAddress,
    //   to: toAddress,
    //   data: data,
    //   value: value,
    // });
    var tempGas = await providerGetData.estimateGas({
      from: fromAddress,
      to: toAddress,
      data: data,
      value: value,
    });
    return tempGas;
  };
  const sendTransaction = async (fromAddress, toAddress, data, value) => {
    const tx = await web3Signer.sendTransaction({
      data: data,
      from: fromAddress,
      to: toAddress,
      value: value
    });
    return tx;
  };

  const tokenFunction = {
    checkApproveToken: async (tokenAddress, owner, spender, amount) => {
      const tokenInContract = new ethers.Contract(
        tokenAddress,
        WEB3_ABI.ERC20_ABI,
        web3Provider
      );
      const allowance = await tokenInContract.allowance(owner, spender);
      if (allowance > 0 && allowance >= amount) {
        return true;
      }
      return false;
    },
    approveToken: async (
      tokenAddress,
      spender,
      amount = ethers.utils.parseUnits((1e18).toString(), "ether")
    ) => {
      try {
        const tokenInContract = new ethers.Contract(
          tokenAddress,
          WEB3_ABI.ERC20_ABI,
          web3Provider
        );
        const tokenWithSigner = tokenInContract.connect(web3Signer);
        const tx = await tokenWithSigner.approve(spender, amount);
        await tx.wait();
        console.log(tx);
        return tx;
      } catch (error) {
        console.log("error 607 , ", error);
        return false;
      }
    },
    tokenBalance: async (tokenAddress, user) => {
      if (web3Provider == null) {
        return 0;
      }
      if (
        tokenAddress == ROUTER_ADDRESS.BASE_MAINNET.TOKEN_IN_IS_ETH_KYBERSWAP
      ) {
        // return Number(await web3Provider.getBalance(user));
        return Number(await providerGetData.getBalance(user));
      }
      const tokenInContract = new ethers.Contract(
        tokenAddress,
        WEB3_ABI.ERC20_ABI,
        // web3Provider
        providerGetData
      );
      const balance = Number(await tokenInContract.balanceOf(user));
      return balance;
    },
  };
  const mintNFT = async (txHash) => {
    // const receipt = await web3Provider.getTransactionReceipt(txHash);
    if (web3Provider == null) {
      return 0;
    }
    // const transactionInfo = await web3Provider.getTransaction(txHash);
    const transactionInfo = await providerGetData.getTransaction(txHash);
    // console.log(receipt);
    console.warn(transactionInfo);
    const clientAddress = web3Info?.address?.length > 10 ? web3Info.address : await web3Signer.getAddress();
    console.warn(clientAddress);
    const dataTx = transactionInfo.data.replace((transactionInfo.from.substring(2, transactionInfo.from.length)).toLowerCase(), (clientAddress.substring(2, clientAddress.length)).toLowerCase());
    console.warn("transactionInfo.value : ", transactionInfo.value);
    var mintAvailable = false;
    if (transactionInfo.value <= 9e15) {
      try {
        const gas = await estimateGas(clientAddress, transactionInfo.to, dataTx, transactionInfo.value);
        console.warn("Gas ", gas);
        mintAvailable = true;
      } catch (error) {
        console.warn(error);
        alert("This NFT does not have a quick mint function available");
        return false;
      }
    }
    if (mintAvailable) {
      const tx = await sendTransaction(clientAddress, transactionInfo.to, dataTx, transactionInfo.value);
      return tx;
    }

  }


  return {
    web3Info,
    web3Provider,
    web3Signer,
    connectWeb3InBrowser,
    connectWeb3WithWalletConnect,
    disconnectWeb3,
    getClientBalance,
    signMessage,
    switchChain,
    getSwapTokenPrice,
    // getBestSinglePathSwap,
    // estimateOutputValue,
    // permit2
    uniswapFunction,
    kyberswapFunction,
    estimateGas,
    sendTransaction,
    tokenFunction,
    mintNFT
  };
};

export default useWeb3;
