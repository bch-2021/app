'use strict'

const mocker = require('mocker-data-generator').default

function dataGen(batchNumber = '00001',length = 1000) {
  const schema = {
    serial: [{
      chance: 'guid',
      length: length * 3,
    }]
  }
  return mocker()
    .schema('data', schema, 1)
    .buildSync().data[0].serial
    .map((item) => `${batchNumber}-${item.split('-')[0]}`).slice(0, length)
}


module.exports = {
  dataGen,
}
