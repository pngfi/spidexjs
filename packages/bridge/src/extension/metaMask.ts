
export const isMetaMaskInstalled = () => {
  const {ethereum}: any = window
  return Boolean(ethereum && ethereum.isMetaMask)
}