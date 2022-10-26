import service from './request';
import {accountInfo} from "./../types/common";
import {generatePostBodyBroadcast} from "@spidexjs/provider";


export const getCosmosBalance = async (url:string) :Promise<any>=>{
  return await service.get(url)
}

export const getBaseDenom = async (url:string,hash:string) :Promise<any>=>{
  return await service.get(`${url}/ibc/apps/transfer/v1/denom_traces/${hash}`)
}

export const getSender= async (url:string,address:string) :Promise<accountInfo | undefined>=>{
  try {
    const res:any = await service.get(`${url}/cosmos/auth/v1beta1/accounts/${address}`);
    return {
      accountAddress: res?.account.base_account.address,
      sequence: parseInt(res?.account.base_account.sequence),
      accountNumber: parseInt(res?.account.base_account.account_number),
      pubkey: res?.account.base_account.pub_key?.key || ''
    }
  }catch (err:any){
    throw new Error(err)
  }
}

export const getHeight = async (url:string) =>{
  const result:any = await service.get(`${url}/cosmos/base/tendermint/v1beta1/blocks/latest`)
  return result?.block.header.height;
}

export const broadcastPost = async (url:string, rawTx:any) =>{
  return await service.post(`${url}/cosmos/tx/v1beta1/txs`, generatePostBodyBroadcast(rawTx))
}

let timer:any;
export const getTxSendResponse= async(url:string, hash:string):Promise<any>=>{
  if(timer) clearTimeout(timer);
  return new Promise((resolve,reject)=>{
    timer = setTimeout(async ()=>{
      try {
        const result:any = await service.get(`${url}/cosmos/tx/v1beta1/txs/${hash}`);
        if(result && result?.tx_response?.code==0){
          return resolve(result)
        }else{
          return resolve(await getTxSendResponse(url,hash));
        }
      }catch (err){
        return reject(err)
      }
    },1500)
  })
}