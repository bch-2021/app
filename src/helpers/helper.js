import axios from 'axios';

export function getTypeAliasByNumber(type) {
  switch (type) {
    case '0':
      return 'Manufacturer';
    case '1':
      return 'Transportation';
    default:
      return 'Retail';
  }
}

export function getTypeImageByNumber(type) {
  switch (type) {
    case '0':
      return '/images/factory.svg';
    case '1':
      return '/images/transportation.svg';
    default:
      return '/images/store.svg';
  }
}

const ipfsDefaultGateways = 'ipfs.io';

export function parseDataURL(raw) {
  const originalLink = raw;

  const [, protocol, cid] = /^(\w+):\/\/(.*)$/.exec(raw);

  switch (protocol) {
    case 'https':
      return originalLink;
    default:
      return `https://${ipfsDefaultGateways}/ipfs/${cid}/`;
  }
}

export async function hasSerialNumber(serialNumber, link) {
  const resp = await axios({ method: 'get', url: parseDataURL(link) });
  const { data } = resp;

  if (data.indexOf(serialNumber.toLowerCase()) !== -1) {
    return true;
  }

  return data.indexOf(serialNumber.toUpperCase()) !== -1;
}

export function parseDate(solTimestamp) {
  const date = new Date(Number(solTimestamp) * 1000);

  const obj =  {
    dateNum: date.getDate() < 10 ? `0${date.getDate()}` : date.getDate(),
    month: date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1,
    year: date.getFullYear(),
    hours: (`0${date.getHours()}`).slice(-2),
    minute: (`0${date.getMinutes()}`).slice(-2),
  };

  return `${obj.dateNum}.${obj.month}.${obj.year} ${obj.hours}:${obj.minute}`
}
