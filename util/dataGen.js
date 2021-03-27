'use strict'

const mocker = require('mocker-data-generator').default

function dataGen(length = 1000) {
  const schema = {
    serial: [{
      chance: 'guid',
      length: length * 3,
    }]
  }
  return mocker()
    .schema('data', schema, 1)
    .buildSync().data[0].serial
    .map((item) => item.split('-')[0]).slice(0, length)
}


module.exports = {
  dataGen,
}
