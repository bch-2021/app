'use strict'

const fs = require('fs')
const ipfs = require('ipfs')
const uint8ArrayFromString = require('uint8arrays/from-string')
const dataGen = require('./dataGen').dataGen

async function dataUpload () {
  const node = await ipfs.create({
    silent: true,
  })
  const content = JSON.stringify(dataGen())
  const file = await node.add({
    path: 'data.json',
    content: uint8ArrayFromString(content)
  })
  const dataPath = `data${+new Date}.json`;
  fs.writeFileSync(dataPath, content);
  console.log(`Added file: ${file.path} ipfs://${file.cid.toString()}`)
  console.log(`https://ipfs.io/ipfs/${file.cid.toString()}`)
}

dataUpload()
