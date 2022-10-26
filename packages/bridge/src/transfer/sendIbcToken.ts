// keplr send ibc token

import {ethToSpx} from "@spidexjs/address-converter";
import {DecimalUtil} from "../utils/decimal";
import {getKeplrSignClient} from "./../extension/keplr"

export async function sendIbcToken(
  chainId: string,
  rpc: string,
  sendAddress: string,
  amount: string,
  recipient: string,
  denom: string,
  sourceChannel: string
) {
  try {
    const signClient: any = await getKeplrSignClient(chainId, rpc);
    if (signClient) {
      const destination = ethToSpx(recipient);
      const amountFinal = {
        denom: denom, //send token denom
        amount: DecimalUtil.formatAmount(amount.trim(), 6).toString(),
      }
      const fee = {
        amount: [{
          denom: 'uosmo', //fee denom
          amount: '0.025'
        }],
        gas: '200000',
      }

      const timeoutTimestamp = DecimalUtil.getNanoSec(String(new Date().getTime() + (60000 * 10)));

      const result = await signClient.sendIbcTokens(
        sendAddress,
        destination,
        amountFinal,
        'transfer',
        sourceChannel,
        undefined,
        Number(timeoutTimestamp), fee
      )

      console.log(result)
      return result;
    }
    throw new Error('IBC error:Error Chain config!');
  } catch (err: any) {
    console.log("IBC error:", err)
    throw new Error(err.toString())
  }
}