'use strict'

const fs = require('fs')
const ipfs = require('ipfs-core')
const uint8ArrayFromString = require('uint8arrays/from-string')
const dataGen = require('./dataGen').dataGen

async function dataUpload () {
  const data = dataGen()
  const content = JSON.stringify(data)
  const node = await ipfs.create({
    silent: true,
  })
  const file = await node.add({
    path: 'data.json',
    content: uint8ArrayFromString(content)
  })
  await node.stop()
  const dataPath = `data${+new Date}.json`;
  fs.writeFileSync(dataPath, content);
  console.log(`ipfs://${file.cid.toString()}`)
  console.log(`https://ipfs.io/ipfs/${file.cid.toString()}`)
}

dataUpload().catch(console.error)
