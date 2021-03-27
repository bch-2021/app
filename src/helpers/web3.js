import Web3 from 'web3';

export default class Web3Handler {
  constructor() {
    this.web3 = this.getWeb3();
    this.account = this.getWeb3Account();
  }

  // eslint-disable-next-line class-methods-use-this
  getWeb3() {
    // return new Web3(Web3.givenProvider);
    if (!process.browser) {
      return '';
    }

    let web3 = new Web3();

    if (window.ethereum) {
      web3 = new Web3(window.ethereum);
      try {
        window.ethereum.enable().then(() => {
        });
      } catch (e) {
        console.log(e);
      }
      return web3;
    } if (window.web3) {
      web3 = new Web3(web3.currentProvider);
      return web3;
    }

    return '';
  }

  async getWeb3Account() {
    let account = '';

    await this.web3.eth.getAccounts().then((res) => {
      // eslint-disable-next-line prefer-destructuring
      account = res[0];
    });

    return account;
  }

  async getWeb3Contract() {
    return new this.web3.eth.Contract(process.env.contractABI, process.env.contractAddress);
  }

  async setPoints(setter) {
    const contract = await this.getWeb3Contract();

    const pointsTotal = await contract.methods.pointsTotal().call();
    const pointsL = [];

    for (let i = 0; i < pointsTotal; i++) {
      const res = await contract.methods.points(i).call();
      pointsL.push({
        id: i,
        pointAddress: res.pointAddress,
        pointOwner: res.pointOwner,
        name: res.name,
      });
    }

    setter(pointsL);
  }

  async setProductTransferAll(setter) {
    const contract = await this.getWeb3Contract();

    const batchNumbers = await contract.methods.getBatchNumbers().call();

    const data = [];

    for (let i = 0; i < batchNumbers.length; i++) {
      const transfers = await contract.methods.getInfoByBatchNumber(batchNumbers[i]).call();

      const productTransfersForBatchNumber = [];
      transfers.forEach((transfer) => {
        productTransfersForBatchNumber.push({
          batchNumber: batchNumbers[i],
          pointId: transfer.pointId,
          link: transfer.link,
          type: transfer.transferType,
          date: transfer.date,
        });
      });

      data.push({ batchNumber: batchNumbers[i], productTransfers: productTransfersForBatchNumber });
    }

    setter(data);
  }

  async createPoint(name, address, pointOwner) {
    const contract = await this.getWeb3Contract();
    const account = await this.getWeb3Account();
    contract.methods.createPoint(name, address, pointOwner).send({ from: account });
  }

  searchByBatchNumber(batchNumber) {
    // TODO searchByBatchNumber
    const data = {
      '00001': {
        link: 'ipfs://QmWtWfaeo6m2D4qEWXUMp2PKDziRKTHTVSdfkft78Uuj1d',
        history: [
          {
            date: '21.01.07',
            type: 0,
            point: 'Apple Factory. Japain, 〒038-0101 Aomori',
          },
          {
            date: '21.01.07',
            type: 1,
            point: 'Apple Factory. Japain, 〒038-0101 Aomori',
          },
          {
            date: '21.01.07',
            type: 3,
            point: 'Apple Factory. Japain, 〒038-0101 Aomori',
          },
        ],
      },
      '00002': {
        link: 'ipfs://QmaAF2uSozY8JxBxrC1QHkKEjf9txZ1mo1tR3ePfBwE8t1',
        history: [
          {
            date: '21.01.07',
            type: 0,
            point: 'Apple Factory. Japain, 〒038-0101 Aomori',
          },
          {
            date: '21.01.07',
            type: 1,
            point: 'Apple Factory. Japain, 〒038-0101 Aomori',
          },
        ],
      },
      '00003': {
        link: 'ipfs://QmZn1iRPW3JuQqtUc7vhmtFttwxSjwCTVJAN9LtYnGYSP4',
        history: [
          {
            date: '21.01.07',
            type: 0,
            point: 'Apple Factory. Japain, 〒038-0101 Aomori',
          },
        ],
      },
    };
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(data[batchNumber] ? [data[batchNumber]] : []);
      }, 300);
    });
  }

  async createPointTransfer(pointId, link, type, batchNumber) {
    const contract = await this.getWeb3Contract();
    const account = await this.getWeb3Account();

    contract.methods.createProductTransfer(pointId, link, type, batchNumber).send({ from: account });
  }
}
