import axios from "axios";

export function getTypeAliasByNumber(type) {
  switch (type) {
    case 0:
      return 'Manufacturer';
    case 1:
      return 'Transportation';
    default:
      return 'Retail';
  }
}

export function getTypeImageByNumber(type) {
  switch (type) {
    case 0:
      return '/images/factory.svg';
    case 1:
      return '/images/transportation.svg';
    default:
      return '/images/store.svg';
  }
}

const ipfsDefaultGateways = 'ipfs.io'
export function parseDataURL(raw) {
  const [, protocol, cid] = /^(\w+):\/\/(.*)$/.exec(raw);
  switch (protocol) {
    case 'ipfs':
    default:
      return `https://${ipfsDefaultGateways}/ipfs/${cid}/`;
  }
}

export function hasSerialNumber(serialNumber) {
  return async (item) => {
    const resp = await axios({ method: 'get', url: parseDataURL(item.link) });
    const data = resp.data;
    return data.indexOf(serialNumber) !== -1;
  }
}
