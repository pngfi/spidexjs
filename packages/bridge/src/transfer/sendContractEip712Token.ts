import Web3 from 'web3';
import {DecimalUtil} from "../utils/decimal";
import ERC20_ABI from "./../abi/erc20.json";


export const sendContractEip712Token = async (
  OSMO_TOKEN_ADDRESS: string,
  toContractAddress: string,
  account: any,
  asset: string,
) => {
  const {ethereum}: any = window;
  const amount = DecimalUtil.formatAmount(asset.trim(), 6).toString();

  await ethereum.enable();
  const web3 = new Web3(ethereum);

  const myContract = new web3.eth.Contract(
    ERC20_ABI as any, OSMO_TOKEN_ADDRESS, {
      from: account.address,
    })

  return new Promise((resolve, reject) => {
    myContract.methods.transfer(toContractAddress, amount)
      .send({from: account.address},
        function (error: any, transactionHash: any) {
          console.log('Contract transactionHash is' + transactionHash);
          if (error) {
            console.log(error);
            return reject(error.message || error.toString())
          }
        })
      .then(function (receipt: any) { //listener
        console.log("status：", receipt.status, 'receipt:', receipt)
        return resolve(receipt)
      })
      .catch((err: any) => {
        return reject(err.message || err.toString())
      })
  })
}