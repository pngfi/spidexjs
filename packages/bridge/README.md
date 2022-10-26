# Bridge

## Installation

```sh
npm install @spidexjs/bridge
```

## Usage

### transfer from spidex -> osmosis
```ts
    
    import {sendContractEip712Token,sendIbcEip712Token} from "@spidexjs/bridge"
    
    const result:any = await sendContractEip712Token(
      OSMO_TOKEN_ADDRESS, // contract address
      toContractAddress,  //burn contract address
      account,
      asset,
    );

    if(result && result.status){
      const ibcResult = await sendIbcEip712Token(
        cosmosChainId,
        spxEvmChainId,
        sender,
        ibcDenom,
        account,
        asset,
        fromRest,
        targetRest,
        recipient,
      );
      // todo transferSuccess(ibcResult);
    }else{
      // todo transferFailed(result)
    }

```

### transfer from osmosis -> spidex
```ts

    import {sendIbcToken,sendConvertToken} from "@spidexjs/bridge"

    const result = await sendIbcToken(
      chainId,
      rpc,
      sendAddress,
      amount,
      recipient,
      denom,
      sourceChannel
    )
    if( result && result.code === 0){
      const convertResult = await sendConvertToken(
        cosmosChainId,
        spxEvmChainId,
        rest,
        amount,
        ibcDenom,
        recipient,
      );
      // todo transferSuccess(convertResult);
    }else{
      // todo transferFailed(result)
    }
```