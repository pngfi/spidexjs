/**
 general transfer: spidex chain send to another spidex account
 denmo: spx
 from: your account 0x123..
 to: target account 0x123..
 */


import {spxToEth} from "@spidexjs/address-converter";
import {getPubkey} from "@spidexjs/metamask-sign-recover-pubkey";
import {createTxIBCMsgTransfer, signatureToWeb3Extension,createTxRawEIP712} from '@spidexjs/transactions';

import {chain} from "../types/common";
import {DecimalUtil} from "../utils/decimal";
import {broadcastPost,getTxSendResponse,getHeight} from "../rest";
import { isMetaMaskInstalled} from "../extension/metaMask"


type account = {
  address: string
}

export interface Sender {
  accountAddress: string
  sequence: number
  accountNumber: number
  pubkey: string
}

export const sendIbcEip712Token = async (
  cosmosChainId: string,
  spxEvmChainId: number,
  sender:Sender,
  ibcDenom:string,
  account: account,
  asset: string,
  fromRest:string,
  targetRest:string,
  recipient: string,
) => {
  if(isMetaMaskInstalled()){
    const {ethereum}: any = window;

    const chain: chain = {
      chainId: Number(spxEvmChainId),
      cosmosChainId: cosmosChainId,
    }

    const fee = {
      denom: 'aspx',
      amount: '25550',
      gas: '204395',
    }

    sender = {
      ...sender,
      sequence: sender.sequence,
      pubkey: sender.pubkey ? sender.pubkey : await getPubkey(account.address)
    }

    // console.log('sender', sender);
    const params = {
      sourcePort: 'transfer',
      sourceChannel: 'channel-0',
      // Token
      amount: DecimalUtil.formatAmount(asset.trim(), 6).toString(),
      denom: ibcDenom as string,
      // osmosis Addresses
      receiver: recipient.trim(),
      // Timeout
      revisionNumber: 4,
      revisionHeight: parseInt(await getHeight(targetRest)) + 150,
      timeoutTimestamp: String((Date.parse(new Date().toString()) + 600000) * 1000000)
    }

    const msg = createTxIBCMsgTransfer(chain, sender, fee, '', params);

    // console.log('msg', msg)
    const signature = await ethereum.request({
      method: 'eth_signTypedData_v4',
      params: [spxToEth(sender.accountAddress), JSON.stringify(msg.eipToSign)],
    })

    // The chain and sender objects are the same as the previous example
    const extension = signatureToWeb3Extension(chain, sender, signature);

    const rawTx = createTxRawEIP712(
      msg.legacyAmino.body,
      msg.legacyAmino.authInfo,
      extension,
    )

    // Broadcast it
    const bcRes: any = await broadcastPost(fromRest, rawTx);
    const result = await getTxSendResponse(fromRest, bcRes?.tx_response.txhash);
    console.log('IBC Transfer Result:', bcRes, result);
    return result;
  }

  throw new Error("Metamask is installed")
}