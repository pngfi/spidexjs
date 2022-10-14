import {
  ETH,
  ETHERMINT,
  ethToEthermint,
  ethermintToEth,
  ethToSpx,
  spxToEth,
} from '../index'

describe('converter tests', () => {
  it('decoders', () => {
    // ETH
    let hex = ETH.decoder('0xe2D61e49ff8a9d724CC54d338D8076F878aC6b71')
    expect(hex.toString('hex')).toBe('e2d61e49ff8a9d724cc54d338d8076f878ac6b71')
    // ETHERMINT
    hex = ETHERMINT.decoder('ethm1uttpuj0l32whynx9f5ecmqrklpu2c6m3973048')
    expect(hex.toString('hex')).toBe('e2d61e49ff8a9d724cc54d338d8076f878ac6b71')
  })

  it('encoders', () => {
    // ETH
    let address = ETH.encoder(
      Buffer.from('e2d61e49ff8a9d724cc54d338d8076f878ac6b71', 'hex'),
    )
    expect(address).toBe('0xe2D61e49ff8a9d724CC54d338D8076F878aC6b71')
    // ETHERMINT
    address = ETHERMINT.encoder(
      Buffer.from('e2d61e49ff8a9d724cc54d338d8076f878ac6b71', 'hex'),
    )
    expect(address).toBe('ethm1uttpuj0l32whynx9f5ecmqrklpu2c6m3973048')
  })

  it('converters', () => {
    // ETH
    let address = ethToEthermint('0xe2D61e49ff8a9d724CC54d338D8076F878aC6b71')
    expect(address).toBe('ethm1uttpuj0l32whynx9f5ecmqrklpu2c6m3973048')

    // ETHERMINT
    address = ethermintToEth('ethm1uttpuj0l32whynx9f5ecmqrklpu2c6m3973048')
    expect(address).toBe('0xe2D61e49ff8a9d724CC54d338D8076F878aC6b71')

    // EVMOS
    address = ethToSpx('0x351254E1d493585c85153ca27184aeD786D18C22')
    expect(address).toBe('spx1x5f9fcw5jdv9epg48j38rp9w67rdrrpzx9fpex')
    // ETH to EVMOS
    address = spxToEth('spx1x5f9fcw5jdv9epg48j38rp9w67rdrrpzx9fpex')
    expect(address).toBe('0x351254E1d493585c85153ca27184aeD786D18C22')
  })
})
