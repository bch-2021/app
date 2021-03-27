'use strict'

require('dotenv').config()
const fs = require('fs')
const ipfs = require('ipfs-core')
const uint8ArrayFromString = require('uint8arrays/from-string')
const dataGen = require('./dataGen').dataGen

async function dataUpload(batchNumber = []) {
  const node = await ipfs.create({
    silent: true,
  })
  if (process.env.ipfsSorage) {
    await node.swarm.connect(process.env.ipfsSorage)
  }
  for (const item of batchNumber) {
    const data = dataGen(item)
    const content = JSON.stringify(data)
    const file = await node.add({
      path: 'data.json',
      content: uint8ArrayFromString(content)
    })
    const dataPath = `data${+new Date}.json`;
    fs.writeFileSync(dataPath, content);
    console.log(`ipfs://${file.cid.toString()}`)
    console.log(`https://ipfs.io/ipfs/${file.cid.toString()}`)
  }
}

dataUpload([
  '00001',
  '00002',
  '00003',
]).catch(console.error)
