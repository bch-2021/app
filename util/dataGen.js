'use strict'

const mocker = require('mocker-data-generator').default

function dataGen() {
  const schema = {
    batchId: {
      //chance: 'guid'
      faker: 'datatype.number({"min": 10, "max": 99})'
    },
    serial: [{
      //chance: 'guid',
      faker: 'datatype.number({"min": 1000, "max": 9000})',
      length: 1000
    }]
  }

  return  mocker()
    .schema('data', schema, 1)
    .buildSync().data[0]
}


module.exports = {
  dataGen,
}
