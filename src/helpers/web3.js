/* eslint-disable */
import Web3 from 'web3';

export default class Web3Handler {
  constructor() {
    this.web3 = this.getWeb3();
    this.account = this.getWeb3Account();
  }

  getWeb3() {
    return new Web3(Web3.givenProvider);
  }

  async getWeb3Account() {
    let account = '';

    await this.web3.eth.getAccounts().then((res) => {
      account = res[0];
    });

    return account;
  }

  async getWeb3Contract() {
    const abi = [
      {
        "inputs": [
          {
            "internalType": "string",
            "name": "_name",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "_headquarters",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "_description",
            "type": "string"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "previousOwner",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "newOwner",
            "type": "address"
          }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
      },
      {
        "inputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "name": "batchNumberToProductTransfers",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [],
        "name": "organization",
        "outputs": [
          {
            "internalType": "string",
            "name": "name",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "headquarters",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "description",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [],
        "name": "owner",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "name": "points",
        "outputs": [
          {
            "internalType": "string",
            "name": "name",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "pointAddress",
            "type": "string"
          },
          {
            "internalType": "address",
            "name": "pointOwner",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [],
        "name": "pointsTotal",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "name": "productTransfers",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "pointId",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "date",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "link",
            "type": "string"
          },
          {
            "internalType": "enum Tracking.ProductTransferTypes",
            "name": "transferType",
            "type": "uint8"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [],
        "name": "productTransfersTotal",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [],
        "name": "renounceOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "newOwner",
            "type": "address"
          }
        ],
        "name": "transferOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "string",
            "name": "_name",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "_pointAddress",
            "type": "string"
          },
          {
            "internalType": "address",
            "name": "_pointOwner",
            "type": "address"
          }
        ],
        "name": "createPoint",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_pointId",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "_newPointOwner",
            "type": "address"
          }
        ],
        "name": "transferPointOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_pointId",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "_link",
            "type": "string"
          },
          {
            "internalType": "enum Tracking.ProductTransferTypes",
            "name": "_transferType",
            "type": "uint8"
          },
          {
            "internalType": "string",
            "name": "_batchNumber",
            "type": "string"
          }
        ],
        "name": "createProductTransfer",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "string",
            "name": "_batchNumber",
            "type": "string"
          }
        ],
        "name": "getInfoByBatchNumber",
        "outputs": [
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "pointId",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "date",
                "type": "uint256"
              },
              {
                "internalType": "string",
                "name": "link",
                "type": "string"
              },
              {
                "internalType": "enum Tracking.ProductTransferTypes",
                "name": "transferType",
                "type": "uint8"
              }
            ],
            "internalType": "struct Tracking.ProductTransfer[]",
            "name": "",
            "type": "tuple[]"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      }
    ];
    return new this.web3.eth.Contract(abi, '0xaac9b538ce91bbb8400e35fb9fe9b306ec787245');
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

  async createPoint(name, address, pointOwner) {
    const contract = await this.getWeb3Contract();
    const account = await this.getWeb3Account();
    contract.methods.createPoint(name, address, pointOwner).send({ from: account });
  }
}

