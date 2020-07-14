#!/usr/bin/env node

'use strict'

const fs = require('fs')
const xpath = require('xpath')
const DOMParser = require('xmldom').DOMParser

const inputFile = process.argv.slice(2)[0]
const content = fs.readFileSync(inputFile, 'utf8')
const doc = new DOMParser().parseFromString(content)
const nodes = xpath.select('//testcase/@name', doc)

const names = []

for (let i = 0; i < nodes.length; i++) {
  names.push(nodes[i].value)
}

const findDuplicates = arr =>
  arr.filter((item, index) => arr.indexOf(item) !== index)

const duplicates = findDuplicates(names)

if (duplicates.length > 0) {
  console.log('Testcase duplicates')

  for (let i = 0; i < duplicates.length; i++) {
    console.log(' - ' + duplicates[i])
  }

  process.exit(1)
}
