# spidexjs

JS and TS libs for spidex

####install
```ts
 yarn add "@spidexjs/spidex"
```

####useage

```ts
    // addressConverter
    import * as addressConverter from '@spidexjs/address-converter'
    
    // EIP712 transactions creator.
    import * as eip712 from '@spidexjs/eip712'
    
    // create message for grpc proto
    import * as proto from '@spidexjs/proto'
    
    // provider to query the spidex rest api.
    import * as provider from '@spidexjs/provider'
    
    // Transactions generator for spidex.
    import * as transactions from '@spidexjs/transactions'
    
    // transfer contract/ ibc / convert  between osmosis and spidex
    import * as bridge from '@spidexjs/bridge'

    // Get pubkey by metamask signature
    import * as bridge from '@spidexjs/metamask-sign-recover-pubkey'
   

```

## Example

#### use keplr to send Ibc token

https://github.com/pngfi/spidexjs/blob/main/packages/bridge/src/transfer/sendIbcToken.ts

#### use keplr to send convert token
https://github.com/pngfi/spidexjs/blob/main/packages/bridge/src/transfer/sendConvertCoin.ts

#### use metamask to send with contract token
https://github.com/pngfi/spidexjs/blob/main/packages/bridge/src/transfer/sendContractEip712Token.ts

#### use metamask to send Ibc token
https://github.com/pngfi/spidexjs/blob/main/packages/bridge/src/transfer/sendIbcEip712Token.ts

#### Get pubkey by metamask signature
```ts
import {getPubkey} from "@spidexjs/metamask-sign-recover-pubkey";

const pubkey = await getPubkey(account.address);
console.log(pubkey);
// AiJbGH7xjbW7PoDClLDb3On9YgiWXQMq2cHIA1v4lfPj
```

### Get account information

Get the account number, sequence and pubkey from an address.
NOTE: if the address had not sent any transaction to the blockchain, the pubkey value are going to be empty.

```ts

//ethTospx | spxToEth
import { ethToSpx } from '@spidexjs/address-converter'
import { generateEndpointAccount } from '@spidexjs/provider'

const sender = 'spx1...'
let destination = '0x....'
// The address must be bech32 encoded
if (destination.split('0x').length == 2) {
  destination = ethToSpx(destination)
}

// Query the node
const options = {
  method: 'GET',
  headers: { 'Content-Type': 'application/json' },
}

let addrRawData = await fetch(
  `http://127.0.0.1:1317${generateEndpointAccount(sender)}`,
  options,
)
