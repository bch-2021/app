'use strict'

const fs = require('fs')

const testFolder = '.'
let total = 0
const check = new Set
fs.readdirSync(testFolder)
  .filter((file) => file.substring(0, 4) === 'data')
  .forEach(file => {
    const data = require(fs.realpathSync(file))
    data.forEach((item) => {
      check.add(item)
    })
    total += data.length
    console.log(`${file} ${(new Set(data)).size} uniq items from ${data.length}`)
  })
console.log(`Total ${check.size} uniq items from ${total}`)
