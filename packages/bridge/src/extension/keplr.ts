import {SigningStargateClient} from "@cosmjs/stargate";

export async function getKeplrAccountKey(chainId:string){
  try{
    const {keplr}:any = window;
    const result = await keplr.getKey(chainId);
    return result;
  }catch (err){
    // console.log(err);
    return Promise.resolve({});
  }
  return Promise.resolve({});
}

export async function getKeplrChainAccounts(chainId:string){
  try{
    const {keplr,getOfflineSigner}:any = window;
    await keplr.enable(chainId);
    const offlineSigner:any = getOfflineSigner?.(chainId);
    if(offlineSigner){
      const result = await offlineSigner?.getAccounts();
      return result
    }
  }catch (err){
    // console.log(err)
    return Promise.resolve(null);
  }
  return Promise.resolve(null);
}

export async function getKeplrSignClient(chainId:string, rpc:string){
  const {keplr,getOfflineSigner}:any = window;
  await keplr.enable(chainId);
  const offlineSigner = getOfflineSigner?.(chainId);
  if (offlineSigner) {
    try{
      return await SigningStargateClient.connectWithSigner(rpc, offlineSigner);
    }
    catch (err:any){
      throw new Error(err.toString())
    }
  }
  throw new Error('Keplr OfflineSigner is unknow!');
}