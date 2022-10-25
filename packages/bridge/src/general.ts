/**
 general transfer: spidex chain send to another spidex account
 denmo: spx
 from: your account 0x123..
 to: target account 0x123..
 */

type account ={
  address: string
}

export const sendContractEip712Token = async (
  fromChain: any,
  targetChain: any,
  account: account,
  asset: string,
) => {

}