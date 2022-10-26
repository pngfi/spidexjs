import { getAddress } from "@ethersproject/address";
import { AddressZero } from "@ethersproject/constants";
import { Contract } from "@ethersproject/contracts";
import type { JsonRpcProvider, JsonRpcSigner } from "@ethersproject/providers";

export function isAddress(value: any): string | false {
  try {
    return getAddress(value);
  } catch {
    return false;
  }
}

// account is not optional
function getSigner(provider: JsonRpcProvider, account: string): JsonRpcSigner {
  return provider.getSigner(account).connectUnchecked();
}

// account is optional
function getProviderOrSigner(
  provider: JsonRpcProvider,
  account?: string
): JsonRpcProvider | JsonRpcSigner {
  return account ? getSigner(provider, account) : provider;
}

export function getContract(
  address: string,
  ABI: any,
  provider: JsonRpcProvider,
  account?: string
): Contract {
  if (!isAddress(address) || address === AddressZero) {
    throw Error(`Invalid 'address' parameter '${address}'.`);
  }

  return new Contract(
    address,
    ABI,
    getProviderOrSigner(provider, account) as any
  );
}

export function isNumber(value: any) {
  const reg = /^[0-9]+\.?[0-9]*$/;
  return reg.test(value);
}

export function beautify(str = "", trim = true): string {
  const reg =
    str.indexOf(".") > -1 ? /(\d)(?=(\d{3})+\.)/g : /(\d)(?=(?:\d{3})+$)/g;
  str = str.replace(reg, "$1,");
  return trim ? str.replace(/(\.[0-9]*[1-9]+)(0)*/, "$1") : str;
}

export const toShortAddress = (address: string, maxLength = 16) => {
  if (!address) {
    address = "";
  }
  const tmpArr = address.split(".");
  const halfLength = Math.floor(maxLength / 2);
  const realAccount = tmpArr[0];
  if (realAccount.length <= maxLength) {
    return address;
  }
  return `${realAccount.substr(0, halfLength)}...${realAccount.substr(
    -halfLength
  )}${tmpArr[1] ? `.${tmpArr[1]}` : ""}`;
};

export function isIbcToken(str=''):boolean{
  return str.startsWith('ibc/')
}