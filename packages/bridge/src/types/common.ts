import {Chain} from "./chain";

export interface chain {
  chainId: number;
  cosmosChainId: string;
}

export interface accountInfo{
  accountAddress:string,
  sequence: string | number,
  accountNumber: string | number,
  pubkey:Uint8Array | string
}

export type walletAccount = {
  address?:string;
}

export interface account {
  address:string,
  algo:string,
  pubkey :string
}

export interface keplrKeys {
// Name of the selected key store.
  name: string;
  algo: string;
  pubKey: string;
  address: string;
  bech32Address: string;
}

export type ChainConfig={
  name: string;
  icon: string;
  coinDenom: string;
  config: Chain | any;
  channels:any;
}