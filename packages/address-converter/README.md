# Address converter

A simple converter between `ETH` address and `Ethermint`/`spidex` addresses.

## Installation

```sh
npm install @spidexjs/address-converter
```

## Usage

### Converter

```ts
import { ethToEthermint, ethermintToEth } from '@spidexjs/address-converter'

let address = ethToEthermint('0xe2D61e49ff8a9d724CC54d338D8076F878aC6b71')
// "ethm1uttpuj0l32whynx9f5ecmqrklpu2c6m3973048"

let address = ethermintToEth('ethm1uttpuj0l32whynx9f5ecmqrklpu2c6m3973048')
// "0xe2D61e49ff8a9d724CC54d338D8076F878aC6b71"
```

### Decoders

```ts
import { ETH, ETHERMINT } from '@spidexjs/address-converter'
let hex = ETH.decoder('0xe2D61e49ff8a9d724CC54d338D8076F878aC6b71')
// hex.toString('hex') === "e2d61e49ff8a9d724cc54d338d8076f878ac6b71"

hex = ETHERMINT.decoder('ethm1uttpuj0l32whynx9f5ecmqrklpu2c6m3973048')
// hex.toString('hex') === "e2d61e49ff8a9d724cc54d338d8076f878ac6b71"
```

### Encoders

```ts
import { ETH, ETHERMINT } from '@spidexjs/address-converter'
let address = ETH.encoder(
  Buffer.from('e2d61e49ff8a9d724cc54d338d8076f878ac6b71', 'hex'),
)
// address === "0xe2D61e49ff8a9d724CC54d338D8076F878aC6b71"

address = ETHERMINT.encoder(
  Buffer.from('e2d61e49ff8a9d724cc54d338d8076f878ac6b71', 'hex'),
)
// address === "ethm1uttpuj0l32whynx9f5ecmqrklpu2c6m3973048"
```

### Spidex support

```ts
import { ethToSpidex, spidexToEth } from '@spidexjs/address-converter'

let address = ethToSpidex('0x1eb6169BD471ef45A1805f34A135eBd38EdF98eC')
// "0x1eb6169BD471ef45A1805f34A135eBd38EdF98eC"

let address = spidexToEth('0x1eb6169BD471ef45A1805f34A135eBd38EdF98eC')
// "0x1eb6169BD471ef45A1805f34A135eBd38EdF98eC"
```

## Reference

- [ENSDOMAINS-AddressEnconder](https://github.com/ensdomains/address-encoder)
