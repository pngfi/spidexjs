import * as erc20 from './../../proto/spidex/erc20/v1/tx'

export function createMsgConvertERC20(
  contractAddress: string,
  amount: string,
  receiver: string,
  sender: string,
) {
  const msg = new erc20.spidex.erc20.v1.MsgConvertERC20({
    contract_address: contractAddress,
    amount,
    receiver,
    sender,
  })
  return {
    message: msg,
    path: 'spidex.erc20.v1.MsgConvertERC20',
  }
}
