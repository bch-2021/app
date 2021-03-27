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
  const url = new URL(raw);
  switch (url.protocol) {
    case 'ipfs:':
    default:
      return `https://${ipfsDefaultGateways}/ipfs/{${url.hostname}/`;
  }
}
