import {chain, accountInfo} from "../types/common";
import {ethToSpx} from "@spidexjs/address-converter";
import {getKeplrAccountKey} from "./../extension/keplr"
import {createTxMsgConvertCoin} from '@spidexjs/transactions';
import {createTxRaw} from '@spidexjs/proto'
import {broadcastPost, getTxSendResponse, getSender} from "../rest";
import {DecimalUtil} from "../utils/decimal";

export async function createConvertMsg(
  cosmosChainId: string,
  spxEvmChainId: number,
  rest: string,
  amount: any,
  ibcDenom: string,
  recipient: string,
) {
  const chain: chain = {
    chainId: Number(spxEvmChainId),
    cosmosChainId: cosmosChainId,
  }

  const fee = {
    denom: 'aspx',
    amount: '0.125',
    gas: '10500000',
  }

  const sender: accountInfo | any = await getSender(rest, ethToSpx(recipient));
  const accountKeys: any = await getKeplrAccountKey(cosmosChainId);
  sender.pubkey = accountKeys.pubKey;
  // console.log('walletKeys:', sender,'sender:',accountKeys)
  const txMsg = createTxMsgConvertCoin(chain, sender, fee, '', {
    denom: ibcDenom as string,
    amount: DecimalUtil.formatAmount(amount.trim(), 18).toString(),
    receiverHexFormatted: recipient,
    senderEvmosFormatted: sender.accountAddress
  })

  return {sender, txMsg};
}


export async function sendConvertToken(
  message: any,
  spidexChainId: string,
  rest: string,
  accountNumber: string | number,
  recipient: string,
) {
  try {
    const {keplr}: any = window;

    // console.log(txMsg);
    let sign = keplr?.signDirect(
      spidexChainId,
      ethToSpx(recipient),
      {
        bodyBytes: message.signDirect.body.serializeBinary(),
        authInfoBytes: message.signDirect.authInfo.serializeBinary(),
        chainId: spidexChainId,
        accountNumber: accountNumber,
      },
      {isEthereum: true},
    )

    if (sign !== undefined) {
      let rawTx = createTxRaw(sign.signed.bodyBytes, sign.signed.authInfoBytes, [
        new Uint8Array(Buffer.from(sign.signature.signature, 'base64')),
      ])

      let bcRes: any = await broadcastPost(rest, rawTx);
      const txResult = await getTxSendResponse(rest, bcRes?.tx_response.txhash);

      // console.log('broadcast：',bcRes,txResult)
      return txResult
    }
  } catch (err: any) {
    console.log("convert error:", err)
    throw new Error(err.toString())
  }

}