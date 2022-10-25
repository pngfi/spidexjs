import {signatureToPubkey} from '@hanchon/signature-to-pubkey';
import {arrayify} from "@ethersproject/bytes";
import {hashMessage} from "@ethersproject/hash";
// @ts-ignore
import {ua2hex} from "crypto-addr-codec";

export async function getPubkey(address: string) {
  // use matemask sign and recover publickey
  const {ethereum}: any = window;
  let message = arrayify(hashMessage('generate_pubkey'));
  const sign = await ethereum.request({method: "eth_sign", params: [address, "0x" + ua2hex(message)]});
  const pk = signatureToPubkey(
    sign,
    Buffer.from(message)
  )

  console.log('pubkey:', pk)
  return pk;

}

