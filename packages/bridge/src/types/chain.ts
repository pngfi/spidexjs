export type Chain = {
    chainId: string;
    chainName: string;
    evmId?:string;
    rpc: string;
    rest: string;
    toContractAddress?:string,
    stakeCurrency: {
        coinDenom: string;
        coinMinimalDenom: string;
        coinDecimals: number;
        coinGeckoId?:string;
    },
    coinType?:string | number;
    bip44: {
        coinType: number;
    },
    bech32Config: {
        bech32PrefixAccAddr: string;
        bech32PrefixAccPub: string;
        bech32PrefixValAddr: string;
        bech32PrefixValPub: string;
        bech32PrefixConsAddr: string;
        bech32PrefixConsPub: string;
    },
    currencies: {
        coinDenom: string;
        coinMinimalDenom: string;
        coinDecimals: number;
        coinGeckoId?:string;
    }[],
    feeCurrencies: {
        coinDenom: string;
        coinMinimalDenom: string;
        coinDecimals: number;
        coinGeckoId?:string;
    }[],
    gasPriceStep?:{
        "low": any,
        "average": any,
        "high": any
    },
    "features"?: any
}